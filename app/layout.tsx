import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://fanns-cleaning.vercel.app'),
  title: "Professional Cleaning Services in Tomball, Magnolia, The Woodlands TX | Fann's Cleaning",
  description: "Expert cleaning services in Tomball, Magnolia & The Woodlands TX. 10+ years experience. Residential, commercial & deep cleaning. Pet-friendly. Call (346) 588-0262",
  keywords: "cleaning services Tomball TX, house cleaning Tomball, maid service Tomball, cleaning services Magnolia TX, cleaning services The Woodlands, cleaning services Conroe, cleaning services Willis, cleaning services Cypress, cleaning services Spring TX, cleaning services Pinehurst, residential cleaning Montgomery County, commercial cleaning Tomball, office cleaning The Woodlands, deep cleaning services, move out cleaning, move in cleaning, pet friendly cleaning, eco-friendly cleaning products, professional cleaners near me, house cleaning service near me, Montgomery County cleaning services, affordable cleaning services Texas",
  authors: [{ name: "Fann's Cleaning Services" }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Professional Cleaning Services - Tomball, Magnolia, The Woodlands & More | Fann's Cleaning",
    description: "Over 10 years delivering spotless homes & offices in Montgomery County. Pet-friendly products, transparent pricing, personalized service. Trusted by 500+ clients. Call (346) 588-0262 today!",
    url: "https://fanns-cleaning.vercel.app",
    siteName: "Fann's Cleaning Services",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Professional cleaning service - spotless home interior in Tomball TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Cleaning Services | Tomball, Magnolia, The Woodlands TX",
    description: "10+ years experience. Pet-friendly. 500+ satisfied clients. Residential & Commercial Cleaning. Serving Montgomery County & surrounding areas. Free quotes!",
    images: ["https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=630&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://fanns-cleaning.vercel.app',
    name: "Fann's Cleaning Services",
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=630&fit=crop',
    description: 'Professional cleaning services for homes and businesses in Tomball, Magnolia, Conroe, Willis, Cypress, The Woodlands, Spring, and Pinehurst, TX. Over 10 years of experience with pet-friendly products.',
    founder: {
      '@type': 'Person',
      name: 'Courtney Gordy'
    },
    publisher: {
      '@type': 'Organization',
      name: "Fann's Cleaning Services",
      logo: {
        '@type': 'ImageObject',
        url: 'https://fanns-cleaning.vercel.app/logo.png'
      }
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tomball',
      addressRegion: 'TX',
      postalCode: '77375',
      addressCountry: 'US'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Tomball'
      },
      {
        '@type': 'City',
        name: 'Magnolia'
      },
      {
        '@type': 'City',
        name: 'Conroe'
      },
      {
        '@type': 'City',
        name: 'Willis'
      },
      {
        '@type': 'City',
        name: 'Cypress'
      },
      {
        '@type': 'City',
        name: 'The Woodlands'
      },
      {
        '@type': 'City',
        name: 'Spring'
      },
      {
        '@type': 'City',
        name: 'Pinehurst'
      }
    ],
    telephone: '+1-346-588-0262',
    email: 'fannsclean23@gmail.com',
    url: 'https://fanns-cleaning.vercel.app',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '500'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '15:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/fannscleaningservices',
      'https://www.instagram.com/fannscleaningservices'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cleaning Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Cleaning',
            description: 'Professional home cleaning services including routine maintenance, deep cleaning, and move-in/move-out cleaning'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Cleaning',
            description: 'Office and business cleaning services for professional environments'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Deep Cleaning',
            description: 'Intensive cleaning services for kitchens, bathrooms, carpets, and complete home sanitization'
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
