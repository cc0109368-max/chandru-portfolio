"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { buildMailtoUrl } from "@/lib/utils";
import { Mail, Linkedin, Github, Copy, Check, Send } from "lucide-react";

export function ContactSection() {
  const { personal, contact } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [inquiryType, setInquiryType] = useState("Full-Stack / AI Internship Opportunity");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    try {
      navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
    }
  };

  const composedMailto = buildMailtoUrl(
    personal.email,
    `${inquiryType}${senderName ? ` — from ${senderName}` : ""}`,
    message || `Hi Chandru,

I reviewed your portfolio and would like to connect regarding ${inquiryType}.

Best regards,
${senderName}`
  );

  return (
    <section id="contact" className="border-t border-slate-800/70 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-sky-400">06.</span>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Contact</h2>
          <div className="h-px flex-1 bg-slate-800" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">{contact.headline}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              {contact.closingMessage}
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-charcoal p-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-sky-400" />
                  <div>
                    <p className="font-mono text-[11px] uppercase text-slate-400">Verified Email</p>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm font-semibold text-white hover:text-sky-400"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-sky-500/50"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-slate-800 bg-charcoal p-4 transition hover:border-sky-500/50"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-sky-400" />
                  <div>
                    <p className="font-mono text-[11px] uppercase text-slate-400">LinkedIn</p>
                    <p className="text-sm font-semibold text-white">linkedin.com/in/chandru-ai-ml</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-sky-400">Connect →</span>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-slate-800 bg-charcoal p-4 transition hover:border-sky-500/50"
              >
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-slate-200" />
                  <div>
                    <p className="font-mono text-[11px] uppercase text-slate-400">GitHub</p>
                    <p className="text-sm font-semibold text-white">github.com/cc0109368-max</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-sky-400">View Code →</span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-charcoal/90 p-6 lg:col-span-6">
            <h4 className="text-base font-bold text-white">Direct Email Composer (mailto)</h4>
            <p className="mt-1 text-xs text-slate-400">{contact.responseNote}</p>

            <div className="mt-4 space-y-4">
              <div>
                <label className="block font-mono text-xs text-slate-300" htmlFor="sender-name">
                  Your Name / Organization
                </label>
                <input
                  id="sender-name"
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g., Technical Recruiter / Hiring Manager"
                  className="mt-1.5 w-full rounded-lg border border-slate-700 bg-obsidian px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-300" htmlFor="inquiry-type">
                  Opportunity Type
                </label>
                <select
                  id="inquiry-type"
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-slate-700 bg-obsidian px-3.5 py-2 text-sm text-white focus:border-sky-400 focus:outline-none"
                >
                  <option value="Full-Stack Developer Internship">Full-Stack Developer Internship</option>
                  <option value="AI / GenAI Developer Internship">AI / GenAI Developer Internship</option>
                  <option value="Software Developer Internship">Software Developer Internship</option>
                  <option value="Freelance Web Development Project">Freelance Web Development Project</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-300" htmlFor="message-body">
                  Message Note
                </label>
                <textarea
                  id="message-body"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share role details, timeline, or project scope..."
                  className="mt-1.5 w-full rounded-lg border border-slate-700 bg-obsidian px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none"
                />
              </div>

              <a
                href={composedMailto}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                <Send className="h-4 w-4" />
                <span>Launch Email to {personal.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
