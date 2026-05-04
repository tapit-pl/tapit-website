'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import SectionTag from '@/components/SectionTag'

const testimonials = [
  {
    quote: 'Tapit to najlepsza inwestycja, jaką zrobiliśmy w marketing. W ciągu 3 miesięcy ruch na stronie wzrósł ponadtrzykrotnie, a zapytania od nowych klientów pojawiają się każdego dnia.',
    name: 'Marta Kowalczyk',
    company: 'Restauracja Zielony Talerz',
  },
  {
    quote: 'Wreszcie agencja, która mówi prostym językiem i dostarcza to, co obiecuje. Maciej i zespół doskonale rozumieją nasz biznes — czujemy się jak partnerzy, nie jak kolejny klient.',
    name: 'Paweł Nowak',
    company: 'Kancelaria Prawna Nowak',
  },
  {
    quote: 'Przyszłam z minimalną widocznością w Google, a dziś jestem numerem jeden w swoim mieście. Consent Mode, Google Ads, SEO — zrobili wszystko od A do Z. Polecam z całego serca.',
    name: 'Katarzyna Wiśniewska',
    company: 'Klinika Dental & Beauty',
  },
  {
    quote: 'Bałem się, że to kolejna agencja, która pobiera pieniądze i wysyła PDF-y. Okazało się, że Tapit to zupełnie inny poziom. Transparentność, konkretne liczby i realne efekty.',
    name: 'Tomasz Jabłoński',
    company: 'DevHouse Studio',
  },
  {
    quote: 'Dzięki pozycjonowaniu w AI moja firma zaczęła pojawiać się w odpowiedziach ChatGPT. Klienci dzwonią i pytają, jak nas znaleźli — bo AI im powiedział. To przyszłość marketingu.',
    name: 'Agnieszka Dąbrowska',
    company: 'AutoParts Kraków',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = useCallback((dir: number) => {
    setDirection(dir)
    setCurrent(c => (c + dir + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const id = setInterval(() => go(1), 5000)
    return () => clearInterval(id)
  }, [go])

  return (
    <section className="py-20 bg-[rgba(0,0,0,0.02)] border-y border-[rgba(255,255,255,0.06)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SectionTag className="justify-center">Opinie</SectionTag>
          <h2>Co mówią klienci</h2>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="text-center px-4"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} size={16} className="text-accent fill-accent" />
                ))}
              </div>

              <blockquote className="font-heading font-bold text-2xl md:text-3xl text-[#f8f7f4] leading-snug mb-8 max-w-2xl mx-auto">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              <div>
                <p className="font-medium text-[#f8f7f4]">{testimonials[current].name}</p>
                <p className="text-sm text-[#b0ada5] mt-1">{testimonials[current].company}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => go(-1)}
            aria-label="Poprzednia opinia"
            className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#b0ada5] hover:text-[#f8f7f4] hover:border-[rgba(0,0,0,0.25)] transition-colors"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                aria-label={`Opinia ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 bg-accent' : 'w-1.5 bg-[rgba(255,255,255,0.15)]'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Następna opinia"
            className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#b0ada5] hover:text-[#f8f7f4] hover:border-[rgba(0,0,0,0.25)] transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
