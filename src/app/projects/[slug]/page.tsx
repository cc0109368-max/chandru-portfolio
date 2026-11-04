import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return portfolioData.projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectCaseStudyPage({ params }: { params: { slug: string } }) {
  const project = portfolioData.projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();
  const { caseStudy } = project;

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <a href="/#projects" className="font-mono text-xs text-sky-400 hover:underline">
        ← Back to Projects
      </a>
      <p className="mt-4 font-mono text-xs text-sky-400">
        PROJECT {project.number} · {project.category}
      </p>
      <h1 className="mt-1 text-3xl font-bold text-white sm:text-4xl">{project.title}</h1>
      <p className="mt-4 text-base text-slate-300">{caseStudy.overview}</p>
    </main>
  );
}
