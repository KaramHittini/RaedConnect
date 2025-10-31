import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Community from "./pages/Community";
import MainTeam from "./pages/MainTeam";
import Ads from "./pages/Ads";
import Volunteers from "./pages/Volunteers";
import Achievements from "./pages/Achievements";
import Feedback from "./pages/Feedback";
import Profile from "./pages/Profile";
import AdminDashboard from "./pages/AdminDashboard";
import PostDetail from "./pages/PostDetail";
import VolunteerDetail from "./pages/VolunteerDetail";
import TeamMemberDetail from "./pages/TeamMemberDetail";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ProtectedRoute from "./components/common/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import FeedbackInbox from "./pages/FeedbackInbox";

function RouteFade({ children, routeKey }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={routeKey}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-dvh flex flex-col bg-white dark:bg-zinc-950 text-black dark:text-white">
          {/* Navbar always visible */}
          <Navbar />

          <main className="flex-1">
            <RouteFade routeKey={location.pathname}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/community" element={<Community />} />
                <Route path="/volunteers" element={<Volunteers />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/team" element={<MainTeam />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/ads" element={<ProtectedRoute adminOnly allowedEmails={["atharalt6w3@gmail.com"]}><Ads /></ProtectedRoute>} />
                <Route path="/admin" element={<ProtectedRoute adminOnly><AdminDashboard /></ProtectedRoute>} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/post/:id" element={<PostDetail />} />
                <Route path="/volunteer/:id" element={<VolunteerDetail />} />
                <Route path="/team/:id" element={<TeamMemberDetail />} />
                <Route path="/admin/feedback" element={<ProtectedRoute adminOnly><FeedbackInbox /></ProtectedRoute>} />
              </Routes>
            </RouteFade>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}
