'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionTag from '@/components/SectionTag'

const cases = [
  {
    tag: 'Marketing lokalny · Usługi prawne',
    metric: '#1',
    metricLabel: 'pozycja wizytówki Google',
    title: 'Adwokat widoczny tam, gdzie szukają klienci',
    desc: 'Kancelaria adwokacka zgłosiła się do nas z problemem zerowej widoczności w lokalnych wynikach Google. Po audycie wizytówki, uzupełnieniu profilu i wdrożeniu strategii lokalnego SEO — kancelaria zajęła pierwszą pozycję na frazy takie jak „adwokat Koszalin". Klienci sami przychodzą.',
    href: '/realizacje',
  },
  {
    tag: 'Google Ads · Turystyka',
    metric: '×7',
    metricLabel: 'zwrot z budżetu reklamowego',
    title: 'Thousand Miles: każda złotówka wróciła siedmiokrotnie',
    desc: 'Firma wycieczkowa Thousand Miles chciała zapełniać miejsca na wycieczkach bez polegania wyłącznie na platformach rezerwacyjnych. Wdrożyliśmy kampanie Google Ads precyzyjnie skierowane na osoby szukające konkretnych wycieczek. Efekt: każda złotówka wydana na reklamy zwróciła się siedmiokrotnie.',
    href: '/realizacje',
  },
  {
    tag: 'Strona WWW · Analityka',
    metric: '+230%',
    metricLabel: 'wzrost ruchu organicznego',
    title: 'Gravier: nowa strona, nowe życie w Google',
    desc: 'Stara strona Gravier nie mierzyła niczego — brak analityki, brak Consent Mode, brak danych. Po kompleksowej przebudowie strony, wdrożeniu GA4, GTM i Consent Mode v2 ruch organiczny wzrósł o 230%. Firma nareszcie wie, co działa.',
    href: '/realizacje',
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
              {c.tag}
            </span>

            <div className="mb-3">
              <span className="font-heading font-extrabold text-5xl text-accent">{c.metric}</span>
              <p className="text-[#6b6860] text-sm mt-1">{c.metricLabel}</p>
            </div>

            <h3 className="font-heading font-bold text-[#1c1b19] text-lg mb-3">{c.title}</h3>

            <p className="text-[#6b6860] text-sm leading-relaxed flex-1 mb-5">{c.desc}</p>

            <div className="pt-4 border-t border-[rgba(0,0,0,0.07)]">
              <Link
                href={c.href}
                className="flex items-center gap-1.5 text-sm text-accent font-medium group/link"
              >
                Zobacz wszystkie realizacje
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
