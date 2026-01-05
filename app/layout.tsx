import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Alixel - Premium IT Software Solutions | ML, Web Dev & Custom Software",
  description:
    "Alixel delivers cutting-edge IT solutions including machine learning, web development, and custom software development. Transform your business with our expert tech services.",
  keywords: "IT software house, machine learning, web development, custom software, tech solutions, Alixel",
  authors: [{ name: "Alixel Team" }],
  creator: "Alixel",
  publisher: "Alixel",
  robots: "index, follow",
  metadataBase: new URL("https://alixel.xyz"),
  alternates: {
    canonical: "https://alixel.xyz",
  },
  openGraph: {
    title: "Alixel - Premium IT Software Solutions",
    description: "Transform your business with cutting-edge ML, web development, and custom software solutions.",
    url: "https://alixel.xyz",
    siteName: "Alixel",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alixel - Premium IT Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alixel - Premium IT Software Solutions",
    description: "Transform your business with cutting-edge ML, web development, and custom software solutions.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-192.png",
  },
  manifest: "/manifest.json",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground">{children}</body>
    </html>
  )
}
