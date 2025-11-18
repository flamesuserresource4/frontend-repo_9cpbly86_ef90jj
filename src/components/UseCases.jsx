import { Building2, MessageSquare, ShoppingCart, Calendar, Ticket, DollarSign } from "lucide-react";

const cases = [
  {
    icon: Building2,
    title: "B2B Pipeline",
    desc: "Inbound capture → enrichment → routing → personalized outreach → CRM updates.",
  },
  {
    icon: MessageSquare,
    title: "Support Deflection",
    desc: "AI frontlines for FAQs and troubleshooting with seamless agent handoff.",
  },
  {
    icon: ShoppingCart,
    title: "E‑commerce Ops",
    desc: "Order processing, inventory sync, and proactive retention workflows.",
  },
  {
    icon: Calendar,
    title: "Scheduling & Intake",
    desc: "Forms → qualification → calendar → reminders → notes into your systems.",
  },
  {
    icon: Ticket,
    title: "QA & Approvals",
    desc: "Automated checks, escalations, and compliance reporting baked-in.",
  },
  {
    icon: DollarSign,
    title: "Billing & Finance",
    desc: "Invoice generation, collections nudges, and revenue ops hygiene.",
  },
];

export default function UseCases() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Proven playbooks</h2>
          <p className="mt-4 text-slate-400">Battle-tested automations we customize for your stack.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/40 p-6 backdrop-blur-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
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
