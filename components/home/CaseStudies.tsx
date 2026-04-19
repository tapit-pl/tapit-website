'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import SectionTag from '@/components/SectionTag'

const cases = [
  {
    industry: 'E-commerce — branża modowa',
    metric: '+340%',
    metricLabel: 'ruchu organicznego',
    desc: 'Wdrożyliśmy kompleksową strategię SEO: optymalizacja techniczna, content plan i link building. W 6 miesięcy ruch organiczny wzrósł o 340%, a przychody ze sklepu o 180%.',
    period: '6 miesięcy',
    href: '/blog',
  },
  {
    industry: 'Stomatologia — klinika Kraków',
    metric: '-62%',
    metricLabel: 'kosztu pozyskania pacjenta',
    desc: 'Przeprojektowaliśmy kampanie Google Ads i zoptymalizowaliśmy wizytówkę Google. Klinika trzykrotnie zwiększyła liczbę zapytań przy niższym budżecie reklamowym.',
    period: '4 miesiące',
    href: '/blog',
  },
  {
    industry: 'Usługi budowlane — cała Małopolska',
    metric: '#1',
    metricLabel: 'w Google Maps Kraków',
    desc: 'Od zera do pozycji lidera lokalnego SEO. Zoptymalizowaliśmy wizytówkę, zbudowaliśmy opinie i wdrożyliśmy lokalne słowa kluczowe. Dziś 80% leadów pochodzi z Google.',
    period: '3 miesiące',
    href: '/blog',
  },
]

export default function CaseStudies() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <SectionTag className="justify-center">Wyniki</SectionTag>
        <h2 className="mb-4">Co osiągnęliśmy dla klientów</h2>
        <p className="text-[#6b6860] text-lg max-w-lg mx-auto">
          Liczby zamiast obietnic. Poniżej kilka wybranych historii.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {cases.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.07)] rounded-2xl p-7 hover:border-accent/20 hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <span className="inline-block text-xs text-[#6b6860] bg-[rgba(0,0,0,0.06)] px-3 py-1 rounded-full mb-5 font-medium">
              {c.industry}
            </span>

            <div className="mb-4">
              <span className="font-heading font-extrabold text-5xl text-accent">{c.metric}</span>
              <p className="text-[#6b6860] text-sm mt-1">{c.metricLabel}</p>
            </div>

            <p className="text-[#6b6860] text-sm leading-relaxed flex-1 mb-5">{c.desc}</p>

            <div className="flex items-center justify-between pt-4 border-t border-[rgba(0,0,0,0.07)]">
              <div className="flex items-center gap-1.5 text-xs text-[#6b6860]">
                <Clock size={12} />
                {c.period}
              </div>
              <Link
                href={c.href}
                className="flex items-center gap-1.5 text-sm text-accent font-medium group/link"
              >
                Zobacz szczegóły
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
