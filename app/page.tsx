'use client';

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white py-32 overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
            ✨ Premium Cleaning Services in Tomball, TX
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Pristine Spaces.<br />
            <span className="text-blue-200">Exceptional Service.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed text-blue-50">
            Transform your home or business with our professional cleaning services.
            Trusted by Tomball residents for spotless results every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-10 py-5 rounded-xl shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
            >
              Get Your Free Quote
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-10 py-5 rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              View Services
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">500+</div>
              <div className="text-blue-100 text-sm">Happy Clients</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-4xl font-bold mb-1">10+</div>
              <div className="text-blue-100 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">100%</div>
              <div className="text-blue-100 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              WHAT WE OFFER
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Premium Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive cleaning solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏠",
                title: "Residential Cleaning",
                desc: "Transform your home into a sparkling sanctuary with our thorough residential cleaning services.",
                features: ["Routine Maintenance", "Deep Cleaning", "Move-In/Move-Out", "Custom Schedules"]
              },
              {
                icon: "🏢",
                title: "Commercial Cleaning",
                desc: "Keep your business looking professional with our reliable commercial cleaning solutions.",
                features: ["Office Spaces", "Retail Stores", "Medical Facilities", "After-Hours Service"]
              },
              {
                icon: "✨",
                title: "Deep Cleaning",
                desc: "Intensive cleaning that reaches every corner, perfect for seasonal refreshes or special occasions.",
                features: ["Kitchen & Bathrooms", "Carpet Cleaning", "Window Washing", "Detailed Sanitization"]
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group relative bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-blue-600">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a href="#contact" className="inline-flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    Learn More
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Why Choose Fann's Cleaning?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by Tomball residents and businesses for our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Attention to Detail",
                desc: "Every corner, every surface cleaned to perfection"
              },
              {
                icon: "⚡",
                title: "Reliable Service",
                desc: "On-time, every time with consistent quality"
              },
              {
                icon: "💎",
                title: "Premium Products",
                desc: "Eco-friendly, professional-grade supplies"
              },
              {
                icon: "🤝",
                title: "Customer First",
                desc: "100% satisfaction guaranteed or we make it right"
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Proudly Serving Tomball, TX</h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              As a locally owned business, we understand the unique needs of our community.
              We're not just cleaning homes and offices—we're building lasting relationships.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Homeowner",
                text: "Fann's Cleaning transformed my home! Their attention to detail is unmatched. I've tried other services, but nothing compares.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Business Owner",
                text: "Professional, reliable, and thorough. They keep our office spotless and our team loves coming to work in such a clean environment.",
                rating: 5
              },
              {
                name: "Jennifer Williams",
                role: "Property Manager",
                text: "I recommend Fann's to all my tenants. They're consistently excellent and make move-in/move-out cleanings stress-free.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              GET IN TOUCH
            </div>
            <h2 className="text-5xl font-bold mb-6">
              Ready for a Spotless Space?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours with a free, no-obligation quote
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Type
                  </label>
                  <select className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                    <option>Residential Cleaning</option>
                    <option>Commercial Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Move-In/Move-Out</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell Us About Your Needs *
                </label>
                <textarea
                  placeholder="Please describe your cleaning needs, property size, and any specific requirements..."
                  rows={5}
                  className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Your Free Quote →
              </button>

              <p className="text-center text-sm text-gray-500">
                By submitting this form, you agree to receive communications from Fann's Cleaning Services
              </p>
            </form>
          </div>

          {/* Contact info */}
          <div className="mt-12 text-center">
            <p className="text-blue-100 mb-4">Or reach us directly:</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-lg">
              <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-blue-200 transition">
                📞 (555) 123-4567
              </a>
              <span className="hidden sm:inline text-blue-300">•</span>
              <a href="mailto:info@fannscleaning.com" className="flex items-center gap-2 hover:text-blue-200 transition">
                ✉️ info@fannscleaning.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Fann's Cleaning</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Professional cleaning services for homes and businesses in Tomball, TX.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition">
                  f
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition">
                  in
                </a>
                <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition">
                  ✉
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-white transition">Our Services</a></li>
                <li><a href="#contact" className="hover:text-white transition">Get a Quote</a></li>
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span>📍</span>
                  <span>Tomball, TX 77375</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+15551234567" className="hover:text-white transition">(555) 123-4567</a>
                </li>
                <li className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:info@fannscleaning.com" className="hover:text-white transition">info@fannscleaning.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p className="mb-2">© {new Date().getFullYear()} Fann's Cleaning Services. All rights reserved.</p>
            <p className="text-gray-500">
              Website crafted by{" "}
              <a
                href="https://nola-web-development.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                NOLA Web Development
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
