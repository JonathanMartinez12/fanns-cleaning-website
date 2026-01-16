import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fann\'s Cleaning Service | Professional Cleaning in Tomball, TX',
  description: 'Trusted professional cleaning services in Tomball, Texas. Residential, commercial, and specialty cleaning. Licensed, insured, and eco-friendly. Call for a free quote today!',
  keywords: 'cleaning service tomball, house cleaning tomball tx, maid service tomball, commercial cleaning tomball, residential cleaning texas, carpet cleaning tomball',
  authors: [{ name: 'Fann\'s Cleaning Service' }],
  openGraph: {
    title: 'Fann\'s Cleaning Service | Professional Cleaning in Tomball, TX',
    description: 'Trusted professional cleaning services in Tomball, Texas',
    url: 'https://fannscleaning.com',
    siteName: 'Fann\'s Cleaning Service',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://fannscleaning.com" />
        
        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Tomball" />
        <meta name="geo.position" content="30.0933;-95.6160" />
        
        {/* Schema.org markup for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Fann's Cleaning Service",
              "image": "https://fannscleaning.com/logo.png",
              "description": "Professional cleaning services in Tomball, Texas",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tomball",
                "addressRegion": "TX",
                "postalCode": "77375",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 30.0933,
                "longitude": -95.6160
              },
              "telephone": "(281) 555-1234",
              "priceRange": "$$",
              "areaServed": [
                "Tomball",
                "Magnolia",
                "Spring",
                "The Woodlands",
                "Cypress",
                "Klein"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Cleaning Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Residential Cleaning"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Commercial Cleaning"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}