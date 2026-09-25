function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 px-6 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              MS Digital Hub<span className="text-blue-400">.</span>
            </h2>

            <p className="text-white-700 mt-4 max-w-sm leading-relaxed">
              IT professional and web developer creating practical
              digital and technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <a href="#home" className="text-white-700 hover:text-blue-700 transition">
                Home
              </a>

              <a href="#about" className="text-white-700 hover:text-blue-700 transition">
                About
              </a>

              <a href="#services" className="text-white-700 hover:text-blue-700 transition">
                Services
              </a>

              <a href="#projects" className="text-white-700 hover:text-blue-700 transition">
                Projects
              </a>

              <a href="#contact" className="text-white-700 hover:text-blue-700 transition">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Let's Connect
            </h3>

            <p className="text-white-700 mb-3">
              Accra, Ghana
            </p>

            <p className="text-white-700 mb-3">
              maryakuasagoe@gmail.com
            </p>

            <p className="text-white-700">
              +233 509289706
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center">
          <p className="text-white-700 text-sm">
           © {currentYear} MS Digital Hub.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;