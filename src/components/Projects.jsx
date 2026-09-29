function Projects() {
  const projects = [
  {
    title: "EVENTA GHANA",
    category: "Event Management Website",
    description:
      "A modern and responsive event management website designed to showcase event services and allow visitors to make booking and contact requests online.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Express",
      "Vercel",
      "Render",
    ],
    image: "/images/eventa-ghana.jpg",
    liveLink: "https://eventa-ghana.vercel.app",
    githubLink: "https://github.com/Mary12Sagoe/eventa-ghana",
  },

  {
    title: "MS Digital Hub Portfolio",
    category: "Personal Portfolio Website",
    description:
      "A professional portfolio website showcasing my skills, services, projects and experience in web development and information technology.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Vercel",
    ],
    image: "/images/portfolio-preview.jpg",
    liveLink: "#",
    githubLink: "#",
  },
];

  return (
   <section
  id="projects"
  className="py-24 px-6 bg-transparent text-white"
>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-700 font-semibold tracking-widest uppercase mb-3">
            My Work
          </p>

          <h2 className="text-[#F7B843] md:text-5xl font-bold">
            Selected Projects
          </h2>

          <p className="text-gray-100 max-w-2xl mx-auto mt-5 text-lg">
            A selection of websites and digital projects I've designed and developed.
          </p>
        </div>

        {/* Projects */}
        <div className="max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden"
            >
              {/* Project Preview */}
             <div className="w-full h-64 md:h-96 overflow-hidden group">
  <img
    src={project.image}
    alt="EVENTA GHANA website preview"
    className="w-full h-full object-cover object-top"
  />
</div>

              {/* Project Details */}
              <div className="p-8 md:p-10">
                <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2">
                {project.category}
               </p>

                 <h3 className="text-[#F7B843] font-bold mb-4">
                   {project.title}
                   </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1 bg-slate-800 text-[#F7B843] text-sm rounded-full"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-900 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-900 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;