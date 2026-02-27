import { Shield, Award, BookOpen, Clock, CheckCircle2, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export default function Certifications() {
  const activeCerts = [
    {
      title: "CISA - Certified Information Systems Auditor",
      org: "ISACA",
      date: "Issued Jan 2023",
      desc: "Validates expertise in audit, control, and security of information systems.",
      icon: Shield,
      color: "text-audit-orange"
    },
    {
      title: "CRISC - Certified in Risk and IS Control",
      org: "ISACA",
      date: "Issued June 2022",
      desc: "Demonstrates proficiency in enterprise IT risk management and control design.",
      icon: Award,
      color: "text-audit-orange"
    },
    {
      title: "CompTIA Security+ (SY0-601)",
      org: "CompTIA",
      date: "Issued Nov 2021",
      desc: "Foundational cybersecurity skills across threats, attacks, and vulnerabilities.",
      icon: Shield,
      color: "text-audit-orange"
    }
  ];

  const inProgress = [
    {
      title: "CISSP Associate",
      progress: 70,
      status: "70% Complete",
      note: "Scheduled Exam Date: Q3 2024"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      progress: 25,
      status: "Prep Phase",
      note: "Target Completion: Winter 2024"
    }
  ];

  const training = [
    {
      title: "NIST Cyber Security Framework (CSF) Deep Dive",
      provider: "Professional Seminar | 20 hours",
      year: "2023"
    },
    {
      title: "SOX ITGC Intensive Workshop",
      provider: "Internal Audit Leadership Institute",
      year: "2022"
    },
    {
      title: "Data Privacy Foundation (GDPR/CCPA Focus)",
      provider: "Coursera Plus Specialization",
      year: "2021"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-20">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
          Certifications & <span className="text-audit-orange">Professional Development</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          A comprehensive record of my IT Compliance, Governance, Risk Management, and Cybersecurity credentials. Focused on aligning business objectives with security frameworks.
        </p>
      </header>

      <section>
        <div className="flex items-center gap-3 mb-8">
          <Award className="text-audit-orange w-6 h-6" />
          <h2 className="text-2xl font-bold text-white">Active Certifications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeCerts.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-xl flex flex-col justify-between hover:border-audit-orange/40 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1 text-white group-hover:text-audit-orange transition-colors">{cert.title}</h3>
                  <p className="text-audit-orange text-sm font-semibold uppercase tracking-wider">{cert.org} | {cert.date}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-audit-orange/10 flex items-center justify-center shrink-0">
                  <cert.icon className="text-audit-orange w-6 h-6" />
                </div>
              </div>
              <p className="text-slate-400 mb-6 italic text-sm">
                "{cert.desc}"
              </p>
              <button className="flex items-center gap-2 text-sm font-bold hover:text-audit-orange transition-colors">
                Verify Credential <ExternalLink className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-8">
          <Clock className="text-audit-orange w-6 h-6" />
          <h2 className="text-2xl font-bold text-white">In Progress</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inProgress.map((item, i) => (
            <div key={item.title} className="p-6 rounded-xl border border-dashed border-slate-700 bg-white/5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <span className="text-[10px] px-2 py-1 bg-slate-800 text-slate-300 rounded uppercase font-bold tracking-tighter">{item.status}</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-3">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="bg-audit-orange h-full" 
                />
              </div>
              <p className="text-xs text-slate-500">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="text-audit-orange w-6 h-6" />
          <h2 className="text-2xl font-bold text-white">Specialized Training & Education</h2>
        </div>
        <div className="space-y-4">
          {training.map((item, i) => (
            <div key={item.title} className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/5 items-center hover:bg-white/10 transition-colors">
              <div className="hidden sm:block text-audit-orange">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-white text-sm md:text-base">{item.title}</h4>
                <p className="text-xs text-slate-500">{item.provider}</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold bg-audit-orange/10 text-audit-orange px-3 py-1 rounded-full uppercase">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
