import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot";
import Particles from "./components/Particles";

export default function App() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [smooth, setSmooth] = useState({ x: 0, y: 0 });

  // track mouse
  useEffect(() => {
    const move = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // smooth cursor glow
  useEffect(() => {
    const animate = () => {
      setSmooth((prev) => ({
        x: prev.x + (cursor.x - prev.x) * 0.08,
        y: prev.y + (cursor.y - prev.y) * 0.08,
      }));

      requestAnimationFrame(animate);
    };

    animate();
  }, [cursor]);

  return (
    <div className="relative bg-black text-white overflow-hidden scroll-smooth">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-30 bg-gradient-to-br from-black via-slate-950 to-black" />

      {/* PARTICLES */}
      <Particles />

      {/* CURSOR GLOW */}
      <div
        className="fixed w-72 h-72 bg-purple-500/20 blur-3xl pointer-events-none z-20"
        style={{
          left: smooth.x - 150,
          top: smooth.y - 150,
        }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-30">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Chatbot />
      </div>

    </div>
  );
}