"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { buildMailtoUrl } from "@/lib/utils";
import { Menu, X, FileText, Mail, SlidersHorizontal, Github, Linkedin } from "lucide-react";

interface NavbarProps {
  onOpenConfig: () => void;
}

export function Navbar({ onOpenConfig }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { personal, resume } = portfolioData;

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-obsidian/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <a
          href="#home"
          className="font-mono text-lg font-bold tracking-tight text-white transition hover:text-sky-400"
        >
          {personal.logoText}
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary Navigation">
          {navItems.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-sky-400"
            >
              <span className="mr-1 font-mono text-xs text-sky-400/80">0{idx + 1}.</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <button
            type="button"
            onClick={onOpenConfig}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-sky-500/50 hover:text-white"
            title="Inspect or edit centralized portfolioData configuration"
          >
            <SlidersHorizontal className="h-3.5 w-3.5 text-sky-400" />
            <span>Config</span>
          </button>

          {resume.available ? (
            <a
              href={resume.fileUrl}
              download
              className="inline-flex items-center gap-1.5 rounded-lg border border-sky-500/40 bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold text-sky-300 transition hover:bg-sky-500/20"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resume PDF</span>
            </a>
          ) : (
            <a
              href={buildMailtoUrl(
                personal.email,
                resume.requestSubject,
                "Hi Chandru, I reviewed your developer portfolio and would like to request a copy of your resume."
              )}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-slate-300 transition hover:border-sky-500/50 hover:text-sky-300"
              title="Request verified resume directly via email"
            >
              <Mail className="h-3.5 w-3.5 text-sky-400" />
              <span>Request Resume</span>
            </a>
          )}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-lg border border-slate-800 p-2 text-slate-300 hover:bg-slate-900 md:hidden"
          aria-label="Toggle Menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-800 bg-charcoal px-4 py-4 md:hidden">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-2 py-1.5 text-sm font-medium text-slate-200 hover:bg-slate-800/60 hover:text-sky-400"
              >
                <span className="mr-2 font-mono text-xs text-sky-400">0{idx + 1}.</span>
                {item.label}
              </a>
            ))}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenConfig();
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-200"
              >
                <SlidersHorizontal className="h-3.5 w-3.5 text-sky-400" />
                <span>Data Config</span>
              </button>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-200"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-200"
              >
                <Linkedin className="h-3.5 w-3.5 text-sky-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
