import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Button from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Email validation using regex
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Disable scrolling ONLY on this page
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // restore on exit
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();
    if (!emailValid) {
      alert("Please enter a valid email address.");
      return;
    }

    login({
      name: email.split("@")[0],
      email,
      role: email.toLowerCase() === "atharalt6w3@gmail.com" ? "admin" : "user",
    });

    navigate("/");
  };

  // Placeholder for Google Sign-In logic
  const signInWithGoogle = () => {
    alert("Not available, FUCK YOU!");
  };

  return (
  <div className="container-px max-w-md mx-auto pt-12 mt-10">
    <Card className="w-full p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
      <h1 className="text-3xl font-bold text-center mb-6">Log In</h1>
      <form onSubmit={submit} className="flex flex-col gap-4">

        {/* EMAIL INPUT */}
        <div>
          <label className="block text-left font-medium mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={`w-full glass rounded-xl px-4 py-3 border ${
              emailValid || email === "" ? "border-zinc-300" : "border-red-500"
            }`}
          />
        </div>

        {/* PASSWORD INPUT */}
        <div>
          <label className="block text-left font-medium mb-1">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full glass rounded-xl px-4 py-3 border border-zinc-300"
          />
        </div>

        {/* DIVIDER */}
        <div className="flex items-center justify-center text-zinc-500 text-sm my-2">
          <span className="flex-grow border-t border-zinc-300"></span>
          <span className="px-3">or</span>
          <span className="flex-grow border-t border-zinc-300"></span>
        </div>

        {/* GOOGLE SIGN-IN BUTTON */}
        <button
          type="button"
          onClick={signInWithGoogle}
          className="w-full flex justify-center items-center gap-2 py-3 border border-zinc-300 bg-white text-black rounded-2xl shadow-[0px_4px_12px_rgba(0,0,0,0.2)] hover:bg-zinc-100 transition-all"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google Logo"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* LOGIN BUTTON */}
        <Button className="w-full mt-4 bg-black text-white hover:bg-zinc-800 transition-all">
          Log In
        </Button>

        {/* SIGNUP LINK */}
        <p className="text-center text-sm mt-3">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </Card>
  </div>
);

}
