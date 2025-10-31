import { useParams, Link } from "react-router-dom";
import { mockPosts } from "../data/mockData";
import { motion } from "framer-motion";

export default function PostDetail(){
  const { id } = useParams();
  const post = mockPosts.find(p => String(p.id) === String(id));
  if(!post) return <div className="container-px max-w-4xl mx-auto py-10">Post not found.</div>;

  return (
    <div className="container-px max-w-4xl mx-auto py-10">
      <Link to="/community" className="text-sm text-zinc-600 hover:underline">&larr; Back to Community</Link>
      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .25 }}
        className="mt-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900">
        <div className="text-xs text-zinc-500">{new Date(post.date).toLocaleString([], { hour: "numeric", minute: "2-digit", hour12: true })}</div>
        <h1 className="text-2xl font-bold mt-1">{post.title}</h1>
        <div className="text-xs mt-2 inline-block px-2 py-1 rounded-lg bg-black/5 dark:bg-white/5">{post.category}</div>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">{post.body}</p>
      </motion.div>
    </div>
  );
}
