'use client';

import { useEffect, useState, useRef } from 'react';

// Custom hook for scroll-triggered animations
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible] as const;
}

// Counter animation hook
function useCounter(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, shouldStart]);

  return count;
}

export default function HomePage() {
  const [servicesRef, servicesVisible] = useScrollAnimation();
  const [whyUsRef, whyUsVisible] = useScrollAnimation();
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation();
  const [statsRef, statsVisible] = useScrollAnimation();

  const clientsCount = useCounter(500, 2000, statsVisible);
  const yearsCount = useCounter(10, 2000, statsVisible);
  const satisfactionCount = useCounter(100, 2000, statsVisible);

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white py-32 overflow-hidden">
        {/* Animated decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium animate-slide-down">
            ✨ Premium Cleaning Services in Tomball, TX
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight animate-slide-up">
            Pristine Spaces.<br />
            <span className="text-blue-200 bg-clip-text">Exceptional Service.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed text-blue-50 animate-slide-up animation-delay-200">
            Transform your home or business with our professional cleaning services.
            Trusted by Tomball residents for spotless results every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-10 py-5 rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 animate-float overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative">Get Your Free Quote</span>
              <span className="relative group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-10 py-5 rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              View Services
            </a>
          </div>

          {/* Trust indicators with animated counters */}
          <div ref={statsRef} className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-1">
                {statsVisible ? `${clientsCount}+` : '0+'}
              </div>
              <div className="text-blue-100 text-sm">Happy Clients</div>
            </div>
            <div className="text-center border-x border-white/20 transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-1">
                {statsVisible ? `${yearsCount}+` : '0+'}
              </div>
              <div className="text-blue-100 text-sm">Years Experience</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold mb-1">
                {statsVisible ? `${satisfactionCount}%` : '0%'}
              </div>
              <div className="text-blue-100 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4 animate-fade-in">
              WHAT WE OFFER
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Premium Cleaning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive cleaning solutions tailored to your needs
            </p>
          </div>

          <div ref={servicesRef} className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏠",
                title: "Residential Cleaning",
                desc: "Transform your home into a sparkling sanctuary with our thorough residential cleaning services.",
                features: ["Routine Maintenance", "Deep Cleaning", "Move-In/Move-Out", "Custom Schedules"],
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: "🏢",
                title: "Commercial Cleaning",
                desc: "Keep your business looking professional with our reliable commercial cleaning solutions.",
                features: ["Office Spaces", "Retail Stores", "Medical Facilities", "After-Hours Service"],
                color: "from-indigo-500 to-indigo-600"
              },
              {
                icon: "✨",
                title: "Deep Cleaning",
                desc: "Intensive cleaning that reaches every corner, perfect for seasonal refreshes or special occasions.",
                features: ["Kitchen & Bathrooms", "Carpet Cleaning", "Window Washing", "Detailed Sanitization"],
                color: "from-purple-500 to-purple-600"
              },
            ].map((service, i) => (
              <div
                key={i}
                className={`group relative bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-500 ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${i * 150}ms`,
                  transform: servicesVisible ? 'translateY(0)' : 'translateY(40px)'
                }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>

                <div className="relative">
                  <div className="text-5xl mb-6 inline-block group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 group-hover:translate-x-1 transition-transform" style={{ transitionDelay: `${idx * 50}ms` }}>
                        <span className="text-blue-600 font-bold">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Why Choose Fann's Cleaning?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trusted by Tomball residents and businesses for our commitment to excellence
            </p>
          </div>

          <div ref={whyUsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div
                key={i}
                className={`text-center group cursor-default transition-all duration-500 ${
                  whyUsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-5xl mb-4 inline-block group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300 animate-bounce-slow">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className={`mt-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden transition-all duration-700 ${
            whyUsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
            </div>
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4">Proudly Serving Tomball, TX</h3>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                As a locally owned business, we understand the unique needs of our community.
                We're not just cleaning homes and offices—we're building lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div ref={testimonialsRef} className="grid md:grid-cols-3 gap-8">
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
              <div
                key={i}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  testimonialsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{
                  transitionDelay: `${i * 150}ms`
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <span
                      key={idx}
                      className="text-yellow-400 text-xl inline-block hover:scale-125 transition-transform cursor-default"
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl hover:scale-110 hover:rotate-12 transition-all duration-300">
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
        {/* Decorative elements with animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
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

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 hover:shadow-blue-500/20 transition-shadow duration-300">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="animate-slide-up animation-delay-100">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition hover:border-gray-300"
                    required
                  />
                </div>
                <div className="animate-slide-up animation-delay-200">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition hover:border-gray-300"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="animate-slide-up animation-delay-300">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition hover:border-gray-300"
                  />
                </div>
                <div className="animate-slide-up animation-delay-400">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Type
                  </label>
                  <select className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition hover:border-gray-300">
                    <option>Residential Cleaning</option>
                    <option>Commercial Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Move-In/Move-Out</option>
                  </select>
                </div>
              </div>

              <div className="animate-slide-up animation-delay-500">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell Us About Your Needs *
                </label>
                <textarea
                  placeholder="Please describe your cleaning needs, property size, and any specific requirements..."
                  rows={5}
                  className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none hover:border-gray-300"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group animate-slide-up animation-delay-600"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative">Get Your Free Quote →</span>
              </button>

              <p className="text-center text-sm text-gray-500 animate-fade-in animation-delay-700">
                By submitting this form, you agree to receive communications from Fann's Cleaning Services
              </p>
            </form>
          </div>

          {/* Contact info */}
          <div className="mt-12 text-center animate-fade-in animation-delay-800">
            <p className="text-blue-100 mb-4">Or reach us directly:</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-lg">
              <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-blue-200 hover:scale-110 transition-all">
                📞 (555) 123-4567
              </a>
              <span className="hidden sm:inline text-blue-300">•</span>
              <a href="mailto:info@fannscleaning.com" className="flex items-center gap-2 hover:text-blue-200 hover:scale-110 transition-all">
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
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-white mb-4">Fann's Cleaning</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Professional cleaning services for homes and businesses in Tomball, TX.
              </p>
              <div className="flex gap-4">
                {['f', 'in', '✉'].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in animation-delay-200">
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { text: "Our Services", href: "#services" },
                  { text: "Get a Quote", href: "#contact" },
                  { text: "About Us", href: "#" },
                  { text: "Contact", href: "#" }
                ].map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="hover:text-white hover:translate-x-2 inline-block transition-all">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in animation-delay-400">
              <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2 hover:text-white transition-colors">
                  <span>📍</span>
                  <span>Tomball, TX 77375</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+15551234567" className="hover:text-white transition-colors">(555) 123-4567</a>
                </li>
                <li className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:info@fannscleaning.com" className="hover:text-white transition-colors">info@fannscleaning.com</a>
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
                className="text-blue-400 hover:text-blue-300 transition-all hover:underline"
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
