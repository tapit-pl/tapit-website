'use client'

import { useState } from 'react'
import { X, CheckCircle, ArrowRight, Repeat, CreditCard, Zap } from 'lucide-react'

type PlanType = 'subskrypcja' | 'raty' | 'jednorazowa'

const PLAN_LABELS: Record<PlanType, string> = {
  subskrypcja: 'Subskrypcja na stronę WWW',
  raty: 'Zamówienie strony - płatność ratalna',
  jednorazowa: 'Zamówienie strony - płatność jednorazowa',
}

const PLAN_ICONS: Record<PlanType, React.ElementType> = {
  subskrypcja: Repeat,
  raty: CreditCard,
  jednorazowa: Zap,
}

const PLAN_COLORS: Record<PlanType, string> = {
  subskrypcja: 'text-[#b0ada5]',
  raty: 'text-accent',
  jednorazowa: 'text-[#b0ada5]',
}

interface Props {
  plan: PlanType
  onClose: () => void
}

export default function WebsiteOrderModal({ plan, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [fields, setFields] = useState({
    name: '',
    company: '',
    domain: '',
    phone: '',
    email: '',
    message: '',
  })

  const Icon = PLAN_ICONS[plan]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          company: fields.company,
          phone: fields.phone,
          email: fields.email || '(nie podano)',
          service: PLAN_LABELS[plan],
          url: fields.domain ? `Sugerowana domena: ${fields.domain}` : '',
          message: fields.message,
        }),
      })
      if (res.ok) setSubmitted(true)
      else setError(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fade-in">
        <div className="h-1 rounded-t-3xl bg-gradient-to-r from-accent via-orange-400 to-accent" />

        <div className="bg-[#1a1917] border border-[rgba(255,255,255,0.08)] border-t-0 rounded-b-3xl shadow-2xl">
          <button
            onClick={onClose}
            aria-label="Zamknij"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[rgba(255,255,255,0.07)] hover:bg-[rgba(255,255,255,0.12)] flex items-center justify-center text-[#b0ada5] hover:text-[#f8f7f4] transition-colors z-10"
          >
            <X size={15} />
          </button>

          <div className="p-7 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                <CheckCircle size={48} className="text-success" />
                <h3 className="font-heading font-bold text-xl text-[#f8f7f4]">Wysłano!</h3>
                <p className="text-[#b0ada5] text-sm max-w-xs">
                  Odezwiemy się do Ciebie w ciągu 24 godzin roboczych z dokładną wyceną.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-6 py-2.5 rounded-full border border-[rgba(255,255,255,0.12)] text-[#b0ada5] hover:text-[#f8f7f4] text-sm transition-colors"
                >
                  Zamknij
                </button>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.06)] flex items-center justify-center shrink-0">
                    <Icon size={18} className={PLAN_COLORS[plan]} />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-[#f8f7f4]">{PLAN_LABELS[plan]}</p>
                    <p className="text-xs text-[#b0ada5]">Wypełnij formularz - odezwiemy się w 24h</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-[#b0ada5] font-medium">Imię i nazwisko *</label>
                      <input
                        type="text"
                        required
                        placeholder="Jan Kowalski"
                        value={fields.name}
                        onChange={e => setFields(f => ({ ...f, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#f8f7f4] placeholder-[#b0ada5]/50 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-[#b0ada5] font-medium">Nazwa firmy *</label>
                      <input
                        type="text"
                        required
                        placeholder="Kowalski & Spółka"
                        value={fields.company}
                        onChange={e => setFields(f => ({ ...f, company: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#f8f7f4] placeholder-[#b0ada5]/50 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#b0ada5] font-medium">Sugerowana domena <span className="opacity-50">(opcjonalne)</span></label>
                    <input
                      type="text"
                      placeholder="twojafirma.pl"
                      value={fields.domain}
                      onChange={e => setFields(f => ({ ...f, domain: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#f8f7f4] placeholder-[#b0ada5]/50 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-[#b0ada5] font-medium">Nr telefonu *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+48 600 000 000"
                        value={fields.phone}
                        onChange={e => setFields(f => ({ ...f, phone: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#f8f7f4] placeholder-[#b0ada5]/50 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-[#b0ada5] font-medium">E-mail <span className="opacity-50">(opcjonalne)</span></label>
                      <input
                        type="email"
                        placeholder="jan@firma.pl"
                        value={fields.email}
                        onChange={e => setFields(f => ({ ...f, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#f8f7f4] placeholder-[#b0ada5]/50 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#b0ada5] font-medium">Dodatkowe informacje <span className="opacity-50">(opcjonalne)</span></label>
                    <textarea
                      rows={3}
                      placeholder="Opowiedz nam o swoim projekcie, branży, czego oczekujesz od strony..."
                      value={fields.message}
                      onChange={e => setFields(f => ({ ...f, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#f8f7f4] placeholder-[#b0ada5]/50 text-sm focus:outline-none focus:border-accent/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-white font-heading font-bold text-sm transition-all hover:shadow-lg hover:shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Wysyłanie...' : 'Wyślij zapytanie'}
                    {!loading && <ArrowRight size={14} />}
                  </button>

                  {error && (
                    <p className="text-xs text-red-400 text-center">
                      Coś poszło nie tak. Spróbuj ponownie lub napisz na kontakt@tapit.com.pl
                    </p>
                  )}

                  <p className="flex items-center justify-center gap-2 text-xs text-success">
                    <CheckCircle size={13} />
                    Odpowiadamy w ciągu 24 godzin roboczych. Bez zobowiązań.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
