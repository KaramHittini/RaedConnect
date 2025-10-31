import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
export default function ProtectedRoute({ children, adminOnly=false, allowedEmails=[] }){
const { user } = useAuth();
if (!user) return <Navigate to="/login" replace />;
if (adminOnly) {
  const okByRole = user.role === "admin";
  const okByEmail = allowedEmails.length ? allowedEmails.map(e=>e.toLowerCase()).includes((user.email||'').toLowerCase()) : true;
  if (!(okByRole && okByEmail)) return <Navigate to="/" replace />;
}
return children;
}