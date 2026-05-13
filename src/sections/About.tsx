"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const STRENGTHS = [
  { icon: "📊", title: "Power BI & Data Viz", desc: "Interactive dashboards, custom DAX measures, real-time reporting and visual storytelling." },
  { icon: "🗄️", title: "SQL & Python Analytics", desc: "Complex queries, CTEs, predictive modeling, EDA with Pandas, Matplotlib and Scikit-learn." },
  { icon: "🤖", title: "AI & Automation", desc: "Copilot, PandasAI, workflow automation and AI-assisted data storytelling to reduce manual work." },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section" ref={ref} aria-label="About me">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              I build things that{" "}
              <span className="gradient-text">matter</span>.
            </h2>
            <p className="mb-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Hi! I&apos;m Himanshu — an Data Analyst and freelance automation developer focused on turning raw data into actionable insights and smart workflow solutions. I work with Power BI, SQL, Python, Excel, and automation tools like n8n to build interactive dashboards, automate repetitive tasks, and improve reporting efficiency.
            </p>
            <p className="mb-8 leading-relaxed" style={{ color: "var(--text-muted)" }}>
              I enjoy solving real-world business problems through analytics, automation, and modern digital solutions. My experience includes projects related to Finance, E-commerce, HR, and Marketing analytics, where I combine data storytelling with clean and user-friendly design to create impactful digital experiences.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="btn btn-primary">Get in Touch</a>
              <a href="https://drive.google.com/file/d/1LoY28lZdeKL4yvdXzKdNN8K_GYSpuoPy/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Download CV</a>
            </div>
          </motion.div>

          {/* Strengths Grid */}
          <div className="flex flex-col gap-4">
            {STRENGTHS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="glass flex items-start gap-4 rounded-2xl p-5"
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl"
                  style={{ background: "var(--bg-card)" }}
                >
                  {item.icon}
                </span>
                <div>
                  <h3
                    className="mb-1 font-semibold"
                    style={{ fontFamily: "var(--font-sora)", color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
