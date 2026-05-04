'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import AuditOfferModal from '@/components/home/AuditOfferModal'

interface Ripple {
  id: number
  x: number
  y: number
}

function RippleLayer({ ripples }: { ripples: Ripple[] }) {
  return (
    <AnimatePresence>
      {ripples.map(r => (
        <motion.div
          key={r.id}
          aria-hidden
          className="pointer-events-none fixed z-50 rounded-full border-2 border-accent"
          style={{
            top: r.y,
            left: r.x,
            width: 20,
            height: 20,
            marginLeft: -10,
            marginTop: -10,
          }}
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 28, opacity: 0 }}
          exit={{}}
          transition={{ duration: 1.1, ease: [0.2, 0.8, 0.4, 1] }}
        />
      ))}
    </AnimatePresence>
  )
}

export default function Hero() {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [modalOpen, setModalOpen] = useState(false)

  const triggerRipple = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
    const x = e.clientX
    const y = e.clientY

    setRipples(prev => [
      ...prev,
      { id: Date.now(), x, y },
    ])
    setTimeout(() => setRipples(prev => [...prev, { id: Date.now() + 1, x, y }]), 200)
    setTimeout(() => setRipples(prev => [...prev, { id: Date.now() + 2, x, y }]), 420)

    // Otwórz modal po zakończeniu pierwszej fali
    setTimeout(() => setModalOpen(true), 600)

    setTimeout(() => setRipples([]), 1800)
  }, [])

  return (
    <>
      <RippleLayer ripples={ripples} />
      <AuditOfferModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden bg-grid">
        {/* Radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{
            background: 'radial-gradient(circle, #f53c3c 0%, transparent 70%)',
            transform: 'translate(20%, -20%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">
            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse-dot" />
                <span className="text-accent text-xs font-heading font-bold uppercase tracking-[2px]">
                  Agencja marketingowa z Krakowa
                </span>
              </div>

              {/* Headline */}
              <h1 className="mb-5">
                <span
                  onClick={triggerRipple}
                  className="relative inline-block text-accent cursor-pointer select-none group/dotknij"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  Dotknij
                  {/* Underline hint */}
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-accent/30 group-hover/dotknij:bg-accent/60 transition-colors duration-200"
                  />
                </span>
                {', a zajmiemy się resztą — więcej klientów, mniej przepalonego budżetu'}
              </h1>

              {/* Description */}
              <p className="text-[#6b6860] text-base md:text-lg leading-relaxed max-w-[520px] mb-8">
                Pomagamy firmom rosnąć przez Google Ads, SEO, marketing lokalny i pozycjonowanie w AI. Bez długich umów, bez korporacyjnego dystansu — z konkretnymi wynikami.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                  href="/audyt"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white font-heading font-bold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
                >
                  Zamów darmowy audyt
                </Link>
                <Link
                  href="/uslugi"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-[rgba(0,0,0,0.15)] text-[#1c1b19] font-heading font-bold text-sm hover:border-[rgba(0,0,0,0.30)] transition-all duration-200 group"
                >
                  Poznaj usługi
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-5">
                {['50+ zadowolonych klientów', '4 lata doświadczenia', 'Bez długich umów'].map(item => (
                  <div key={item} className="flex items-center gap-1.5 text-sm text-[#6b6860]">
                    <CheckCircle size={14} className="text-success shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right column — form card */}
            <motion.div
              id="hero-form"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[rgba(0,0,0,0.04)] border border-[rgba(0,0,0,0.08)] rounded-3xl p-6 md:p-8 relative overflow-hidden"
            >
              <h2 className="font-heading font-bold text-xl text-[#1c1b19] mb-1" style={{ fontSize: '1.4rem' }}>
                Bezpłatna wycena w 24h
              </h2>
              <p className="text-[#6b6860] text-sm mb-6">
                Zostaw kontakt — nasz specjalista odezwie się do Ciebie.
              </p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
