import { useState } from 'react';
import { Shield, Search, ArrowRight, ClipboardCheck, LayoutGrid, Server } from 'lucide-react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Audit', 'Risk', 'Governance'];

  // ✅ PLACEHOLDER / SAMPLE PROJECTS (safe to show publicly)
  const projects = [
    {
      title: 'Sample SOX ITGC Mapping Exercise',
      category: 'Audit',
      period: 'Example',
      desc: 'Demonstration project showing how IT General Controls can be mapped to SOX-aligned requirements, focusing on access management and change controls.',
      tags: ['SOX', 'ITGC', 'Control Mapping'],
      icon: ClipboardCheck,
      accent: 'text-enterprise-accent',
      bg: 'bg-enterprise-accent/10',
      border: 'border-enterprise-accent/20',
    },
    {
      title: 'NIST CSF Risk Assessment (Mock)',
      category: 'Risk',
      period: 'Example',
      desc: 'Sample risk assessment aligned to the NIST Cybersecurity Framework, illustrating gap identification, severity scoring, and prioritization.',
      tags: ['NIST CSF', 'Risk Assessment', 'Gap Analysis'],
      icon: Shield,
      accent: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
    },
    {
      title: 'Third-Party Risk Review (Illustrative)',
      category: 'Governance',
      period: 'Example',
      desc: 'Illustrative vendor review demonstrating how security documentation can be summarized and tracked to support governance and oversight.',
      tags: ['TPRM', 'Governance', 'SOC Reports'],
      icon: LayoutGrid,
      accent: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
    },
    {
      title: 'IAM Lifecycle Workflow Example',
      category: 'Governance',
      period: 'Example',
      desc: 'Example IAM workflow showing how joiner, mover, leaver processes can be documented and reviewed for compliance alignment.',
      tags: ['IAM', 'Access Control', 'Workflow'],
      icon: Server,
      accent: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
    },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold text-white">Portfolio Projects</h1>
          <p className="text-slate-400 max-w-2xl">
            Placeholder examples to demonstrate how I document compliance work, structure findings, and communicate audit-ready outputs.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-semibold transition-all',
                filter === cat
                  ? 'bg-enterprise-accent text-white shadow-lg shadow-blue-500/20'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <motion.article
            key={project.title}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-2xl overflow-hidden flex flex-col hover:border-enterprise-accent/30 transition-all group"
          >
            <div className="p-8 flex-grow space-y-6">
              <div className="flex justify-between items-start">
                <span
                  className={cn(
                    'text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded border',
                    project.accent,
                    project.bg,
                    project.border
                  )}
                >
                  {project.category}
                </span>
                <span className="text-slate-500 text-xs font-mono">{project.period}</span>
              </div>

              <div className="space-y-3">
                <div
                  className={cn(
                    'w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform',
                    project.bg,
                    project.accent
                  )}
                >
                  <project.icon className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-white group-hover:text-enterprise-accent transition-colors">
                  {project.title}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">{project.desc}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[10px] bg-slate-900/50 border border-white/5 text-slate-400 px-2 py-1 rounded uppercase font-bold tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 pt-0 mt-auto">
              <button className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold transition-all border border-white/5 flex items-center justify-center gap-2 group/btn">
                View Example <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-24 glass-card rounded-3xl">
          <Search className="w-12 h-12 text-slate-700 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white">No projects found</h3>
          <p className="text-slate-500">Try selecting a different category.</p>
        </div>
      )}
    </div>
  );
}
