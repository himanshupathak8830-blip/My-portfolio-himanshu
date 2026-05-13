"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const THEMES = [
  { id: "midnight", label: "M" },
  { id: "ocean", label: "O" },
  { id: "violet", label: "V" },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeId>("midnight");

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracker
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Theme toggle
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as ThemeId | null;
    if (saved && THEMES.some((t) => t.id === saved)) setTheme(saved);
  }, []);

  const cycleTheme = () => {
    const idx = THEMES.findIndex((t) => t.id === theme);
    setTheme(THEMES[(idx + 1) % THEMES.length].id);
  };

  return (
    <>
      <header
        className={`navbar${scrolled ? " scrolled" : ""}`}
        role="banner"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-lg font-bold tracking-tight"
            style={{ fontFamily: "var(--font-sora)" }}
            aria-label="Himanshu Pathak – Home"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-blue), var(--accent-violet))",
              }}
            >
              H
            </span>
            <span className="hidden sm:block" style={{ color: "var(--text-primary)" }}>
              Himanshu
            </span>
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = active === href;
              return (
                <a
                  key={href}
                  href={href}
                  className="relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200"
                  style={{
                    color: isActive ? "var(--accent-blue)" : "var(--text-muted)",
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "var(--accent-glow)", border: "1px solid var(--border-hover)" }}
                      transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            {/* Theme Cycler */}
            <button
              onClick={cycleTheme}
              title="Cycle theme"
              aria-label="Toggle color theme"
              className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--accent-blue)",
              }}
            >
              ◐
            </button>

            {/* Hire Me CTA */}
            <a href="#contact" className="btn btn-primary hidden md:inline-flex" style={{ padding: "9px 22px", fontSize: "0.82rem" }}>
              Hire Me
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="flex h-9 w-9 md:hidden items-center justify-center rounded-full"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <span style={{ fontSize: "1.1rem" }}>{menuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed left-4 right-4 top-20 z-50 rounded-2xl p-4"
            style={{
              background: "rgba(13,20,36,0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid var(--border)",
            }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium transition"
                style={{
                  color: active === href ? "var(--accent-blue)" : "var(--text-muted)",
                  background: active === href ? "var(--accent-glow)" : "transparent",
                }}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn btn-primary mt-3 w-full justify-center"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
