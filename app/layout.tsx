

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Veridian Custom Landscapes | Premium Estate Design & Landscaping',
  description:
    'Transform your outdoor space with Veridian Custom Landscapes. Award-winning luxury landscape design for premium estates in Trinidad and Tobago. 15+ years of expertise, 142+ estates transformed.',
  keywords: [
    'luxury landscaping',
    'estate design',
    'custom landscapes',
    'premium outdoor spaces',
    'landscape architecture',
  ],
  openGraph: {
    title: 'Veridian Custom Landscapes | Premium Estate Design',
    description:
      'Transform your outdoor space with award-winning luxury landscape design.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}