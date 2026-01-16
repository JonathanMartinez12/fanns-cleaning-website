'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',     // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',    // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'      // Replace with your EmailJS public key
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold text-blue-600">
              Fann's Cleaning Service
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>
            <a 
              href="tel:+12815551234" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Call Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Professional Cleaning Services in Tomball, Texas
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Trusted by families and businesses across Tomball for spotless, reliable cleaning services. 
                Your home deserves the best care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-center"
                >
                  Get Free Quote
                </a>
                <a 
                  href="#services" 
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition font-semibold text-center"
                >
                  Our Services
                </a>
              </div>
              
              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">Eco-Friendly</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">100% Satisfaction</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🏠</span>
                    <div>
                      <div className="font-semibold">Local & Trusted</div>
                      <div className="text-blue-100">Serving Tomball for over 10 years</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">⭐</span>
                    <div>
                      <div className="font-semibold">5-Star Rated</div>
                      <div className="text-blue-100">Hundreds of happy customers</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">💰</span>
                    <div>
                      <div className="font-semibold">Affordable Pricing</div>
                      <div className="text-blue-100">Transparent, no hidden fees</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🕐</span>
                    <div>
                      <div className="font-semibold">Flexible Scheduling</div>
                      <div className="text-blue-100">We work around your schedule</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive cleaning solutions for every need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Residential Cleaning */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🏡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Residential Cleaning</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Regular house cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Deep cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Move-in/move-out cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Kitchen & bathroom sanitization</span>
                </li>
              </ul>
            </div>

            {/* Commercial Cleaning */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Cleaning</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Office cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Retail space cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Post-construction cleanup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Medical facility cleaning</span>
                </li>
              </ul>
            </div>

            {/* Specialty Services */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialty Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Carpet & upholstery cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Window washing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Pressure washing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Event cleanup</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Fann's Cleaning Service
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                For over a decade, Fann's Cleaning Service has been Tomball's trusted choice for 
                professional cleaning. We're a family-owned business that treats every home and 
                office like our own.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of trained professionals uses eco-friendly products and proven techniques 
                to deliver exceptional results every time. We're fully licensed, insured, and 
                committed to your satisfaction.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 text-center shadow">
                  <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center shadow">
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Area</h3>
              <p className="text-gray-600 mb-6">
                We proudly serve Tomball and surrounding areas including:
              </p>
              <ul className="grid grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">📍</span>
                  <span>Tomball</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">📍</span>
                  <span>Magnolia</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">📍</span>
                  <span>Spring</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">📍</span>
                  <span>The Woodlands</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">📍</span>
                  <span>Cypress</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">📍</span>
                  <span>Klein</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get Your Free Quote Today
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  placeholder="(281) 555-1234"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Service Needed *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Cleaning</option>
                  <option value="commercial">Commercial Cleaning</option>
                  <option value="deep">Deep Cleaning</option>
                  <option value="move">Move In/Out Cleaning</option>
                  <option value="carpet">Carpet Cleaning</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                placeholder="Tell us about your cleaning needs..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Get Free Quote'}
            </button>

            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                ✓ Message sent successfully! We'll contact you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
                ✗ Failed to send message. Please try again or call us directly.
              </div>
            )}
          </form>

          {/* Contact Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="text-3xl mb-3">📞</div>
              <div className="font-semibold text-gray-900 mb-1">Call Us</div>
              <a href="tel:+12815551234" className="text-blue-600 hover:underline">
                (281) 555-1234
              </a>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="text-3xl mb-3">📧</div>
              <div className="font-semibold text-gray-900 mb-1">Email Us</div>
              <a href="mailto:info@fannscleaning.com" className="text-blue-600 hover:underline">
                info@fannscleaning.com
              </a>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="text-3xl mb-3">📍</div>
              <div className="font-semibold text-gray-900 mb-1">Location</div>
              <div className="text-gray-600">Tomball, TX 77375</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4">Fann's Cleaning Service</div>
          <p className="text-gray-400 mb-6">
            Professional cleaning services in Tomball, Texas
          </p>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Fann's Cleaning Service. All rights reserved.
            <span className="mx-2">|</span>
            <a 
              href="https://nolawebdev.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              Website by NOLA Web Development
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}