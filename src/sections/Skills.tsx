"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SKILL_SECTIONS = [
  {
    title: "Data Analytics & Business Intelligence",
    icon: "📊",
    color: "var(--accent-blue)",
    skills: [
      "Power BI",
      "Tableau",
      "Looker Studio",
      "Excel",
      "Google Sheets",
      "Dashboard Development",
      "KPI Reporting",
      "Business Intelligence",
      "Data Visualization"
    ]
  },
  {
    title: "Python, SQL & Data Engineering",
    icon: "🐍",
    color: "var(--accent-cyan)",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "MySQL",
      "PostgreSQL",
      "SQL",
      "Data Cleaning",
      "EDA"
    ]
  },
  {
    title: "AI, Automation & Workflow Systems",
    icon: "🤖",
    color: "#f59e0b",
    skills: [
      "n8n",
      "Power Automate",
      "OpenAI",
      "Claude AI",
      "Codex",
      "Prompt Engineering",
      "API Integrations",
      "Automation Workflows",
      "Process Automation"
    ]
  },
  {
    title: "Business Domains & Creative Tools",
    icon: "🚀",
    color: "var(--accent-violet)",
    skills: [
      "Financial Analysis",
      "HR Analytics",
      "E-commerce Analytics",
      "Marketing Analytics",
      "Figma",
      "UI/UX Design",
      "Business Reporting",
      "Risk Assessment",
      "Visual Storytelling"
    ]
  }
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section" ref={ref} aria-label="Skills">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="section-label mx-auto justify-center">Tech Stack</p>
          <h2 className="section-title">
            Tools I <span className="gradient-text">work with</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-base" style={{ color: "var(--text-muted)" }}>
            A curated set of technologies I use to analyse data, ship automation, and build products.
          </p>
        </motion.div>

        {/* Groups */}
        <div className="grid gap-6 sm:grid-cols-2">
          {SKILL_SECTIONS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: gi * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
              className="glass rounded-2xl p-6"
            >
              {/* Category label */}
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xl">{group.icon}</span>
                <span
                  className="text-sm font-bold tracking-tight"
                  style={{ color: group.color }}
                >
                  {group.title}
                </span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.35, delay: gi * 0.1 + si * 0.04 }}
                    className="skill-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { number: "15+", label: "Projects Completed" },
            { number: "8+", label: "Dashboards Built" },
            { number: "10+", label: "Automation Workflows" },
            { number: "100K+", label: "Rows Analyzed" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-5 text-center"
            >
              <p
                className="mb-1 text-3xl font-extrabold"
                style={{ fontFamily: "var(--font-sora)", color: "var(--accent-blue)" }}
              >
                {stat.number}
              </p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
