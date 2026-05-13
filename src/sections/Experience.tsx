"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TIMELINE = [
  {
    type: "work",
    role: "Data Analyst Intern & Team Lead",
    org: "Analytics Career Connect (ACC)",
    period: "Feb 2026 – Present",
    points: [
      "Leading interns to deliver high-impact data solutions with 100% data consistency across Insurance and Retail domains.",
      "Developed interactive Power BI dashboards with custom DAX measures, reducing reporting cycle by 40%.",
      "Optimised complex SQL queries using Joins and CTEs, reducing manual retrieval time by 50%.",
    ],
    accent: "var(--accent-blue)",
  },
  {
    type: "work",
    role: "Founder's Office Intern",
    org: "Analytics Career Connect (ACC)",
    period: "Feb 2026 – Present",
    points: [
      "Automating business workflows and job search data collection using Python and APIs.",
      "End-to-end market analysis of the Indian EdTech market for identifying growth opportunities.",
      "Built predictive models (Logistic Regression) achieving an 88% AUC score.",
    ],
    accent: "var(--accent-cyan)",
  },
  {
    type: "edu",
    role: "Bachelor of Commerce (B.Com)",
    org: "Delhi University",
    period: "2024 – 2027",
    points: [
      "Currently pursuing — bridging finance and technology through data analytics.",
      "Specialising in financial analysis, business intelligence, and digital marketing domains.",
      "Applying academic knowledge directly to real-world internship projects at ACC.",
    ],
    accent: "var(--accent-violet)",
  },
  {
    type: "edu",
    role: "Senior Secondary — Class 12th (CBSE)",
    org: "G.B.S.S.S No 4 Sarojini Nagar",
    period: "2022 – 2024",
    points: [
      "Completed senior secondary education under the CBSE board.",
      "Built a strong foundation in commerce and mathematics.",
    ],
    accent: "#f59e0b",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section" ref={ref} aria-label="Experience and Education">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="section-label mx-auto justify-center">Background</p>
          <h2 className="section-title">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative ml-3 flex flex-col gap-10 pl-8">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full"
            style={{
              background:
                "linear-gradient(to bottom, var(--accent-blue), var(--accent-violet), transparent)",
            }}
          />

          {TIMELINE.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as any }}
              className="relative"
            >
              {/* Dot */}
              <span
                className="absolute -left-[2.15rem] top-1.5 flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-[var(--bg-base)]"
                style={{
                  background: item.accent,
                  boxShadow: `0 0 12px ${item.accent}`,
                }}
              >
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>

              <div className="glass rounded-2xl p-6">
                {/* Type badge */}
                <span
                  className="mb-3 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
                  style={{
                    background: `color-mix(in srgb, ${item.accent} 12%, transparent)`,
                    color: item.accent,
                    border: `1px solid color-mix(in srgb, ${item.accent} 25%, transparent)`,
                  }}
                >
                  {item.type === "work" ? "💼 Work" : "🎓 Education"}
                </span>

                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3
                      className="text-lg font-bold"
                      style={{ fontFamily: "var(--font-sora)", color: "var(--text-primary)" }}
                    >
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                      {item.org}
                    </p>
                  </div>
                  <span
                    className="shrink-0 rounded-full px-3 py-1 text-xs font-medium"
                    style={{ background: "var(--bg-card)", color: "var(--text-muted)", border: "1px solid var(--border)" }}
                  >
                    {item.period}
                  </span>
                </div>

                <ul className="mt-4 flex flex-col gap-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                      <span style={{ color: item.accent, marginTop: "2px" }}>▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
