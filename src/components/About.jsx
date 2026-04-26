export default function About() {
  return (
    <section id="about" className="py-32 px-6 text-center">

      {/* TITLE */}
      <h2 className="text-4xl font-bold">
        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
      </h2>

      {/* DESCRIPTION */}
      <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
        I am a passionate web developer focused on building modern, responsive,
        and scalable web applications using React and modern web technologies.
        I enjoy creating clean UI designs and smooth user experiences.
      </p>

      {/* QUALIFICATION SECTION */}
      <div className="mt-14 max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">

        <h3 className="text-xl font-semibold text-white mb-4">
          🎓 Qualification
        </h3>

        <p className="text-gray-300">
          Postgraduate Diploma in Web Development<br />
          <span className="text-gray-400">
            Conestoga College, Canada
          </span>
        </p>

        

        <p className="text-gray-300 ">
          Bachelor’s Degree in Computer Applications (BCA) <br />
          <span className="text-gray-400">
            Pondicherry University, India 
          </span>
        </p>

       

      </div>

      {/* HIGHLIGHT CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mt-14 max-w-5xl mx-auto">

        <div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition">
          💻 Development
        </div>

        <div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition">
          🎨 UI/UX Design
        </div>

        <div className="bg-white/5 p-6 rounded-xl hover:scale-105 transition">
          ⚡ Performance
        </div>

      </div>

    </section>
  );
}