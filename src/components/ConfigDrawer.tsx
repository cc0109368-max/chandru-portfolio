"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { X, FileCode } from "lucide-react";

interface ConfigDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function ConfigDrawer({ open, onClose }: ConfigDrawerProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Centralized Configuration Inspector"
    >
      <div className="flex h-full w-full max-w-xl flex-col border-l border-slate-800 bg-obsidian p-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <FileCode className="h-5 w-5 text-sky-400" />
            <h2 className="font-mono text-sm font-bold text-white">
              src/data/portfolioData.ts
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-700 p-1.5 text-slate-300 hover:bg-slate-800"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-slate-400">
          All portfolio details, project case studies, freelance services, and resume availability flags are centralized in a single typed configuration module for effortless updates.
        </p>

        <pre className="mt-4 flex-1 overflow-auto rounded-xl border border-slate-800 bg-charcoal p-4 font-mono text-xs text-slate-300">
          {JSON.stringify(portfolioData, null, 2)}
        </pre>
      </div>
    </div>
  );
}
