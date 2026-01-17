import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Fann\'s Cleaning',
  description: 'Learn about Fann\'s Cleaning Services - our story, values, and commitment to providing exceptional cleaning services in Tomball, TX.',
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&q=80"
            alt="About Fann's Cleaning"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Fann's Cleaning
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Your trusted partner for professional cleaning services in Tomball, TX
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Our story"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-xl leading-relaxed">
              Fann's Cleaning Services was founded with a simple mission: to provide exceptional cleaning services that transform spaces and improve lives. What started as a small, family-owned operation has grown into one of Tomball's most trusted cleaning service providers.
            </p>

            <p className="text-lg leading-relaxed">
              We understand that your home or business is more than just a space – it's where you live, work, and create memories. That's why we approach every cleaning job with the same care and attention to detail we'd want for our own spaces. Our team takes pride in delivering consistent, high-quality results that exceed expectations.
            </p>

            <p className="text-lg leading-relaxed">
              Over the years, we've built lasting relationships with our clients based on trust, reliability, and exceptional service. We're not just cleaners – we're your neighbors, committed to making Tomball a cleaner, healthier place for everyone.
            </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: "Excellence",
                description: "We're committed to delivering the highest quality cleaning services, paying attention to every detail."
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: "Trust",
                description: "We earn your trust through reliability, honesty, and respect for your property and privacy."
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Sustainability",
                description: "We use eco-friendly products and practices to protect your health and the environment."
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Integrity",
                description: "We do the right thing, even when no one is watching. Transparency and honesty in all we do."
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Reliability",
                description: "We show up on time, every time. Consistent service you can count on."
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Care",
                description: "We treat every space as if it were our own, with genuine care and dedication."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-blue-600 mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Fann's Cleaning?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Local & Family-Owned",
                    description: "As a local business, we're invested in our community. Your satisfaction directly impacts our reputation."
                  },
                  {
                    title: "Experienced Professionals",
                    description: "Our team consists of trained, vetted professionals with years of experience in residential and commercial cleaning."
                  },
                  {
                    title: "Flexible Scheduling",
                    description: "We work around your schedule, offering services 6 days a week with convenient time slots."
                  },
                  {
                    title: "Customized Solutions",
                    description: "Every space is unique. We tailor our services to meet your specific needs and preferences."
                  },
                  {
                    title: "Competitive Pricing",
                    description: "Premium quality doesn't have to mean premium prices. We offer fair, transparent pricing with no hidden fees."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl">
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <p className="text-gray-700 font-semibold">Happy Clients</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
                  <p className="text-gray-700 font-semibold">Successful Cleanings</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                  <p className="text-gray-700 font-semibold">Years of Experience</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                  <p className="text-gray-700 font-semibold">Satisfaction Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-blue-50">
              Dedicated professionals committed to your satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Fann",
                role: "Founder & CEO",
                description: "With over 15 years in the cleaning industry, Maria founded Fann's Cleaning to bring professional, reliable service to Tomball."
              },
              {
                name: "James Rodriguez",
                role: "Operations Manager",
                description: "James ensures every cleaning meets our high standards and coordinates our amazing team of cleaning professionals."
              },
              {
                name: "Sarah Chen",
                role: "Customer Success Lead",
                description: "Sarah makes sure every client is happy, handling scheduling, special requests, and ensuring smooth communication."
              }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-blue-300 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
                  👤
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">{member.name}</h3>
                <p className="text-blue-200 text-center mb-4 font-semibold">{member.role}</p>
                <p className="text-blue-50 text-center">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-xl text-gray-600">
              Proud members and certified professionals
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Fully Insured", icon: "🛡️" },
              { title: "Licensed & Bonded", icon: "✓" },
              { title: "Chamber of Commerce", icon: "🏛️" },
              { title: "Eco-Certified", icon: "🌿" }
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className="font-bold text-gray-900">{cert.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join hundreds of satisfied clients who trust Fann's Cleaning for all their cleaning needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white font-bold px-10 py-4 rounded-lg shadow-xl hover:bg-blue-700 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Get Free Quote
            </Link>
            <Link
              href="/services"
              className="inline-block bg-gray-100 text-gray-900 font-bold px-10 py-4 rounded-lg hover:bg-gray-200 transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
