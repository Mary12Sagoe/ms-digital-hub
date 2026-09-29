function Hero() {
  return (
   <section
  id="home"
  className="relative z-[100] min-h-screen bg-cover bg-center bg-no-repeat text-white flex items-center"
  style={{
    backgroundImage: "url('/images/hero-background.jpg')",
  }}
>
      
    
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center px-4 sm:px-6">

        {/* Text */}
        <div className="hero-text min-w-0">
          <p className="text-[#F7B843] font-semibold tracking-widest uppercase mb-4">
            IT Professional & Web Developer
          </p>

          <h1 className=" md:text-[#F7B843] font-bold leading-tight">
            Welcome to
            <br />
            <span className="text-blue-600">MS Digital Hub</span>
          </h1>

          <p className="text-gray-200 text-lg md:text-xl mt-6 max-w-xl leading-relaxed">
            I create modern, responsive websites and provide practical
            technology solutions for businesses and organizations.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="border border-slate-600 hover:border-blue-600 hover:text-blue-400 hover:-translate-y-1 text-[#F7B843] font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              View My Projects
            </a>

            <a
              href="#contact"
              className="border border-slate-600 hover:border-blue-600 hover:text-blue-400 hover:-translate-y-1 text-[#F7B843] font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Professional Visual */}
        <div className="hero-visual flex justify-center md:justify-end w-full min-w-0">
           <div className="w-78 h-84 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-2xl">

            <div className="text-center">

              <div className="w-27 h-27 mx-auto rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center">
                <span className="text-5xl font-bold text-[#F7B843]">
                  MS
                </span>
              </div>

              <h2 className="text-blue-600 font-bold mt-8">
                MS Digital Hub
              </h2>

              <p className="text-[#F7B843] font-medium mt-2">
                IT Professional & Web Developer
              </p>

              <p className="text-gray-300 mt-5 leading-relaxed">
                Web development • IT solutions • Networking
                • Graphic design
              </p>

              <div className="mt-8 flex justify-center gap-3 flex-wrap">
                <span className="px-4 py-2 rounded-full bg-slate-900/70 text-[#F7B843] text-sm">
                  React
                </span>

                <span className="px-4 py-2 rounded-full bg-slate-900/70 text-[#F7B843] text-sm">
                  JavaScript
                </span>

                <span className="px-4 py-2 rounded-full bg-slate-900/70 text-[#F7B843] text-sm">
                  IT
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;