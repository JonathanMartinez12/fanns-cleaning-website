'use client'

import Link from 'next/link'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: '', message: '' })

    try {
      await emailjs.send(
        'service_01fq3n9',
        'template_o9fnul9',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          to_name: "Fann's Cleaning"
        },
        '9WWqIJU2uuaFXD'
      )

      setFormStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon!'
      })

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setFormStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or call us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition">
              Fann's Cleaning ✨
            </Link>

            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition font-semibold">Home</Link>
              <Link href="#services" className="text-gray-700 hover:text-blue-600 transition font-semibold">Services</Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition font-semibold">About</Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition font-semibold">Contact</Link>
            </div>

            <a href="tel:+12815551234" className="hidden md:block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold">
              📞 (281) 555-1234
            </a>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="block text-gray-700 hover:text-blue-600 font-semibold py-2">Home</Link>
              <Link href="#services" className="block text-gray-700 hover:text-blue-600 font-semibold py-2">Services</Link>
              <Link href="#about" className="block text-gray-700 hover:text-blue-600 font-semibold py-2">About</Link>
              <Link href="#contact" className="block text-gray-700 hover:text-blue-600 font-semibold py-2">Contact</Link>
              <a href="tel:+12815551234" className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-center font-bold">📞 Call Now</a>
            </div>
          </div>
        )}
      </nav>

      <a href="tel:+12815551234" className="md:hidden fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-5 rounded-full shadow-2xl z-50 hover:scale-110 transition-all animate-pulse">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
                Professional <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Cleaning Services</span> in Tomball, TX
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Transform your space with Tomball's most trusted cleaning service. Residential, commercial, and specialty cleaning with eco-friendly products.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                  <span className="text-2xl">✓</span>
                  <span className="font-semibold text-gray-700">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                  <span className="text-2xl">⭐</span>
                  <span className="font-semibold text-gray-700">5-Star Rated</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
                  <span className="text-2xl">🌿</span>
                  <span className="font-semibold text-gray-700">Eco-Friendly</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center">
                  Get Free Quote →
                </a>
                <a href="tel:+12815551234" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 text-center">
                  📞 Call Now
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-3xl shadow-2xl p-8">
                <div className="bg-white rounded-2xl p-8 space-y-6">
                  <div className="text-6xl text-center">🏠✨</div>
                  <div className="text-center space-y-4">
                    <div className="text-2xl font-bold text-gray-900">Why Choose Us?</div>
                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">🕐</span>
                        <span className="text-gray-700 font-medium">Flexible Scheduling</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">💰</span>
                        <span className="text-gray-700 font-medium">Affordable Pricing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">👥</span>
                        <span className="text-gray-700 font-medium">Trained Professionals</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-xl text-gray-600">
              Professional cleaning solutions for every need in Tomball
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏡",
                title: "Residential Cleaning",
                features: ["Kitchen & Bathrooms", "Dusting & Vacuuming", "Window Cleaning"]
              },
              {
                icon: "🏢",
                title: "Commercial Cleaning",
                features: ["Office Cleaning", "Floor Care", "Restroom Sanitization"]
              },
              {
                icon: "✨",
                title: "Specialty Services",
                features: ["Carpet Shampooing", "Pressure Washing", "Post-Construction"]
              }
            ].map((service, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-blue-600">✓</span>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "500+", label: "Happy Clients" },
              { number: "100%", label: "Satisfaction Rate" },
              { number: "24/7", label: "Customer Support" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl md:text-6xl font-black">{stat.number}</div>
                <div className="text-xl font-semibold mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", text: "Best cleaning service in Tomball! Professional and thorough.", rating: 5 },
              { name: "Mike Rodriguez", text: "Always on time and do an excellent job. Highly recommend!", rating: 5 },
              { name: "Emily Chen", text: "Fantastic service! Our office has never looked better.", rating: 5 }
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{review.text}&rdquo;</p>
                <div className="font-bold text-gray-900">— {review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black">
            Ready for a Spotless Space?
          </h2>
          <p className="text-xl md:text-2xl">
            Get your free quote today!
          </p>

          <div className="bg-white rounded-3xl p-8 shadow-2xl text-left max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-gray-900"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-gray-900"
                    placeholder="(281) 555-1234"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-gray-900"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="carpet">Carpet Shampooing</option>
                    <option value="pressure">Pressure Washing</option>
                    <option value="post-construction">Post-Construction</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition text-gray-900 resize-none"
                  placeholder="Tell us about your cleaning needs..."
                ></textarea>
              </div>

              {formStatus.message && (
                <div className={`p-4 rounded-lg ${
                  formStatus.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {formStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+12815551234" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
              📞 Call (281) 555-1234
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Fann's Cleaning
          </h3>
          <p className="text-gray-400 mb-4">Professional cleaning services in Tomball, Texas</p>
          <div className="border-t border-gray-800 pt-8 mt-8">
            <p className="text-gray-400">© {new Date().getFullYear()} Fann's Cleaning Service. All rights reserved.</p>
            <p className="mt-2">
              Website by <a href="https://nolawebdev.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition">NOLA Web Development</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
