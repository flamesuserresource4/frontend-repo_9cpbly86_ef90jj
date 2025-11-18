import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-blue-500 shadow-lg">
                <Sparkles className="h-5 w-5 text-white" />
                <span className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 via-purple-500/20 to-blue-500/20 blur-md" />
              </div>
              <div className="font-semibold tracking-tight text-white">
                Pulse Automations
              </div>
            </a>

            <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#process" className="hover:text-white transition-colors">Process</a>
              <a href="#work" className="hover:text-white transition-colors">Use Cases</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>

            <div className="flex items-center gap-3">
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                className="hidden md:inline-flex items-center rounded-xl bg-white text-slate-900 px-4 py-2 font-medium shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_10px_30px_-12px_rgba(255,255,255,0.5)]"
              >
                Get Proposal
              </motion.a>
              <button className="inline-flex md:hidden items-center justify-center h-10 w-10 rounded-xl border border-white/10 text-white">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
