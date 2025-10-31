import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { theme, toggle } = useTheme();

  const isAdminEmail = user?.email?.toLowerCase() === "atharalt6w3@gmail.com";

  const links = [
    { to: "/", label: "Home" },
    { to: "/community", label: "Community" },
    { to: "/volunteers", label: "Volunteers" },
    { to: "/achievements", label: "Achievements" },
    { to: "/team", label: "Main Team" },
    { to: "/feedback", label: "Feedback" },
  ];

  if (isAdminEmail) {
    links.push({ to: "/ads", label: "Ads" });
  }

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleNavClick = (to) => {
    setIsOpen(false);
    navigate(to);
  };

  return (
    <motion.nav
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800 shadow-md"
    >
      <div className="flex items-center justify-between h-20 px-6 md:px-10">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
          onClick={toggleMenu}
        >
          <Menu size={26} />
        </button>

        {/* Brand */}
        <Link
          to="/"
          className="font-extrabold tracking-tight text-xl bg-clip-text text-transparent bg-gradient-to-r from-black to-zinc-500 dark:from-white dark:to-zinc-400"
        >
          RadiConnect
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-4 items-center">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm px-4 py-2 rounded-2xl transition-all duration-200 ${
                location.pathname === link.to
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-4 items-center">
          {/* Theme Toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle Theme"
            className="p-2 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Auth Buttons */}
          {!user ? (
            <>
              <Link to="/login" className="btn">Login</Link>
              <Link to="/signup" className="btn">Sign Up</Link>
            </>
          ) : (
            <>
              {isAdminEmail && (
                <Link
                  to="/admin"
                  className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-2xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all"
                >
                  Admin
                </Link>
              )}
              <Link to="/profile" className="btn">Profile</Link>
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="px-4 py-2 bg-zinc-200 text-black dark:bg-zinc-700 dark:text-white rounded-2xl hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-all"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={toggleMenu}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 240, damping: 28 }}
              className="fixed top-0 left-0 w-72 h-full bg-white dark:bg-zinc-900 shadow-2xl border-r border-zinc-300 dark:border-zinc-800 z-50 flex flex-col p-6 gap-6"
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Menu</h2>
                <button
                  onClick={toggleMenu}
                  className="p-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full transition"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Links */}
              {links.map((link) => (
                <button
                  key={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className={`w-full text-left px-4 py-2 rounded-lg text-lg font-medium transition ${
                    location.pathname === link.to
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                  }`}
                >
                  {link.label}
                </button>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={toggle}
                className="mt-4 flex items-center gap-3 px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                <span>Toggle {theme === "dark" ? "Light" : "Dark"} Mode</span>
              </button>

              {/* Auth Buttons */}
              <div className="mt-auto flex flex-col gap-4">
                {!user ? (
                  <>
                    <button
                      onClick={() => handleNavClick("/login")}
                      className="w-full bg-black text-white py-2 rounded-lg hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => handleNavClick("/signup")}
                      className="w-full bg-black text-white py-2 rounded-lg hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                    >
                      Sign Up
                    </button>
                  </>
                ) : (
                  <>
                    {isAdminEmail && (
                      <button
                        onClick={() => handleNavClick("/admin")}
                        className="w-full bg-black text-white py-2 rounded-lg hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                      >
                        Admin
                      </button>
                    )}
                    <button
                      onClick={() => handleNavClick("/profile")}
                      className="w-full bg-black text-white py-2 rounded-lg hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                    >
                      Profile
                    </button>
                    <button
                      onClick={() => {
                        logout();
                        navigate("/");
                        setIsOpen(false);
                      }}
                      className="w-full bg-zinc-200 text-black py-2 rounded-lg hover:bg-zinc-300 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
