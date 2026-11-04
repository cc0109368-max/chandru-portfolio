import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Award } from "lucide-react";

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="border-t border-slate-800/70 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-sky-400">05.</span>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Education & Technical Training
          </h2>
          <div className="h-px flex-1 bg-slate-800" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="rounded-2xl border border-slate-800 bg-charcoal/90 p-6 lg:col-span-6">
            <div className="flex items-start gap-3.5">
              <div className="rounded-xl border border-sky-500/30 bg-sky-500/10 p-3 text-sky-400">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <span className="font-mono text-xs text-sky-400">
                  Expected Graduation: {education.expectedGraduation} ({education.batch})
                </span>
                <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                  {education.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-300">
                  {education.institution}
                </p>
                <p className="text-xs text-slate-400">{education.location}</p>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-800 pt-4">
              <p className="font-mono text-xs uppercase tracking-wider text-slate-400">
                Verified University Coursework & Labs
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-lg border border-slate-800 bg-obsidian px-3 py-1.5 text-xs text-slate-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3.5 lg:col-span-6">
            {education.programsAndTraining.map((prog) => (
              <div
                key={prog.title}
                className="rounded-xl border border-slate-800 bg-charcoal/70 p-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-semibold text-white">{prog.title}</h4>
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-sky-400">
                    <Award className="h-3.5 w-3.5" />
                    {prog.organizer}
                  </span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-300">{prog.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
