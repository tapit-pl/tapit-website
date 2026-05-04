'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire up to backend
    setSubmitted(true)
  }

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(245,60,60,0.04) 0%, transparent 100%)',
      }}
    >
      <div className="absolute inset-0 border-y border-accent/10 pointer-events-none" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="mb-4">Gotowy na więcej klientów?</h2>
        <p className="text-[#b0ada5] text-lg mb-10">
          Zostaw kontakt, odezwiemy się w ciągu 24 godzin.
        </p>

        {submitted ? (
          <div className="flex flex-col items-center gap-3">
            <CheckCircle size={40} className="text-success" />
            <p className="font-heading font-bold text-xl text-[#f8f7f4]">Odezwiemy się wkrótce!</p>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Twój adres e-mail"
                className="flex-1 px-5 py-3.5 rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] text-[#f8f7f4] placeholder-[#b0ada5]/50 text-sm focus:outline-none focus:border-accent/50 transition-colors"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white font-heading font-bold text-sm transition-all hover:shadow-lg hover:shadow-accent/25 whitespace-nowrap"
              >
                Zamów darmowy audyt
                <ArrowRight size={14} />
              </button>
            </form>
            <p className="mt-5 text-[#b0ada5] text-sm">
              Lub zadzwoń:{' '}
              <a href="tel:+48694843482" className="text-accent hover:underline">
                +48 694 843 482
              </a>
            </p>
          </>
        )}
      </div>
    </section>
  )
}
