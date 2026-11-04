import React from "react";
import { portfolioData } from "@/data/portfolioData";

export function AboutSection() {
  const { about } = portfolioData;

  return (
    <section id="about" className="border-t border-slate-800/70 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-sky-400">01.</span>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">About Me</h2>
          <div className="h-px flex-1 bg-slate-800" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-4 text-slate-300 lg:col-span-7">
            <p className="text-lg font-medium text-white">{about.lead}</p>
            {about.paragraphs.map((p, idx) => (
              <p key={idx} className="text-sm leading-relaxed sm:text-base">
                {p}
              </p>
            ))}
          </div>

          <div className="space-y-4 lg:col-span-5">
            {about.focusAreas.map((area) => (
              <div
                key={area.label}
                className="rounded-xl border border-slate-800 bg-charcoal/80 p-5 transition hover:border-slate-700"
              >
                <h3 className="text-sm font-semibold text-sky-300">{area.label}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {area.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
