import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Professional Cleaning Services in Tomball TX - Residential & Commercial | Fann's Cleaning",
  description: "Fann's Cleaning Services offers top-rated professional cleaning in Tomball, Texas. Residential, commercial, deep cleaning & move-out services. Trusted by 500+ clients. Call (555) 123-4567 for a free quote today!",
  keywords: "cleaning services Tomball TX, professional cleaners Tomball, residential cleaning Tomball Texas, commercial cleaning services, deep cleaning Tomball, move-out cleaning, house cleaning near me, office cleaning Tomball, eco-friendly cleaning services",
  authors: [{ name: "Fann's Cleaning Services" }],
  metadataBase: new URL('https://fanns-cleaning.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Professional Cleaning Services in Tomball, TX - Trusted by 500+ Clients | Fann's Cleaning",
    description: "Transform your home or business with our professional cleaning services. Residential, commercial & deep cleaning in Tomball, Texas. Eco-friendly products. 100% satisfaction guaranteed. Free quotes available.",
    url: "https://fanns-cleaning.vercel.app",
    siteName: "Fann's Cleaning Services",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Professional cleaning service - sparkling clean home interior in Tomball TX",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Cleaning Services in Tomball, TX | Fann's Cleaning",
    description: "Trusted by 500+ clients. Residential, Commercial & Deep Cleaning in Tomball, Texas. Eco-friendly. 100% satisfaction guaranteed. Get your free quote today!",
    images: ["https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=630&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
