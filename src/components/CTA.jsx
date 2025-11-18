import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-600/20 via-purple-600/20 to-blue-600/20 p-8 backdrop-blur-md">
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to automate your growth and operations?</h3>
              <p className="mt-2 text-slate-200/80">Share your goals and current stack — we’ll ship a tailored automation plan within 72 hours.</p>
            </div>
            <div className="flex gap-3">
              <motion.a whileHover={{ y: -2 }} href="#" className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_16px_60px_-20px_rgba(255,255,255,0.5)]">Book a Call</motion.a>
              <a href="mailto:hello@pulse.run" className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 px-6 py-3 font-semibold text-white/90 hover:bg-white/5 transition">Email us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
