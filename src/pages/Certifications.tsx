import {
  Award,
  BadgeCheck,
  BookOpen,
  ExternalLink,
  ShieldCheck,
  ClipboardList,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";

// 1) Import your local assets here
// Adjust filenames to match what you actually put in src/assets/certs/
import securityPlusPdf from "../assets/certs/securityplus.pdf";
import googleCyberPdf from "../assets/certs/google-cybersecurity.pdf";
import correlationOneImg from "../assets/certs/correlation-one.jpg";
import forageDatPdf from "../assets/certs/forage-dat.pdf";
import forageCscPdf from "../assets/certs/forage-csc.pdf";

type Credential = {
  title: string;
  org: string;
  date: string;
  desc: string;
  verifyLabel?: string;
  verifyUrl?: string;
  icon: any;
  // 2) Add an optional local asset to show in modal
  asset?: {
    src: string;
    type: "image" | "pdf";
    label?: string; // button text
  };
};

type ModalAsset = NonNullable<Credential["asset"]> & { title: string };

function isPdf(src: string) {
  return src.toLowerCase().endsWith(".pdf");
}

export default function Certifications() {
  const [openAsset, setOpenAsset] = useState<ModalAsset | null>(null);

  const certifications: Credential[] = [
    {
      title: "CompTIA Security+ (SY0-601)",
      org: "CompTIA",
      date: "Earned Dec 8, 2023 • Valid through Dec 8, 2026",
      desc: "Validates baseline cybersecurity knowledge across risk management, threats, security architecture, operations, and incident response.",
      verifyLabel: "Verify on CompTIA",
      verifyUrl: "http://verify.CompTIA.org",
      icon: ShieldCheck,
      asset: { src: securityPlusPdf, type: "pdf", label: "View Certification" },
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
      asset: { src: googleCyberPdf, type: "pdf", label: "View Certificate" },
    },
    {
      title: "Correlation One Cybersecurity Program (Honors)",
      org: "Correlation One",
      date: "Awarded Nov 17, 2023",
      desc: "Completed an intensive cybersecurity program with honors, including hands-on coursework and mini projects.",
      icon: Award,
      asset: { src: correlationOneImg, type: "image", label: "View Certificate" },
    },
  ];

  const simulations: Credential[] = [
    {
      title: "Digital Assurance & Transparency Simulation",
      org: "Forage",
      date: "Completed Mar 21, 2024",
      desc: "Hands-on simulation covering client walkthrough, initial control testing, testing result analysis, and delivering results.",
      icon: ClipboardList,
      asset: { src: forageDatPdf, type: "pdf", label: "View Certificate" },
    },
    {
      title: "Cyber Security Consulting Simulation",
      org: "Forage",
      date: "Completed Mar 26, 2024",
      desc: "Hands-on simulation covering risk assessment, SDLC walkthrough questions, ITGC testing, and a controls testing summary.",
      icon: ClipboardList,
      asset: { src: forageCscPdf, type: "pdf", label: "View Certificate" },
    },
  ];

  const allSections = useMemo(
    () => [
      { title: "Certifications", icon: BadgeCheck, items: certifications },
      { title: "Programs & Certificates", icon: Award, items: certificates },
      { title: "Practical Simulations", icon: ClipboardList, items: simulations },
    ],
    []
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
          Certifications & <span className="text-enterprise-accent">Credentials</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-3xl">
          Verified certifications, completed programs, and hands-on simulations supporting my IT Compliance and GRC focus.
        </p>
      </header>

      {allSections.map((section, sIdx) => (
        <section key={section.title} className="space-y-6">
          <div className="flex items-center gap-3">
            <section.icon className="text-enterprise-accent w-6 h-6" />
            <h2 className="text-2xl font-bold text-white">{section.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.items.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (sIdx * 0.08) + i * 0.06 }}
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

                <div className="mt-5 flex flex-wrap gap-3">
                  {c.asset && (
                    <button
                      onClick={() => setOpenAsset({ ...c.asset!, title: c.title })}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-bold text-slate-200 hover:border-enterprise-accent/40 hover:text-enterprise-accent transition-colors"
                      type="button"
                    >
                      {c.asset.label ?? "View Certificate"}
                    </button>
                  )}

                  {c.verifyUrl && c.verifyLabel && (
                    <a
                      href={c.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/0 border border-white/10 text-sm font-bold text-slate-200 hover:border-enterprise-accent/40 hover:text-enterprise-accent transition-colors"
                    >
                      {c.verifyLabel} <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      {/* Modal */}
      {openAsset && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpenAsset(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-4xl rounded-2xl bg-enterprise-surface border border-white/10 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <div className="text-white font-bold truncate pr-4">{openAsset.title}</div>
              <div className="flex items-center gap-2">
                <a
                  href={openAsset.src}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-slate-200 hover:text-enterprise-accent transition-colors"
                >
                  Open
                </a>
                <button
                  onClick={() => setOpenAsset(null)}
                  className="p-2 rounded-lg hover:bg-white/5 text-slate-200"
                  type="button"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="bg-black/20">
              {openAsset.type === "image" && (
                <img
                  src={openAsset.src}
                  alt={openAsset.title}
                  className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                  loading="eager"
                />
              )}

              {openAsset.type === "pdf" && (
                <iframe
                  title={openAsset.title}
                  src={openAsset.src}
                  className="w-full h-[75vh]"
                />
              )}

              {/* Safety fallback if type mismatched */}
              {openAsset.type !== "image" && openAsset.type !== "pdf" && (
                <div className="p-8 text-slate-300">
                  Unable to preview this file. Use the Open link above.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
