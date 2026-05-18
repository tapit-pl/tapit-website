'use client'

import { useState, useEffect } from 'react'
import { X, AlertTriangle } from 'lucide-react'

export default function UrgentNotice() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const expired = new Date() > new Date('2026-05-26T23:59:59')
    const dismissed = sessionStorage.getItem('urgent-notice-dismissed')
    if (!expired && !dismissed) setVisible(true)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-start gap-3 px-4 py-3.5 rounded-2xl bg-[#1a0a0a] border border-accent/40 shadow-2xl shadow-accent/10">
          <div className="shrink-0 w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center mt-0.5">
            <AlertTriangle size={15} className="text-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-heading font-bold text-[#f8f7f4] mb-0.5">
              Ważny komunikat
            </p>
            <p className="text-sm text-[#b0ada5] leading-relaxed">
              Do 26 maja prosimy o kontakt pod numer{' '}
              <a
                href="tel:+48883838407"
                className="text-accent font-semibold hover:underline"
              >
                +48 883 838 407
              </a>
              . Trwają prace techniczne przy firmowym numerze telefonu.
            </p>
          </div>
          <button
            onClick={() => {
              sessionStorage.setItem('urgent-notice-dismissed', '1')
              setVisible(false)
            }}
            aria-label="Zamknij komunikat"
            className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[#b0ada5] hover:text-[#f8f7f4] hover:bg-[rgba(255,255,255,0.08)] transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}
