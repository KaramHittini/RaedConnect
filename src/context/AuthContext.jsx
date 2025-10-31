import { createContext, useContext, useEffect, useMemo, useState } from "react";


const AuthContext = createContext(null);


export function AuthProvider({ children }) {
const [user, setUser] = useState(null); // { role: 'admin' | 'user', ... }


// mock persistence
useEffect(() => {
const raw = localStorage.getItem("radi:user");
if (raw) setUser(JSON.parse(raw));
}, []);


useEffect(() => {
if (user) localStorage.setItem("radi:user", JSON.stringify(user));
else localStorage.removeItem("radi:user");
}, [user]);


const login = (payload) => setUser(payload);
const logout = () => setUser(null);


const value = useMemo(() => ({ user, login, logout }), [user]);
return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export const useAuth = () => useContext(AuthContext);