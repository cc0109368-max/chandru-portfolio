import React from "react";
import { portfolioData } from "@/data/portfolioData";

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="border-t border-slate-800/70 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-sky-400">04.</span>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Technical Skills
          </h2>
          <div className="h-px flex-1 bg-slate-800" />
        </div>

        <p className="mt-3 max-w-2xl text-sm text-slate-400">
          Organized by engineering domain with practical context on how I use each technology—without arbitrary percentage bars.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.id}
              className="rounded-2xl border border-slate-800 bg-charcoal/90 p-5 transition hover:border-slate-700"
            >
              <h3 className="text-base font-bold text-white">{group.title}</h3>
              <p className="mt-0.5 text-xs text-slate-400">{group.subtitle}</p>
              <div className="mt-4 space-y-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="rounded-lg border border-slate-800/80 bg-obsidian/70 px-3.5 py-2.5"
                  >
                    <p className="font-mono text-xs font-semibold text-sky-300">{skill.name}</p>
                    <p className="mt-0.5 text-xs text-slate-400">{skill.context}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
