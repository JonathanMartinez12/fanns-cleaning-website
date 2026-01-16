'use client';

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Professional Cleaning Services <br />
            in Tomball, Texas
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Residential & commercial cleaning you can trust. Reliable, affordable,
            and locally owned.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Our Cleaning Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Residential Cleaning",
                desc: "Routine, deep, move-in, and move-out cleaning for homes of all sizes.",
              },
              {
                title: "Commercial Cleaning",
                desc: "Professional cleaning for offices, retail spaces, and businesses.",
              },
              {
                title: "Deep Cleaning",
                desc: "Detailed top-to-bottom cleaning for kitchens, bathrooms, and high-traffic areas.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="border rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Why Choose Fann’s Cleaning?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Fann’s Cleaning Services proudly serves Tomball, TX and surrounding
            areas. We focus on reliability, attention to detail, and exceptional
            customer service — so you can enjoy a spotless space without stress.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-10">
            Request a Free Quote
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Tell us about your cleaning needs"
              rows={4}
              className="w-full border rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Request
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10 text-center text-sm">
        <p>© {new Date().getFullYear()} Fann’s Cleaning Services</p>
        <p className="mt-3">
          Website by{" "}
          <a
            href="https://nola-web-development.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            NOLA Web Development
          </a>
        </p>
      </footer>
    </main>
  );
}
