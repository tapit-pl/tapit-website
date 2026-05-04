'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { X, Zap, CheckCircle, Clock, Gift } from 'lucide-react'

interface AuditOfferModalProps {
  open: boolean
  onClose: () => void
}

export default function AuditOfferModal({ open, onClose }: AuditOfferModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-lg pointer-events-auto">
              {/* Top gradient bar */}
              <div className="h-1 rounded-t-3xl bg-gradient-to-r from-accent via-purple-400 to-accent" />

              <div className="bg-[#1a1917] border border-[rgba(255,255,255,0.07)] rounded-b-3xl shadow-2xl overflow-hidden">
                {/* Close */}
                <button
                  onClick={onClose}
                  aria-label="Zamknij"
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[rgba(255,255,255,0.07)] hover:bg-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#b0ada5] hover:text-[#f8f7f4] transition-colors"
                >
                  <X size={15} />
                </button>

                <div className="p-8">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 border border-accent/25 mb-5">
                    <Zap size={12} className="text-accent" />
                    <span className="text-accent text-xs font-heading font-bold uppercase tracking-widest">
                      Oferta tylko teraz
                    </span>
                  </div>

                  {/* Headline */}
                  <h2 className="font-heading font-bold text-[#f8f7f4] mb-2" style={{ fontSize: '1.65rem', lineHeight: 1.2 }}>
                    Bezpłatny audyt marketingu
                    <br />
                    <span className="text-accent">+ 10% zniżki</span> na pierwsze zlecenie
                  </h2>

                  <p className="text-[#b0ada5] text-sm leading-relaxed mb-6">
                    Przeanalizujemy Twój marketing od zera — stronę, reklamy i widoczność w Google. Jeśli zdecydujesz się na współpracę po audycie, otrzymasz <strong className="text-[#f8f7f4]">10% rabatu na pierwszą fakturę</strong>.
                  </p>

                  {/* Warunki */}
                  <div className="space-y-3 mb-7 p-4 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)]">
                    <div className="flex items-start gap-3">
                      <CheckCircle size={15} className="text-success shrink-0 mt-0.5" />
                      <p className="text-sm text-[#b0ada5]">
                        Audyt jest <strong className="text-[#f8f7f4]">jednorazowy i bezpłatny</strong> — bez zobowiązań, bez ukrytych kosztów.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Gift size={15} className="text-accent shrink-0 mt-0.5" />
                      <p className="text-sm text-[#b0ada5]">
                        Zniżka 10% zostanie doliczona do oferty, którą otrzymasz po audycie.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={15} className="text-[#b0ada5] shrink-0 mt-0.5" />
                      <p className="text-sm text-[#b0ada5]">
                        Oferta ze zniżką ważna przez <strong className="text-[#f8f7f4]">7 dni</strong> od dnia otrzymania wyceny po audycie.
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/audyt"
                      onClick={onClose}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white font-heading font-bold text-sm transition-all hover:shadow-lg hover:shadow-accent/25"
                    >
                      Zamów darmowy audyt
                    </Link>
                    <button
                      onClick={onClose}
                      className="flex-1 py-3.5 rounded-full border border-[rgba(255,255,255,0.10)] text-[#b0ada5] hover:text-[#f8f7f4] hover:border-[rgba(0,0,0,0.25)] text-sm font-medium transition-all"
                    >
                      Może później
                    </button>
                  </div>

                  <p className="text-center text-xs text-[#b0ada5]/60 mt-4">
                    Jeden audyt na firmę. Oferta nie łączy się z innymi promocjami.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
