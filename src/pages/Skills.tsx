import {
  ShieldCheck,
  ClipboardCheck,
  FileText,
  Workflow,
  SearchCheck,
  Wrench,
  Database,
  Globe,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

export default function Skills() {
  const categories = [
    {
      title: "SOX IT Compliance Support",
      icon: ShieldCheck,
      color: "text-enterprise-accent",
      bullets: [
        "SOX ITGC support for design and operating effectiveness consistency",
        "SOX scope alignment and stakeholder communications",
        "RCM support and audit readiness coordination",
      ],
      tags: ["SOX ITGC", "Audit Readiness", "RCM"],
    },
    {
      title: "Audit Execution & Evidence",
      icon: ClipboardCheck,
      color: "text-emerald-400",
      bullets: [
        "Audit evidence coordination and request tracking",
        "Findings tracking and remediation follow-up support",
        "Status reporting and stakeholder follow-through",
      ],
      tags: ["Evidence", "Findings", "Remediation"],
    },
    {
      title: "Documentation & Enablement",
      icon: FileText,
      color: "text-amber-400",
      bullets: [
        "Support for SOX documentation (SOPs, reports, inventories)",
        "SharePoint resources for SOX stakeholders",
        "Training support for control owners and executors",
      ],
      tags: ["SharePoint", "SOPs", "Training"],
    },
    {
      title: "Tools & Workflow",
      icon: Workflow,
      color: "text-purple-400",
      bullets: [
        "Workiva for SOX tracking, evidence, and reporting support",
        "ServiceNow for issue tracking and workflow coordination",
        "Jira for task tracking and cross-team follow-ups",
      ],
      tags: ["Workiva", "ServiceNow", "Jira"],
    },
  ];

  const techStack = [
    { name: "Workiva", icon: FileText },
    { name: "ServiceNow", icon: Workflow },
    { name: "Jira", icon: Zap },
    { name: "SharePoint", icon: Globe },
    { name: "Identity & Access Metrics", icon: Database },
  ];

  const workingKnowledge = [
    "NIST CSF (working knowledge)",
    "SOX ITGC concepts and testing methodology",
    "Risk-based review exposure and pre-implementation audits",
    "Professional audit communications and reporting",
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
          Skills & <span className="text-enterprise-accent">Experience</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-3xl">
          A practical overview of the SOX IT compliance work I’ve supported, the tools I use,
          and the knowledge I’m continuing to build through enterprise experience and WGU.
        </p>
      </header>

      {/* Core skill areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((c, i) => (
          <motion.section
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="glass-card p-8 rounded-2xl space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className={cn("w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center", c.color)}>
                <c.icon className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white">{c.title}</h2>
            </div>

            <ul className="space-y-3">
              {c.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 text-slate-400">•</span>
                  <span className="text-slate-400 leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-2">
              {c.tags.map((t) => (
                <span
                  key={t}
                  className="bg-slate-800/50 border border-white/10 text-[11px] px-2.5 py-1 rounded text-slate-300 font-semibold"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Tech stack */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Wrench className="text-enterprise-accent w-6 h-6" />
          <h2 className="text-2xl font-bold text-white">Technology Stack</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-4 hover:border-enterprise-accent/30 transition-all"
            >
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                <tech.icon className="w-6 h-6 text-slate-400" />
              </div>
              <span className="text-sm font-semibold text-slate-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Working knowledge */}
      <section className="glass-card p-10 rounded-3xl space-y-6">
        <div className="flex items-center gap-3">
          <SearchCheck className="text-enterprise-accent w-6 h-6" />
          <h2 className="text-2xl font-bold text-white">Working Knowledge</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {workingKnowledge.map((item) => (
            <div key={item} className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-xl">
              <span className="text-slate-400">•</span>
              <div className="text-slate-300">{item}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
