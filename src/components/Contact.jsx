import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 text-center relative">

      {/* TITLE */}
      <h2 className="text-4xl font-bold">
        Contact{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Me
        </span>
      </h2>

      {/* DESCRIPTION */}
      <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
        I’m open to opportunities, collaborations, and freelance work.
        Feel free to connect with me through any platform below.
      </p>

      {/* MAIN CARD */}
      <div className="mt-12 max-w-xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-lg">

        {/* EMAIL */}
        <div className="flex items-center justify-center gap-3 text-gray-300 mb-8">
          <FaEnvelope className="text-purple-400 text-lg" />
          <span className="text-white font-medium">
            fidhasafeer6@gmail.com
          </span>
        </div>

        {/* SOCIAL LINKS */}
        <div className="space-y-4">

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/fidhakoyil"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 py-3 rounded-xl border border-white/10 bg-white/5 
            hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 group"
          >
            <FaLinkedin className="text-blue-400 text-xl group-hover:scale-110 transition" />
            <span className="text-gray-300 group-hover:text-white">
              LinkedIn
            </span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/FidhaKadieKoyil"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 py-3 rounded-xl border border-white/10 bg-white/5 
            hover:bg-gray-500/10 hover:border-gray-300 transition-all duration-300 group"
          >
            <FaGithub className="text-gray-300 text-xl group-hover:scale-110 transition" />
            <span className="text-gray-300 group-hover:text-white">
              GitHub
            </span>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/fi_fidha"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 py-3 rounded-xl border border-white/10 bg-white/5 
            hover:bg-pink-500/10 hover:border-pink-400 transition-all duration-300 group"
          >
            <FaInstagram className="text-pink-400 text-xl group-hover:scale-110 transition" />
            <span className="text-gray-300 group-hover:text-white">
              Instagram
            </span>
          </a>

        </div>
      </div>

      {/* FOOTER NOTE */}
      <p className="text-gray-500 text-sm mt-10">
        Available for internships • freelance • full-time roles
      </p>

    </section>
  );
}