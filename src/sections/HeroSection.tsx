import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowRight, Github, Linkedin, Mail, MapPin, GraduationCap, Briefcase } from "lucide-react";

export function HeroSection() {
  const { personal, education, resume } = portfolioData;

  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-medium text-sky-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span>{personal.statusText}</span>
        </div>

        <div className="mt-6 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400">
              {personal.name} · {personal.title}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.12]">
              {personal.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {personal.supportingDescription}
            </p>
          </div>
          <div className="mx-auto w-full max-w-xs lg:col-span-4">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-charcoal p-3 shadow-xl">
              <img
                src="/images/chandru-profile.jpg"
                alt={`${personal.name} — ${personal.title}`}
                className="aspect-[4/5] w-full rounded-xl object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3.5">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            <span>View Projects</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/90 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-sky-500/50 hover:bg-slate-800"
          >
            <Mail className="h-4 w-4 text-sky-400" />
            <span>Contact Me</span>
          </a>
          {resume.available && (
            <a
              href={resume.fileUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-sky-500/40 bg-sky-500/10 px-4 py-2.5 text-sm font-semibold text-sky-300 transition hover:bg-sky-500/20"
            >
              <span>Download Resume</span>
            </a>
          )}
          <div className="flex items-center gap-2 pl-1">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verified GitHub Profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 transition hover:border-sky-500/50 hover:text-white"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verified LinkedIn Profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 transition hover:border-sky-500/50 hover:text-sky-400"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Recruiter Quick-Scan Bar */}
        <div className="mt-12 grid grid-cols-1 gap-3 rounded-xl border border-slate-800/90 bg-charcoal/90 p-4 sm:grid-cols-3 sm:p-5">
          <div className="flex items-start gap-3">
            <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" />
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400">Education</p>
              <p className="text-sm font-semibold text-white">{education.degree}</p>
              <p className="text-xs text-slate-400">{education.institution} (Grad: {education.expectedGraduation})</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Briefcase className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400">Current Role & Target</p>
              <p className="text-sm font-semibold text-white">Independent Freelance Developer</p>
              <p className="text-xs text-slate-400">Targeting Full-Stack & AI/GenAI Internships</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400">Location & Stack</p>
              <p className="text-sm font-semibold text-white">{personal.location}</p>
              <p className="text-xs text-slate-400">React · TypeScript · Node/Express · PostgreSQL · Python/GenAI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
