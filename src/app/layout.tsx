import type { Metadata } from "next";
import "@/styles/globals.css";
import { portfolioData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} — ${portfolioData.personal.title}`,
  description: portfolioData.personal.supportingDescription,
  keywords: [
    "Chandru",
    "Full-Stack Developer",
    "AI & ML Undergraduate",
    "Freelance Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Generative AI",
    "RAG Systems",
    "Tamil Nadu",
    "B.S. Abdur Rahman Crescent Institute of Science & Technology"
  ],
  authors: [{ name: portfolioData.personal.name, url: portfolioData.personal.linkedin }],
  openGraph: {
    title: `${portfolioData.personal.name} — ${portfolioData.personal.title}`,
    description: portfolioData.personal.supportingDescription,
    type: "website",
    locale: "en_IN"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-obsidian text-slate-200 antialiased selection:bg-sky-500/25 selection:text-white">
        {children}
      </body>
    </html>
  );
}
