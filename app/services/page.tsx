import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Fann\'s Cleaning',
  description: 'Explore our comprehensive cleaning services including residential, commercial, deep cleaning, and more in Tomball, TX.',
};

export default function ServicesPage() {
  const services = [
    {
      title: "Residential Cleaning",
      icon: "🏠",
      description: "Transform your home into a pristine sanctuary with our comprehensive residential cleaning services.",
      features: [
        "Regular weekly or bi-weekly cleaning",
        "Kitchen and bathroom deep cleaning",
        "Dusting and vacuuming all areas",
        "Floor mopping and sanitizing",
        "Trash removal",
        "Customized cleaning plans"
      ],
      ideal: "Perfect for busy families, working professionals, or anyone who values a clean home environment."
    },
    {
      title: "Commercial Cleaning",
      icon: "🏢",
      description: "Maintain a professional, healthy workspace that impresses clients and boosts employee morale.",
      features: [
        "Office and workspace cleaning",
        "Restroom sanitization",
        "Break room and kitchen cleaning",
        "Floor care and maintenance",
        "Window and glass cleaning",
        "After-hours service available"
      ],
      ideal: "Ideal for offices, retail stores, medical facilities, and small businesses."
    },
    {
      title: "Deep Cleaning",
      icon: "✨",
      description: "Our most thorough service that tackles every nook and cranny for a truly spotless space.",
      features: [
        "Intensive cleaning of all surfaces",
        "Baseboard and trim cleaning",
        "Inside appliances (oven, fridge, microwave)",
        "Cabinet interior/exterior cleaning",
        "Detailed bathroom scrubbing",
        "Window sill and blind cleaning"
      ],
      ideal: "Great for spring cleaning, preparing for special events, or annual maintenance."
    },
    {
      title: "Move In/Move Out Cleaning",
      icon: "📦",
      description: "Make your transition smooth with our comprehensive move cleaning services.",
      features: [
        "Complete property cleaning top to bottom",
        "Cabinet and closet cleaning",
        "Appliance cleaning inside and out",
        "Wall spot cleaning",
        "Floor deep cleaning",
        "Final walkthrough inspection"
      ],
      ideal: "Essential for landlords, property managers, homebuyers, and sellers."
    },
    {
      title: "Post-Construction Cleaning",
      icon: "🔨",
      description: "Remove construction dust and debris to reveal your beautiful new or renovated space.",
      features: [
        "Construction dust removal",
        "Window and frame cleaning",
        "Floor cleaning and polishing",
        "Paint splatter removal",
        "Fixture and appliance cleaning",
        "Debris removal and disposal"
      ],
      ideal: "Perfect after renovations, remodeling projects, or new construction."
    },
    {
      title: "Specialty Cleaning",
      icon: "⭐",
      description: "Customized cleaning solutions for unique situations and special requirements.",
      features: [
        "Event cleanup (before/after)",
        "Seasonal cleaning services",
        "Carpet and upholstery cleaning",
        "Window washing",
        "Organization assistance",
        "Custom service packages"
      ],
      ideal: "For unique situations, special events, or specific cleaning needs."
    }
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-50">
            Professional cleaning solutions tailored to your specific needs. From routine maintenance to deep cleaning, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-5xl">{service.icon}</span>
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 text-lg mb-6">{service.description}</p>

                  <h3 className="font-bold text-gray-900 mb-3 text-lg">What's Included:</h3>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-blue-700">Ideal for:</span> {service.ideal}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="block text-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Simple Process
            </h2>
            <p className="text-xl text-gray-600">
              Getting started with Fann's Cleaning is easy
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Request a Quote",
                description: "Contact us online or by phone to describe your cleaning needs"
              },
              {
                step: "02",
                title: "Get Your Estimate",
                description: "Receive a transparent, no-obligation quote within 24 hours"
              },
              {
                step: "03",
                title: "Schedule Service",
                description: "Choose a convenient time that fits your schedule"
              },
              {
                step: "04",
                title: "Enjoy Clean Spaces",
                description: "Relax while our professional team transforms your space"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-block bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Guarantees
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Satisfaction Guaranteed",
                description: "If you're not completely satisfied, we'll return and re-clean at no additional cost."
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: "Fully Insured",
                description: "Your property is protected. We carry comprehensive insurance for your peace of mind."
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Trusted Team",
                description: "All our cleaners are background-checked, trained professionals you can trust in your space."
              }
            ].map((guarantee, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="text-blue-600 flex justify-center mb-4">{guarantee.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{guarantee.title}</h3>
                <p className="text-gray-600">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-10 text-blue-50">
            Contact us today for a free, no-obligation quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-700 font-bold px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Request a Quote
            </Link>
            <a
              href="tel:1234567890"
              className="inline-block bg-blue-700 text-white font-bold px-10 py-4 rounded-lg border-2 border-white hover:bg-blue-600 transition-all duration-300"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
