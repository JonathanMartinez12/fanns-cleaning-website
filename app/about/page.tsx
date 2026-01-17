'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-white text-gray-900">
      {/* NAVIGATION BAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-white shadow-md py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="text-2xl font-bold text-blue-600 transition-colors">
                <span className="group-hover:scale-110 inline-block transition-transform">✨</span>
                Fann's Cleaning
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/#services" className="font-semibold text-gray-700 hover:text-blue-600 hover:scale-105 transition-all">
                Services
              </Link>
              <Link href="/about" className="font-semibold text-blue-600 hover:scale-105 transition-all">
                About
              </Link>
              <Link href="/blog" className="font-semibold text-gray-700 hover:text-blue-600 hover:scale-105 transition-all">
                Blog
              </Link>
              <Link href="/#testimonials" className="font-semibold text-gray-700 hover:text-blue-600 hover:scale-105 transition-all">
                Testimonials
              </Link>
              <Link href="/#contact" className="font-semibold text-gray-700 hover:text-blue-600 hover:scale-105 transition-all">
                Contact
              </Link>
            </div>

            {/* Phone & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+15551234567"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 bg-blue-50 text-blue-600 hover:bg-blue-100"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hidden xl:inline">(555) 123-4567</span>
                <span className="xl:hidden">Call</span>
              </a>
              <Link
                href="/#contact"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 py-4 bg-white rounded-2xl shadow-2xl animate-slide-down">
              <div className="flex flex-col space-y-4 px-4">
                <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-semibold hover:text-blue-600 hover:translate-x-2 transition-all py-2">
                  Services
                </Link>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-blue-600 font-semibold py-2">
                  About
                </Link>
                <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-semibold hover:text-blue-600 hover:translate-x-2 transition-all py-2">
                  Blog
                </Link>
                <Link href="/#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-semibold hover:text-blue-600 hover:translate-x-2 transition-all py-2">
                  Testimonials
                </Link>
                <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-semibold hover:text-blue-600 hover:translate-x-2 transition-all py-2">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white py-40 mt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=600&fit=crop"
            alt="About Fann's Cleaning"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700/90 via-blue-600/90 to-indigo-700/90"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            About Fann's Cleaning
          </h1>
          <p className="text-2xl text-blue-100">
            Your trusted local cleaning partner in Tomball, Texas
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                OUR STORY
              </div>
              <h2 className="text-5xl font-bold mb-6">
                Cleaning with Heart Since 2014
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Fann's Cleaning Services was founded with a simple mission: to provide exceptional cleaning services that transform spaces and enhance lives.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                What started as a small local operation has grown into Tomball's most trusted cleaning service, thanks to our commitment to quality, reliability, and customer satisfaction.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every member of our team is trained, background-checked, and dedicated to delivering the pristine results you deserve.
              </p>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=600&fit=crop"
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🤝",
                title: "Trust & Integrity",
                desc: "We treat your home and business with the respect they deserve. All team members are background-checked and insured."
              },
              {
                icon: "✨",
                title: "Quality Excellence",
                desc: "We never cut corners. Every cleaning is thorough, detailed, and meets our rigorous quality standards."
              },
              {
                icon: "💚",
                title: "Eco-Friendly",
                desc: "We use environmentally safe products that are tough on dirt but gentle on your family, pets, and the planet."
              },
              {
                icon: "🎯",
                title: "Reliability",
                desc: "We show up on time, every time. You can count on us to be there when we say we will."
              },
              {
                icon: "👥",
                title: "Local Community",
                desc: "As a locally owned business, we're invested in Tomball's success and give back to our community."
              },
              {
                icon: "⭐",
                title: "Customer First",
                desc: "Your satisfaction is our top priority. We're not happy until you're thrilled with the results."
              }
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM STATS */}
      <section className="py-28 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Trusted by the Community
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Clients" },
              { number: "10+", label: "Years Experience" },
              { number: "15", label: "Team Members" },
              { number: "100%", label: "Satisfaction Rate" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join hundreds of satisfied customers in Tomball who trust us with their cleaning needs.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Get Your Free Quote
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Fann's Cleaning</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Professional cleaning services for homes and businesses in Tomball, TX.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/#services" className="hover:text-white transition">Our Services</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
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
