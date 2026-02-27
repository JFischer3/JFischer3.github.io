import { Shield, Download, CheckCircle, Lock, FileText, Award, Briefcase, Settings } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/Profilepicture.png';

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
{/* Hero Section */}
<section className="min-h-[80vh] flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-enterprise-accent/5 to-transparent pointer-events-none" />

  <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
    {/* Left column */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="inline-block px-3 py-1 mb-6 rounded-full bg-enterprise-accent/10 border border-enterprise-accent/30 text-enterprise-accent text-xs font-bold uppercase tracking-wider font-mono">
        Secure • Compliant • Resilient
      </div>

  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight md:leading-snug mb-6 text-white">
  IT Compliance Analyst <br />
  <span className="text-enterprise-accent">&amp; WGU Student</span>
</h1>

     <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
  I’m <span className="text-slate-100 font-semibold">Jordan Fischer</span>, an IT Compliance Analyst focused on control
  design, audit readiness, and risk management. This portfolio reflects my experience with{" "}
  <span className="text-slate-100 font-semibold">SOX ITGC</span> and{" "}
  <span className="text-slate-100 font-semibold">NIST CSF</span>, and documents my professional growth as I begin my{" "}
  <span className="text-slate-100 font-semibold">B.S. in Cybersecurity and Information Assurance at WGU</span>.
</p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/projects"
          className="px-8 py-4 bg-enterprise-accent hover:bg-blue-600 text-white rounded-lg font-bold text-center transition-all shadow-lg shadow-blue-500/20"
        >
          View Projects
        </Link>

        <button className="px-8 py-4 border border-slate-700 hover:border-enterprise-accent text-white rounded-lg font-bold text-center transition-all flex items-center justify-center gap-2">
          <Download className="w-4 h-4" /> Download Resume
        </button>
      </div>
    </motion.div>

    {/* Right column */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="hidden md:flex justify-center"
    >
      <div className="relative">
        {/* Glow */}
        <div className="absolute -inset-6 bg-enterprise-accent/20 rounded-full blur-3xl" />

        {/* Profile Card */}
        <div className="relative bg-enterprise-surface border border-slate-700 p-6 rounded-2xl shadow-2xl w-[320px]">
          <div className="flex flex-col items-center text-center space-y-4">
            <img
              src={profileImg}
              alt="Jordan Fischer"
              className="w-40 h-40 rounded-full object-cover border border-white/10 brightness-95 contrast-95 saturate-90"
            />

            <div>
              <div className="text-xl font-bold text-white">Jordan Fischer</div>
              <div className="text-slate-400 text-sm">IT Compliance Analyst • WGU Student</div>
              <div className="text-slate-500 text-xs mt-1">Columbia, PA</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

  {/* Credibility Banner */}
<section className="py-16 border-y border-white/5">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-3 gap-12">

      {/* My Approach */}
      <div>
        <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-3">
          My Approach
        </h3>
        <ul className="space-y-3 text-slate-300">
          <li className="relative pl-5">
            <span className="absolute left-0 top-2 text-slate-400">•</span>
            Evaluate ITGC design and operating effectiveness
          </li>
          <li className="relative pl-5">
            <span className="absolute left-0 top-2 text-slate-400">•</span>
            Support audit readiness through clarity and consistency
          </li>
          <li className="relative pl-5">
            <span className="absolute left-0 top-2 text-slate-400">•</span>
            Communicate requirements and findings to technical and business teams
          </li>
        </ul>
      </div>

      {/* Governance Focus */}
      <div>
        <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-3">
          Governance Focus
        </h3>
        <ul className="space-y-3 text-slate-300">
          <li className="relative pl-5">
            <span className="absolute left-0 top-2 text-slate-400">•</span>
            SOX ITGC support and scope alignment
          </li>
          <li className="relative pl-5">
            <span className="absolute left-0 top-2 text-slate-400">•</span>
            Audit readiness and evidence coordination
          </li>
          <li className="relative pl-5">
            <span className="absolute left-0 top-2 text-slate-400">•</span>
            Risk identification, tracking, and remediation support
          </li>
        </ul>
      </div>

      {/* Tools & Frameworks */}
      <div>
        <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-3">
          Tools &amp; Frameworks
        </h3>
        <ul className="space-y-3 text-slate-300">
          <li className="relative pl-5">
            <span className="absolute left-0 top-2 text-slate-400">•</span>
            SOX ITGC and NIST CSF
          </li>
          <li className="relative pl-5">
            <span className="absolute left-0 top-2 text-slate-400">•</span>
            Workiva for SOX tracking, evidence, and reporting
          </li>
          <li className="relative pl-5">
            <span className="absolute left-0 top-2 text-slate-400">•</span>
            ServiceNow and Jira for issue tracking and workflow coordination
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>
      {/* Featured Focus Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "SOX ITGC Support",
              desc: "Supporting SOX IT General Controls through documentation review, evidence coordination, and control understanding to help maintain audit readiness.",
              icon: Shield,
              color: "text-enterprise-accent"
            },
            {
              title: "Audit Preparation & Evidence",
              desc: "Assisting audit readiness by identifying documentation gaps, organizing supporting evidence, and aligning materials with auditor expectations.",
              icon: Award,
              color: "text-enterprise-warning"
            },
            {
              title: "Risk & Issue Tracking",
              desc: "Supporting risk identification and remediation efforts through issue tracking, documentation updates, and cross-functional coordination.",
              icon: Settings,
              color: "text-green-500"
            }
          ].map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:border-enterprise-accent/30 transition-all group"
            >
              <div className={cn("w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", area.color)}>
                <area.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{area.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
