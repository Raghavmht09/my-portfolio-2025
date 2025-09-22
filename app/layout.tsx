import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/providers/theme-provider"
import "@/styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Raghav Mehta - Product Manager",
  description: "Product Manager with 4.5+ years of experience spanning Customer Success, Product Management, and AI-led fulfillment systems. Specializing in AI-powered product innovation, stakeholder management, and GTM for B2B SaaS.",
  keywords: ["Product Manager", "AI Product Management", "WMS", "OMS", "iPaaS", "B2B SaaS"],
  authors: [{ name: "Raghav Mehta" }],
  creator: "Raghav Mehta",
  metadataBase: new URL("https://raghav-portfolio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://raghav-portfolio.vercel.app",
    title: "Raghav Mehta - Product Manager",
    description: "Product Manager specializing in AI-powered product innovation and B2B SaaS solutions.",
    siteName: "Raghav Mehta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raghav Mehta - Product Manager",
    description: "Product Manager specializing in AI-powered product innovation and B2B SaaS solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}