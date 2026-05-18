'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
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

const stats = [
  { metric: '50+', label: 'zadowolonych klientów' },
  { metric: '4 lata', label: 'doświadczenia' },
  { metric: '+250%', label: 'średni wzrost ruchu' },
  { metric: '-40%', label: 'średni spadek CPA' },
]

export default function Hero() {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [modalOpen, setModalOpen] = useState(false)

  const triggerRipple = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
    const x = e.clientX
    const y = e.clientY
    setRipples(prev => [...prev, { id: Date.now(), x, y }])
    setTimeout(() => setRipples(prev => [...prev, { id: Date.now() + 1, x, y }]), 200)
    setTimeout(() => setRipples(prev => [...prev, { id: Date.now() + 2, x, y }]), 420)
    setTimeout(() => setModalOpen(true), 600)
    setTimeout(() => setRipples([]), 1800)
  }, [])

  return (
    <>
      <RippleLayer ripples={ripples} />
      <AuditOfferModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#0f0e0d]">

        {/* Background photo */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80')",
            opacity: 0.35,
          }}
        />

        {/* Gradient overlay: dark left → transparent right */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #0f0e0d 35%, rgba(15,14,13,0.85) 55%, rgba(15,14,13,0.5) 80%, rgba(15,14,13,0.3) 100%)',
          }}
        />

        {/* Accent glow bottom-left */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{
            background: 'radial-gradient(circle, #f53c3c 0%, transparent 65%)',
            transform: 'translate(-30%, 30%)',
          }}
        />

        {/* Main content */}
        <div className="relative flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-4 sm:px-6 pt-16 pb-12">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-14"
          >
            <Image
              src="/logo-white.png"
              alt="Tapit"
              width={160}
              height={64}
              className="h-20 md:h-28 w-auto"
              priority
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot shrink-0" />
            <span className="text-accent text-xs font-heading font-bold uppercase tracking-[2px]">
              Agencja marketingowa · Kraków
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white max-w-4xl mb-6"
          >
            <span
              onClick={triggerRipple}
              className="relative inline-block text-accent cursor-pointer select-none group/dotknij"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              Dotknij
              <span
                aria-hidden
                className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-accent/40 group-hover/dotknij:bg-accent/80 transition-colors duration-200"
              />
            </span>
            {', a zajmiemy się resztą -'}
            <br className="hidden md:block" />
            {' więcej klientów, mniej przepalonego budżetu'}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-[#b0ada5] text-base md:text-lg leading-relaxed max-w-[540px] mb-10"
          >
            Google Ads, SEO, marketing lokalny i pozycjonowanie w AI. Bez długich umów, bez korporacyjnego dystansu - z konkretnymi wynikami.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/audyt"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white font-heading font-bold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              Zamów darmowy audyt
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/uslugi"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-heading font-bold text-sm hover:border-white/50 hover:bg-white/5 transition-all duration-200 group"
            >
              Poznaj usługi
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Stats bar at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative border-t border-white/08 bg-white/[0.03]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.08]">
              {stats.map((s) => (
                <div key={s.label} className="px-6 py-6 md:py-8">
                  <p className="font-heading font-bold text-2xl md:text-3xl text-white mb-1">{s.metric}</p>
                  <p className="text-sm text-[#b0ada5]">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </section>
    </>
  )
}
