import React from "react";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const { personal } = portfolioData;
  return (
    <footer className="border-t border-slate-800/80 bg-obsidian py-8 text-center text-xs text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="font-mono text-slate-300">
          {personal.logoText} · Built with Next.js, TypeScript & Tailwind CSS
        </p>
        <p>
          {personal.name} · {personal.location} ·{" "}
          <a href={`mailto:${personal.email}`} className="text-sky-400 hover:underline">
            {personal.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
