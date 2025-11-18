import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    desc: "We audit your stack and map the highest-impact automation opportunities.",
  },
  {
    title: "Design",
    desc: "We blueprint the workflows, data flows, and guardrails for reliability.",
  },
  {
    title: "Build",
    desc: "We implement, integrate, and test end-to-end with your tools and data.",
  },
  {
    title: "Launch & Iterate",
    desc: "We monitor performance, iterate fast, and expand wins across teams.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">How we work</h2>
          <p className="mt-4 text-slate-400">Simple, collaborative, and laser-focused on outcomes.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md">
              <div className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span className="text-sm">Step {i + 1}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-slate-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
