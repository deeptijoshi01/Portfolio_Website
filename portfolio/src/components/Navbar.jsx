import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-sky-500/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-xl font-bold text-white">
          Deepti<span className="text-sky-400">.</span>
        </h1>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden md:flex items-center gap-8 text-white">
          <li>
            <a href="#home" className="hover:text-sky-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-sky-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-sky-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-sky-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-sky-400 transition">
              Experience
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-sky-400 transition">
              Contact
            </a>
          </li>

          {/* SOCIAL ICONS */}
          <li className="flex gap-4 ml-4">
            <a
              href="https://github.com/deeptijoshi01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-sky-400 transition text-lg"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/deepti-joshi-23434724b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-sky-400 transition text-lg"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="md:hidden text-white text-xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden bg-black border-t border-sky-500/20">
          <ul className="flex flex-col items-center gap-6 py-6 text-white">
            <li>
              <a href="#home" onClick={() => setOpen(false)}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={() => setOpen(false)}>
                About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={() => setOpen(false)}>
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" onClick={() => setOpen(false)}>
                Projects
              </a>
            </li>

            <li>
              <a href="#experience" onClick={() => setOpen(false)}>
                Experience
              </a>
            </li>

            <li>
              <a href="#contact" onClick={() => setOpen(false)}>
                Contact
              </a>
            </li>

            <div className="flex gap-6 mt-4">
              <a
                href="https://github.com/deeptijoshi01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-sky-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/deepti-joshi-23434724b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-sky-400"
              >
                <FaLinkedin />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
