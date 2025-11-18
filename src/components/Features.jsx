import { Zap, Workflow, Bot, ChartLine, Shield, Megaphone } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Process Automation",
    desc: "Connect tools, eliminate manual work, and orchestrate complex workflows end-to-end.",
  },
  {
    icon: Bot,
    title: "AI Assistants",
    desc: "Deploy custom agents for support, sales, and internal ops that work 24/7.",
  },
  {
    icon: Megaphone,
    title: "Growth Automation",
    desc: "Lead capture, enrichment, outreach, and follow-ups that scale with your goals.",
  },
  {
    icon: ChartLine,
    title: "Analytics & Insights",
    desc: "Dashboards and alerts to monitor impact and continuously improve performance.",
  },
  {
    icon: Workflow,
    title: "Systems Design",
    desc: "Blueprints for reliable, scalable, and secure automation architecture.",
  },
  {
    icon: Shield,
    title: "Governance & QA",
    desc: "Guardrails, approvals, and tests baked into your automations.",
  },
];

export default function Features() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(99,102,241,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">What we build</h2>
          <p className="mt-4 text-slate-400">A focused, outcome-driven stack tailored to your team and goals.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md transition hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_20px_60px_-20px_rgba(0,0,0,0.6)]">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-blue-500 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
