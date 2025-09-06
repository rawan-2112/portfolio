import { SiPython, SiJavascript, SiHtml5, SiCss3, SiReact } from "react-icons/si";

const skills = [
  { name: "Python", icon: <SiPython className="text-yellow-500" size={28} /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" size={28} /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" size={28} /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" size={28} /> },
  { name: "React", icon: <SiReact className="text-cyan-400" size={28} /> },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#f5f0e6] px-6 md:px-12 py-12">
      <h2 className="text-3xl font-extrabold text-center text-[#3b2f2f] mb-8">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-6 flex flex-col items-center hover:scale-105 transition"
          >
            {skill.icon}
            <h3 className="mt-3 text-lg font-semibold text-[#3b2f2f]">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
