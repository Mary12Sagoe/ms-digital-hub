function About() {
  return (
    <section
  id="about"
  className="py-24 px-6 bg-transparent text-white"
>
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold tracking-widest uppercase mb-3">
            About Me
          </p>

          <h2 className="text-[#F7B843] md:text-5xl font-bold">
            Technology, Creativity & Practical Solutions
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-1 gap-12 items-center">

          <div>
            <p className="text-gray-100 text-lg leading-relaxed mb-6">
  I am an Information Technology professional with experience and
  interest in web development, graphic design, networking,
  communication systems and technology solutions.
</p>

<p className="text-gray-100 text-lg leading-relaxed mb-6">
  I enjoy creating practical digital solutions that help businesses
  improve their online presence, strengthen their technology
  infrastructure and solve everyday technical challenges.
</p>

<p className="text-gray-100 text-lg leading-relaxed">
  My approach is simple: understand the problem, develop a practical
  solution, and ensure that the final result is reliable, responsive
  and easy to use.
</p>
          </div>

          {/* Skills */}
<div className="grid sm:grid-cols-2 gap-6">

  {/* Web Development */}
  <div className="group bg-slate-950/75 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:border-blue-400 transition duration-300">
    <h3 className="text-[#F7B843] font-bold mb-3 group-hover:text-blue-400 transition">
      Web Development
    </h3>
    <p className="text-blue-700 leading-relaxed">
      React, JavaScript, Tailwind CSS and responsive web design.
    </p>
  </div>

  {/* Graphic Design */}
  <div className="group bg-slate-950/75 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:border-blue-400 transition duration-300">
    <h3 className="text-[#F7B843] font-bold mb-3 group-hover:text-blue-400 transition">
      Graphic Design
    </h3>
    <p className="text-blue-700 leading-relaxed">
      Professional flyers, presentations and visual designs.
    </p>
  </div>

  {/* IT Solutions */}
  <div className="group bg-slate-950/75 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:border-blue-400 transition duration-300">
    <h3 className="text-[#F7B843] font-bold mb-3 group-hover:text-blue-400 transition">
      IT Solutions
    </h3>
    <p className="text-blue-700 leading-relaxed">
      Practical technology solutions and technical support.
    </p>
  </div>

  {/* Networking */}
  <div className="group bg-slate-950/75 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:border-blue-400 transition duration-300">
    <h3 className="text-[#F7B843] font-bold mb-3 group-hover:text-blue-400 transition">
      Networking
    </h3>
    <p className="text-blue-700 leading-relaxed">
      Network setup, connectivity and communication systems.
    </p>
  </div>

  {/* Security Systems */}
  <div className="group bg-slate-950/75 backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:border-blue-400 transition duration-300">
    <h3 className="text-[#F7B843] font-bold mb-3 group-hover:text-blue-400 transition">
      Security Systems
    </h3>
    <p className="text-blue-700 leading-relaxed">
      CCTV installation, configuration and security technology.
    </p>
  </div>

</div>



        </div>
      </div>
    </section>
  );
}

export default About;