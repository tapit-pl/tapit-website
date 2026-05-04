'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionTag from '@/components/SectionTag'

const services = [
  {
    name: 'Google Ads & PPC',
    desc: 'Reklamy w Google, Meta, TikTok i LinkedIn. Precyzyjne kampanie, które trafiają do Twoich klientów dokładnie wtedy, gdy szukają Twoich usług.',
    href: '/uslugi/google-ads',
  },
  {
    name: 'Pozycjonowanie SEO',
    desc: 'Budujemy widoczność Twojej strony w wynikach organicznych Google. Długofalowa strategia, która przynosi ruch bez ciągłego płacenia za kliknięcia.',
    href: '/uslugi/seo',
  },
  {
    name: 'Marketing lokalny',
    desc: 'Pozycjonowanie wizytówki Google, żeby klienci z Twojego miasta znajdowali Cię jako pierwszego. Idealne dla biznesów stacjonarnych.',
    href: '/uslugi/marketing-lokalny',
  },
  {
    name: 'Pozycjonowanie w AI',
    desc: 'Optymalizujemy Twoją obecność pod ChatGPT, Perplexity i inne wyszukiwarki AI. Nowy kanał dotarcia, który większość firm ignoruje.',
    href: '/uslugi/pozycjonowanie-w-ai',
    badge: 'Nowość',
  },
  {
    name: 'Strony internetowe',
    desc: 'Projektujemy i budujemy szybkie, nowoczesne strony, które nie tylko dobrze wyglądają, ale przede wszystkim konwertują odwiedzających w klientów.',
    href: '/uslugi/strony-internetowe',
  },
  {
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
    <section className="relative py-24 overflow-hidden bg-[#0f0e0d]">

      {/* Background photo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80')",
          opacity: 0.45,
        }}
      />

      {/* Gradient overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #0f0e0d 0%, rgba(15,14,13,0.7) 40%, rgba(15,14,13,0.7) 60%, #0f0e0d 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <SectionTag className="justify-center" dark>Usługi</SectionTag>
          <h2 className="mb-4 text-white">Czym się zajmujemy</h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Od reklam w Google po pozycjonowanie w AI — dobieramy narzędzia do Twojego biznesu, nie odwrotnie.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map(service => (
            <motion.div
              key={service.name}
              variants={item}
              className="group relative backdrop-blur-md bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.10)] hover:bg-[rgba(255,255,255,0.10)] hover:border-[rgba(255,255,255,0.18)] rounded-2xl p-8 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              <h3 className="font-heading font-bold text-2xl text-white mb-3 flex items-center gap-3">
                {service.name}
                {'badge' in service && service.badge && (
                  <span className="text-[10px] bg-accent/20 text-accent px-2 py-0.5 rounded-full font-medium">
                    {service.badge}
                  </span>
                )}
              </h3>

              <p className="text-white/55 text-base leading-relaxed mb-5">{service.desc}</p>

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
      </div>
    </section>
  )
}
