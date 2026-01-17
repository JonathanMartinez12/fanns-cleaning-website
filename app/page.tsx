'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden min-h-[600px]">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
            alt="Clean modern home"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/80"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <span className="bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold border border-blue-400/30">
                Trusted by 500+ Happy Clients
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Premium Cleaning
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Services You Trust
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed">
              Experience exceptional cleaning services for your home or business in Tomball, TX.
              Professional, reliable, and meticulous attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-900 font-bold px-10 py-5 rounded-xl shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 text-lg text-center"
              >
                Get Free Quote →
              </Link>
              <Link
                href="/services"
                className="inline-block bg-transparent text-white font-bold px-10 py-5 rounded-xl border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-lg text-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-gray-600 font-medium">Spaces Cleaned</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SHOWCASE */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive cleaning solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Residential Cleaning",
                description: "Transform your home into a pristine sanctuary with our thorough residential cleaning services.",
                image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
                features: ["Regular Cleaning", "Deep Cleaning", "Move In/Out"]
              },
              {
                title: "Commercial Cleaning",
                description: "Maintain a professional workspace that impresses clients and boosts employee morale.",
                image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
                features: ["Office Cleaning", "Retail Spaces", "After Hours"]
              },
              {
                title: "Deep Cleaning",
                description: "Intensive top-to-bottom cleaning that tackles every corner for a spotless result.",
                image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80",
                features: ["Kitchen Deep Clean", "Bathroom Scrub", "Appliances"]
              },
              {
                title: "Specialty Services",
                description: "Custom cleaning solutions for unique situations and special requirements.",
                image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80",
                features: ["Post-Construction", "Event Cleanup", "Window Washing"]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-blue-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80"
                alt="Professional cleaner at work"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Why Choose<br />Fann's Cleaning?
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                We're not just another cleaning service. We're your partner in maintaining
                a healthy, beautiful space that you're proud of.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: "✓",
                    title: "100% Satisfaction Guaranteed",
                    description: "Not happy? We'll return and re-clean at no extra cost."
                  },
                  {
                    icon: "🛡️",
                    title: "Fully Insured & Bonded",
                    description: "Your property is protected with comprehensive insurance."
                  },
                  {
                    icon: "🌿",
                    title: "Eco-Friendly Products",
                    description: "Safe for your family, pets, and the environment."
                  },
                  {
                    icon: "⭐",
                    title: "Trained Professionals",
                    description: "Background-checked team with years of experience."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Happy clients"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-blue-100">
              Real reviews from real people
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Homeowner, Spring TX",
                text: "Fann's Cleaning transformed my home! Their attention to detail is incredible. I love coming home to a sparkling clean house every week.",
                rating: 5
              },
              {
                name: "Mike Rodriguez",
                role: "Business Owner, Tomball TX",
                text: "Our office has never looked better. The team is professional, reliable, and always exceeds expectations. Highly recommend!",
                rating: 5
              },
              {
                name: "Emily Chen",
                role: "Property Manager",
                text: "I manage multiple properties and Fann's Cleaning is my go-to. They're dependable, thorough, and fairly priced. Absolute lifesavers!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg mb-6 text-blue-50 leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-white/20 pt-6">
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-blue-200">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER GALLERY */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              See The Difference
            </h2>
            <p className="text-xl text-gray-600">
              Quality results that speak for themselves
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
              "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
              "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
            ].map((image, index) => (
              <div
                key={index}
                className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow group cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Cleaning result ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-lg font-bold">Professional Results</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1581578949510-fa7315c4c350?w=800&q=80"
                  alt="Contact us"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-12 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready for a Cleaner Space?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Get your free quote today and experience the Fann's Cleaning difference
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-blue-900 font-bold px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg text-center"
                >
                  Request Free Quote →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
