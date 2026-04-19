'use client'

import { motion } from 'framer-motion'
import SectionTag from '@/components/SectionTag'

const steps = [
  {
    num: '1',
    title: 'Darmowy audyt',
    desc: 'Analizujemy Twoją obecną sytuację: stronę, reklamy, widoczność. Dostajesz raport z konkretnymi rekomendacjami.',
  },
  {
    num: '2',
    title: 'Strategia',
    desc: 'Proponujemy plan działania dopasowany do Twojego budżetu i celów. Bez narzucania usług, których nie potrzebujesz.',
  },
  {
    num: '3',
    title: 'Realizacja',
    desc: 'Uruchamiamy kampanie, optymalizujemy stronę, budujemy widoczność. Co miesiąc raportujemy postępy.',
  },
  {
    num: '4',
    title: 'Wzrost',
    desc: 'Skalujemy to, co działa. Testujemy nowe kanały. Twój biznes rośnie, a my rośniemy razem z Tobą.',
  },
]

export default function Process() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <SectionTag className="justify-center">Jak działamy</SectionTag>
        <h2 className="mb-4">Od pierwszego kontaktu do wyników</h2>
        <p className="text-[#6b6860] text-lg max-w-xl mx-auto">
          Cztery proste kroki, które zamieniają zapytanie w realne efekty biznesowe.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="relative">
        {/* Connecting line (desktop) */}
        <div
          aria-hidden
          className="hidden lg:block absolute top-[44px] left-[calc(12.5%-20px)] right-[calc(12.5%-20px)] h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.10) 10%, rgba(0,0,0,0.10) 90%, transparent 100%)',
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-[88px] h-[88px] rounded-full border border-accent/20 bg-accent/[0.06] flex items-center justify-center mb-5 relative z-10 group-hover:bg-accent group-hover:border-accent transition-all duration-300 group-hover:scale-110">
                <span className="font-heading font-extrabold text-3xl text-accent group-hover:text-white transition-colors">
                  {step.num}
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg text-[#1c1b19] mb-2">{step.title}</h3>
              <p className="text-[#6b6860] text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
