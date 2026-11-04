# Chandru — Developer Portfolio (Next.js + TypeScript + Tailwind CSS)

Production-ready developer portfolio for **Chandru** (`Full-Stack Developer | AI & ML Undergraduate | Freelance Developer`), B.Tech Artificial Intelligence and Machine Learning undergraduate at **B.S. Abdur Rahman Crescent Institute of Science & Technology** (Expected Graduation: 2029).

## Architecture & Directory Structure

```
src/
  app/
    layout.tsx                 # Root layout, SEO & OpenGraph metadata
    page.tsx                   # Main portfolio page assembling all sections
    projects/[slug]/page.tsx   # Dedicated static route for each project case study
  components/
    Navbar.tsx                 # Responsive navigation + conditional Resume CTA
    CaseStudyModal.tsx         # 10-section expandable engineering case study view
    ConfigDrawer.tsx           # Live centralized data configuration inspector
    Footer.tsx                 # Clean footer with verified links
  sections/
    HeroSection.tsx            # Headline, availability badge, CTAs & Recruiter Quick-Scan bar
    AboutSection.tsx           # Education, full-stack, freelance & applied GenAI narrative
    ProjectsSection.tsx        # Filterable project cards with real execution screenshots
    ExperienceSection.tsx      # Independent freelance developer services & workflow
    SkillsSection.tsx          # 6 categorized skill groups with practical context
    EducationSection.tsx       # B.Tech AI & ML degree, coursework & technical training
    ContactSection.tsx         # Verified links, copy-email action & mailto composer
  data/
    portfolioData.ts           # Centralized single-source-of-truth configuration
  lib/
    utils.ts                   # Helper functions & mailto builder
  styles/
    globals.css                # Tailwind directives & reduced-motion support
public/
  images/projects/             # Real output plots & IDE screenshots from verified files
  resume/                      # Drop Chandru_Resume.pdf here and set resume.available = true
```

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build && npm start
   ```
