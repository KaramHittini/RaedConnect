import { useState, useEffect } from "react";
import { loadFeedback, removeFeedback } from "../data/FeedbackStorage";
import { Card } from "../components/ui/Card";
import { motion, AnimatePresence } from "framer-motion";

export default function FeedbackInbox() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [responseText, setResponseText] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    setFeedbackList(loadFeedback());
  }, []);

  const handleDismiss = (id) => {
    removeFeedback(id);
    setFeedbackList(loadFeedback());
  };

  const handleRespondClick = (id) => {
    if (expandedId === id) {
      setExpandedId(null);
      setResponseText("");
    } else {
      setExpandedId(id);
      setResponseText("");
    }
  };

  const sendResponse = () => {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000); 
    setExpandedId(null);
    setResponseText("");
  };

  return (
    <div className="min-h-dvh max-w-4xl mx-auto px-6 py-10">
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold">Feedback Inbox</h1>
        <p className="text-zinc-600 dark:text-zinc-300 mt-2">
          View and respond to user feedback
        </p>
      </div>

      <div className="space-y-6">
        {feedbackList.length === 0 ? (
          <p className="text-center text-zinc-500">No feedback messages.</p>
        ) : (
          feedbackList.map((fb) => {
            const isOpen = expandedId === fb.id;
            return (
              <motion.div key={fb.id} layout>
                <Card className="cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.3)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-[1.01] transition-all">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold text-sm">{fb.email}</p>
                    <p className="text-xs text-zinc-500">{fb.time}</p>
                  </div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
                    {fb.message}
                  </p>

                  <div className="flex gap-3">
                    <button
                      className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm hover:bg-red-600 transition"
                      onClick={() => handleDismiss(fb.id)}
                    >
                      Dismiss
                    </button>
                    <button
                      className="px-4 py-2 rounded-lg bg-blue-500 text-white text-sm hover:bg-blue-600 transition"
                      onClick={() => handleRespondClick(fb.id)}
                    >
                      Respond
                    </button>
                  </div>

                  {/* Expand for response */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4"
                      >
                        <textarea
                          className="rc-textarea w-full"
                          rows="4"
                          placeholder="Type your response..."
                          value={responseText}
                          onChange={(e) => setResponseText(e.target.value)}
                        ></textarea>
                        <button
                          disabled={!responseText.trim()}
                          onClick={sendResponse}
                          className={`w-full mt-3 py-2 rounded-lg text-white transition ${
                            responseText.trim()
                              ? "bg-green-500 hover:bg-green-600 cursor-pointer"
                              : "bg-zinc-500 cursor-not-allowed"
                          }`}
                        >
                          Send Response
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })
        )}
      </div>

      {/* ✅ Toast Notification */}
      <AnimatePresence>
        {toastVisible && (
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -20, y: 20 }}
            className="fixed bottom-6 left-6 bg-green-600 text-white py-2 px-4 rounded-lg shadow-lg flex items-center gap-2"
          >
            ✅ Response sent to the user!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
