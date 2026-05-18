'use client'

import { useEffect, useState } from 'react'
import { X, Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function WebsitePromoModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem('website-promo-seen')
    if (!seen) {
      const t = setTimeout(() => setOpen(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const close = () => {
    sessionStorage.setItem('website-promo-seen', '1')
    setOpen(false)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={close}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md animate-fade-in">
        {/* Top gradient bar */}
        <div className="h-1 rounded-t-3xl bg-gradient-to-r from-accent via-orange-400 to-accent" />

        <div className="bg-[#1a1917] border border-[rgba(255,255,255,0.08)] border-t-0 rounded-b-3xl shadow-2xl overflow-hidden">
          <button
            onClick={close}
            aria-label="Zamknij"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[rgba(255,255,255,0.07)] hover:bg-[rgba(255,255,255,0.12)] flex items-center justify-center text-[#b0ada5] hover:text-[#f8f7f4] transition-colors"
          >
            <X size={15} />
          </button>

          <div className="p-7 sm:p-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 border border-accent/25 mb-5">
              <Zap size={12} className="text-accent" />
              <span className="text-accent text-xs font-heading font-bold uppercase tracking-widest">
                Tylko w maju 2026
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-heading font-bold text-[#f8f7f4] mb-3" style={{ fontSize: '1.6rem', lineHeight: 1.2 }}>
              Strona internetowa<br />
              <span className="text-accent">od 650 zł netto</span>
            </h2>

            <p className="text-[#b0ada5] text-sm leading-relaxed mb-6">
              Wyjatkowa oferta majowa - tylko dla nowych klientow. Tworzymy profesjonalne, szybkie strony WWW w Next.js z pelnym SEO. Dokładna wycena zostanie przedstawiona mailowo po krotkim omówieniu projektu.
            </p>

            {/* Highlights */}
            <div className="space-y-2 mb-7 p-4 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)]">
              {[
                'Cena od 650 zł netto - prosta, skuteczna strona',
                'Mozliwosc platnosci jednorazowej, ratalnej lub subskrypcji',
                'Tylko dla nowych klientow Tapit',
                'Oferta wazna do konca maja 2026',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                  <p className="text-sm text-[#b0ada5]">{item}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/audyt"
                onClick={close}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white font-heading font-bold text-sm transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                Chce te strone!
                <ArrowRight size={14} />
              </Link>
              <button
                onClick={close}
                className="flex-1 py-3.5 rounded-full border border-[rgba(255,255,255,0.10)] text-[#b0ada5] hover:text-[#f8f7f4] hover:border-[rgba(255,255,255,0.20)] text-sm font-medium transition-all"
              >
                Moze pozniej
              </button>
            </div>

            <p className="text-center text-xs text-[#b0ada5]/50 mt-4">
              Oferta tylko dla nowych klientow. Nie laczy sie z innymi promocjami.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
