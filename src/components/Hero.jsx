import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24">
      {/* 3D Cover Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for contrast (doesn't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-20">
          <div className="lg:col-span-7">
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Proven AI + automation systems for modern teams
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Automate the busywork. Scale what matters.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl"
            >
              NovaFlow builds AI-driven automations for operations and growth marketing. From lead capture to fulfillment, your workflows run on autopilot while your team focuses on high‑leverage work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_16px_60px_-20px_rgba(255,255,255,0.5)]">Book a Strategy Call</a>
              <a href="#work" className="inline-flex items-center justify-center rounded-xl border border-white/10 px-6 py-3 text-white/90 hover:bg-white/5 transition">See Use Cases</a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8 flex flex-wrap items-center gap-6 text-slate-400">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/64?img=${i}`} alt="client" className="h-8 w-8 rounded-full ring-2 ring-slate-900" />
                ))}
              </div>
              <div className="text-sm">
                Trusted by 40+ teams to automate ops and marketing
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-200">
                <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                  <div className="text-2xl font-bold">70%+</div>
                  <div className="text-slate-400">Process time saved</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                  <div className="text-2xl font-bold">3x</div>
                  <div className="text-slate-400">Lead-to-close rate</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-slate-400">AI assistants live</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                  <div className="text-2xl font-bold"><span className="align-super text-xs">$</span>250k</div>
                  <div className="text-slate-400">Annual cost avoided</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
