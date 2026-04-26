import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showHire, setShowHire] = useState(false);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="text-xl font-bold">
            <span className="text-blue-400">Fidha</span>.dev
          </h1>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-8 text-gray-300 capitalize">
            {["home", "about", "skills", "projects", "contact"].map((i) => (
              <a key={i} href={`#${i}`} className="hover:text-white transition">
                {i}
              </a>
            ))}
          </div>

          {/* HIRE ME BUTTON (NOW OPENS MODAL) */}
          <button
            onClick={() => setShowHire(true)}
            className="hidden md:block bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-2 rounded-full shadow-lg hover:scale-105 transition"
          >
            💼 Hire Me
          </button>

          {/* MOBILE MENU ICON */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden px-6 py-4 space-y-4 bg-black/90 border-t border-white/10">

            {["home", "about", "skills", "projects", "contact"].map((i) => (
              <a
                key={i}
                href={`#${i}`}
                onClick={() => setOpen(false)}
                className="block text-gray-300 hover:text-white transition capitalize"
              >
                {i}
              </a>
            ))}

            {/* MOBILE HIRE ME */}
            <button
              onClick={() => {
                setShowHire(true);
                setOpen(false);
              }}
              className="block w-full text-center mt-4 bg-purple-600 py-2 rounded-full"
            >
              💼 Hire Me
            </button>

          </div>
        )}
      </nav>

      {/* ===== HIRE ME MODAL ===== */}
      {showHire && (
        <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4">

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

            <p className="text-gray-300 text-sm leading-relaxed">
              Hi, I’m a Frontend / Full Stack Web Developer skilled in React, Node.js,
              and modern UI development.
              <br /><br />
              I build responsive web applications, e-commerce platforms, and clean UI designs.
            </p>

            <div className="mt-4 text-sm text-gray-400 space-y-2">
              <p>📌 Roles: Frontend | Full Stack | UI Developer</p>
              <p>📍 Location: Remote / On-site</p>
              <p>📧 Email: fidhasafeer6@gmail.com</p>
              <p>📱 WhatsApp: +1 226 978 3112</p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">

              <a
                href="mailto:fidhasafeer6@gmail.com"
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
    </>
  );
}