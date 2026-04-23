import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = 'https://fannscleaningservices.com';
const OG_IMAGE = `${SITE_URL}/livingroom.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cleaning Services Tomball, Magnolia & The Woodlands TX | Fann's Cleaning",
    template: "%s | Fann's Cleaning Services",
  },
  description:
    "Top-rated house, office & deep cleaning in Tomball, Magnolia, The Woodlands and Montgomery County TX. 10+ years, pet-friendly, 500+ 5-star reviews. Free quote: (346) 588-0262.",
  keywords: [
    "cleaning services Tomball TX",
    "house cleaning Magnolia TX",
    "maid service The Woodlands",
    "commercial cleaning Montgomery County",
    "deep cleaning Tomball",
    "move out cleaning Pinehurst TX",
    "janitorial services 77375",
    "pet-friendly cleaning Houston",
    "post-construction cleaning Tomball",
    "office cleaning The Woodlands TX",
  ],
  authors: [{ name: "Fann's Cleaning Services", url: SITE_URL }],
  creator: "Fann's Cleaning Services",
  publisher: "Fann's Cleaning Services",
  category: 'Home Services',
  applicationName: "Fann's Cleaning Services",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/fannlogo.png',
    shortcut: '/favicon.ico',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Cleaning Services Tomball, Magnolia & The Woodlands TX | Fann's Cleaning",
    description:
      "Trusted residential & commercial cleaning across Montgomery County. 10+ years, pet-friendly products, 500+ 5-star reviews. Call (346) 588-0262 for a free quote.",
    url: SITE_URL,
    siteName: "Fann's Cleaning Services",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Spotless living room cleaned by Fann's Cleaning Services in Tomball TX",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cleaning Services Tomball, Magnolia & The Woodlands TX | Fann's Cleaning",
    description:
      "10+ years cleaning homes & offices across Montgomery County. Pet-friendly, insured, 500+ five-star reviews. Free quotes: (346) 588-0262.",
    images: [OG_IMAGE],
    site: '@CleaningFann',
    creator: '@CleaningFann',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Tomball',
    'geo.position': '30.0933;-95.6163',
    ICBM: '30.0933, -95.6163',
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
    '@id': 'https://fannscleaningservices.com',
    name: "Fann's Cleaning Services",
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=630&fit=crop',
    description: 'Professional cleaning services for homes and businesses in Tomball, Magnolia, Conroe, Willis, Cypress, The Woodlands, Spring, and Pinehurst, TX. Affordable residential cleaning, commercial building cleaning, janitorial services, apartment cleaning, restaurant cleaning, construction cleaning, and move-in/move-out cleaning. Serving zip codes 77375, 77377, 77354, 77338 and surrounding areas. Over 10 years of experience with pet-friendly products.',
    founder: {
      '@type': 'Person',
      name: 'Courtney Gordy'
    },
    publisher: {
      '@type': 'Organization',
      name: "Fann's Cleaning Services",
      logo: {
        '@type': 'ImageObject',
        url: 'https://fannscleaningservices.com/logo.png'
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
    url: 'https://fannscleaningservices.com',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Michael M.' },
        reviewBody: "Needed a last minute clean of the house before the holidays. Kevin and his team made it quick and painless. The house was absolutely spotless. 10/10 recommended."
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Susan F.' },
        reviewBody: "I called to hire Fann's for a deep clean of my house. I have 3 hairy dogs and a lot of dust. They came within days and cleaned absolutely everything. My house is like brand new."
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Vickie M.' },
        reviewBody: "Fann's Cleaning Service is outstanding in every way. Not only are they professional but also pay attention to detail. Honest and extremely trustworthy."
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Rayne L.' },
        reviewBody: "I had a deep cleaning done. They took their time and literally cleaned my house from top to bottom. Fann Cleaning Service exceeded my expectations."
      },
      {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Person', name: 'Summer P.' },
        reviewBody: "We needed a deep clean of our house on short notice. They didn't hesitate to fit us in the day we needed it. Very accommodating. Our house looks new again."
      }
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.0933,
      longitude: -95.6163
    },
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Venmo, Zelle',
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
      'https://www.facebook.com/kfannscleaningservices',
      'https://www.instagram.com/fannscleaningservices/',
      'https://x.com/CleaningFann',
      'https://www.youtube.com/@fannscleaningservices4308'
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
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Move-In/Move-Out Cleaning',
            description: 'Thorough move in move out cleaning services for apartments and homes in Magnolia, Pinehurst, and surrounding TX areas'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Janitorial Services',
            description: 'Professional janitorial services for offices, restaurants, and commercial buildings in the 77377 and 77375 zip code areas'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Construction Cleaning',
            description: 'Post-construction and new construction cleaning services in Pinehurst TX and surrounding areas'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Apartment Cleaning',
            description: 'Affordable apartment cleaning services and residential house cleaning in Magnolia TX'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Restaurant Cleaning',
            description: 'Restaurant and light commercial cleaning services in the 77377 area'
          }
        }
      ]
    }
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What areas do you serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Fann's Cleaning Services serves Tomball, Magnolia, The Woodlands, Conroe, Willis, Cypress, Spring, and Pinehurst, TX, plus surrounding Montgomery County and North Harris County communities."
        }
      },
      {
        '@type': 'Question',
        name: 'How much does a house cleaning cost in Tomball or Magnolia TX?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pricing is based on the size of your home, level of cleaning (standard, deep, or move-in/move-out), and frequency. We provide free, transparent, no-obligation quotes — call (346) 588-0262 or request one on our website.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are your cleaning products pet-friendly and safe for kids?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We use pet-friendly, eco-conscious products that are safe for children, pets, and sensitive family members.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you bring your own cleaning supplies and equipment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We arrive fully equipped with professional-grade supplies and equipment. You do not need to provide anything.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you offer move-in and move-out cleaning?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Move-in and move-out cleaning is one of our most requested services in Magnolia, Tomball, Pinehurst, and The Woodlands. We deep clean the entire home so it is ready for the next resident or final walk-through.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are you insured?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, Fann's Cleaning Services is fully insured for your peace of mind."
        }
      },
      {
        '@type': 'Question',
        name: 'How soon can you schedule a cleaning?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We often accommodate same-week and last-minute cleanings depending on availability. Call (346) 588-0262 for the fastest scheduling.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you clean commercial offices and restaurants?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. In addition to residential cleaning we provide commercial, office, restaurant, janitorial, and post-construction cleaning across Montgomery County and North Harris County.'
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
