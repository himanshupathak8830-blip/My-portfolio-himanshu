"use client";

import { motion } from "framer-motion";

const SOCIAL = [
  { label: "GitHub", href: "https://github.com/himanshu-pathak", icon: "⬡" },
  { label: "LinkedIn", href: "https://linkedin.com/in/himanshu-pathak", icon: "in" },
  { label: "Email", href: "mailto:himanshu.data.acc@gmail.com", icon: "✉" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      role="contentinfo"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-surface)",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
        {/* Brand */}
        <div>
          <p
            className="text-base font-bold"
            style={{ fontFamily: "var(--font-sora)", color: "var(--text-primary)" }}
          >
            Himanshu Pathak
          </p>
          <p className="mt-0.5 text-xs" style={{ color: "var(--text-muted)" }}>
            Data Analyst · Automation Engineer · Creative Developer
          </p>
        </div>

        {/* Copyright */}
        <p className="text-xs" style={{ color: "var(--text-faint)" }}>
          © {year} Himanshu Pathak. Built with Next.js + Framer Motion.
        </p>

        {/* Social + Back to Top */}
        <div className="flex items-center gap-3">
          {SOCIAL.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full text-sm transition-all duration-200 hover:scale-110"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
              }}
            >
              {icon}
            </a>
          ))}

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-9 w-9 items-center justify-center rounded-full text-sm"
            style={{
              background: "linear-gradient(135deg, var(--accent-blue), var(--accent-violet))",
              color: "#fff",
            }}
            aria-label="Back to top"
          >
            ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
