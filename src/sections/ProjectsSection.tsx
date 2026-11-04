"use client";

import React, { useState } from "react";
import { portfolioData, ProjectItem } from "@/data/portfolioData";
import { ExternalLink, Github, BookOpen, Layers } from "lucide-react";

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", "AI & RAG Systems", "Machine Learning & NLP", "Frontend & Web UI", "Core CS & Algorithms"];

  const filtered =
    selectedCategory === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="border-t border-slate-800/70 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-semibold text-sky-400">02.</span>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Selected Projects
            </h2>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  selectedCategory === cat
                    ? "bg-sky-500 text-slate-950 font-semibold"
                    : "border border-slate-800 bg-charcoal text-slate-300 hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-3 max-w-3xl text-sm text-slate-400">
          Every project below is grounded in verified source notebooks, lab records, and repositories—complete with real execution outputs, architectural breakdowns, and honest engineering trade-offs.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-slate-800/90 bg-charcoal/90 transition hover:border-sky-500/40"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="relative flex flex-col justify-between bg-slate-950/70 p-4 lg:col-span-5">
                  <div className="overflow-hidden rounded-xl border border-slate-800">
                    <img
                      src={project.featuredScreenshot}
                      alt={project.featuredScreenshotAlt}
                      className="h-56 w-full object-cover object-top transition duration-300 group-hover:scale-[1.02] sm:h-64"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Verified Execution Output</span>
                    <span className="text-sky-400">{project.category}</span>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-6 lg:col-span-7">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-semibold text-sky-400">
                        PROJECT {project.number}
                      </span>
                    </div>
                    <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {project.shortDescription}
                    </p>

                    <div className="mt-4 grid grid-cols-1 gap-3 rounded-xl border border-slate-800/80 bg-obsidian/60 p-3.5 sm:grid-cols-2">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-wider text-sky-400">
                          Problem Solved
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-300">
                          {project.problemSolved}
                        </p>
                      </div>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-wider text-indigo-400">
                          My Actual Contribution
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-300">
                          {project.myContribution}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-slate-800 bg-slate-900/90 px-2.5 py-1 font-mono text-[11px] text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-slate-800/80 pt-4">
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-sky-400"
                    >
                      <Layers className="h-3.5 w-3.5" />
                      <span>View Case Study (10-Point Breakdown)</span>
                    </button>

                    {project.verifiedLinks.notebook && (
                      <a
                        href={project.verifiedLinks.notebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs font-medium text-slate-200 transition hover:border-sky-500/50 hover:text-sky-300"
                      >
                        <BookOpen className="h-3.5 w-3.5 text-sky-400" />
                        <span>Verified Notebook / Record</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}

                    {project.verifiedLinks.documentation && (
                      <a
                        href={project.verifiedLinks.documentation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs font-medium text-slate-200 transition hover:border-sky-500/50 hover:text-sky-300"
                      >
                        <ExternalLink className="h-3.5 w-3.5 text-indigo-400" />
                        <span>Verified PDF Documentation</span>
                      </a>
                    )}

                    {project.verifiedLinks.github && (
                      <a
                        href={project.verifiedLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs font-medium text-slate-200 transition hover:border-sky-500/50 hover:text-white"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
