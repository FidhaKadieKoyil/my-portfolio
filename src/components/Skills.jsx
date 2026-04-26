import { skills } from "../data/skillsData";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 text-center">

      <h2 className="text-4xl font-bold mb-12">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {skills.map((s, i) => {
          const Icon = s.icon;

          return (
            <div key={i} className="bg-white/5 p-6 rounded-2xl hover:scale-105 transition">

              <Icon className={`text-4xl mx-auto ${s.color}`} />

              <p className="mt-4">{s.name}</p>

            </div>
          );
        })}

      </div>

    </section>
  );
}