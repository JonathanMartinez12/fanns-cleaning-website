'use client';

import { useEffect, useState, useRef, FormEvent } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

// EmailJS Configuration - Debug: log if vars are set
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
const TEST_MODE = process.env.NEXT_PUBLIC_EMAILJS_TEST_MODE === 'true';

// Initialize EmailJS
if (typeof window !== 'undefined' && EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

// Debug logging (remove in production later)
if (typeof window !== 'undefined') {
  console.log('[EmailJS Debug] Config loaded:', {
    serviceId: EMAILJS_SERVICE_ID ? 'SET' : 'NOT SET',
    templateId: EMAILJS_TEMPLATE_ID ? 'SET' : 'NOT SET',
    publicKey: EMAILJS_PUBLIC_KEY ? 'SET' : 'NOT SET',
    testMode: TEST_MODE
  });
}

// Form state interface
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormState {
  status: FormStatus;
  errorMessage: string;
}

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Contact form state
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'Residential Cleaning',
    message: '',
  });
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    errorMessage: '',
  });

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('[EmailJS Debug] Form submitted, starting process...');
    console.log('[EmailJS Debug] Form data:', formData);
    setFormState({ status: 'submitting', errorMessage: '' });

    // Test mode error simulation
    if (TEST_MODE) {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (formData.email === 'test-error@test.com') {
        setFormState({
          status: 'error',
          errorMessage: 'TEST MODE: Simulated network/service error. The email service is temporarily unavailable.',
        });
        return;
      }

      if (formData.email === 'test-invalid@test.com') {
        setFormState({
          status: 'error',
          errorMessage: 'TEST MODE: Simulated invalid template error. Please check your EmailJS template configuration.',
        });
        return;
      }

      // If no test error triggered, simulate success
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        console.log('TEST MODE: Form submitted successfully (keys not configured)', formData);
        setFormState({ status: 'success', errorMessage: '' });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          serviceType: 'Residential Cleaning',
          message: '',
        });
        return;
      }
    }

    // Check if EmailJS is configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.log('[EmailJS Debug] Missing configuration:', {
        serviceId: !EMAILJS_SERVICE_ID,
        templateId: !EMAILJS_TEMPLATE_ID,
        publicKey: !EMAILJS_PUBLIC_KEY
      });
      setFormState({
        status: 'error',
        errorMessage: 'Email service is not configured. Please contact us directly at fannsclean23@gmail.com',
      });
      return;
    }

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        service_type: formData.serviceType,
        message: formData.message,
      };

      console.log('[EmailJS Debug] Sending email with params:', templateParams);

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('[EmailJS Debug] Email sent successfully:', response);
      setFormState({ status: 'success', errorMessage: '' });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceType: 'Residential Cleaning',
        message: '',
      });
    } catch (error: unknown) {
      console.error('[EmailJS Debug] Error sending email:', error);
      console.error('[EmailJS Debug] Error type:', typeof error);
      console.error('[EmailJS Debug] Error details:', JSON.stringify(error, null, 2));

      let errorMessage = 'Failed to send message. Please try again or contact us directly.';

      if (error instanceof Error) {
        // Handle specific EmailJS errors
        if (error.message.includes('service_id')) {
          errorMessage = 'Email service configuration error. Please contact us directly at fannsclean23@gmail.com';
        } else if (error.message.includes('template_id')) {
          errorMessage = 'Email template error. Please contact us directly at fannsclean23@gmail.com';
        } else if (error.message.includes('network')) {
          errorMessage = 'Network error. Please check your connection and try again.';
        }
      }

      setFormState({ status: 'error', errorMessage });
    }
  };

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
            <a href="#" className="flex items-center gap-3 group">
              <div className={`w-10 h-10 rounded-lg transition-all duration-300 flex items-center justify-center ${
                isScrolled
                  ? 'bg-gradient-to-br from-blue-700 to-indigo-800'
                  : 'bg-white/20 backdrop-blur-sm'
              }`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Fann's Cleaning
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="#services"
                className={`font-medium hover:scale-105 transition-all ${
                  isScrolled ? 'text-gray-600 hover:text-blue-700' : 'text-white/90 hover:text-white'
                }`}
              >
                Services
              </a>
              <a
                href="/about"
                className={`font-medium hover:scale-105 transition-all ${
                  isScrolled ? 'text-gray-600 hover:text-blue-700' : 'text-white/90 hover:text-white'
                }`}
              >
                About
              </a>
              <a
                href="/blog"
                className={`font-medium hover:scale-105 transition-all ${
                  isScrolled ? 'text-gray-600 hover:text-blue-700' : 'text-white/90 hover:text-white'
                }`}
              >
                Blog
              </a>
              <a
                href="#testimonials"
                className={`font-medium hover:scale-105 transition-all ${
                  isScrolled ? 'text-gray-600 hover:text-blue-700' : 'text-white/90 hover:text-white'
                }`}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className={`font-medium hover:scale-105 transition-all ${
                  isScrolled ? 'text-gray-600 hover:text-blue-700' : 'text-white/90 hover:text-white'
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
                className={`group flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'bg-blue-50 text-blue-800 hover:bg-blue-100'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20'
                }`}
              >
                <svg
                  className="w-4 h-4"
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
                className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-700/25 hover:scale-105 transition-all duration-300"
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
                  className="text-slate-700 font-medium hover:text-blue-700 hover:translate-x-2 transition-all py-2"
                >
                  Services
                </a>
                <a
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-700 font-medium hover:text-blue-700 hover:translate-x-2 transition-all py-2"
                >
                  About
                </a>
                <a
                  href="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-700 font-medium hover:text-blue-700 hover:translate-x-2 transition-all py-2"
                >
                  Blog
                </a>
                <a
                  href="#testimonials"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-700 font-medium hover:text-blue-700 hover:translate-x-2 transition-all py-2"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-700 font-medium hover:text-blue-700 hover:translate-x-2 transition-all py-2"
                >
                  Contact
                </a>
                <div className="border-t border-slate-200 pt-4 space-y-3">
                  <a
                    href="tel:+13465880262"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 bg-blue-50 text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-100 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (346) 588-0262
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center bg-gradient-to-r from-blue-800 to-indigo-800 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
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
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 text-white py-32 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/livingroom.png"
            alt="Professional cleaning service"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/95 via-slate-800/95 to-slate-900/95"></div>
        </div>

        {/* Animated decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center animate-fade-in">
          <div className="inline-block mb-6 px-5 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm font-medium animate-slide-down border border-blue-400/30">
            <span className="text-blue-300">Premium Cleaning Services</span>
            <span className="text-white/60 mx-2">•</span>
            <span className="text-white/90">Montgomery County & Surrounding Areas</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            Professional Cleaning<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">You Can Trust</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed text-slate-200 animate-slide-up animation-delay-200">
            Over 10 years delivering spotless homes and offices across Tomball, Magnolia, The Woodlands, and beyond.
            <span className="block mt-2 text-lg text-slate-300">Pet-friendly • Transparent Pricing • Personalized Service</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-indigo-800 text-white font-semibold px-8 py-4 rounded-lg shadow-xl shadow-blue-700/25 hover:shadow-2xl hover:shadow-blue-700/40 hover:scale-105 transition-all duration-300"
            >
              <span className="relative">Get Your Free Quote</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md text-white font-medium px-8 py-4 rounded-lg border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              View Our Services
            </a>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-5 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-medium mb-4 animate-fade-in border border-blue-100">
              Our Services
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
              Comprehensive Cleaning Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From routine maintenance to specialized services, we customize every job to meet your unique needs. Whether it's your home, office, or post-construction project, we treat every property like our own.
            </p>
          </div>

          <div ref={servicesRef} className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "home",
                title: "Residential Cleaning",
                desc: "Transform your home into a sparkling sanctuary with routine maintenance, deep-cleaning, upholstery, and floor care. Flexible scheduling with weekly or one-time options to fit your lifestyle.",
                features: ["Routine Maintenance", "Deep Cleaning", "Upholstery Cleaning", "Floor Care", "Weekly or One-Time Options"],
                color: "from-blue-700 to-indigo-800",
                image: "/livingroom.png"
              },
              {
                icon: "building",
                title: "Pressure Washing & Window Cleaning",
                desc: "Restore your property's curb appeal with professional pressure washing for driveways, patios, and siding. Crystal-clear window cleaning inside and out.",
                features: ["Driveway Washing", "Patio Cleaning", "Siding Restoration", "Interior Windows", "Exterior Windows"],
                color: "from-slate-600 to-slate-700",
                image: "/window_cleaning.png"
              },
              {
                icon: "sparkles",
                title: "Specialized Commercial Cleaning",
                desc: "Professional office and business cleaning tailored to your workplace needs. Keep your commercial space spotless with our reliable after-hours service and attention to detail.",
                features: ["Office Spaces", "Retail Stores", "Medical Facilities", "After-Hours Service", "Professional Environment Care"],
                color: "from-teal-500 to-cyan-600",
                image: "/commercial_cleaning.png"
              },
            ].map((service, i) => (
              <div
                key={i}
                className={`group relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-500 ${
                  servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${i * 150}ms`,
                  transform: servicesVisible ? 'translateY(0)' : 'translateY(40px)'
                }}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-70 group-hover:opacity-50 transition-opacity`}></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/30">
                    {service.icon === 'home' && (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    )}
                    {service.icon === 'building' && (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )}
                    {service.icon === 'sparkles' && (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    )}
                  </div>
                </div>

                <div className="relative p-8">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 group-hover:translate-x-1 transition-transform" style={{ transitionDelay: `${idx * 50}ms` }}>
                        <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800 group-hover:gap-2 transition-all">
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
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
            <div className="inline-block px-5 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-medium mb-4 border border-blue-100">
              Why Choose Us
            </div>
            <h2 className="text-5xl font-bold mb-6 text-slate-900">
              Why Choose Fann's Cleaning Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We're not just another cleaning company. We're your trusted partner in maintaining a clean, healthy space with professionalism and care.
            </p>
          </div>

          <div ref={whyUsRef} className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                title: "Pet-Friendly & Non-Toxic",
                desc: "Safe for your furry family members. We use only non-toxic, pet-friendly cleaning products that protect your loved ones while delivering exceptional results."
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                title: "Transparent, Upfront Pricing",
                desc: "No surprises, no hidden fees. You'll know exactly what you're paying before we start, with affordable rates that never sacrifice quality."
              },
              {
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
                title: "Personalized Attention",
                desc: "Every home is different. We customize our approach to your specific needs and treat your property with the same care we'd give our own."
              }
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-500 hover:-translate-y-2 ${
                  whyUsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-700/25">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className={`mt-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-12 text-white text-center shadow-xl relative overflow-hidden transition-all duration-700 ${
            whyUsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
            </div>
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4">Proudly Serving Montgomery County & Surrounding Areas</h3>
              <p className="text-xl text-slate-200 max-w-2xl mx-auto">
                Serving Tomball, Magnolia, Conroe, Willis, Cypress, The Woodlands, Spring, and Pinehurst, TX.
                <span className="block mt-2 text-lg text-blue-300">As a locally owned business, we're not just cleaning homes and offices—we're building lasting relationships.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-5 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-medium mb-4 border border-blue-100">
              Our Work
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900">
              Excellence in Every Detail
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A glimpse into our professional cleaning services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { img: "/nice_kitchen.png", title: "Sparkling Clean Kitchen" },
              { img: "/bathroom.png", title: "Pristine Bathroom" },
              { img: "/livingroom.png", title: "Fresh Living Space" },
              { img: "/post_construction.png", title: "Post-Construction Clean" },
              { img: "/livingroom_2.png", title: "Spotless Living Room" },
              { img: "/commercial_cleaning.png", title: "Commercial Space Cleaning" },
              { img: "/deep_cleaning.png", title: "Deep Cleaning Service" },
              { img: "/livingroom_3.png", title: "Living Room Refresh" },
              { img: "/window_cleaning.png", title: "Window Cleaning Service" }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-white font-semibold text-sm">
                        {item.title}
                      </p>
                    </div>
                    <p className="text-slate-300 text-xs">
                      Professional cleaning by Fann's
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-800 to-indigo-800 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-700/25 hover:scale-105 transition-all duration-300"
            >
              See How We Can Help You
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Auto-Scrolling Reviews */}
      <section id="testimonials" className="py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-medium mb-4 border border-blue-100">
              Client Testimonials
            </div>
            <h2 className="text-5xl font-bold mb-6 text-slate-900">
              Trusted by Hundreds of Happy Customers
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it—see what our clients have to say
            </p>
          </div>

          {/* Scrolling testimonials container */}
          <div className="relative">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10"></div>

            <div className="overflow-hidden">
              <div className="flex animate-scroll">
                {/* First set of reviews */}
                {[
                  {
                    name: "Michael M.",
                    text: "Needed a last minute clean of the house before the holidays. Kevin and his team made it quick and painless. The house was absolutely spotless. 10/10 recommended"
                  },
                  {
                    name: "Stephanie W.",
                    text: "Today, two ladies came and organized two rooms in my home, and I couldn't be more pleased! One was hazardous to walk in, and I am so grateful for them! Thanks for always being available and sharing your gifts!!"
                  },
                  {
                    name: "Jake L.",
                    text: "These guys came in clutch, on a last minute cleaning after our prescheduled contractor stood us up, and ghosted us. Fann's came in, on time, did an absolute stellar job, and left. I absolutely recommend, and will be using their services again."
                  },
                  {
                    name: "Jacy S.",
                    text: "Very impressed with the job that was done on my house! They paid attention to all the details and got everything spotless!"
                  },
                  {
                    name: "Cristina E.",
                    text: "They have always done a great job cleaning my home. I appreciate their services."
                  },
                  {
                    name: "Susan F.",
                    text: "I called to hire Fann's for a deep clean of my house. I have 3 hairy dogs and a lot of dust, etc. They came within days and cleaned absolutely everything. My house is like brand new. I will definitely be hiring them long term!! Thank you so very much"
                  },
                  {
                    name: "Summer P.",
                    text: "We needed a deep clean of our house on short notice. They didn't hesitate to fit us in the day we needed it. They did an amazing job. Very accommodating to our specific needs. Our house looks new again. Highly recommend them!"
                  },
                  {
                    name: "Rayne L.",
                    text: "I had a deep cleaning done. They took their time and literally cleaned my house from top to bottom including my wall decor. I have tried other cleaning services and those people did not clean my house to my expectations. Fann Cleaning Service exceeded my expectations. The cleaners were very friendly and personable, and professional."
                  },
                  {
                    name: "Vickie M.",
                    text: "Fann's Cleaning Service is outstanding in every way. Not only are they professional but also pay attention to detail. They bring their own supplies, equipment and plenty of elbow grease. They came out and gave us an estimate and were on time. They are honest and extremely trustworthy. We will definitely use their services again."
                  },
                  {
                    name: "Barbara W.",
                    text: "I have been very happy with Fann's Cleaning Services since I started using them earlier this year. Great quality work and very dependable. Friendly and easy to work with."
                  }
                ].map((review, i) => (
                  <div
                    key={`first-${i}`}
                    className="flex-shrink-0 w-96 mx-4 bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-slate-200 transition-all duration-300"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, idx) => (
                        <svg
                          key={idx}
                          className="w-5 h-5 text-amber-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-slate-700 mb-6 leading-relaxed text-[15px]">
                      "{review.text}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-700 to-indigo-800 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                        {review.name[0]}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{review.name}</div>
                        <div className="text-sm text-slate-500">Verified Customer</div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Duplicate set for seamless loop */}
                {[
                  {
                    name: "Michael M.",
                    text: "Needed a last minute clean of the house before the holidays. Kevin and his team made it quick and painless. The house was absolutely spotless. 10/10 recommended"
                  },
                  {
                    name: "Stephanie W.",
                    text: "Today, two ladies came and organized two rooms in my home, and I couldn't be more pleased! One was hazardous to walk in, and I am so grateful for them! Thanks for always being available and sharing your gifts!!"
                  },
                  {
                    name: "Jake L.",
                    text: "These guys came in clutch, on a last minute cleaning after our prescheduled contractor stood us up, and ghosted us. Fann's came in, on time, did an absolute stellar job, and left. I absolutely recommend, and will be using their services again."
                  },
                  {
                    name: "Jacy S.",
                    text: "Very impressed with the job that was done on my house! They paid attention to all the details and got everything spotless!"
                  },
                  {
                    name: "Cristina E.",
                    text: "They have always done a great job cleaning my home. I appreciate their services."
                  },
                  {
                    name: "Susan F.",
                    text: "I called to hire Fann's for a deep clean of my house. I have 3 hairy dogs and a lot of dust, etc. They came within days and cleaned absolutely everything. My house is like brand new. I will definitely be hiring them long term!! Thank you so very much"
                  },
                  {
                    name: "Summer P.",
                    text: "We needed a deep clean of our house on short notice. They didn't hesitate to fit us in the day we needed it. They did an amazing job. Very accommodating to our specific needs. Our house looks new again. Highly recommend them!"
                  },
                  {
                    name: "Rayne L.",
                    text: "I had a deep cleaning done. They took their time and literally cleaned my house from top to bottom including my wall decor. I have tried other cleaning services and those people did not clean my house to my expectations. Fann Cleaning Service exceeded my expectations. The cleaners were very friendly and personable, and professional."
                  },
                  {
                    name: "Vickie M.",
                    text: "Fann's Cleaning Service is outstanding in every way. Not only are they professional but also pay attention to detail. They bring their own supplies, equipment and plenty of elbow grease. They came out and gave us an estimate and were on time. They are honest and extremely trustworthy. We will definitely use their services again."
                  },
                  {
                    name: "Barbara W.",
                    text: "I have been very happy with Fann's Cleaning Services since I started using them earlier this year. Great quality work and very dependable. Friendly and easy to work with."
                  }
                ].map((review, i) => (
                  <div
                    key={`second-${i}`}
                    className="flex-shrink-0 w-96 mx-4 bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-slate-200 transition-all duration-300"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, idx) => (
                        <svg
                          key={idx}
                          className="w-5 h-5 text-amber-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-slate-700 mb-6 leading-relaxed text-[15px]">
                      "{review.text}"
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-700 to-indigo-800 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                        {review.name[0]}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{review.name}</div>
                        <div className="text-sm text-slate-500">Verified Customer</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 text-sm">
              <span className="font-semibold text-slate-900">Verified Five-Star Reviews</span> • Hover to pause
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Decorative elements with animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block px-5 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4 border border-blue-400/30">
              <span className="text-blue-300">Get In Touch</span>
            </div>
            <h2 className="text-5xl font-bold mb-6">
              Ready for a Spotless Space?
            </h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours with a free, no-obligation quote
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 hover:shadow-blue-500/20 transition-shadow duration-300">
            {/* Success Message */}
            {formState.status === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Message Sent Successfully!</h3>
                    <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {formState.status === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-red-800">Failed to Send Message</h3>
                    <p className="text-red-600 text-sm">{formState.errorMessage}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Test Mode Indicator */}
            {TEST_MODE && (
              <div className="mb-6 p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
                <div className="flex items-center gap-2 text-yellow-800 text-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span><strong>Test Mode Active</strong> - Use test-error@test.com or test-invalid@test.com to simulate errors</span>
                </div>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="animate-slide-up animation-delay-100">
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition hover:border-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    required
                    disabled={formState.status === 'submitting'}
                  />
                </div>
                <div className="animate-slide-up animation-delay-200">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition hover:border-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    required
                    disabled={formState.status === 'submitting'}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="animate-slide-up animation-delay-300">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                    className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition hover:border-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    disabled={formState.status === 'submitting'}
                  />
                </div>
                <div className="animate-slide-up animation-delay-400">
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition hover:border-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    disabled={formState.status === 'submitting'}
                  >
                    <option>Residential Cleaning</option>
                    <option>Commercial Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Move-In/Move-Out</option>
                  </select>
                </div>
              </div>

              <div className="animate-slide-up animation-delay-500">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell Us About Your Needs *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please describe your cleaning needs, property size, and any specific requirements..."
                  rows={5}
                  className="w-full border-2 border-gray-200 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none hover:border-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  required
                  disabled={formState.status === 'submitting'}
                />
              </div>

              <button
                type="submit"
                disabled={formState.status === 'submitting'}
                className="w-full bg-gradient-to-r from-blue-800 to-indigo-800 text-white py-5 rounded-lg font-semibold text-lg shadow-xl shadow-blue-700/25 hover:shadow-2xl hover:shadow-blue-700/40 hover:scale-105 transition-all duration-300 relative overflow-hidden group animate-slide-up animation-delay-600 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative flex items-center justify-center gap-2">
                  {formState.status === 'submitting' ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Get Your Free Quote
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </span>
              </button>

              <p className="text-center text-sm text-gray-500 animate-fade-in animation-delay-700">
                By submitting this form, you agree to receive communications from Fann's Cleaning Services
              </p>
            </form>
          </div>

          {/* Contact info */}
          <div className="mt-12 text-center animate-fade-in animation-delay-800">
            <p className="text-slate-300 mb-4">Or reach us directly:</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-lg">
              <a href="tel:+13465880262" className="flex items-center gap-2 text-white hover:text-blue-300 hover:scale-105 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (346) 588-0262
              </a>
              <span className="hidden sm:inline text-slate-600">•</span>
              <a href="mailto:fannsclean23@gmail.com" className="flex items-center gap-2 text-white hover:text-blue-300 hover:scale-105 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                fannsclean23@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div className="animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Fann's Cleaning</h3>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                Professional cleaning services for homes and businesses in Tomball, Magnolia, Conroe, Willis, Cypress, The Woodlands, Spring, and Pinehurst, TX.
              </p>
              {/* Social Media Links */}
              <div className="flex gap-3">
                <a href="https://www.facebook.com/kfannscleaningservices" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all hover:scale-110" aria-label="Facebook">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/fannscleaningservices/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all hover:scale-110" aria-label="Instagram">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://x.com/CleaningFann" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-black rounded-lg flex items-center justify-center transition-all hover:scale-110" aria-label="X (Twitter)">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@fannscleaningservices4308" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all hover:scale-110" aria-label="YouTube">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in animation-delay-200">
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { text: "Our Services", href: "#services" },
                  { text: "Get a Quote", href: "#contact" },
                  { text: "About Us", href: "/about" },
                  { text: "Blog", href: "/blog" }
                ].map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-slate-400 hover:text-blue-400 hover:translate-x-1 inline-block transition-all flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in animation-delay-400">
              <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3 hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Serving Tomball, Magnolia, Conroe, Willis, Cypress, The Woodlands, Spring, and Pinehurst, TX</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+13465880262" className="hover:text-blue-400 transition-colors">(346) 588-0262</a>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:fannsclean23@gmail.com" className="hover:text-blue-400 transition-colors">fannsclean23@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p className="mb-2 text-slate-400">© {new Date().getFullYear()} Fann's Cleaning Services. All rights reserved.</p>
            <p className="text-slate-500">
              Website crafted by{" "}
              <a
                href="https://nolawebdevelopment.com"
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
