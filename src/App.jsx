import { Outlet } from "react-router-dom";
import { AuthProvider } from "./components/auth/index";
import { Toaster } from "react-hot-toast";
import { Navbar, Footer } from "./components/layout/index";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen scroll-smooth relative bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
        <Toaster position="top-center" />

        {/* Background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_70%)]"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
