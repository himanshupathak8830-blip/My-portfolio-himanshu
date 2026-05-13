"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client-side validation
    if (!form.name || !form.email || !form.message) {
      alert("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setFormState("sending");

    const payload = {
      your_name: form.name,
      email_address: form.email,
      message: form.message,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setFormState("success");
        setForm({ name: "", email: "", message: "" });
        alert("Message sent successfully!");
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormState("error");
      alert("Failed to send message. Please try again.");
    }
  };

  const CONTACTS = [
    { label: "Email", value: "himanshu.data.acc@gmail.com", href: "mailto:himanshu.data.acc@gmail.com", icon: "✉" },
    { label: "LinkedIn", value: "linkedin.com/in/himanshu-pathak-33680b340", href: "https://www.linkedin.com/in/himanshu-pathak-33680b340", icon: "in" },
    { label: "GitHub", value: "github.com/himanshupathak8830-blip", href: "https://github.com/himanshupathak8830-blip", icon: "⬡" },
  ];

  return (
    <section id="contact" className="section" ref={ref} aria-label="Contact">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="section-label mx-auto justify-center">Contact</p>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-base" style={{ color: "var(--text-muted)" }}>
            Available for freelance, contract, and full-time opportunities. Drop me a message — I reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            {CONTACTS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:border-[var(--border-hover)]"
                style={{ textDecoration: "none" }}
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg font-bold transition duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, var(--accent-blue), var(--accent-violet))",
                    color: "#fff",
                  }}
                >
                  {c.icon}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                    {c.label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    {c.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Availability badge */}
            <div
              className="mt-2 flex items-center gap-3 rounded-2xl p-5"
              style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)" }}
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </span>
              <p className="text-sm font-medium" style={{ color: "#4ade80" }}>
                Available for new projects — May 2026
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="glass flex h-full flex-col items-center justify-center gap-4 rounded-2xl p-10 text-center"
              >
                <span className="text-5xl">🎉</span>
                <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>
                  Message Sent!
                </h3>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setFormState("idle"); setForm({ name: "", email: "", message: "" }); }}
                  className="btn btn-outline mt-2"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass flex flex-col gap-4 rounded-2xl p-6"
                noValidate
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Himanshu Pathak"
                      className="form-field"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="form-field"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Hi Himanshu, I'd love to discuss a project..."
                    className="form-field resize-none"
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="btn btn-primary w-full justify-center"
                  aria-busy={formState === "sending"}
                >
                  {formState === "sending" ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        style={{ display: "inline-block" }}
                      >
                        ↻
                      </motion.span>
                      Sending…
                    </span>
                  ) : (
                    "Send Message →"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
