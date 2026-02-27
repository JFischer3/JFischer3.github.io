import { Shield, Settings, FileText, LayoutGrid, CheckCircle2, Zap, Database, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Governance & Strategy",
      icon: Shield,
      color: "text-enterprise-accent",
      skills: [
        { name: "Policy Development", level: 90 },
        { name: "GRC Strategy", level: 85 },
        { name: "Change Management", level: 80 },
        { name: "Regulatory Mapping", level: 95 }
      ]
    },
    {
      title: "Compliance Frameworks",
      icon: LayoutGrid,
      color: "text-emerald-400",
      skills: [
        { name: "NIST CSF & 800-53", level: 95 },
        { name: "ISO 27001", level: 80 },
        { name: "COBIT 2019", level: 75 },
        { name: "SOX 404", level: 98 }
      ]
    },
    {
      title: "Technical Controls (ITGC)",
      icon: Settings,
      color: "text-amber-400",
      skills: [
        { name: "Access Control", level: 92 },
        { name: "SDLC Security", level: 85 },
        { name: "Backup & Recovery", level: 88 },
        { name: "Vulnerability Management", level: 75 }
      ]
    },
    {
      title: "Professional Tools",
      icon: FileText,
      color: "text-purple-400",
      skills: [
        { name: "ServiceNow GRC", level: 85 },
        { name: "AuditBoard", level: 90 },
        { name: "JIRA / Confluence", level: 95 },
        { name: "Splunk (Basic)", level: 60 }
      ]
    }
  ];

  const technicalStack = [
    { name: "AWS Cloud Security", icon: Globe },
    { name: "Active Directory", icon: Database },
    { name: "SQL Audit", icon: Zap },
    { name: "Excel VBA Automation", icon: LayoutGrid }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-20">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
          Expertise & <span className="text-enterprise-accent">Capabilities</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          A detailed breakdown of my professional skills, technical proficiencies, and the frameworks I utilize to ensure enterprise integrity.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, i) => (
          <motion.section
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 rounded-2xl space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className={cn("w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center", category.color)}>
                <category.icon className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white">{category.title}</h2>
            </div>

            <div className="space-y-6">
              {category.skills.map(skill => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300 font-medium">{skill.name}</span>
                    <span className="text-slate-500 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={cn("h-full rounded-full", category.color.replace('text-', 'bg-'))}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Zap className="text-enterprise-accent w-6 h-6" />
          <h2 className="text-2xl font-bold text-white">Technical Stack</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technicalStack.map((tech, i) => (
            <div key={tech.name} className="glass-card p-6 rounded-xl flex flex-col items-center text-center gap-4 hover:border-enterprise-accent/30 transition-all group">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-enterprise-accent/10 transition-colors">
                <tech.icon className="w-6 h-6 text-slate-400 group-hover:text-enterprise-accent transition-colors" />
              </div>
              <span className="text-sm font-bold text-slate-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="glass-card p-12 rounded-3xl text-center space-y-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-enterprise-accent/5 to-transparent pointer-events-none" />
        <h2 className="text-2xl font-bold text-white relative z-10">Continuous Learning</h2>
        <p className="text-slate-400 max-w-2xl mx-auto relative z-10">
          In the rapidly evolving landscape of GRC and cybersecurity, I am committed to ongoing professional development and staying current with emerging frameworks and technologies.
        </p>
        <div className="flex justify-center gap-4 relative z-10">
          <CheckCircle2 className="text-enterprise-accent w-6 h-6" />
          <span className="text-white font-medium">Currently studying for CISSP</span>
        </div>
      </section>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
