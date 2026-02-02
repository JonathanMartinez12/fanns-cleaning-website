import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cleaning Tips & Home Care Blog | Fann's Cleaning Services",
  description: "Expert cleaning tips, home care advice, and industry insights from Fann's Cleaning Services. Learn proper cleaning techniques and maintain a spotless space.",
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: "Cleaning Tips & Home Care Blog | Fann's Cleaning Services",
    description: "Expert cleaning tips and home care advice from professional cleaners serving Montgomery County TX.",
    url: "https://fannscleaningservices.com/blog",
  },
};

export default function BlogLayout({
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
        name: 'Blog',
        item: 'https://fannscleaningservices.com/blog'
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
