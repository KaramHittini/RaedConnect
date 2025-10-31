import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../components/ui/PageHeader";
import { Card } from "../components/ui/Card";
import Button from "../components/ui/Button";
import { mockUsers } from "../data/mockData";

export default function Volunteers(){
  const [q, setQ] = useState("");
  const [skill, setSkill] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  const results = useMemo(() => {
    return mockUsers.filter(u =>
      (!q || u.name.toLowerCase().includes(q.toLowerCase())) &&
      (!skill || u.skills.includes(skill))
    );
  }, [q, skill]);

  return (
    <div className="container-px max-w-6xl mx-auto">
      <div className="text-center mb-10 mt-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Volunteers</h1>
        <p className="text-zinc-600 dark:text-zinc-200 mt-1">Browse volunteers and their skills.</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search by name" className="rc-input" />
        <select value={skill} onChange={e=>setSkill(e.target.value)} className="rc-select">
          <option value="">All skills</option>
          <option>Design</option>
          <option>Photography</option>
          <option>Management</option>
        </select>
        <select className="rc-select">
          <option>Experience</option>
          <option>More than 6m</option>
          <option>Less than 6m</option>
        </select>
      </div>

      <div className="grid auto-rows-[1fr] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map(u => {
          const isOpen = expandedId === u.id;
          return (
            <motion.div key={u.id} layout className={isOpen ? "lg:col-span-3 lg:row-span-2" : ""}>
              <Card className="cursor-pointer h-full" onClick={()=>setExpandedId(isOpen ? null : u.id)}>
                <div className="flex items-center gap-4">
                  <img src={u.imagePath || "/assets/ImageForTeamMembersAndForVolunteers.webp"} alt={u.name} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold">{u.name}</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">{u.university} · {u.major}</p>
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {u.skills.map(s => <span key={s} className="bg-black/5 dark:bg-white/10 px-2 py-1 rounded-lg">{s}</span>)}
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-4 grid lg:grid-cols-3 gap-6"
                    >
                      <div className="lg:col-span-1">
                        <img src={u.imagePath || "/assets/ImageForTeamMembersAndForVolunteers.webp"} alt={u.name} className="w-full h-40 object-cover rounded-2xl" />
                      </div>
                      <div className="lg:col-span-2">
                        <h3 className="font-bold text-lg">{u.name}</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-300">{u.university} · {u.major} · {u.age ? `${u.age} yrs` : ""}</p>
                        <p className="text-sm mt-3">{u.desc || "No description provided yet."}</p>
                        <div className="mt-3 flex flex-wrap gap-2 text-xs">
                          {u.skills.map(s => <span key={s} className="bg-black/5 dark:bg-white/10 px-2 py-1 rounded-lg">{s}</span>)}
                        </div>
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
