import { useState } from "react";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  setSending(true);
  setSuccess("");
  setError("");

  try {
    await emailjs.sendForm(
      "service_k1x7bha",
      "template_7v7znwi",
      e.target,
      {
        publicKey: "bTyjfeQ7ltN0iNfOJ",
      }
    );

    e.target.reset();
    setSuccess("Your message has been sent successfully!");

    setTimeout(() => {
      setSuccess("");
    }, 5000);
  } catch (err) {
    console.error("EmailJS Error:", err);
    console.error("EmailJS Error Text:", err.text);
    console.error("EmailJS Error Status:", err.status);

    setError(`EmailJS Error: ${err.text || "Unknown error"}`);
  } finally {
    // Always return the button to its normal state
    setSending(false);
  }
};

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-transparent text-white"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-950/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-400 font-semibold tracking-widest uppercase mb-3">
            Let's Connect
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Work Together
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-200">
            Have a project, business idea or technology challenge in mind?
            Get in touch and let's discuss how I can help.
          </p>
        </div>

        {/* Contact grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact information */}
          <div className="space-y-5">

            <div className="flex items-center gap-5 bg-slate-900/90 border border-slate-800 rounded-xl p-5">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                <Mail size={22} />
              </div>

              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="font-semibold">
                  maryakuasagoe@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-slate-900/90 border border-slate-800 rounded-xl p-5">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <MessageCircle size={22} />
              </div>

              <div>
                <p className="text-gray-400 text-sm">WhatsApp</p>
                <p className="font-semibold">
                  +233596358403
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-slate-900/90 border border-slate-800 rounded-xl p-5">
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                <Phone size={22} />
              </div>

              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="font-semibold">
                  +233509289706
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-slate-900/90 border border-slate-800 rounded-xl p-5">
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                <MapPin size={22} />
              </div>

              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="font-semibold">
                  Accra, Ghana
                </p>
              </div>
            </div>

          </div>

          {/* Contact form */}
          <div className="bg-slate-950/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10">

            <h3 className="text-2xl font-bold mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="title"
                  placeholder="What is your message about?"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>

              {/* Hidden time field */}
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
                readOnly
              />

              {/* Success message */}
              {success && (
                <p className="text-green-400 text-sm">
                  {success}
                </p>
              )}

              {/* Error message */}
              {error && (
                <p className="text-red-400 text-sm">
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
  type="submit"
  disabled={sending}
  className="w-full bg-blue-500 hover:bg-blue-400 disabled:bg-blue-300 text-white font-semibold py-3 rounded-lg transition duration-300"
>
  {sending ? "Sending..." : success ? "Message Sent ✓" : "Send Message"}
</button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;