'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionTag from '@/components/SectionTag'

const faqs = [
  {
    q: 'Ile kosztują Wasze usługi?',
    a: 'To zależy od zakresu i branży. Dlatego zaczynamy od darmowego audytu - po nim przygotowujemy indywidualną wycenę. Nie mamy ukrytych kosztów.',
  },
  {
    q: 'Jak szybko zobaczę wyniki?',
    a: 'PPC: pierwsze efekty w ciągu kilku dni od uruchomienia kampanii. SEO: realne wzrosty po 3–6 miesiącach. Marketing lokalny: widoczne zmiany w ciągu 4–8 tygodni. Zawsze ustalamy realistyczne oczekiwania na starcie.',
  },
  {
    q: 'Czy muszę podpisać długą umowę?',
    a: 'Nie. Pracujemy w modelu miesięcznym. Zostajesz, bo widzisz wyniki - nie dlatego, że Cię związaliśmy umową.',
  },
  {
    q: 'Co to jest pozycjonowanie w AI?',
    a: 'To optymalizacja treści Twojej firmy tak, żeby pojawiała się w odpowiedziach ChatGPT, Perplexity, Google AI Overview i innych narzędzi AI. To nowy kanał dotarcia do klientów, który rośnie z miesiąca na miesiąc.',
  },
  {
    q: 'Czym jest Consent Mode i dlaczego go potrzebuję?',
    a: 'Consent Mode v2 to standard wymagany przez Google od marca 2024. Bez niego tracisz dane z analityki i obniżasz skuteczność kampanii reklamowych. Pomagamy to wdrożyć prawidłowo.',
  },
  {
    q: 'Jak wygląda darmowy audyt?',
    a: 'Nasz specjalista analizuje Twoją stronę, konta reklamowe i widoczność w Google. Przygotowujemy raport z konkretnymi rekomendacjami - co poprawić i jakich wyników można osiągnąć. Bez zobowiązań.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <SectionTag className="justify-center">FAQ</SectionTag>
        <h2>Najczęstsze pytania</h2>
      </div>

      <div className="space-y-0 border-t border-[rgba(255,255,255,0.08)]">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-[rgba(255,255,255,0.08)]">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex items-center justify-between w-full py-5 text-left gap-4 group"
              aria-expanded={open === i}
            >
              <span className={`font-heading font-bold text-base transition-colors ${open === i ? 'text-accent' : 'text-[#f8f7f4] group-hover:text-accent'}`}>
                {faq.q}
              </span>
              <span className="shrink-0 w-7 h-7 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#b0ada5] group-hover:border-accent/40 group-hover:text-accent transition-all">
                {open === i ? <Minus size={14} /> : <Plus size={14} />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-[#b0ada5] text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}
