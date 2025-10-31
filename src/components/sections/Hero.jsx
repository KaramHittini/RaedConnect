import { motion } from "framer-motion";
import Button from "../ui/Button";
import { Link } from "react-router-dom";


export default function Hero(){
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-zinc-50" />
            <div className="container-px pt-14 pb-12 grid md:grid-cols-2 items-center gap-8">
                <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:.6 }}>
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">Build a stronger community with <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600">RadiConnect</span></h1>
                    <p className="mt-4 text-zinc-600 text-lg">Post opportunities, manage volunteers, celebrate achievements — all in one smooth, minimal interface.</p>
                    <div className="mt-6 flex gap-3">
                        <Button as={Link} to="/signup">Get Started</Button>
                        <Button as={Link} to="/community" className="bg-zinc-900 text-white">Explore Community</Button>
                    </div>
                    <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
                        <div className="glass rounded-2xl p-4">Fast posting</div>
                        <div className="glass rounded-2xl p-4">Email notifications</div>
                        <div className="glass rounded-2xl p-4">Admin controls</div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity:0, scale:.96 }} animate={{ opacity:1, scale:1 }} transition={{ duration:.6, delay:.1 }}>
                    <div className="glass rounded-3xl p-6 shadow-xl">
                        <p className="font-semibold mb-3">Quick Post</p>
                        <input className="w-full glass rounded-2xl px-4 py-3 mb-3" placeholder="Title" />
                        <textarea className="w-full glass rounded-2xl px-4 py-3 h-28 mb-3" placeholder="Description" />
                        <Button className="w-full">Publish</Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}