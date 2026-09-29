function Services() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Modern, responsive websites designed to help businesses establish a strong online presence.",
    },
    {
      number: "02",
      title: "Website Design",
      description:
        "Clean and professional interfaces that provide a simple and enjoyable experience on phones and computers.",
    },
    {
      number: "03",
      title: "Graphic Design",
      description:
  "Professional flyers, presentations and visual designs that help businesses communicate their ideas clearly.",
    },
    {
      number: "04",
      title: "IT Support",
      description:
        "Practical technical support and troubleshooting to keep systems and technology working properly.",
    },
    {
      number: "05",
      title: "Networking",
      description:
        "Network setup, connectivity solutions and communication infrastructure for businesses.",
    },
    {
      number: "06",
      title: "CCTV & Security",
      description:
        "Installation and configuration support for CCTV and other electronic security systems.",
    },
    {
      number: "07",
      title: "Communication Systems",
      description:
  "Installation, configuration and support for communication equipment and systems used in business and industrial environments.",
    },
  ];

  return (
    <section
  id="services"
  className="py-24 px-6 bg-transparent text-white"
>
    
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-700 font-semibold tracking-widest uppercase mb-3">
            What I Do
          </p>

          <h2 className="text-[#F7B843] md:text-5xl font-bold">
            My Services
          </h2>

          <p className="text-gray-100 max-w-2xl mx-auto mt-5 text-lg">
            Technology services focused on practical, reliable and
            professional solutions.
          </p>
        </div>

        {/* Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="group bg-slate-950/75 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-blue-400 transition duration-300"
            >
              <span className="text-blue-400 font-bold text-sm">
                {service.number}
              </span>

              <h3 className="text-[#F7B843] font-bold mt-4 mb-4 group-hover:text-blue-400 transition">
                {service.title}
              </h3>

              <p className="text-blue-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;