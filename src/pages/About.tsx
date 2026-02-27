import {
  CheckCircle,
  FileText,
  AlertTriangle,
  GraduationCap,
  Award,
  ArrowRight,
  Globe,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import profileImg from "../assets/Profile.png";

export default function About() {
  const expertise = [
    {
      category: "SOX IT Compliance",
      items: [
        "ITGC evaluation support (design, operating effectiveness)",
        "RCM support and stakeholder sessions",
        "Audit readiness and evidence coordination",
      ],
    },
    {
      category: "Audit and Risk Support",
      items: [
        "Gap and exception identification",
        "Risk-based review participation",
        "Issue tracking and remediation follow-up",
      ],
    },
    {
      category: "Tools",
      items: [
        "Workiva (tracking, evidence, reporting)",
        "ServiceNow (issues, workflows)",
        "Jira (coordination, follow-ups)",
      ],
    },
    {
      category: "Enablement",
      items: [
        "SOX stakeholder communications and scope updates",
        "Documentation guidance (SOPs, reports, inventories)",
        "SharePoint resources for SOX stakeholders",
      ],
    },
  ];

  const experience = [
    {
      period: "2023",
      role: "Global SOX IT Compliance Analyst",
      company: "Kenvue (Contract)",
      achievements: [
        {
          bold: "Supported global and regional in-scope applications",
          text: "across ASPAC, EMEA, and global apps by helping teams stay aligned on SOX scope, expectations, and audit readiness.",
        },
        {
          bold: "Supported infrastructure SOX compliance activities",
          text: "through reviews focused on access and configuration alignment to support audit readiness.",
        },
        {
          bold: "Led and supported RCM activities",
          text: "including RCM support sessions, documentation alignment, and stakeholder enablement to strengthen audit readiness.",
        },
        {
          bold: "Coordinated audit-requested evidence and tracking",
          text: "including evidence organization, finding tracking, and remediation follow-up with status reporting for stakeholders.",
        },
        {
          bold: "Tracked IAM-related control metrics for SOX applications",
          text: "to support secure access and compliance visibility.",
        },
        {
          bold: "Built SharePoint resources for SOX stakeholders",
          text: "to centralize guidance, expectations, and key materials for easier navigation and consistency.",
        },
        {
          bold: "Supported transition tracking",
          text: "to maintain compliance through operational changes and reduce risk during the division and spin-off period.",
        },
        {
          bold: "Participated in risk-based pre-implementation reviews",
          text: "as a guest auditor alongside senior internal and external auditors to strengthen understanding of audit processes and controls.",
        },
      ],
      tags: ["SOX ITGC", "Workiva", "ServiceNow", "Jira", "Global Apps"],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">
      {/* Summary */}
      <section className="grid lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-2 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-enterprise-accent/10 border border-enterprise-accent/25 text-enterprise-accent text-xs font-bold uppercase tracking-wider font-mono">
            About
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            IT Compliance Analyst
            <br />
            <span className="text-enterprise-accent">&amp; WGU Student</span>
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
            I’m Jordan Fischer. I support SOX IT compliance work by helping evaluate ITGCs,
            coordinating audit evidence, and keeping stakeholders aligned on scope, expectations,
            and remediation. I’m also beginning my B.S. in Cybersecurity and Information Assurance at WGU.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {["SOX ITGC", "Audit Readiness", "RCM Support", "Evidence Coordination", "Risk Tracking"].map(
              (pill) => (
                <span
                  key={pill}
                  className="px-4 py-2 bg-enterprise-accent/10 border border-enterprise-accent/30 rounded-full text-enterprise-accent text-sm font-semibold"
                >
                  {pill}
                </span>
              )
            )}
          </div>
        </div>

        {/* Profile card instead of random stock image */}
        <div className="hidden lg:block">
          <div className="relative rounded-2xl bg-enterprise-surface border border-white/10 p-8 overflow-hidden">
            <div className="absolute -inset-10 bg-enterprise-accent/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-5">
                <img
                  src={profileImg}
                  alt="Jordan Fischer"
                  className="w-20 h-20 rounded-full object-cover border border-white/10"
                  loading="eager"
                />
                <div>
                  <div className="text-xl font-bold text-white">Jordan Fischer</div>
                  <div className="text-slate-300 text-sm">IT Compliance Analyst • WGU Student</div>
                  <div className="text-slate-500 text-xs mt-1">Columbia, PA</div>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <MiniCard icon={ShieldCheck} title="Focus" value="SOX IT Compliance" />
                <MiniCard icon={ClipboardCheck} title="Strength" value="Audit Readiness" />
                <MiniCard icon={Globe} title="Scope" value="Global Apps" />
                <MiniCard icon={FileText} title="Tools" value="Workiva • SNOW • Jira" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "SOX ITGC Support",
            icon: CheckCircle,
            desc:
              "Support ITGC activities by helping evaluate control design and operating effectiveness, aligning documentation, and keeping execution expectations clear.",
          },
          {
            title: "Audit Readiness",
            icon: FileText,
            desc:
              "Coordinate audit evidence, track requests and findings, and help keep stakeholders aligned on timelines, scope, and remediation follow-through.",
          },
          {
            title: "Risk and Issue Tracking",
            icon: AlertTriangle,
            desc:
              "Support risk identification and remediation tracking through issue follow-ups, workflow coordination, and participation in risk-based reviews.",
          },
        ].map((area) => (
          <div
            key={area.title}
            className="glass-card p-8 rounded-xl hover:border-enterprise-accent/40 transition-all group"
          >
            <div className="w-12 h-12 bg-enterprise-accent/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <area.icon className="w-6 h-6 text-enterprise-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{area.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{area.desc}</p>
          </div>
        ))}
      </section>

      {/* Expertise & Tools */}
      <section className="space-y-8">
        <div className="flex justify-between items-end border-l-4 border-enterprise-accent pl-4">
          <h2 className="text-2xl font-bold uppercase tracking-wider text-white">
            Expertise & Tools
          </h2>
          <Link
            to="/skills"
            className="text-enterprise-accent text-sm font-bold flex items-center gap-2 hover:underline"
          >
            View Detailed Skills <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((group) => (
            <div key={group.category} className="space-y-4">
              <h4 className="text-enterprise-accent font-bold text-xs uppercase tracking-widest">
                {group.category}
              </h4>
              <ul className="text-slate-300 text-sm space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-enterprise-accent/80">•</span>
                    <span className="text-slate-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="space-y-12">
        <div className="border-l-4 border-enterprise-accent pl-4">
          <h2 className="text-2xl font-bold uppercase tracking-wider text-white">
            Work Experience
          </h2>
        </div>

        <div className="relative space-y-16 pl-8">
          <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-enterprise-accent via-slate-800 to-transparent" />

          {experience.map((job) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-enterprise-dark border-2 border-enterprise-accent shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              <div className="space-y-4">
                <div>
                  <span className="text-enterprise-accent text-sm font-mono font-bold">
                    {job.period}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">{job.role}</h3>
                  <p className="text-slate-400 font-medium">{job.company}</p>
                </div>

                <div className="space-y-4 max-w-3xl">
                  {job.achievements.map((ach, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="text-enterprise-accent shrink-0 mt-1">▹</div>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        <span className="text-white font-semibold">{ach.bold}</span>{" "}
                        {ach.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-800/50 border border-white/5 text-[10px] px-2 py-1 rounded text-slate-400 uppercase font-bold tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education & Certs */}
      <section className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-enterprise-accent w-6 h-6" />
              <h2 className="text-xl font-bold uppercase tracking-widest text-white">
                Education
              </h2>
            </div>
            <Link
              to="/education"
              className="text-enterprise-accent text-xs font-bold flex items-center gap-1 hover:underline"
            >
              Details <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-4">
            <div className="glass-card p-6 rounded-xl">
              <h4 className="text-white font-bold">
                B.S. Cybersecurity and Information Assurance
              </h4>
              <p className="text-slate-400 text-sm italic">
                Western Governors University (WGU) | Starting 2026
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Award className="text-enterprise-accent w-6 h-6" />
            <h2 className="text-xl font-bold uppercase tracking-widest text-white">
              Certifications
            </h2>
          </div>

          <ul className="space-y-3">
            {["CompTIA Security+ (Earned 2023)"].map((cert) => (
              <li
                key={cert}
                className="flex items-center gap-3 p-4 glass-card rounded-xl border-l-4 border-enterprise-accent"
              >
                <span className="text-white font-semibold text-sm tracking-tight">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

function MiniCard({
  icon: Icon,
  title,
  value,
}: {
  icon: any;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-4">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400">
        <Icon className="w-4 h-4 text-enterprise-accent" />
        {title}
      </div>
      <div className="text-slate-100 font-semibold mt-1">{value}</div>
    </div>
  );
}
