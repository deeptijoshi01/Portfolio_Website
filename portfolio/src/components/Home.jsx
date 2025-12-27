import About from "./About";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="min-h-screen flex items-center bg-black text-white px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide">
            Hi, I’m <span className="text-accent">Deepti Joshi</span>
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl text-gray-300">
            FRONTEND | MERN | FULL STACK DEVELOPER
          </h2>

          <p className="mt-6 max-w-2xl text-gray-400 leading-relaxed">
            I build scalable and secure web applications with clean architecture,
            strong backend logic, and modern user interfaces. I enjoy working on
            real-world systems like management platforms and dashboards.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-black rounded-lg font-medium hover:opacity-90 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <About />

      {/* ================= SKILLS SECTION ================= */}
      <Skills />
    </>
  );
};

export default Home;
