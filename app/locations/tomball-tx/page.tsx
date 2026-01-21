'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TomballPage() {
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
    <main className="min-h-screen">
      {/* NAVIGATION */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-slate-900/95 py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isScrolled ? 'bg-gradient-to-br from-blue-700 to-indigo-800' : 'bg-white/10 backdrop-blur-md'}`}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
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
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-32 mt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-blue-400/30">
            Serving Tomball, TX
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional Cleaning Services in Tomball, Texas
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Trusted by Tomball residents for over 10 years. From historic downtown to new developments near Highway 249, we deliver spotless homes and offices with personalized care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13465880262" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (346) 588-0262
            </a>
            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-blue-700/50 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US IN TOMBALL */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Why Tomball Residents Choose Fann's Cleaning</h2>
            <p className="text-xl text-slate-600">Local expertise, personalized service, and a decade of trust</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Tomball-Based & Local</h3>
              <p className="text-slate-700 leading-relaxed">
                As a Tomball-based business, we understand the unique needs of our community. From the historic homes near Main Street to newer neighborhoods like Willow Creek and Rosehill Reserve, we know the area inside and out.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Flexible Scheduling</h3>
              <p className="text-slate-700 leading-relaxed">
                We work around your busy schedule. Whether you need early morning service before work, weekend appointments, or regular weekly cleanings, we offer flexible scheduling that fits your Tomball lifestyle.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Pet-Friendly Products</h3>
              <p className="text-slate-700 leading-relaxed">
                We know Tomball families love their pets! All our cleaning products are non-toxic and pet-safe, so your furry friends can stay comfortable while we clean.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">Satisfaction Guaranteed</h3>
              <p className="text-slate-700 leading-relaxed">
                Our commitment to Tomball residents is simple: if you're not completely satisfied, we'll make it right. No questions asked. That's the Fann's Cleaning promise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES IN TOMBALL */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Our Cleaning Services in Tomball</h2>
            <p className="text-xl text-slate-600">Comprehensive cleaning solutions for every need</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Residential Cleaning",
                description: "Keep your Tomball home pristine with our thorough residential cleaning services. From routine maintenance to deep cleaning.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              },
              {
                title: "Commercial Cleaning",
                description: "Professional office and business cleaning for Tomball's thriving business community along Highway 249 and downtown.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              },
              {
                title: "Deep Cleaning",
                description: "Intensive cleaning perfect for spring refreshes, post-renovation cleanup, or preparing your Tomball home for special occasions.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              },
              {
                title: "Move In/Out Cleaning",
                description: "Relocating in Tomball? Our comprehensive move-in and move-out cleaning ensures your old or new home is spotless.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              },
              {
                title: "Pressure Washing",
                description: "Restore your Tomball property's curb appeal with professional pressure washing for driveways, patios, and siding.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              },
              {
                title: "Window Cleaning",
                description: "Crystal-clear window cleaning services for Tomball homes and businesses. Interior and exterior cleaning available.",
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {service.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS SERVED */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Tomball Neighborhoods We Serve</h2>
            <p className="text-xl text-slate-600">Professional cleaning throughout Tomball and surrounding areas</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              "Downtown Tomball",
              "Willow Creek",
              "Rosehill Reserve",
              "Vintage Park",
              "Creekside Village",
              "Gleannloch Farms",
              "Grand Lakes",
              "Tomball Parkway"
            ].map((neighborhood, i) => (
              <div key={i} className="flex items-center gap-2 p-4 bg-slate-50 rounded-lg">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-slate-700 font-medium">{neighborhood}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for a Spotless Tomball Home?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of satisfied Tomball residents who trust Fann's Cleaning for their home and office cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13465880262" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (346) 588-0262
            </a>
            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-blue-700 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-all">
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
