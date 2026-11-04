"use client";

import React from "react";
import { ProjectItem } from "@/data/portfolioData";
import { X, ExternalLink, Github, CheckCircle2 } from "lucide-react";

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  if (!project) return null;
  const { caseStudy } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-700 bg-obsidian p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="font-mono text-xs text-sky-400">
              CASE STUDY {project.number} · {project.category}
            </span>
            <h2 id="case-study-title" className="mt-1 text-2xl font-bold text-white">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-700 p-2 text-slate-300 hover:bg-slate-800"
            aria-label="Close Case Study"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 space-y-6 text-sm leading-relaxed text-slate-300">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-sky-400">
              1. Project Overview
            </h3>
            <p className="mt-1.5">{caseStudy.overview}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-charcoal p-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-rose-400">
                2. Problem Statement
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm">{caseStudy.problemStatement}</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-charcoal p-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                3. Solution
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm">{caseStudy.solution}</p>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-sky-400">
              4. Technical Architecture
            </h3>
            <ul className="mt-2 space-y-2">
              {caseStudy.architecture.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-mono text-xs font-bold text-sky-400">0{idx + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-sky-400">
              5. Technologies Used
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {caseStudy.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-slate-700 bg-charcoal px-2.5 py-1 font-mono text-xs text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-charcoal p-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-amber-400">
                6. Development Challenges
              </h3>
              <ul className="mt-2 space-y-2 text-xs sm:text-sm">
                {caseStudy.challenges.map((c, idx) => (
                  <li key={idx}>• {c}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-slate-800 bg-charcoal p-4">
              <h3 className="font-mono text-xs uppercase tracking-wider text-indigo-400">
                7. My Contributions
              </h3>
              <ul className="mt-2 space-y-2 text-xs sm:text-sm">
                {caseStudy.contributions.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-400" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-sky-400">
              8. Results & Learnings
            </h3>
            <ul className="mt-2 space-y-1.5">
              {caseStudy.resultsAndLearnings.map((r, idx) => (
                <li key={idx}>• {r}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-sky-400">
              9. Verified Project Output Screenshots
            </h3>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {caseStudy.screenshots.map((shot) => (
                <figure
                  key={shot.src}
                  className="overflow-hidden rounded-xl border border-slate-800 bg-charcoal p-2"
                >
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className="h-48 w-full rounded-lg object-cover object-top"
                  />
                  <figcaption className="mt-2 px-1 text-xs text-slate-400">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-sky-400">
              10. Verified Source Code & Documentation Links
            </h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {caseStudy.links.notebookUrl && (
                <a
                  href={caseStudy.links.notebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950"
                >
                  <span>Open Verified Notebook / Record</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              {caseStudy.links.documentationUrl && (
                <a
                  href={caseStudy.links.documentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-charcoal px-4 py-2 text-xs font-medium text-white"
                >
                  <span>Open Documentation PDF</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              {caseStudy.links.sourceCode && (
                <a
                  href={caseStudy.links.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-charcoal px-4 py-2 text-xs font-medium text-white"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub Profile / Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
