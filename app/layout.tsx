import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata = {
  title: "Cleaning Services in Tomball TX | Fann's Cleaning",
  description:
    "Looking for professional cleaning services in Tomball TX? We offer residential, commercial, deep, and move-out cleaning. Call today for a free quote.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
