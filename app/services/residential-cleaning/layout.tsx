import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Cleaning Services | House Cleaning Tomball TX | Fann's Cleaning",
  description: "Professional residential cleaning services in Tomball, Magnolia & Montgomery County. Weekly, bi-weekly & monthly house cleaning. Pet-friendly products. Call (346) 588-0262.",
  alternates: {
    canonical: '/services/residential-cleaning',
  },
  openGraph: {
    title: "Residential House Cleaning Services | Fann's Cleaning",
    description: "Trusted residential cleaning for Montgomery County homes. Routine maintenance, deep cleaning, move in/out service. Pet-friendly, eco-conscious products.",
    url: "https://fannscleaningservices.com/services/residential-cleaning",
  },
};

export default function ResidentialCleaningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://fannscleaningservices.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://fannscleaningservices.com/services'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Residential Cleaning',
        item: 'https://fannscleaningservices.com/services/residential-cleaning'
      }
    ]
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Residential Cleaning Services',
    description: 'Professional house cleaning services including routine maintenance, deep cleaning, and move-in/move-out cleaning for homes in Tomball, Magnolia, The Woodlands, and surrounding Montgomery County areas.',
    provider: {
      '@type': 'LocalBusiness',
      name: "Fann's Cleaning Services",
      telephone: '+1-346-588-0262',
      email: 'fannsclean23@gmail.com'
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
        name: 'The Woodlands'
      },
      {
        '@type': 'City',
        name: 'Conroe'
      }
    ],
    serviceType: 'House Cleaning',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {children}
    </>
  );
}
