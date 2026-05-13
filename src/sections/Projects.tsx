"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const PROJECTS = [
  {
    title: "Digital Music Store Data Analysis",
    desc: "Optimised revenue streams for a digital music store using PostgreSQL. Identified that the top 5% of users generate 30% of total revenue, enabling targeted retention strategies.",
    tags: ["PostgreSQL", "SQL", "Analytics"],
    outcome: "Est. 10% sales boost through targeted retention",
    accent: "var(--accent-blue)",
    emoji: "🎵",
    link: "https://github.com/amansinghsaini2005-arch/Weather-Report-Dashboard",
  },
  {
    title: "Exploratory Data Analysis with Python",
    desc: "Uncovered customer purchasing patterns using Pandas and Matplotlib. Identified a 25% underperformance in weekend sales, informing new promotional campaigns.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
    outcome: "Data foundation for weekend promo campaigns",
    accent: "var(--accent-cyan)",
    emoji: "🔍",
    link: "https://github.com/amansinghsaini2005-arch/Loan-Report",
  },
  {
    title: "Hospital Facility Data Analytics",
    desc: "Built an end-to-end interactive Power BI solution for hospital operations, identifying key capacity issues and delivering 100% data visibility across the facility.",
    tags: ["Power BI", "SQL", "Python", "Figma"],
    outcome: "100% data visibility & operational efficiency",
    accent: "#f59e0b",
    emoji: "🏥",
    link: "https://drive.google.com/file/d/1Yrwfd2HJHtzc6Uene8WLyAESGAu3f6C4/view?usp=drive_link",
  },
  {
    title: "Sales Forecast — Time Series Analysis",
    desc: "Developed ARIMA models to forecast retail sales, identifying strong Q4 seasonal trends and enhancing inventory planning accuracy by 18%.",
    tags: ["Python", "Scikit-learn", "ARIMA", "ML", "Time Series"],
    outcome: "Inventory planning accuracy improved by 18%",
    accent: "#10b981",
    emoji: "📈",
    link: "https://github.com/amansinghsaini2005-arch/Ai-job-sql-",
  },
  {
    title: "Customer Segmentation Model",
    desc: "Applied K-Means clustering and PCA to segment customers into 3 distinct persona clusters, increasing recommendation CTR by 22%.",
    tags: ["Python", "K-Means", "PCA", "ML", "Clustering"],
    outcome: "Designed strategy to increase CTR by 22%",
    accent: "#e879f9",
    emoji: "👥",
    link: "https://github.com/amansinghsaini2005-arch/cricket-analysis-dashboard-",
  },
];

function ProjectCard({ project, index, inView }: { project: typeof PROJECTS[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      className="project-card group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`Project: ${project.title}`}
    >
      {/* Top bar accent */}
      <div
        className="h-1 w-full transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, ${project.accent}, transparent)`,
          opacity: hovered ? 1 : 0.4,
        }}
      />

      <div className="flex flex-1 flex-col p-6">
        {/* Icon + title */}
        <div className="mb-4 flex items-start justify-between">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
            style={{ background: "var(--bg-surface)" }}
          >
            {project.emoji}
          </span>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-full text-sm transition"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
              color: "var(--text-muted)",
            }}
            animate={{ rotate: hovered ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            aria-label={`Open ${project.title}`}
          >
            →
          </motion.a>
        </div>

        <h3
          className="mb-2 text-lg font-bold"
          style={{ fontFamily: "var(--font-sora)", color: "var(--text-primary)" }}
        >
          {project.title}
        </h3>

        <p className="mb-4 flex-1 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {project.desc}
        </p>

        {/* Outcome pill */}
        <div
          className="mb-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
          style={{
            background: `color-mix(in srgb, ${project.accent} 12%, transparent)`,
            border: `1px solid color-mix(in srgb, ${project.accent} 30%, transparent)`,
            color: project.accent,
          }}
        >
          ✓ {project.outcome}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-2.5 py-0.5 text-xs"
              style={{
                background: "var(--bg-surface)",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section" ref={ref} aria-label="Projects">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="section-label mx-auto justify-center">Portfolio</p>
          <h2 className="section-title">
            Selected <span className="gradient-text">Projects</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-base" style={{ color: "var(--text-muted)" }}>
            Real-world projects with measurable outcomes — from data pipelines to production web apps.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
