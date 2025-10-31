import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui/Card";
import Button from "../components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export default function Profile() {
  const { user, login } = useAuth();
  const [profile, setProfile] = useState({ ...user });
  const [saved, setSaved] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setProfile({ ...user });
  }, [user]);

  const handleChange = (key, value) => {
    setProfile(prev => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    login(profile);
    setSaved(true);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange("avatar", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container-px max-w-2xl mx-auto text-center mt-10">
      <h1 className="text-3xl font-bold">My Profile</h1>
      <p className="text-zinc-600 mt-2">Edit your information</p>

      <Card className="mt-8">
        <div className="flex flex-col gap-4 items-center">

          <img
            src={profile.avatar || "/default-avatar.png"}
            className="w-24 h-24 rounded-full object-cover border"
            alt="Profile"
          />
          <input className="rc-input" type="file" accept="image/*" onChange={handleImageUpload} />

          <input
            className="rc-input"
            value={profile.name || ""}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="Your Name"
          />
          <input
            className="rc-input"
            value={profile.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Your Email"
          />
          
          <Button
            onClick={handleSave}
            className={`w-full mt-4 ${saved ? "bg-green-800 cursor-not-allowed opacity-50" : "bg-green-600 hover:bg-green-700"}`}
            disabled={saved}
          >
            Save Changes
          </Button>
        </div>
      </Card>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-6 bg-green-600 text-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2"
          >
            ✅ Changes saved!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
