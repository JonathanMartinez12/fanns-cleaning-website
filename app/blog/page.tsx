import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cleaning Tips & Blog | Fann\'s Cleaning',
  description: 'Expert cleaning tips, tricks, and advice from Fann\'s Cleaning. Learn how to maintain a spotless home or office.',
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Spring Cleaning Tips for Your Home",
      excerpt: "Spring is the perfect time to give your home a fresh start. Discover our top 10 tips for an efficient and thorough spring cleaning that will leave your home sparkling.",
      category: "Home Tips",
      date: "January 15, 2026",
      readTime: "5 min read",
      image: "🌸"
    },
    {
      id: 2,
      title: "How Often Should You Deep Clean Your Home?",
      excerpt: "Regular cleaning is important, but deep cleaning is essential. Learn about the ideal frequency for deep cleaning different areas of your home to maintain a healthy environment.",
      category: "Maintenance",
      date: "January 10, 2026",
      readTime: "4 min read",
      image: "🧹"
    },
    {
      id: 3,
      title: "Eco-Friendly Cleaning: Better for You and the Planet",
      excerpt: "Discover how eco-friendly cleaning products and methods can create a healthier home environment while reducing your environmental impact.",
      category: "Green Living",
      date: "January 5, 2026",
      readTime: "6 min read",
      image: "🌿"
    },
    {
      id: 4,
      title: "Office Cleaning: Boosting Productivity Through Cleanliness",
      excerpt: "A clean office is a productive office. Learn how maintaining a spotless workspace can improve employee morale, health, and overall productivity.",
      category: "Commercial",
      date: "December 28, 2025",
      readTime: "5 min read",
      image: "💼"
    },
    {
      id: 5,
      title: "The Ultimate Guide to Move-Out Cleaning",
      excerpt: "Moving out? Don't lose your deposit! Our comprehensive guide covers everything you need to know about move-out cleaning to get your full deposit back.",
      category: "Moving",
      date: "December 20, 2025",
      readTime: "7 min read",
      image: "📦"
    },
    {
      id: 6,
      title: "Kitchen Deep Cleaning: A Room-by-Room Guide",
      excerpt: "The kitchen is the heart of the home and requires special attention. Follow our detailed guide to achieve a restaurant-quality clean in your kitchen.",
      category: "Home Tips",
      date: "December 15, 2025",
      readTime: "8 min read",
      image: "🍳"
    },
    {
      id: 7,
      title: "5 Signs It's Time to Hire Professional Cleaners",
      excerpt: "Wondering if you need professional cleaning services? Here are 5 clear signs that it's time to bring in the experts.",
      category: "Professional Services",
      date: "December 10, 2025",
      readTime: "4 min read",
      image: "✨"
    },
    {
      id: 8,
      title: "Bathroom Cleaning Hacks for Busy Families",
      excerpt: "Keep your bathroom fresh and clean even with a hectic schedule. These time-saving hacks will help you maintain a spotless bathroom effortlessly.",
      category: "Home Tips",
      date: "December 5, 2025",
      readTime: "5 min read",
      image: "🚿"
    },
    {
      id: 9,
      title: "Post-Construction Cleaning: What You Need to Know",
      excerpt: "Construction projects create unique cleaning challenges. Learn the best practices for post-construction cleaning to reveal your beautiful new space.",
      category: "Specialty Cleaning",
      date: "November 28, 2025",
      readTime: "6 min read",
      image: "🔨"
    }
  ];

  const categories = ["All", "Home Tips", "Commercial", "Green Living", "Moving", "Professional Services", "Specialty Cleaning"];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Cleaning Tips & Insights
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-50">
            Expert advice, practical tips, and industry insights to help you maintain a cleaner, healthier space
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-gray-50 py-8 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-white text-gray-700 font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="flex items-center justify-center text-9xl">
                {blogPosts[0].image}
              </div>
              <div className="flex flex-col justify-center">
                <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 w-fit">
                  Featured Post
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                  <span>{blogPosts[0].date}</span>
                  <span>•</span>
                  <span>{blogPosts[0].readTime}</span>
                  <span>•</span>
                  <span className="text-blue-600 font-semibold">{blogPosts[0].category}</span>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].id}`}
                  className="inline-block bg-blue-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-fit"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 h-48 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                  {post.image}
                </div>
                <div className="p-6">
                  <span className="inline-block text-blue-600 text-sm font-semibold mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Get Cleaning Tips Delivered to Your Inbox
          </h2>
          <p className="text-xl text-blue-50 mb-10">
            Subscribe to our newsletter for exclusive cleaning tips, special offers, and updates
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-blue-200 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Need Professional Cleaning Services?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Let us handle the cleaning while you focus on what matters most
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white font-bold px-12 py-5 rounded-lg shadow-xl hover:bg-blue-700 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            Request Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
