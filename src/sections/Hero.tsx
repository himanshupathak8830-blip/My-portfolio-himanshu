"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/himanshupathak8830-blip", icon: "⬡" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/himanshu-pathak-33680b340", icon: "in" },
  { label: "Email", href: "mailto:himanshu.data.acc@gmail.com", icon: "✉" },
];

export default function Hero() {
  const cursorRef = useRef<HTMLDivElement>(null);

  // Subtle cursor glow
  useEffect(() => {
    const section = document.getElementById("hero");
    const cursor = cursorRef.current;
    if (!section || !cursor) return;

    const move = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      cursor.style.transform = `translate(${x - 160}px, ${y - 160}px)`;
    };

    section.addEventListener("mousemove", move);
    return () => section.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center"
      aria-label="Hero section"
    >
      {/* Aurora */}
      <div className="aurora-wrap">
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <div className="aurora aurora-3" />
        <div className="grid-overlay" />
      </div>

      {/* Cursor glow */}
      <div
        ref={cursorRef}
        className="pointer-events-none absolute h-80 w-80 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle, rgba(79,142,247,0.12) 0%, transparent 65%)",
          filter: "blur(40px)",
          willChange: "transform",
          transition: "transform 0.08s linear",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-24 pt-36">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="visible"
          className="mb-6 inline-flex items-center gap-2"
        >
          <span
            className="rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase"
            style={{
              background: "var(--accent-glow)",
              border: "1px solid var(--border-hover)",
              color: "var(--accent-blue)",
            }}
          >
            Available for hire · 2026
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="visible"
          className="mb-3 text-5xl font-extrabold leading-none tracking-tight md:text-7xl lg:text-8xl"
          style={{ fontFamily: "var(--font-sora)", color: "var(--text-primary)" }}
        >
          Himanshu{" "}
          <span className="gradient-text">Pathak</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="visible"
          className="mb-4 text-xl font-medium md:text-2xl"
          style={{ color: "var(--text-muted)" }}
        >
          Data Analyst · Power BI Developer · Workflow Automation Builder
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="visible"
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed md:text-lg"
          style={{ color: "var(--text-muted)" }}
        >
          I turn raw data into actionable insight and build automation systems
          that actually work — packaged in clean, premium digital experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects" className="btn btn-primary">
            View Projects →
          </a>
          <a href="#contact" className="btn btn-outline">
            Hire Me
          </a>
          <a
            href="https://drive.google.com/file/d/1LoY28lZdeKL4yvdXzKdNN8K_GYSpuoPy/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            aria-label="View Resume"
          >
            ↓ Resume
          </a>
        </motion.div>

        {/* Social proof row */}
        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          animate="visible"
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
        >
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center gap-2 text-sm font-medium transition-all duration-200 hover:opacity-100"
              style={{ color: "var(--text-muted)", opacity: 0.7 }}
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full text-xs"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                {icon}
              </span>
              {label}
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1"
            style={{ color: "var(--text-faint)" }}
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <span style={{ fontSize: "1.2rem" }}>↓</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
