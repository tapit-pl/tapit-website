import type { Metadata } from 'next'
import Link from 'next/link'
import { Target, TrendingUp, MapPin, Brain, Monitor, BarChart3, ArrowRight } from 'lucide-react'
import SectionTag from '@/components/SectionTag'
import FinalCTA from '@/components/home/FinalCTA'

export const metadata: Metadata = {
  title: 'Usługi marketingowe — Tapit',
  description: 'Google Ads, SEO, marketing lokalny, pozycjonowanie w AI, strony internetowe i analityka. Kompleksowy marketing cyfrowy z Krakowa.',
}

const services = [
  { icon: Target, name: 'Google Ads & PPC', desc: 'Reklamy w Google, Meta, TikTok i LinkedIn. Płacisz tylko za kliknięcia od realnych klientów.', href: '/uslugi/google-ads' },
  { icon: TrendingUp, name: 'Pozycjonowanie SEO', desc: 'Organiczny ruch bez ciągłego płacenia za kliknięcia. Długofalowa inwestycja w widoczność.', href: '/uslugi/seo' },
  { icon: MapPin, name: 'Marketing lokalny', desc: 'Wizytówka Google i lokalne SEO — bądź pierwszy w wynikach dla swojego miasta.', href: '/uslugi/marketing-lokalny' },
  { icon: Brain, name: 'Pozycjonowanie w AI', desc: 'Obecność w ChatGPT, Perplexity i Google AI Overview. Nowy kanał, który rośnie każdego miesiąca.', href: '/uslugi/pozycjonowanie-w-ai', badge: 'Nowość' },
  { icon: Monitor, name: 'Strony internetowe', desc: 'Szybkie, piękne i konwertujące strony na Next.js. PageSpeed 90+ na mobile.', href: '/uslugi/strony-internetowe' },
  { icon: BarChart3, name: 'Analityka i Consent Mode', desc: 'GA4, GTM i Consent Mode v2. Dane, na których możesz polegać.', href: '/uslugi/analityka' },
]

export default function ServicesPage() {
  return (
    <>
      <section className="pt-20 pb-16 md:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-14">
            <SectionTag>Usługi</SectionTag>
            <h1 className="mb-5">Co robimy dla Twojego biznesu</h1>
            <p className="text-[#6b6860] text-lg leading-relaxed">
              Od reklam w Google po pozycjonowanie w AI — dobieramy narzędzia do Twojego biznesu, nie odwrotnie. Wszystko pod jednym dachem, jeden opiekun, jedna strategia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-[rgba(0,0,0,0.05)] rounded-2xl overflow-hidden">
            {services.map(s => (
              <Link
                key={s.name}
                href={s.href}
                className="group relative bg-[#f0eeec] p-8 hover:bg-[rgba(0,0,0,0.03)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/15 flex items-center justify-center mb-5">
                  <s.icon size={24} className="text-accent" />
                </div>
                <h2 className="font-heading font-bold text-lg text-[#1c1b19] mb-3 flex items-center gap-2" style={{ fontSize: '1.1rem' }}>
                  {s.name}
                  {'badge' in s && s.badge && (
                    <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded-full font-medium">
                      {s.badge}
                    </span>
                  )}
                </h2>
                <p className="text-[#6b6860] text-sm leading-relaxed mb-5">{s.desc}</p>
                <span className="flex items-center gap-1.5 text-sm text-accent font-medium group/link">
                  Dowiedz się więcej
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  )
}
