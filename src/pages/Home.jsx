import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center text-center px-6">
      <div className="max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl sm:text-5xl font-extrabold leading-tight"
        >
          Build a stronger community with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600">
            RadiConnect
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-4 text-zinc-600"
        >
          A simple, welcoming space to explore community updates, see the team,
          and get involved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <Button as={Link} to="/signup" className="animated-button">
  <span className="circle"></span>
  <span className="text">Get Started</span>

  <svg className="arr-1" viewBox="0 0 46 16" aria-hidden="true">
    <path d="M38 0 L46 8 L38 16 L38 11 L0 11 L0 5 L38 5 Z" />
  </svg>

  <svg className="arr-2" viewBox="0 0 46 16" aria-hidden="true">
    <path d="M38 0 L46 8 L38 16 L38 11 L0 11 L0 5 L38 5 Z" />
  </svg>
</Button>


          <Button
  as={Link}
  to="/community"
  className="bg-zinc-900 text-white px-7 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,0,0,0.4)] hover:bg-black"
>
  Explore Community
</Button>


        </motion.div>
      </div>
    </section>
  );
}
