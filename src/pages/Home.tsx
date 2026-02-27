import { Shield, Download, CheckCircle, Lock, FileText, Award, Briefcase, Settings } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.jpg';

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-enterprise-accent/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-enterprise-accent/10 border border-enterprise-accent/30 text-enterprise-accent text-xs font-bold uppercase tracking-wider font-mono">
              Secure • Compliant • Resilient
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
              IT Compliance & <br />
              <span className="text-enterprise-accent">GRC Analyst</span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
              Bridging the gap between technical controls and regulatory requirements. Specialist in <span className="text-slate-100 font-semibold">SOX ITGC</span>, <span className="text-slate-100 font-semibold">NIST CSF</span>, and ensuring audit readiness through proactive risk management.
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-enterprise-accent/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative bg-enterprise-surface border border-slate-700 p-8 rounded-2xl shadow-2xl w-full max-w-md">
                <div className="flex flex-col space-y-6">
                  <div className="h-2 w-32 bg-slate-700 rounded" />
                  <div className="h-2 w-48 bg-enterprise-accent/40 rounded" />
                  <div className="grid grid-cols-3 gap-3 py-4">
                    <div className="h-20 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center">
                      <CheckCircle className="text-green-500 w-8 h-8" />
                    </div>
                    <div className="h-20 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center">
                      <Lock className="text-enterprise-warning w-8 h-8" />
                    </div>
                    <div className="h-20 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center">
                      <FileText className="text-enterprise-accent w-8 h-8" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-slate-700 rounded" />
                    <div className="h-2 w-3/4 bg-slate-700 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="py-12 bg-enterprise-surface/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/5">
            <div className="py-4 md:py-0">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Certifications</p>
              <div className="flex justify-center gap-3">
                <span className="bg-slate-900 px-3 py-1 rounded border border-white/5 text-sm font-semibold">CompTIA Security+</span>
                <span className="bg-slate-900 px-3 py-1 rounded border border-white/5 text-sm font-semibold">CISA Candidate</span>
              </div>
            </div>
            <div className="py-4 md:py-0">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Frameworks</p>
              <div className="flex justify-center gap-3">
                <span className="bg-slate-900 px-3 py-1 rounded border border-white/5 text-sm font-semibold">NIST CSF</span>
                <span className="bg-slate-900 px-3 py-1 rounded border border-white/5 text-sm font-semibold">ISO 27001</span>
                <span className="bg-slate-900 px-3 py-1 rounded border border-white/5 text-sm font-semibold">SOX</span>
              </div>
            </div>
            <div className="py-4 md:py-0">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Core Tools</p>
              <div className="flex justify-center gap-3">
                <span className="bg-slate-900 px-3 py-1 rounded border border-white/5 text-sm font-semibold">Workiva</span>
                <span className="bg-slate-900 px-3 py-1 rounded border border-white/5 text-sm font-semibold">ServiceNow</span>
                <span className="bg-slate-900 px-3 py-1 rounded border border-white/5 text-sm font-semibold">Jira</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Focus Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "SOX & Internal Controls",
              desc: "Implementing and testing IT General Controls (ITGC) to ensure the integrity of financial reporting systems.",
              icon: Shield,
              color: "text-enterprise-accent"
            },
            {
              title: "Audit Readiness",
              desc: "Preparing teams for external audits by identifying gaps, documenting processes, and curating evidence.",
              icon: Award,
              color: "text-enterprise-warning"
            },
            {
              title: "Risk Assessment",
              desc: "Conducting qualitative and quantitative risk analysis to prioritize remediation efforts across the enterprise.",
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
