import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Fann's Cleaning Services - 10+ Years Serving Montgomery County TX",
  description: "Founded by Courtney Gordy, Fann's Cleaning Services has 10+ years of experience delivering spotless homes and offices. Pet-friendly products, transparent pricing.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About Fann's Cleaning Services - Montgomery County TX",
    description: "Founded by Courtney Gordy with 10+ years of experience. Professional cleaning with transparency, exceptional service, and pet-friendly products.",
    url: "https://fannscleaningservices.com/about",
  },
};

export default function AboutLayout({
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
        name: 'About',
        item: 'https://fannscleaningservices.com/about'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
