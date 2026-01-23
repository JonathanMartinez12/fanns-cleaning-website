'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ResidentialCleaningPage() {
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
            Residential Cleaning Services
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Professional House Cleaning You Can Trust
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            From routine maintenance to deep cleaning, we make your home spotless. Serving Tomball, The Woodlands, Magnolia, and Montgomery County with pet-friendly, eco-conscious products.
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

      {/* WHAT'S INCLUDED */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">What's Included in Our Residential Cleaning</h2>
            <p className="text-xl text-slate-600">Comprehensive cleaning for every room in your home</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                room: "Kitchen",
                tasks: ["Countertops & backsplash", "Sink & faucet shine", "Appliance exteriors", "Floor mopping", "Cabinet fronts", "Trash removal"]
              },
              {
                room: "Bathrooms",
                tasks: ["Toilet deep clean", "Shower & tub scrubbing", "Mirror & glass cleaning", "Sink & vanity polish", "Floor sanitization", "Fixture shine"]
              },
              {
                room: "Living Areas",
                tasks: ["Dusting all surfaces", "Vacuum carpets", "Mop hard floors", "Furniture wiping", "Baseboards", "Window sills"]
              },
              {
                room: "Bedrooms",
                tasks: ["Bed making (optional)", "Dusting furniture", "Vacuum/mop floors", "Mirror cleaning", "Closet tidying", "Surface organization"]
              },
              {
                room: "Common Areas",
                tasks: ["Staircase cleaning", "Hallway vacuuming", "Light switch wiping", "Door handle sanitizing", "Cobweb removal", "Air vent dusting"]
              },
              {
                room: "Additional Services",
                tasks: ["Inside windows", "Inside refrigerator", "Inside oven", "Laundry wash & fold", "Dish washing", "Interior cabinets"]
              }
            ].map((section, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
                <h3 className="text-2xl font-bold mb-4 text-slate-900 flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  {section.room}
                </h3>
                <ul className="space-y-2">
                  {section.tasks.map((task, j) => (
                    <li key={j} className="flex items-start gap-2 text-slate-700">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLEANING FREQUENCIES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Flexible Cleaning Schedules</h2>
            <p className="text-xl text-slate-600">Choose the frequency that works best for your lifestyle</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Weekly",
                description: "Perfect for busy families who want a consistently clean home without the hassle.",
                popular: false
              },
              {
                title: "Bi-Weekly",
                description: "Our most popular option! Great balance of cleanliness and affordability.",
                popular: true
              },
              {
                title: "Monthly",
                description: "Ideal for light maintenance and supplementing your own cleaning routine.",
                popular: false
              },
              {
                title: "One-Time",
                description: "Deep cleaning for special occasions, moving, or just to reset your home.",
                popular: false
              }
            ].map((plan, i) => (
              <div key={i} className={`relative bg-white p-6 rounded-xl border-2 hover:shadow-lg transition-all ${plan.popular ? 'border-blue-600' : 'border-slate-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{plan.title}</h3>
                <p className="text-slate-600 leading-relaxed">{plan.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Why Choose Fann's Residential Cleaning</h2>
            <p className="text-xl text-slate-600">Trusted by Montgomery County families for over a decade</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                title: "Background-Checked Staff",
                description: "All our cleaners undergo thorough background checks and training. You can trust who enters your home."
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: "Pet-Friendly Products",
                description: "Safe, non-toxic cleaning solutions that won't harm your furry family members."
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: "Flexible Scheduling",
                description: "We work around your schedule with early morning, evening, and weekend appointments available."
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: "Satisfaction Guarantee",
                description: "If you're not 100% satisfied, we'll come back and re-clean at no extra charge."
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />,
                title: "Eco-Conscious Options",
                description: "Green cleaning products available for environmentally conscious homeowners."
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: "Transparent Pricing",
                description: "No hidden fees or surprises. Get an accurate quote upfront and stick to it."
              }
            ].map((feature, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS SERVED */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Areas We Serve</h2>
            <p className="text-xl text-slate-600">Professional residential cleaning throughout Montgomery County</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              "Tomball",
              "The Woodlands",
              "Magnolia",
              "Conroe",
              "Willis",
              "Cypress",
              "Spring",
              "Pinehurst",
              "Montgomery",
              "New Caney",
              "Porter",
              "Splendora"
            ].map((area, i) => (
              <div key={i} className="flex items-center gap-2 p-4 bg-white rounded-lg border border-slate-200">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Everything you need to know about our residential cleaning services</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Do I need to be home during the cleaning?",
                answer: "No, you don't need to be home! Many of our clients provide us with a key or garage code so we can clean while they're at work. We're fully insured and bonded for your peace of mind."
              },
              {
                question: "What if I'm not satisfied with the cleaning?",
                answer: "Your satisfaction is our top priority. If you're not happy with any aspect of our service, just let us know within 24 hours and we'll return to re-clean those areas at no extra charge."
              },
              {
                question: "Do you bring your own cleaning supplies?",
                answer: "Yes! We bring all necessary cleaning supplies and equipment. However, if you have specific products you'd like us to use, we're happy to accommodate."
              },
              {
                question: "How long does a typical cleaning take?",
                answer: "It depends on the size of your home and the type of cleaning. A standard cleaning for a 3-bedroom home typically takes 2-3 hours. Deep cleanings take longer."
              },
              {
                question: "Are your cleaning products safe for kids and pets?",
                answer: "Absolutely! We use pet-friendly, non-toxic cleaning products as standard. We also offer green cleaning options for eco-conscious families."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold mb-3 text-slate-900">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for a Spotless Home?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of satisfied homeowners who trust Fann's Cleaning for their residential cleaning needs.
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
