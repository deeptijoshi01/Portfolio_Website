const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

        <p className="text-gray-400 mb-8">
          Feel free to reach out for opportunities or collaboration
        </p>

        <div className="space-y-4">
          <p>Email: <span className="text-sky-400">deeptiajoshi01@gmail.com</span></p>

          <div className="flex justify-center gap-6 mt-6">
            <a
              href="/Deepti_Joshi_CV.pdf"
              download
              className="px-6 py-3 bg-sky-500 text-black rounded-lg font-medium hover:bg-sky-400 transition"
            >
              Download CV
            </a>

            <a
              href="https://www.linkedin.com/in/deepti-joshi-23434724b/"
              target="_blank"
              className="px-6 py-3 border border-sky-400 text-sky-400 rounded-lg hover:bg-sky-400 hover:text-black transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
