import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cleaning Tips & Guides Blog - Expert Advice from Fann's Cleaning Services | Tomball TX",
  description: "Expert cleaning tips, guides, and advice from Fann's Cleaning Services. Learn about spring cleaning, deep cleaning techniques, eco-friendly products, and professional cleaning secrets for your Tomball home or business.",
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: "Cleaning Tips & Expert Guides - Fann's Cleaning Blog",
    description: "Professional cleaning tips and advice for homes and businesses in Tomball, TX. Learn from the experts!",
    url: "https://fanns-cleaning.vercel.app/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
