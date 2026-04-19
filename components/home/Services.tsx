'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Target, TrendingUp, MapPin, Brain, Monitor, BarChart3, ArrowRight
} from 'lucide-react'
import SectionTag from '@/components/SectionTag'

const services = [
  {
    icon: Target,
    name: 'Google Ads & PPC',
    desc: 'Reklamy w Google, Meta, TikTok i LinkedIn. Precyzyjne kampanie, które trafiają do Twoich klientów dokładnie wtedy, gdy szukają Twoich usług.',
    href: '/uslugi/google-ads',
  },
  {
    icon: TrendingUp,
    name: 'Pozycjonowanie SEO',
    desc: 'Budujemy widoczność Twojej strony w wynikach organicznych Google. Długofalowa strategia, która przynosi ruch bez ciągłego płacenia za kliknięcia.',
    href: '/uslugi/seo',
  },
  {
    icon: MapPin,
    name: 'Marketing lokalny',
    desc: 'Pozycjonowanie wizytówki Google, żeby klienci z Twojego miasta znajdowali Cię jako pierwszego. Idealne dla biznesów stacjonarnych.',
    href: '/uslugi/marketing-lokalny',
  },
  {
    icon: Brain,
    name: 'Pozycjonowanie w AI',
    desc: 'Optymalizujemy Twoją obecność pod ChatGPT, Perplexity i inne wyszukiwarki AI. Nowy kanał dotarcia, który większość firm ignoruje.',
    href: '/uslugi/pozycjonowanie-w-ai',
    badge: 'Nowość',
  },
  {
    icon: Monitor,
    name: 'Strony internetowe',
    desc: 'Projektujemy i budujemy szybkie, nowoczesne strony, które nie tylko dobrze wyglądają, ale przede wszystkim konwertują odwiedzających w klientów.',
    href: '/uslugi/strony-internetowe',
  },
  {
    icon: BarChart3,
    name: 'Analityka i Consent Mode',
    desc: 'Wdrażamy Google Analytics 4, Google Tag Manager i Consent Mode v2, żebyś podejmował decyzje na danych, nie na przeczuciach.',
    href: '/uslugi/analityka',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Services() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <SectionTag className="justify-center">Usługi</SectionTag>
        <h2 className="mb-4">Czym się zajmujemy</h2>
        <p className="text-[#6b6860] text-lg max-w-xl mx-auto">
          Od reklam w Google po pozycjonowanie w AI — dobieramy narzędzia do Twojego biznesu, nie odwrotnie.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-[rgba(0,0,0,0.05)] rounded-2xl overflow-hidden"
      >
        {services.map(service => (
          <motion.div
            key={service.name}
            variants={item}
            className="group relative bg-[#f0eeec] p-8 hover:bg-[rgba(0,0,0,0.03)] transition-all duration-300 overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/15 flex items-center justify-center mb-5">
              <service.icon size={24} className="text-accent" />
            </div>

            <h3 className="font-heading font-bold text-lg text-[#1c1b19] mb-3 flex items-center gap-2">
              {service.name}
              {'badge' in service && service.badge && (
                <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded-full font-medium">
                  {service.badge}
                </span>
              )}
            </h3>

            <p className="text-[#6b6860] text-sm leading-relaxed mb-5">{service.desc}</p>

            <Link
              href={service.href}
              className="flex items-center gap-1.5 text-sm text-accent font-medium group/link"
            >
              Dowiedz się więcej
              <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
