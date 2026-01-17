'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    propertyType: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend or email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        propertyType: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=1920&q=80"
            alt="Contact us"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Ready for a cleaner space? Contact us today for a free quote!
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Request a Free Quote
              </h2>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  Thank you! We'll get back to you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Cleaning</option>
                      <option value="commercial">Commercial Cleaning</option>
                      <option value="deep">Deep Cleaning</option>
                      <option value="move">Move In/Out</option>
                      <option value="construction">Post-Construction</option>
                      <option value="specialty">Specialty Cleaning</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Property Type *
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      required
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select property type</option>
                      <option value="apartment">Apartment</option>
                      <option value="house">House</option>
                      <option value="office">Office</option>
                      <option value="retail">Retail Space</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your cleaning needs, property size, preferred schedule, or any special requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Send Request
                </button>

                <p className="text-sm text-gray-600 text-center">
                  We typically respond within 24 hours
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl shadow-2xl p-8 lg:p-10 mb-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <Image
                    src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?w=800&q=80"
                    alt="Contact"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative">
                  <h2 className="text-4xl font-bold mb-8">
                    Contact Information
                  </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:1234567890" className="text-blue-100 hover:text-white transition">
                        (123) 456-7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@fannscleaning.com" className="text-blue-100 hover:text-white transition">
                        info@fannscleaning.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-blue-100">
                        Tomball, TX<br />
                        Serving Tomball and surrounding areas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-white bg-opacity-20 rounded-lg p-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-blue-100">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </div>

              {/* Service Area Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Service Area
                </h3>
                <p className="text-gray-700 mb-4">
                  We proudly serve Tomball and the surrounding communities including:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Tomball
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Spring
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Magnolia
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    The Woodlands
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Cypress
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Klein
                  </li>
                </ul>
                <p className="text-sm text-gray-600 mt-4">
                  Don't see your area? Contact us - we may still be able to help!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How do you determine pricing?",
                a: "We provide custom quotes based on property size, service type, and frequency. Request a free quote to get an accurate estimate for your specific needs."
              },
              {
                q: "Do I need to be home during the cleaning?",
                a: "It's not necessary! Many clients provide access and go about their day. We're fully insured and trustworthy."
              },
              {
                q: "What if I'm not satisfied with the cleaning?",
                a: "Your satisfaction is our priority. If you're not happy with any area, let us know within 24 hours and we'll return to make it right at no extra cost."
              },
              {
                q: "Do you bring your own cleaning supplies?",
                a: "Yes! We bring all necessary supplies and equipment. If you prefer we use specific products, just let us know."
              },
              {
                q: "How far in advance should I book?",
                a: "We recommend booking 3-5 days in advance, though we can often accommodate last-minute requests depending on availability."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
