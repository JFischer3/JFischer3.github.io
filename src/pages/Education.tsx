import { GraduationCap, BookOpen, Award, Calendar, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Education() {
  const education = [
    {
      degree: "B.S. in Management Information Systems",
      school: "University of Technology",
      period: "2014 - 2018",
      location: "San Francisco, CA",
      description: "Focused on the intersection of business processes and information technology. Specialized in systems analysis, database management, and enterprise resource planning.",
      highlights: [
        "Dean's List: 2016, 2017, 2018",
        "Senior Capstone: Developed a mock GRC framework for a local non-profit",
        "Relevant Coursework: IT Audit, Information Security, Business Analytics, Database Design"
      ]
    }
  ];

  const academicProjects = [
    {
      title: "Enterprise Risk Assessment Simulation",
      desc: "Conducted a comprehensive risk assessment for a hypothetical financial institution, identifying 20+ high-risk areas and proposing mitigation strategies.",
      tags: ["Risk Management", "Business Impact Analysis"]
    },
    {
      title: "Database Security Audit",
      desc: "Performed a security audit on a SQL database, identifying vulnerabilities in access controls and data encryption methods.",
      tags: ["SQL", "Security Audit", "Access Control"]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-20">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
          Academic <span className="text-enterprise-accent">Foundation</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          My educational background provides the theoretical and technical foundation for my career in IT Compliance and Governance.
        </p>
      </header>

      <section className="space-y-12">
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 rounded-2xl border-l-4 border-enterprise-accent relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <GraduationCap className="w-32 h-32" />
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-white">{edu.degree}</h2>
                  <p className="text-enterprise-accent font-semibold text-lg">{edu.school}</p>
                </div>
                <div className="flex flex-col md:items-end text-slate-500 text-sm font-mono">
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {edu.period}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {edu.location}</div>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed max-w-3xl">
                {edu.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest">Key Highlights</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {edu.highlights.map((highlight, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-slate-400">
                      <CheckCircle className="w-4 h-4 text-enterprise-accent shrink-0 mt-0.5" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <BookOpen className="text-enterprise-accent w-6 h-6" />
          <h2 className="text-2xl font-bold text-white">Academic Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {academicProjects.map((project, i) => (
            <div key={project.title} className="glass-card p-6 rounded-xl hover:border-enterprise-accent/30 transition-all">
              <h3 className="text-lg font-bold text-white mb-3">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] bg-slate-900/50 border border-white/5 text-slate-500 px-2 py-1 rounded uppercase font-bold tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  );
}
