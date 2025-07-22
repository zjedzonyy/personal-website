import { Outlet } from "react-router-dom";
import { AuthProvider } from "./components/auth/index";
import { Toaster } from "react-hot-toast";
import { Navbar, Footer } from "./components/layout/index";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen dark:dark_background text-text_secondary dark:text-text_primary">
        <Toaster position="top-center" />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
