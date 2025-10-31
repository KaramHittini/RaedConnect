import { useState } from "react";
import PageHeader from "../components/ui/PageHeader";
import { Card } from "../components/ui/Card";
import Button from "../components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { addFeedback } from "../data/FeedbackStorage";

export default function Feedback() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSend = () => {
    if (!isValidEmail(email) || !msg.trim()) return;

    // ✅ Save feedback to localStorage
    addFeedback({
      email,
      message: msg,
      time: new Date().toLocaleString(), // automatically store timestamp
    });

    // ✅ Show toast message
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);

    // ✅ Clear fields
    setEmail("");
    setMsg("");
  };

  return (
    <div className="container-px max-w-3xl mx-auto">
      <div className="text-center mb-10 mt-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Suggestions & Problems</h1>
        <p className="text-zinc-600 dark:text-zinc-300 mt-1">
          Your feedback goes straight to the admins.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] dark:shadow-[0_20px_50px_rgba(255,255,255,0.2)]">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="glass rounded-2xl px-4 py-3 w-full border border-zinc-300 dark:border-white/20 bg-white dark:bg-zinc-900 text-black dark:text-white"
          placeholder="Your email"
        />
        <textarea
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="glass rounded-2xl px-4 py-3 w-full h-40 mt-3 resize-none border border-zinc-300 dark:border-white/20 bg-white dark:bg-zinc-900 text-black dark:text-white"
          placeholder="Write your feedback..."
        />

        <Button
          onClick={handleSend}
          disabled={!isValidEmail(email) || !msg.trim()}
          className={`mt-3 text-white transition-all rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.4)] dark:shadow-[0_4px_14px_rgba(255,255,255,0.2)] ${
            isValidEmail(email) && msg.trim()
              ? "bg-green-500 hover:bg-green-600 cursor-pointer"
              : "bg-zinc-500 cursor-not-allowed opacity-50"
          }`}
        >
          Send
        </Button>

        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
          Messages are emailed to:{" "}
          <a className="underline" href="mailto:atharalt6w3@gmail.com">
            atharalt6w3@gmail.com
          </a>
        </p>
      </Card>

      {/* ✅ Toast Notification */}
      <AnimatePresence>
        {toastVisible && (
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -20, y: 20 }}
            className="fixed bottom-6 left-6 bg-green-600 text-white py-2 px-4 rounded-lg shadow-lg flex items-center gap-2"
          >
            ✅ Thanks for your feedback!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
