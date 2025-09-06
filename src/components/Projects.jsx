const projects = [
  {
    title: "Quality Prediction",
    desc: "EDA & classification on apple quality data using Decision Tree & Random Forest.",
    link: "https://colab.research.google.com/drive/1qxM6ywwkOPiAxJh7UrB-BJGz6x1mJ1tc?usp=sharing",
  },
  {
    title: "Regression Models",
    desc: "Linear Regression & Random Forest Regressor to predict apple quality scores.",
    link: "https://colab.research.google.com/drive/1s4K3ZIaEJaK-L8KNT_bVhdfdTyaS6YDU?usp=sharing",
  },
  {
    title: "Network Timetable",
    desc: "Graph coloring algorithm to create an exam timetable schedule.",
    link: "https://colab.research.google.com/drive/1xbCYlCo2HJjsKVqZ2Dym6X2D7mow5aB3?usp=sharing",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#f5f0e6] px-6 md:px-12 py-12">
      <h2 className="text-3xl font-extrabold text-center text-[#3b2f2f] mb-10">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col"
          >
            <h3 className="text-xl font-bold mb-3 text-[#3b2f2f]">
              {project.title}
            </h3>
            <p className="text-[#5a4d4d] flex-grow text-sm md:text-base">
              {project.desc}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block bg-[#3b2f2f] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#2a1f1f] transition"
            >
              View on Colab
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
