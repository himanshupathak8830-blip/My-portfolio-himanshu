import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Divider */}
      <div
        aria-hidden="true"
        style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, var(--border), transparent)",
          margin: "0 auto",
          maxWidth: "72rem",
        }}
      />

      <About />

      <div aria-hidden="true" style={{ height: "1px", background: "linear-gradient(to right, transparent, var(--border), transparent)", margin: "0 auto", maxWidth: "72rem" }} />

      <Skills />

      <div aria-hidden="true" style={{ height: "1px", background: "linear-gradient(to right, transparent, var(--border), transparent)", margin: "0 auto", maxWidth: "72rem" }} />

      <Projects />

      <div aria-hidden="true" style={{ height: "1px", background: "linear-gradient(to right, transparent, var(--border), transparent)", margin: "0 auto", maxWidth: "72rem" }} />

      <Experience />

      <div aria-hidden="true" style={{ height: "1px", background: "linear-gradient(to right, transparent, var(--border), transparent)", margin: "0 auto", maxWidth: "72rem" }} />

      <Contact />

      <Footer />
    </>
  );
}
