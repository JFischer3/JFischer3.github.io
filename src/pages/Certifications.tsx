import { Award, BadgeCheck, BookOpen, ExternalLink, ShieldCheck, ClipboardList } from "lucide-react";
import { motion } from "motion/react";

type Credential = {
  title: string;
  org: string;
  date: string;
  desc: string;
  verifyLabel?: string;
  verifyUrl?: string;
  icon: any;
};

type Simulation = {
  title: string;
  provider: string;
  date: string;
  bullets: string[];
  verifyLabel?: string;
  verifyNote?: string;
};

export default function Certifications() {
  const certifications: Credential[] = [
    {
      title: "CompTIA Security+ (SY0-601)",
      org: "CompTIA",
      date: "Earned Dec 8, 2023 • Valid through Dec 8, 2026",
      desc: "Validates baseline cybersecurity knowledge across risk management, threats, security architecture, operations, and incident response.",
      verifyLabel: "Verify on CompTIA",
      verifyUrl: "http://verify.CompTIA.org",
      icon: ShieldCheck,
    },
  ];

  const certificates: Credential[] = [
    {
      title: "Google Cybersecurity Professional Certificate",
      org: "Google • Coursera",
      date: "Completed Oct 17, 2023",
      desc: "Completed an 8-course program covering security foundations, Linux, SQL, detection and response, and automation concepts.",
      verifyLabel: "Verify on Coursera",
      verifyUrl: "https://coursera.org/verify/professional-cert/7RGTJ43RLXKS",
      icon: BookOpen,
    },
    {
      title: "Correlation One Cybersecurity Program (Honors)",
      org: "Correlation One",
      date: "Awarded Nov 17, 2023",
      desc: "Completed an intensive cybersecurity program with honors, including hands-on coursework and mini projects.",
      icon: Award,
    },
  ];

  const simulations: Simulation[] = [
    {
      title: "Digital Assurance & Transparency Simulation",
      provider: "Forage",
      date: "Completed Mar 21, 2024",
      bullets: ["Client walkthrough", "Initial control testing", "Testing result analysis", "Delivering testing results"],
      verifyNote: "Verification available on certificate PDF",
    },
    {
      title: "Cyber Security Consulting Simulation",
      provider: "Forage",
      date: "Completed Mar 26, 2024",
      bullets: ["Risk assessment", "SDLC walkthrough questions", "ITGC test of design and operating effectiveness", "Controls testing summary presentation"],
      verifyNote: "Verification available on certificate PDF",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
          Certifications & <span className="text-enterprise-accent">Credentials</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-3xl">
          My verified certifications, completed programs, and hands-on simulations that support my IT Compliance and GRC focus.
        </p>
      </header>

      {/* Certifications */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <BadgeCheck className="text-enterprise-accent w-6 h-6" />
          <h2 className="text-2xl font-bold text-white">Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6 rounded-2xl hover:border-enterprise-accent/30 transition-all"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{c.title}</h3>
                  <div className="text-sm text-slate-400">
                    <span className="text-enterprise-accent font-semibold">{c.org}</span>
                    <span className="text-slate-500"> • </span>
                    <span>{c.date}</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <c.icon className="w-6 h-6 text-enterprise-accent" />
                </div>
              </div>

              <p className="text-slate-400 mt-4 leading-relaxed">{c.desc}</p>

              {c.verifyUrl && c.verifyLabel && (
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-slate-200 hover:text-enterprise-accent transition-colors"
                >
                  {c.verifyLabel} <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Programs / Certificates */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <Award className="text-enterprise-accent w-6 h-6" />
          <h2 className="text-2xl font-bold text-white">Programs & Certificates</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6 rounded-2xl hover:border-enterprise-accent/30 transition-all"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{c.title}</h3>
                  <div className="text-sm text-slate-400">
                    <span className="text-enterprise-accent font-semibold">{c.org}</span>
                    <span className="text-slate-500"> • </span>
                    <span>{c.date}</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <c.icon className="w-6 h-6 text-enterprise-accent" />
                </div>
              </div>

              <p className="text-slate-400 mt-4 leading-relaxed">{c.desc}</p>

              {c.verifyUrl && c.verifyLabel && (
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-sm font-bold text-slate-200 hover:text-enterprise-accent transition-colors"
                >
                  {c.verifyLabel} <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Practical Simulations */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <ClipboardList className="text-enterprise-accent w-6 h-6" />
          <h2 className="text-2xl font-bold text-white">Practical Simulations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {simulations.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-6 rounded-2xl hover:border-enterprise-accent/30 transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">{s.title}</h3>
                  <div className="text-sm text-slate-400">
                    <span className="text-enterprise-accent font-semibold">{s.provider}</span>
                    <span className="text-slate-500"> • </span>
                    <span>{s.date}</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-enterprise-accent" />
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-slate-400">
                    <span className="mt-1 text-slate-500">•</span>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              {s.verifyNote && <p className="mt-4 text-xs text-slate-500">{s.verifyNote}</p>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer note */}
      <section className="glass-card p-8 rounded-2xl">
        <div className="flex items-start gap-3">
          <BadgeCheck className="w-6 h-6 text-enterprise-accent mt-0.5" />
          <div className="space-y-2">
            <h3 className="text-white font-bold">Verification</h3>
            <p className="text-slate-400 leading-relaxed">
              Links are provided where available. For credentials without a public verification link, I can provide documentation upon request.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
