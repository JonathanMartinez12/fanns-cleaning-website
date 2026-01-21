'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BlogPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blogPosts = [
    {
      title: "10 Essential Spring Cleaning Tips for Texas Homes",
      excerpt: "Spring is the perfect time to refresh your home. Discover our top 10 tips for a thorough spring clean that will leave your space sparkling.",
      image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&h=600&fit=crop",
      date: "March 15, 2024",
      category: "Tips & Tricks",
      readTime: "5 min read"
    },
    {
      title: "The Ultimate Guide to Deep Cleaning Your Kitchen",
      excerpt: "From appliances to countertops, learn the professional techniques we use to make kitchens shine like new.",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
      date: "March 10, 2024",
      category: "Deep Cleaning",
      readTime: "8 min read"
    },
    {
      title: "Eco-Friendly Cleaning: Better for You, Better for Earth",
      excerpt: "Learn about the benefits of green cleaning products and why we use them exclusively in all our services.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
      date: "March 5, 2024",
      category: "Eco-Friendly",
      readTime: "6 min read"
    },
    {
      title: "How Often Should You Deep Clean Your Home?",
      excerpt: "Discover the optimal cleaning schedule for different areas of your home to maintain a healthy, pristine living space.",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      date: "February 28, 2024",
      category: "Home Care",
      readTime: "4 min read"
    },
    {
      title: "Office Cleaning: Why It Matters More Than You Think",
      excerpt: "A clean office isn't just about appearances. Learn how professional cleaning boosts productivity and employee health.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
      date: "February 20, 2024",
      category: "Commercial",
      readTime: "7 min read"
    },
    {
      title: "Allergy Season in Texas: Cleaning Tips to Breathe Easier",
      excerpt: "Combat allergens with these professional cleaning techniques designed for Texas allergy season.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      date: "February 15, 2024",
      category: "Health",
      readTime: "5 min read"
    }
  ];

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
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-slate-900 transition-colors">
                Fann's Cleaning
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <Link href="/#services" className="font-semibold text-gray-700 hover:text-emerald-600 hover:scale-105 transition-all">
                Services
              </Link>
              <Link href="/about" className="font-semibold text-gray-700 hover:text-emerald-600 hover:scale-105 transition-all">
                About
              </Link>
              <Link href="/blog" className="font-semibold text-emerald-600 hover:scale-105 transition-all">
                Blog
              </Link>
              <Link href="/#testimonials" className="font-semibold text-gray-700 hover:text-emerald-600 hover:scale-105 transition-all">
                Testimonials
              </Link>
              <Link href="/#contact" className="font-semibold text-gray-700 hover:text-emerald-600 hover:scale-105 transition-all">
                Contact
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+13465880262"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="hidden xl:inline">(346) 588-0262</span>
                <span className="xl:hidden">Call</span>
              </a>
              <Link
                href="/#contact"
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>

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

          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 py-4 bg-white rounded-2xl shadow-2xl animate-slide-down">
              <div className="flex flex-col space-y-4 px-4">
                <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-semibold hover:text-emerald-600 hover:translate-x-2 transition-all py-2">
                  Services
                </Link>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-semibold hover:text-emerald-600 hover:translate-x-2 transition-all py-2">
                  About
                </Link>
                <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-emerald-600 font-semibold py-2">
                  Blog
                </Link>
                <Link href="/#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-semibold hover:text-emerald-600 hover:translate-x-2 transition-all py-2">
                  Testimonials
                </Link>
                <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 font-semibold hover:text-emerald-600 hover:translate-x-2 transition-all py-2">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white py-40 mt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&h=600&fit=crop"
            alt="Blog"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-indigo-900/90"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
            TIPS & INSIGHTS
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Cleaning Blog
          </h1>
          <p className="text-2xl text-blue-100">
            Expert tips, guides, and insights for a cleaner, healthier space
          </p>
        </div>
      </section>

      {/* BLOG POSTS */}
      <section className="py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <article
                key={i}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      📅 {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      ⏱️ {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:gap-3 transition-all"
                  >
                    Read More
                    <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Fann's Cleaning</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Professional cleaning services for homes and businesses in Tomball, Magnolia, Conroe, Willis, Cypress, The Woodlands, Spring, and Pinehurst, TX.
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
                  <span>Serving Tomball, Magnolia, Conroe, Willis, Cypress, The Woodlands, Spring, and Pinehurst, TX</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📞</span>
                  <a href="tel:+13465880262" className="hover:text-white transition">(346) 588-0262</a>
                </li>
                <li className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:fannsclean23@gmail.com" className="hover:text-white transition">fannsclean23@gmail.com</a>
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
