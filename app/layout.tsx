import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cleaning Services in Tomball TX | Fann's Cleaning",
  description: "Looking for professional cleaning services in Tomball TX? We offer residential, commercial, deep, and move-out cleaning. Call today for a free quote.",
  keywords: "cleaning services, Tomball TX, residential cleaning, commercial cleaning, deep cleaning, move-out cleaning, professional cleaners",
  authors: [{ name: "Fann's Cleaning Services" }],
  openGraph: {
    title: "Professional Cleaning Services in Tomball, TX | Fann's Cleaning",
    description: "Transform your home or business with our professional cleaning services. Trusted by 500+ happy clients in Tomball, Texas.",
    url: "https://fanns-cleaning.vercel.app",
    siteName: "Fann's Cleaning Services",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Professional cleaning service - sparkling clean home interior",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Cleaning Services in Tomball, TX",
    description: "Trusted by 500+ clients. Residential, Commercial & Deep Cleaning. Get your free quote today!",
    images: ["https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=630&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
