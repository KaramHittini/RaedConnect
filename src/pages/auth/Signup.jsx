import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Button from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";

export default function Signup() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    age: "",
    university: "",
    major: "",
    skills: "",
    exp: "",
    natId: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Password validation rule
  const passwordValid = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%*]).{8,}$/.test(form.password);
  const passwordsMatch = form.password === form.confirmPassword;

  const submit = (e) => {
    e.preventDefault();

    if (!passwordValid) {
      alert("Password must be at least 8 characters and include 1 uppercase letter, 1 number, and 1 symbol (!@#$%*)");
      return;
    }

    if (!passwordsMatch) {
      alert("Passwords do not match");
      return;
    }

    // Save user profile in context/localStorage
    login({
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      role:
        form.email.toLowerCase() === "atharalt6w3@gmail.com"
          ? "admin"
          : "user",
      profile: form,
    });

    navigate("/");
  };

  return (
    <div className="min-h-dvh flex items-center justify-center px-4">
      <Card className="w-full max-w-md sm:max-w-xl mx-auto p-10 mt-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
  <h1 className="text-3xl font-bold text-center mb-6">Create an Account</h1>

  <form onSubmit={submit} className="flex flex-col gap-6">

    {/* FIRST + LAST NAME */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block font-medium mb-1">First Name *</label>
        <input name="firstName" required value={form.firstName} onChange={onChange} className="rc-input" placeholder="Enter your first name" />
      </div>
      <div>
        <label className="block font-medium mb-1">Last Name *</label>
        <input name="lastName" required value={form.lastName} onChange={onChange} className="rc-input" placeholder="Enter your last name" />
      </div>
    </div>

    {/* USERNAME */}
    <div>
      <label className="block font-medium mb-1">Username *</label>
      <input name="username" required value={form.username} onChange={onChange} className="rc-input" placeholder="Choose a username" />
    </div>

    {/* EMAIL + PHONE */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block font-medium mb-1">Email *</label>
        <input name="email" type="email" required value={form.email} onChange={onChange} className="rc-input" placeholder="Enter your email" />
      </div>
      <div>
        <label className="block font-medium mb-1">Phone Number *</label>
        <input name="phone" required value={form.phone} onChange={onChange} className="rc-input" placeholder="Enter your phone number" />
      </div>
    </div>

    {/* UNIVERSITY + MAJOR */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block font-medium mb-1">University *</label>
        <input name="university" required value={form.university} onChange={onChange} className="rc-input" placeholder="Enter your university" />
      </div>
      <div>
        <label className="block font-medium mb-1">Major *</label>
        <input name="major" required value={form.major} onChange={onChange} className="rc-input" placeholder="Enter your major" />
      </div>
    </div>

    {/* AGE + EXPERIENCE */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block font-medium mb-1">Age *</label>
        <input name="age" type="number" required value={form.age} onChange={onChange} className="rc-input" placeholder="Enter your age" />
      </div>
      <div>
        <label className="block font-medium mb-1">Experience *</label>
        <select name="exp" required value={form.exp} onChange={onChange} className="rc-select">
          <option value="">Select experience</option>
          <option value="more">More than 6 months</option>
          <option value="less">Less than 6 months</option>
        </select>
      </div>
    </div>

    {/* SKILLS */}
    <div>
      <label className="block font-medium mb-1">Skills *</label>
      <input name="skills" required value={form.skills} onChange={onChange} className="rc-input" placeholder="e.g. Photography, Design, Management" />
    </div>

    {/* PASSWORD + CONFIRM */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block font-medium mb-1">Password *</label>
        <input name="password" type="password" required value={form.password} onChange={onChange} className={`w-full glass rounded-xl px-4 py-3 border ${passwordValid || form.password === "" ? "border-zinc-300" : "border-red-500"}`} placeholder="Enter a secure password" />
      </div>
      <div>
        <label className="block font-medium mb-1">Confirm Password *</label>
        <input name="confirmPassword" type="password" required value={form.confirmPassword} onChange={onChange} className={`w-full glass rounded-xl px-4 py-3 border ${passwordsMatch || form.confirmPassword === "" ? "border-zinc-300" : "border-red-500"}`} placeholder="Re-enter your password" />
      </div>
    </div>

    <Button disabled={!passwordValid || !passwordsMatch} className={`w-full mt-4 ${!passwordValid || !passwordsMatch ? "bg-gray-400 cursor-not-allowed" : "bg-black text-white hover:bg-zinc-800"}`}>Sign Up</Button>
  </form>
</Card>

    </div>
  );
}
