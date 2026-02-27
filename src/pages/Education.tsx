import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

type EduItem = {
  program: string;
  school: string;
  period: string;
  location?: string;
  statusBadge?: string;
  description: string;
  highlights: string[];
  tags: string[];
};

export default function Education() {
  const education: EduItem[] = [
    {
      program: "B.S. Cybersecurity and Information Assurance (BSCSIA)",
      school: "Western Governors University (WGU)",
      period: "Starting Mar 2026",
      location: "Remote",
      statusBadge: "Incoming",
      description:
        "Beginning my BSCSIA to deepen my technical foundation while building on my IT compliance and SOX ITGC experience. I’m focused on strengthening core security concepts, governance, and risk-based thinking as I progress through the program.",
      highlights: [
        "Competency-based program focused on real-world skills",
        "Building depth across security fundamentals and governance",
        "Active portfolio development alongside coursework",
      ],
      tags: ["Cybersecurity", "Information Assurance", "GRC Foundations"],
    },
    {
      program: "Cybersecurity Program (18-week) • Honors",
      school: "Correlation One",
      period: "Jul 2023 - Nov 2023",
      location: "Online",
      statusBadge: "Completed",
      description:
        "Completed an intensive cybersecurity program with honors, building hands-on exposure across core security domains and practical fundamentals that support my compliance and GRC path.",
      highlights: [
        "Threat analysis and security fundamentals",
        "Risk concepts and incident response basics",
        "Technical practice with Linux and networking fundamentals",
      ],
      tags: ["Risk", "Incident Response", "Linux", "Networking"],
    },
  ];

  const supplemental = [
    {
      title: "Professional Certificates & Simulations",
      items: [
        "Google Cybersecurity Professional Certificate (Completed Oct 2023)",
        "Digital Assurance & Transparency Simulation (Forage, Mar 2024)",
        "Cyber Security Consulting Simulation (Forage, Mar 2024)",
      ],
    },
    {
      title: "What I’m building toward",
      items: [
        "Stronger technical depth to complement IT compliance work",
        "Clear, evidence-based documentation and audit-ready communication",
        "Hands-on portfolio artifacts that map to real compliance workflows",
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
          Education <span className="text-enterprise-accent">and Training</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-3xl">
          The programs and training that support my IT Compliance and GRC career path.
        </p>
      </header>

      {/* Education Cards */}
      <section className="space-y-8">
        {education.map((edu, i) => (
          <motion.div
            key={edu.program}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="glass-card p-8 rounded-2xl border border-white/10 hover:border-enterprise-accent/25 transition-all relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.06] pointer-events-none">
              <GraduationCap className="w-32 h-32" />
            </div>

            <div className="relative z-10 space-y-5">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-bold text-white">{edu.program}</h2>
                    {edu.statusBadge && (
                      <span className="text-[10px] px-2 py-1 rounded-full bg-enterprise-accent/10 border border-enterprise-accent/25 text-enterprise-accent font-bold uppercase tracking-wider">
                        {edu.statusBadge}
                      </span>
                    )}
                  </div>
                  <p className="text-enterprise-accent font-semibold text-lg">{edu.school}</p>
                </div>

                <div className="flex flex-col md:items-end text-slate-500 text-sm font-mono gap-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  {edu.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed max-w-3xl">
                {edu.description}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest">Highlights</h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-enterprise-accent shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest">Focus Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] bg-slate-900/40 border border-white/10 text-slate-300 px-3 py-1 rounded-full font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Supplemental */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <BookOpen className="text-enterprise-accent w-6 h-6" />
          <h2 className="text-2xl font-bold text-white">Additional Training</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {supplemental.map((block) => (
            <div
              key={block.title}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-enterprise-accent/25 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-4">{block.title}</h3>
              <ul className="space-y-2">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-1 text-slate-500">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
