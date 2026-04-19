import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import Stats from '@/components/home/Stats'
import Services from '@/components/home/Services'
import WhyUs from '@/components/home/WhyUs'
import CaseStudies from '@/components/home/CaseStudies'
import Testimonials from '@/components/home/Testimonials'
import Process from '@/components/home/Process'
import FAQ from '@/components/home/FAQ'
import FinalCTA from '@/components/home/FinalCTA'

export const metadata: Metadata = {
  title: 'Tapit — Agencja marketingowa Kraków | Google Ads, SEO, Marketing lokalny',
  description:
    'Dotknij, a zajmiemy się resztą. Więcej klientów dzięki Google Ads, SEO, marketingowi lokalnemu i pozycjonowaniu w AI. Agencja marketingowa z Krakowa.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <Services />
      <WhyUs />
      <CaseStudies />
      <Testimonials />
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  )
}
