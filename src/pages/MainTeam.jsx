import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../components/ui/PageHeader";
import { Card } from "../components/ui/Card";
import { mockTeamMembers } from "../data/mockData";

export default function MainTeam(){
  const [expandedId, setExpandedId] = useState(null);
  return (
    <div className="container-px max-w-6xl mx-auto">
      <div className="text-center mb-10 mt-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Main Team</h1>
        <p className="text-zinc-600 dark:text-zinc-200 mt-1">Meet the organizing team.</p>
      </div>

      <div className="grid auto-rows-[1fr] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockTeamMembers.map(m => {
          const isOpen = expandedId === m.id;
          return (
            <motion.div
              key={m.id}
              layout
              className={`w-full ${isOpen ? "lg:col-span-3 lg:row-span-2" : ""}`}
            >
              <Card
                className={`cursor-pointer h-full transition-[transform,background] hover:scale-[1.01]`}
                onClick={() => setExpandedId(isOpen ? null : m.id)}
              >
                <motion.div layout className="flex items-center gap-4">
                  <img
                    src={m.imagePath || "/assets/ImageForTeamMembersAndForVolunteers.webp"}
                    alt={m.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{m.name}</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">{m.role}</p>
                  </div>
                </motion.div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-4 grid lg:grid-cols-3 gap-6"
                    >
                      {/* Left: larger image */}
                      <div className="lg:col-span-1">
                        <img
                          src={m.imagePath || "/assets/ImageForTeamMembersAndForVolunteers.webp"}
                          alt={m.name}
                          className="w-full h-40 object-cover rounded-2xl"
                        />
                      </div>
                      {/* Right: name, role, description, skills */}
                      <div className="lg:col-span-2">
                        <h3 className="font-bold text-lg">{m.name}</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-300">{m.role}</p>
                        <p className="text-sm mt-3">{m.bio || "No description provided yet."}</p>
                        {m.skills && (
                          <div className="mt-3 flex flex-wrap gap-2 text-xs">
                            {m.skills.map(s => (
                              <span key={s} className="bg-black/5 dark:bg-white/10 px-2 py-1 rounded-lg">
                                {s}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
