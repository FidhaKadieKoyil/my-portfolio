import { useState } from "react";
import heroImg from "../assets/hero.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  const [showHire, setShowHire] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-24">

      {/* ===== HIRE ME MODAL ===== */}
      {showHire && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">

          <div className="bg-black border border-white/10 rounded-xl w-full max-w-lg p-6 relative">

            {/* CLOSE */}
            <button
              onClick={() => setShowHire(false)}
              className="absolute top-3 right-3 text-white bg-red-500 px-3 py-1 rounded"
            >
              ✕
            </button>

            {/* CONTENT */}
            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              💼 Hire Me
            </h2>

            <p className="text-gray-300 leading-relaxed text-sm">
              Hi, I’m a Frontend / Full Stack Web Developer skilled in React, Node.js,
              and modern UI development.
              <br /><br />
              I build responsive web applications, e-commerce platforms, and clean UI designs
              with focus on performance and user experience.
            </p>

            <div className="mt-4 text-sm text-gray-400 space-y-2">
              <p>📌 Open to: Frontend | Full Stack | UI Developer roles</p>
              <p>📍 Location: Remote / On-site</p>
              <p>📧 Email: fidha@example.com</p>
              <p>📱 WhatsApp: +1 226 978 3112</p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">

              <a
                href="mailto:fidha@example.com"
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-center"
              >
                📩 Email Me
              </a>

              <a
                href="https://wa.me/12269783112"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded text-center"
              >
                💬 WhatsApp
              </a>

            </div>
          </div>
        </div>
      )}

      {/* ===== HERO CONTENT ===== */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className="text-blue-400">Web Developer</p>

          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            I build modern <br />
            <span className="text-purple-400">responsive websites</span>
          </h1>

          <p className="text-gray-400 mt-4">
            I design and develop clean, user-friendly, and responsive web applications
            using modern web technologies.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">

            

            {/* DOWNLOAD RESUME */}
            <a
            href={import.meta.env.BASE_URL + "resume.pdf"}
            download
            className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition shadow-lg text-center"
>
            ⬇️ Download Resume
           </a>

          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.img
          src={heroImg}
          className="rounded-3xl w-72 md:w-96 mx-auto shadow-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />

      </div>
    </section>
  );
}