import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Fann's Cleaning Services - 10+ Years Serving Tomball TX | Professional Cleaning Company",
  description: "Learn about Fann's Cleaning Services, Tomball's trusted cleaning company since 2014. Family-owned business with 500+ satisfied clients. Eco-friendly products, background-checked staff, 100% satisfaction guarantee.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "About Fann's Cleaning - Tomball's Trusted Cleaning Company Since 2014",
    description: "Family-owned cleaning business serving Tomball, TX. 500+ happy clients, eco-friendly products, and 100% satisfaction guaranteed.",
    url: "https://fanns-cleaning.vercel.app/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
