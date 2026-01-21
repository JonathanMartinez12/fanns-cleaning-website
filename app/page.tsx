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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const clientsCount = useCounter(500, 2000, statsVisible);
  const yearsCount = useCounter(10, 2000, statsVisible);
  const satisfactionCount = useCounter(100, 2000, statsVisible);

  // Handle scroll for navbar background
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
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`}>
                <span className="group-hover:scale-110 inline-block transition-transform">✨</span>
                Fann's Cleaning
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="#services"
                className={`font-semibold hover:scale-105 transition-all ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
              >
                Services
              </a>
              <a
                href="/about"
                className={`font-semibold hover:scale-105 transition-all ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
              >
                About
              </a>
              <a
                href="/blog"
                className={`font-semibold hover:scale-105 transition-all ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
              >
                Blog
              </a>
              <a
                href="#testimonials"
                className={`font-semibold hover:scale-105 transition-all ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className={`font-semibold hover:scale-105 transition-all ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
              >
                Contact
              </a>
            </div>

            {/* Phone & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Phone Button */}
              <a
                href="tel:+13465880262"
                className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                <svg
                  className="w-5 h-5 group-hover:rotate-12 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hidden xl:inline">(346) 588-0262</span>
                <span className="xl:hidden">Call</span>
              </a>

              {/* Get Quote CTA */}
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Free Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
              }`}
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
                <a
                  href="#services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 font-semibold hover:text-blue-600 hover:translate-x-2 transition-all py-2"
                >
                  Services
                </a>
                <a
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 font-semibold hover:text-blue-600 hover:translate-x-2 transition-all py-2"
                >
                  About
                </a>
                <a
                  href="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 font-semibold hover:text-blue-600 hover:translate-x-2 transition-all py-2"
                >
                  Blog
                </a>
                <a
                  href="#testimonials"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 font-semibold hover:text-blue-600 hover:translate-x-2 transition-all py-2"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 font-semibold hover:text-blue-600 hover:translate-x-2 transition-all py-2"
                >
                  Contact
                </a>
                <div className="border-t pt-4 space-y-3">
                  <a
                    href="tel:+13465880262"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-100 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (346) 588-0262
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all"
                  >
                    Get Free Quote
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white py-32 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=1080&fit=crop"
            alt="Professional cleaning service"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700/90 via-blue-600/90 to-indigo-700/90"></div>
        </div>

        {/* Animated decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium animate-slide-down">
            ✨ Premium Cleaning Services Serving Tomball, Magnolia, The Woodlands & More
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight animate-slide-up">
            Pristine Spaces.<br />
            <span className="text-blue-200 bg-clip-text">Exceptional Service.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed text-blue-50 animate-slide-up animation-delay-200">
            Over 10 years of experience delivering spotless homes and offices in Tomball, Magnolia, and Montgomery County.
            Pet-friendly products, transparent pricing, and personalized attention to every detail.
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
                color: "from-blue-500 to-blue-600",
                image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=400&fit=crop"
              },
              {
                icon: "🏢",
                title: "Commercial Cleaning",
                desc: "Keep your business looking professional with our reliable commercial cleaning solutions.",
                features: ["Office Spaces", "Retail Stores", "Medical Facilities", "After-Hours Service"],
                color: "from-indigo-500 to-indigo-600",
                image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop"
              },
              {
                icon: "✨",
                title: "Deep Cleaning",
                desc: "Intensive cleaning that reaches every corner, perfect for seasonal refreshes or special occasions.",
                features: ["Kitchen & Bathrooms", "Carpet Cleaning", "Window Washing", "Detailed Sanitization"],
                color: "from-purple-500 to-purple-600",
                image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&h=400&fit=crop"
              },
            ].map((service, i) => (
              <div
                key={i}
                className={`group relative bg-white border-2 border-gray-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-blue-200 transition-all duration-500 ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${i * 150}ms`,
                  transform: servicesVisible ? 'translateY(0)' : 'translateY(40px)'
                }}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60 group-hover:opacity-40 transition-opacity`}></div>
                  <div className="absolute top-4 right-4 text-5xl group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 drop-shadow-lg">
                    {service.icon}
                  </div>
                </div>

                <div className="relative p-8">
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
              <h3 className="text-3xl font-bold mb-4">Proudly Serving Montgomery County & Surrounding Areas</h3>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Serving Tomball, Magnolia, Conroe, Willis, Cypress, The Woodlands, Spring, and Pinehurst, TX.
                As a locally owned business, we're not just cleaning homes and offices—we're building lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER GALLERY */}
      <section className="py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              SEE THE DIFFERENCE
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Transformations That Speak
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the remarkable difference our professional cleaning makes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {[
              {
                before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop",
                after: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop",
                title: "Kitchen Deep Clean"
              },
              {
                before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
                after: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop",
                title: "Living Room Refresh"
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-80">
                  {/* Before Image */}
                  <div className="absolute inset-0 w-1/2 left-0">
                    <img
                      src={item.before}
                      alt="Before cleaning"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                      Before
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="absolute inset-0 w-1/2 right-0">
                    <img
                      src={item.after}
                      alt="After cleaning"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                      After
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="absolute inset-y-0 left-1/2 w-1 bg-white shadow-lg transform -translate-x-1/2 z-10">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-center group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              OUR WORK
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Excellence in Every Detail
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse into our professional cleaning services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=400&fit=crop",
              "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=400&fit=crop"
            ].map((img, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Cleaning service ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-sm">
                      Professional Cleaning
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              See How We Can Help You
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-28 bg-gray-50 overflow-hidden">
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
              <a href="tel:+13465880262" className="flex items-center gap-2 hover:text-blue-200 hover:scale-110 transition-all">
                📞 (346) 588-0262
              </a>
              <span className="hidden sm:inline text-blue-300">•</span>
              <a href="mailto:fannsclean23@gmail.com" className="flex items-center gap-2 hover:text-blue-200 hover:scale-110 transition-all">
                ✉️ fannsclean23@gmail.com
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
                Professional cleaning services for homes and businesses in Tomball, Magnolia, Conroe, Willis, Cypress, The Woodlands, Spring, and Pinehurst, TX.
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
                  <span>Serving Tomball, Magnolia, Conroe, Willis, Cypress, The Woodlands, Spring, and Pinehurst, TX</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+13465880262" className="hover:text-white transition-colors">(346) 588-0262</a>
                </li>
                <li className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:fannsclean23@gmail.com" className="hover:text-white transition-colors">fannsclean23@gmail.com</a>
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
