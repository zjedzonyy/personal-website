/* eslint-disable no-undef */
import { apiUrl } from "../../utils/index.js";
import { createContext, useState, useEffect, useCallback, useRef } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();
export default AuthContext;

export function AuthProvider({ children }) {
  // Use notificiation in every page
  const showToast = ({ severity, detail }) => {
    if (severity === "success") {
      toast.success(detail);
    } else if (severity === "error") {
      toast.error(detail);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("artompor@gmail.com");
      showToast({ severity: "success", detail: "Copied: artompor@gmail.com" });
      // alert("Saved to clipboard: artompor@gmail.com");
    } catch (err) {
      console.error("Something went wrong", err);
    }
  };

  const contextValue = {
    showToast,
    handleCopy,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
