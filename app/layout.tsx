

import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { StructuredData } from "@/components/seo/structured-data"
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const BASE_URL = "https://www.veridian.com"

export const viewport: Viewport = {
  themeColor: "#da6d42",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Veridian Custom Landscapes | Luxury Landscaping in Trinidad and Tobago",
    template: "%s | Veridian Custom Landscapes",
  },
  description:
    "Trinidad and Tobago's premier luxury landscaping company. Veridian Custom Landscapes designs and builds extraordinary estates across Port of Spain, Maraval, Westmoorings, San Fernando and Tobago. 15+ years of expertise, 142+ estates transformed.",
  keywords: [
    "landscaping Trinidad and Tobago",
    "luxury landscaping Trinidad",
    "estate garden design Trinidad",
    "landscape architecture Port of Spain",
    "landscaping company T&T",
    "garden design Maraval",
    "outdoor living spaces Trinidad",
    "landscaping San Fernando",
    "landscape design Westmoorings",
    "landscaping Tobago",
    "premium landscaping Caribbean",
    "estate maintenance Trinidad",
    "water features Trinidad",
    "outdoor lighting Trinidad",
    "Veridian Custom Landscapes",
  ],
  authors: [{ name: "Veridian Custom Landscapes" }],
  creator: "Veridian Custom Landscapes",
  publisher: "Veridian Custom Landscapes",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Veridian Custom Landscapes | Luxury Landscaping in Trinidad and Tobago",
    description:
      "Trinidad and Tobago's premier luxury landscaping company. 142+ estates transformed across Port of Spain, Maraval, Westmoorings, San Fernando and Tobago.",
    url: BASE_URL,
    siteName: "Veridian Custom Landscapes",
    locale: "en_TT",
    type: "website",
    images: [
      {
        url: "/images/landscape2.webp",
        width: 1200,
        height: 630,
        alt: "Veridian Custom Landscapes — Luxury Estate Design in Trinidad and Tobago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veridian Custom Landscapes | Luxury Landscaping in Trinidad and Tobago",
    description:
      "Trinidad and Tobago's premier luxury landscaping company. 142+ estates transformed.",
    images: ["/images/landscape2.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "TT",
    "geo.placename": "Port of Spain, Trinidad and Tobago",
    "geo.position": "10.6596;-61.5086",
    "ICBM": "10.6596, -61.5086",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-TT">
      <body className="font-sans antialiased">
        <StructuredData />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
