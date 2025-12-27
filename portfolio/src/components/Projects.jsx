import { projects } from "../constants/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-black text-white px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Projects
        </h2>
        <p className="text-gray-400 text-center mb-14">
          Some of the real-world applications I have built
        </p>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-[#0b0b0b]
                rounded-xl
                overflow-hidden
                border border-sky-500/20
                hover:-translate-y-2
                hover:shadow-[0_20px_40px_rgba(56,189,248,0.35)]
                transition-all duration-300
              "
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        text-xs
                        px-3 py-1
                        rounded-full
                        bg-sky-500/10
                        text-sky-400
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sky-400 hover:text-sky-300 text-sm font-medium"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
