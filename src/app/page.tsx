"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { EducationSection } from "@/sections/EducationSection";
import { ContactSection } from "@/sections/ContactSection";
import { CaseStudyModal } from "@/components/CaseStudyModal";
import { ConfigDrawer } from "@/components/ConfigDrawer";
import { Footer } from "@/components/Footer";
import { ProjectItem } from "@/data/portfolioData";

export default function HomePage() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [configOpen, setConfigOpen] = useState(false);

  return (
    <div className="min-h-screen bg-obsidian text-slate-200">
      <Navbar onOpenConfig={() => setConfigOpen(true)} />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection onSelectProject={(p) => setActiveProject(p)} />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
      <ConfigDrawer open={configOpen} onClose={() => setConfigOpen(false)} />
    </div>
  );
}
