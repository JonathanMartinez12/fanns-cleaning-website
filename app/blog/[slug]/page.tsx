'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getBlogPostBySlug } from '../blogData';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPostBySlug(slug);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // If post not found, show 404-like message
  if (!post) {
    return (
      <main className="bg-white text-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link
            href="/blog"
            className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

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

      {/* HERO IMAGE AND TITLE */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white py-32 mt-20">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-indigo-900/80"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 font-semibold mb-6 transition-colors"
          >
            <span>←</span> Back to Blog
          </Link>

          <div className="inline-block px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold mb-4">
            {post.category}
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-blue-100">
            <span className="flex items-center gap-2">
              📅 {post.date}
            </span>
            <span className="flex items-center gap-2">
              ⏱️ {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* BLOG CONTENT */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              {post.content.introduction}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-10">
            {post.content.sections.map((section, index) => (
              <div key={index} className="border-l-4 border-emerald-500 pl-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {section.content}
                </p>
                {section.items && (
                  <ul className="space-y-2 ml-4">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="text-emerald-600 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-12 p-8 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Final Thoughts
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {post.content.conclusion}
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center p-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready for a Spotless Space?
            </h3>
            <p className="text-xl mb-6 text-blue-100">
              Let Fann's Cleaning handle the hard work so you can focus on what matters most
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13465880262"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
              >
                Call (346) 588-0262
              </a>
              <Link
                href="/#contact"
                className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-700 hover:shadow-2xl hover:scale-105 transition-all"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-lg hover:gap-3 transition-all"
            >
              <span>←</span> View All Blog Posts
            </Link>
          </div>
        </div>
      </article>

      {/* FOOTER */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Fann's Cleaning</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Professional cleaning services for homes and businesses in Tomball, Magnolia, Conroe, Willis, Cypress, The Woodlands, Spring, and Pinehurst, TX.
              </p>
              {/* Social Media Links */}
              <div className="flex gap-3">
                <a href="https://www.facebook.com/kfannscleaningservices" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all hover:scale-110" aria-label="Facebook">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/fannscleaningservices/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all hover:scale-110" aria-label="Instagram">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://x.com/CleaningFann" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-black rounded-lg flex items-center justify-center transition-all hover:scale-110" aria-label="X (Twitter)">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@fannscleaningservices4308" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all hover:scale-110" aria-label="YouTube">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
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
                href="https://nolawebdevelopment.com"
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
