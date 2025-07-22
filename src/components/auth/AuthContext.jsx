/* eslint-disable no-undef */
import { apiUrl } from "../../utils/index.js";
import { createContext, useState, useEffect, useCallback, useRef } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();
export default AuthContext;

export function AuthProvider({ children }) {
  // Theme state
  const [darkMode, setDarkMode] = useState(null);

  // Auth state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  // Use notificiation in every page
  const showToast = ({ severity, detail }) => {
    if (severity === "success") {
      toast.success(detail);
    } else if (severity === "error") {
      toast.error(detail);
    }
  };

  // Refs to prevent multiple requests
  const authFetchRef = useRef(false);

  // DEBUG: Console log every state change
  // useEffect(() => {
  //   console.log("AUTH STATE CHANGE:", {
  //     user: user ? { id: user.id, username: user.username } : null,
  //     loading,
  //     avatarUrl: avatarUrl ? "present" : "null",
  //     timestamp: new Date().toISOString(),
  //   });
  // }, [user, loading, avatarUrl]);

  // Theme management
  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  }, []);

  // Initialize theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    setDarkMode(saved === "light" ? false : true);
  }, []);

  // Update document class when theme changes
  useEffect(() => {
    if (darkMode !== null) {
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(darkMode ? "dark" : "light");
    }
  }, [darkMode]);


  const loginUser = useCallback(
    async userData => {
      try {
        if (!userData) {
          setUser(null);
          localStorage.removeItem("user");
          return;
        }
        // Set user state FIRST
        setUser(userData);

        // Save to localStorage immediately
        localStorage.setItem("user", JSON.stringify(userData));

      } catch (error) {
        console.error(" Login error:", error);
        setAuthError("Failed to login");
      }
    },[]);

  const fetchUserProfile = useCallback(async () => {
    if (authFetchRef.current) {
      return;
    }

    try {
      authFetchRef.current = true;
      setLoading(true);
      setAuthError(null);

      const res = await fetch(`${apiUrl}/users/me`, {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();

      if (data.success && data.data) {
        setUser(data.data);
        localStorage.setItem("user", JSON.stringify(data.data));
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
      setAuthError("Failed to fetch user profile");
      setUser(null);
      localStorage.removeItem("user");
    } finally {
      setLoading(false);
      authFetchRef.current = false;
    }
  }, []);


  // Initialize auth on mount
  useEffect(() => {
    const initializeAuth = async () => {
      // Check localStorage first
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        try {
          const userData = JSON.parse(savedUser);
          setUser(userData);
          setLoading(false);
        } catch (error) {
          console.error("Failed to parse saved user:", error);
          localStorage.removeItem("user");
          await fetchUserProfile();
        }
      } else {
        await fetchUserProfile();
      }
    };

    initializeAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Logout function
  const logout = useCallback(async () => {
    try {
      const res = await fetch(`${apiUrl}/auth/logout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const data = await res.json();

      if (data.success) {
        setUser(null);
        localStorage.removeItem("user");
      }
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  }, []);

  const contextValue = {
    // Theme
    darkMode,
    toggleDarkMode,

    // Auth
    user,
    loading,
    authError,
    loginUser,
    logout,

    showToast,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
