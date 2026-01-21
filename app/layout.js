import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Fann's Cleaning Service | Professional Cleaning in Tomball, TX",
  description: "Trusted professional cleaning services in Tomball, Texas. Residential, commercial, and specialty cleaning. Licensed, insured, and eco-friendly. Call for a free quote today!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}