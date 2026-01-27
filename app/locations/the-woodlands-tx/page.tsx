'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TheWoodlandsPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-slate-900/95 py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isScrolled ? 'bg-gradient-to-br from-blue-700 to-indigo-800' : 'bg-white/10 backdrop-blur-md'}`}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className={`text-2xl font-bold ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Fann's Cleaning
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/#services" className={`font-medium hover:scale-105 transition-all ${isScrolled ? 'text-gray-600 hover:text-blue-700' : 'text-white/90 hover:text-white'}`}>
              Services
            </Link>
            <Link href="/about" className={`font-medium hover:scale-105 transition-all ${isScrolled ? 'text-gray-600 hover:text-blue-700' : 'text-white/90 hover:text-white'}`}>
              About
            </Link>
            <Link href="/#contact" className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all">
              Get Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-slate-900 text-white py-32 mt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-emerald-400/30">
            Serving The Woodlands, TX
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Premium Cleaning Services in The Woodlands, Texas
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8">
            Trusted by families across all nine villages of The Woodlands for over 10 years. From Panther Creek to Cochrans Crossing, we deliver meticulous cleaning with eco-conscious care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13465880262" className="inline-flex items-center justify-center gap-2 bg-white text-emerald-900 px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (346) 588-0262
            </a>
            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-emerald-700/50 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Why The Woodlands Families Choose Us</h2>
            <p className="text-xl text-slate-600">Premium service matching your community's high standards</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Eco-Conscious Cleaning</h3>
              <p className="text-slate-700 leading-relaxed">
                We know The Woodlands community values environmental responsibility. All our products are eco-friendly, non-toxic, and safe for your family, pets, and the beautiful natural surroundings of The Woodlands.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Premium Quality Standards</h3>
              <p className="text-slate-700 leading-relaxed">
                The Woodlands deserves the best. Our team is professionally trained, background-checked, and committed to delivering the meticulous service your upscale community expects.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Trusted & Insured</h3>
              <p className="text-slate-700 leading-relaxed">
                Your home is your most valuable asset. We're fully insured and bonded, giving you complete peace of mind when you trust us with your Woodlands property.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Flexible Scheduling</h3>
              <p className="text-slate-700 leading-relaxed">
                Busy with work at The Woodlands offices or kids' activities at the sports parks? We offer flexible scheduling including early morning, evening, and weekend appointments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VILLAGES SERVED */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">All Woodlands Villages Served</h2>
            <p className="text-xl text-slate-600">Professional cleaning throughout The Woodlands community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Cochrans Crossing",
              "Panther Creek",
              "Indian Springs",
              "Alden Bridge",
              "Creekside Park",
              "Grogan's Mill",
              "Sterling Ridge",
              "College Park",
              "Harper's Landing",
              "Market Street District",
              "Research Forest",
              "Woodlands Parkway"
            ].map((area, i) => (
              <div key={i} className="flex items-center gap-2 p-4 bg-white rounded-lg border border-slate-200">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Our Services in The Woodlands</h2>
            <p className="text-xl text-slate-600">Comprehensive cleaning solutions for homes and businesses</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Residential Cleaning",
                description: "Keep your Woodlands home immaculate with our thorough residential cleaning. Weekly, bi-weekly, or monthly service available.",
              },
              {
                title: "Commercial Office Cleaning",
                description: "Professional cleaning for offices and businesses along Research Forest Drive and Woodlands Parkway.",
              },
              {
                title: "Deep Cleaning",
                description: "Comprehensive deep cleaning perfect for seasonal refreshes, post-party cleanup, or special occasions.",
              },
              {
                title: "Move In/Out Cleaning",
                description: "Relocating within The Woodlands? Our thorough move-in and move-out service ensures a fresh start.",
              },
              {
                title: "Window Cleaning",
                description: "Keep your views of The Woodlands' natural beauty crystal clear with professional window cleaning.",
              },
              {
                title: "Pressure Washing",
                description: "Restore your driveway, patio, and home exterior with our professional pressure washing service.",
              }
            ].map((service, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-all border border-slate-200">
                <h3 className="text-xl font-bold mb-2 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience The Woodlands' Premier Cleaning Service</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join your neighbors across all nine villages who trust Fann's Cleaning for exceptional service and eco-conscious care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13465880262" className="inline-flex items-center justify-center gap-2 bg-white text-emerald-900 px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all">
              Call (346) 588-0262
            </a>
            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-emerald-700 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-600 transition-all">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-4">© {new Date().getFullYear()} Fann's Cleaning Services. All rights reserved.</p>
          <p className="text-sm text-slate-400">
            Serving Tomball, Magnolia, The Woodlands, Conroe, Willis, Cypress, Spring, and Pinehurst, TX
          </p>
        </div>
      </footer>
    </main>
  );
}
