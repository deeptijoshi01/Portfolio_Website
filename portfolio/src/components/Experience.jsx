import { experience } from "../constants/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Experience
        </h2>
        <p className="text-gray-400 text-center mb-14">
          Internship and professional development experience
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-[#0b0b0b] rounded-xl border border-sky-500/20 p-6
                         hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(56,189,248,0.25)]
                         transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-12 h-12 object-contain bg-white rounded-md p-1"
                />
                <div>
                  <h3 className="text-lg font-semibold">{exp.company}</h3>
                  <p className="text-sky-400 text-sm">{exp.role}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-sky-500/10 text-sky-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-xs text-gray-500 mt-4">
                {exp.duration}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
