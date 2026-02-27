import { Shield, CheckCircle, AlertTriangle, FileText, Briefcase, GraduationCap, Award, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  const expertise = [
    {
      category: "Governance",
      items: ["Policy Development", "GRC Strategy", "Change Management"]
    },
    {
      category: "Frameworks",
      items: ["NIST CSF & 800-53", "ISO 27001", "COBIT 2019"]
    },
    {
      category: "ITGC",
      items: ["Access Control", "System Development Life Cycle", "Backup & Recovery"]
    },
    {
      category: "Tools",
      items: ["ServiceNow GRC", "AuditBoard", "JIRA / Confluence"]
    }
  ];

  const experience = [
    {
      period: "2021 — PRESENT",
      role: "Senior IT Compliance Analyst",
      company: "Enterprise Tech Solutions Inc.",
      achievements: [
        {
          bold: "Led ITGC annual testing",
          text: "across 14 global financial systems to ensure SOX 404 compliance, resulting in zero significant deficiencies identified during external audit."
        },
        {
          bold: "Implemented AuditBoard GRC",
          text: "to automate evidence collection workflows, reducing the manual effort of process owners by 30%."
        }
      ],
      tags: ["AuditBoard", "SOX 404", "AWS"]
    },
    {
      period: "2018 — 2021",
      role: "Internal Auditor (IT)",
      company: "Financial Global Partners",
      achievements: [
        {
          bold: "Designed a risk-based audit plan",
          text: "for the cloud migration project, identifying 12 critical configuration gaps before production rollout."
        },
        {
          bold: "Collaborated with Engineering",
          text: "to develop automated identity access reviews, improving compliance monitoring frequency from quarterly to monthly."
        }
      ],
      tags: ["NIST 800-53", "Active Directory", "Splunk"]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-24">
      {/* Professional Summary */}
      <section className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Securing Integrity Through <span className="text-enterprise-accent">Rigorous Governance</span>.
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed">
            Seasoned IT Compliance professional specializing in aligning complex technical infrastructures with regulatory requirements. I bridge the gap between technical operations and executive governance, ensuring that security is not just a checkbox, but a strategic asset.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            {["SOX Compliance", "Risk Management", "Audit Readiness"].map(skill => (
              <span key={skill} className="px-4 py-2 bg-enterprise-accent/10 border border-enterprise-accent/30 rounded-full text-enterprise-accent text-sm font-semibold">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <div className="aspect-square rounded-2xl bg-slate-800 border-2 border-enterprise-accent/20 flex items-center justify-center overflow-hidden relative group">
            <img 
              src="https://picsum.photos/seed/professional/600/600" 
              alt="Professional Headshot" 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-enterprise-dark/80 to-transparent" />
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          { title: "SOX & Internal Controls", icon: CheckCircle, desc: "Implementing and testing IT General Controls (ITGC) to ensure the integrity of financial reporting systems." },
          { title: "Audit Readiness", icon: FileText, desc: "Preparing teams for external audits by identifying gaps, documenting processes, and curating evidence." },
          { title: "Risk Assessment", icon: AlertTriangle, desc: "Conducting qualitative and quantitative risk analysis to prioritize remediation efforts across the enterprise." }
        ].map(area => (
          <div key={area.title} className="glass-card p-8 rounded-xl hover:border-enterprise-accent/40 transition-all group">
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
          <h2 className="text-2xl font-bold uppercase tracking-wider text-white">Expertise & Tools</h2>
          <Link to="/skills" className="text-enterprise-accent text-sm font-bold flex items-center gap-2 hover:underline">
            View Detailed Skills <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map(group => (
            <div key={group.category} className="space-y-4">
              <h4 className="text-enterprise-accent font-bold text-xs uppercase tracking-widest">{group.category}</h4>
              <ul className="text-slate-400 text-sm space-y-3">
                {group.items.map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-enterprise-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience Timeline */}
      <section className="space-y-12">
        <div className="border-l-4 border-enterprise-accent pl-4">
          <h2 className="text-2xl font-bold uppercase tracking-wider text-white">Work Experience</h2>
        </div>
        <div className="relative space-y-16 pl-8">
          <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-enterprise-accent via-slate-800 to-transparent" />
          {experience.map((job, i) => (
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
                  <span className="text-enterprise-accent text-sm font-mono font-bold">{job.period}</span>
                  <h3 className="text-2xl font-bold text-white mt-1">{job.role}</h3>
                  <p className="text-slate-400 font-medium">{job.company}</p>
                </div>
                <div className="space-y-4 max-w-3xl">
                  {job.achievements.map((ach, j) => (
                    <div key={j} className="flex gap-4">
                      <div className="text-enterprise-accent shrink-0 mt-1">▹</div>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        <span className="text-white font-semibold">{ach.bold}</span> {ach.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map(tag => (
                    <span key={tag} className="bg-slate-800/50 border border-white/5 text-[10px] px-2 py-1 rounded text-slate-400 uppercase font-bold tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education & Certs Summary */}
      <section className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-enterprise-accent w-6 h-6" />
              <h2 className="text-xl font-bold uppercase tracking-widest text-white">Education</h2>
            </div>
            <Link to="/education" className="text-enterprise-accent text-xs font-bold flex items-center gap-1 hover:underline">
              Details <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="space-y-4">
            <div className="glass-card p-6 rounded-xl">
              <h4 className="text-white font-bold">B.S. in Management Information Systems</h4>
              <p className="text-slate-400 text-sm italic">University of Technology | 2014 - 2018</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Award className="text-enterprise-accent w-6 h-6" />
            <h2 className="text-xl font-bold uppercase tracking-widest text-white">Certifications</h2>
          </div>
          <ul className="space-y-3">
            {["CISA - Certified Information Systems Auditor", "CRISC - Cert. in Risk and Info Systems Control", "CompTIA Security+"].map(cert => (
              <li key={cert} className="flex items-center gap-3 p-4 glass-card rounded-xl border-l-4 border-enterprise-accent">
                <span className="text-white font-semibold text-sm tracking-tight">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
