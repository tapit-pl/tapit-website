import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import WebsitePromoModal from '@/components/WebsitePromoModal'
import TrustBar from '@/components/home/TrustBar'
import Services from '@/components/home/Services'
import CaseStudies from '@/components/home/CaseStudies'
import Testimonials from '@/components/home/Testimonials'
import Process from '@/components/home/Process'
import FAQ from '@/components/home/FAQ'
import FinalCTA from '@/components/home/FinalCTA'

export const metadata: Metadata = {
  title: 'Tapit - Agencja marketingowa Kraków | Google Ads, SEO, Marketing lokalny',
  description:
    'Dotknij, a zajmiemy się resztą. Więcej klientów dzięki Google Ads, SEO, marketingowi lokalnemu i pozycjonowaniu w AI. Agencja marketingowa z Krakowa.',
}

export default function HomePage() {
  return (
    <>
      <WebsitePromoModal />
      <Hero />
      <TrustBar />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  )
}
