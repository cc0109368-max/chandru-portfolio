import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { CheckCircle2, Code2 } from "lucide-react";

export function ExperienceSection() {
  const { freelance } = portfolioData;

  return (
    <section id="experience" className="border-t border-slate-800/70 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-sky-400">03.</span>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Freelance Experience
          </h2>
          <div className="h-px flex-1 bg-slate-800" />
        </div>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-charcoal/90 p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                {freelance.statusLabel}
              </span>
              <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                {freelance.roleTitle}
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900 px-3 py-1 font-mono text-xs text-slate-300">
              <Code2 className="h-3.5 w-3.5 text-sky-400" />
              <span>Independent Practice · Tamil Nadu, India</span>
            </span>
          </div>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {freelance.summary}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {freelance.services.map((service) => (
              <div
                key={service.id}
                className="flex flex-col justify-between rounded-xl border border-slate-800 bg-obsidian/70 p-5"
              >
                <div>
                  <h4 className="text-base font-semibold text-white">{service.title}</h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sky-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-800/80 pt-3">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-slate-900 px-2 py-0.5 font-mono text-[10px] text-sky-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-slate-800 pt-6 sm:grid-cols-3">
            {freelance.workflowSteps.map((w) => (
              <div key={w.step} className="rounded-lg border border-slate-800/60 bg-slate-950/50 p-4">
                <span className="font-mono text-xs font-bold text-sky-400">STEP {w.step}</span>
                <h5 className="mt-1 text-sm font-semibold text-white">{w.title}</h5>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">{w.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
