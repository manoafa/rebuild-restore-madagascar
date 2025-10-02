import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rebuild & Restore Madagascar - Building Hope, Restoring Communities',
  description: 'Join us in rebuilding and restoring communities across Madagascar. Support our mission through donations, volunteering, and spreading awareness.',
  keywords: 'Madagascar, charity, nonprofit, community development, volunteering, donations, restoration',
  authors: [{ name: 'Rebuild & Restore Madagascar' }],
  icons: {
    icon: '/logo-with-shadow.png',
    shortcut: '/logo-with-shadow.png',
    apple: '/logo-with-shadow.png',
  },
  openGraph: {
    title: 'Rebuild & Restore Madagascar',
    description: 'Building Hope, Restoring Communities',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rebuild & Restore Madagascar',
    description: 'Building Hope, Restoring Communities',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

