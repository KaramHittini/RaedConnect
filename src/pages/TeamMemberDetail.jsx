import { useParams, Link } from "react-router-dom";
import { mockTeam } from "../data/mockData";
import { motion } from "framer-motion";

export default function TeamMemberDetail(){
  const { id } = useParams();
  const m = mockTeam.find(t => String(t.id) === String(id));
  if(!m) return <div className="container-px max-w-4xl mx-auto py-10">Team member not found.</div>;

  return (
    <div className="container-px max-w-3xl mx-auto py-10">
      <Link to="/team" className="text-sm text-zinc-600 hover:underline">&larr; Back to Team</Link>
      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .25 }}
        className="mt-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900">
        <div className="flex items-center gap-4">
          <img src={m.avatar} alt="" className="w-20 h-20 rounded-2xl object-cover"/>
          <div>
            <h1 className="text-2xl font-bold">{m.name}</h1>
            <p className="text-zinc-600 dark:text-zinc-400">{m.role}</p>
          </div>
        </div>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300">{m.bio}</p>
      </motion.div>
    </div>
  );
}
