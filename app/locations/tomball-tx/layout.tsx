import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Cleaning Services in Tomball TX | Fann's Cleaning",
  description: "Top-rated cleaning services in Tomball, Texas. Serving downtown, Willow Creek, Rosehill Reserve & all Tomball neighborhoods. 10+ years experience. Call (346) 588-0262 for free quote.",
  alternates: {
    canonical: '/locations/tomball-tx',
  },
  openGraph: {
    title: "Tomball TX Cleaning Services | Fann's Cleaning",
    description: "Professional residential & commercial cleaning in Tomball, Texas. Trusted by local families for over a decade. Pet-friendly products, transparent pricing.",
    url: "https://fanns-cleaning.vercel.app/locations/tomball-tx",
  },
};

export default function TomballLayout({
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
        item: 'https://fanns-cleaning.vercel.app'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Locations',
        item: 'https://fanns-cleaning.vercel.app/locations'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Tomball TX',
        item: 'https://fanns-cleaning.vercel.app/locations/tomball-tx'
      }
    ]
  };

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: "Fann's Cleaning Services - Tomball",
    image: 'https://fanns-cleaning.vercel.app/livingroom.png',
    description: 'Professional cleaning services in Tomball, TX. Residential, commercial, and deep cleaning with over 10 years of experience.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tomball',
      addressRegion: 'TX',
      postalCode: '77375',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.0933,
      longitude: -95.6163
    },
    telephone: '+1-346-588-0262',
    email: 'fannsclean23@gmail.com',
    url: 'https://fanns-cleaning.vercel.app/locations/tomball-tx',
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: 'Tomball',
      '@id': 'https://en.wikipedia.org/wiki/Tomball,_Texas'
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
