import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import CookieBanner from '@/components/CookieBanner'
import ScrollToTop from '@/components/ScrollToTop'
import UrgentNotice from '@/components/UrgentNotice'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Tapit - Agencja Marketingowa Kraków',
    template: '%s | Tapit',
  },
  description:
    'Agencja marketingowa z Krakowa. Pomagamy lokalnym firmom zdobywać więcej klientów dzięki Google Ads, SEO i marketingowi lokalnemu. Sprawdź darmowy audyt.',
  keywords: [
    'agencja marketingowa Kraków',
    'Google Ads Kraków',
    'SEO Kraków',
    'marketing lokalny',
    'pozycjonowanie w AI',
    'reklama Google',
    'Meta Ads',
  ],
  authors: [{ name: 'Maciej Sieńko', url: 'https://tapit.com.pl' }],
  creator: 'Tapit - Maciej Sieńko',
  metadataBase: new URL('https://tapit.com.pl'),
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://tapit.com.pl',
    siteName: 'Tapit',
    title: 'Tapit - Agencja marketingowa z Krakowa',
    description:
      'Więcej klientów, mniej przepalonego budżetu. Google Ads, SEO, marketing lokalny i pozycjonowanie w AI.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tapit - Agencja marketingowa Kraków',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tapit - Agencja marketingowa Kraków',
    description: 'Więcej klientów, mniej przepalonego budżetu.',
  },
  verification: {
    google: 'V7UH_vip9vIbhcAmgUgxz7tTPm9NCzqUkJvsH5G8HHo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <CookieBanner />
        <ScrollToTop />
        <UrgentNotice />
      </body>
    </html>
  )
}
