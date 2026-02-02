import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Cleaning Services in The Woodlands TX | Fann's Cleaning",
  description: "Premium cleaning services in The Woodlands, Texas. Serving Creekside Park, Panther Creek, Cochrans Crossing & all villages. 10+ years experience. Call (346) 588-0262.",
  alternates: {
    canonical: '/locations/the-woodlands-tx',
  },
  openGraph: {
    title: "The Woodlands TX Cleaning Services | Fann's Cleaning",
    description: "Professional residential & commercial cleaning in The Woodlands, Texas. Trusted by families across all villages. Pet-friendly, eco-conscious cleaning.",
    url: "https://fannscleaningservices.com/locations/the-woodlands-tx",
  },
};

export default function TheWoodlandsLayout({
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
        name: 'Locations',
        item: 'https://fannscleaningservices.com/locations'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'The Woodlands TX',
        item: 'https://fannscleaningservices.com/locations/the-woodlands-tx'
      }
    ]
  };

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: "Fann's Cleaning Services - The Woodlands",
    image: 'https://fannscleaningservices.com/livingroom.png',
    description: 'Professional cleaning services in The Woodlands, TX. Residential, commercial, and deep cleaning serving all villages.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'The Woodlands',
      addressRegion: 'TX',
      postalCode: '77380',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.1658,
      longitude: -95.4613
    },
    telephone: '+1-346-588-0262',
    email: 'fannsclean23@gmail.com',
    url: 'https://fannscleaningservices.com/locations/the-woodlands-tx',
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: 'The Woodlands',
      '@id': 'https://en.wikipedia.org/wiki/The_Woodlands,_Texas'
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      {children}
    </>
  );
}
