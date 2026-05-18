'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

const services = [
  'Reklama PPC (Google, Meta)',
  'SEO',
  'Marketing lokalny',
  'Pozycjonowanie w AI',
  'Strona internetowa',
  'Analityka i Consent Mode',
  'Nie wiem - doradźcie',
]

interface ContactFormProps {
  variant?: 'default' | 'audit'
  showCheckboxes?: boolean
}

const auditCheckboxes = [
  'Strona internetowa',
  'SEO',
  'Google Ads',
  'Meta Ads',
  'Wizytówka Google',
  'Analityka',
]

export default function ContactForm({ variant = 'default', showCheckboxes = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [selected, setSelected] = useState<string[]>([])
  const [fields, setFields] = useState({ name: '', company: '', email: '', phone: '', url: '', service: '', message: '' })

  const toggleCheckbox = (item: string) => {
    setSelected(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, checkboxes: selected }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <CheckCircle size={48} className="text-success" />
        <h3 className="font-heading font-bold text-xl text-[#f8f7f4]">Wiadomość wysłana!</h3>
        <p className="text-[#b0ada5] text-sm max-w-xs">
          Odezwiemy się do Ciebie w ciągu 24 godzin roboczych.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Top gradient bar */}
      <div className="-mt-6 -mx-6 mb-2 h-0.5 rounded-t-3xl bg-gradient-to-r from-accent via-orange-400 to-blue-500" />

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
        <label className="text-xs text-[#b0ada5] font-medium">URL strony internetowej <span className="opacity-50">(opcjonalne)</span></label>
        <input
          type="url"
          placeholder="https://twojastrona.pl"
          value={fields.url}
          onChange={e => setFields(f => ({ ...f, url: e.target.value }))}
          className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#f8f7f4] placeholder-[#b0ada5]/50 text-sm focus:outline-none focus:border-accent/50 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-[#b0ada5] font-medium">E-mail *</label>
          <input
            type="email"
            required
            placeholder="jan@firma.pl"
            value={fields.email}
            onChange={e => setFields(f => ({ ...f, email: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#f8f7f4] placeholder-[#b0ada5]/50 text-sm focus:outline-none focus:border-accent/50 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-[#b0ada5] font-medium">Telefon *</label>
          <input
            type="tel"
            required
            placeholder="+48 600 000 000"
            value={fields.phone}
            onChange={e => setFields(f => ({ ...f, phone: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#f8f7f4] placeholder-[#b0ada5]/50 text-sm focus:outline-none focus:border-accent/50 transition-colors"
          />
        </div>
      </div>

      {showCheckboxes ? (
        <div className="flex flex-col gap-2">
          <label className="text-xs text-[#b0ada5] font-medium">Zakres audytu</label>
          <div className="grid grid-cols-2 gap-2">
            {auditCheckboxes.map(item => (
              <label key={item} className="flex items-center gap-2.5 cursor-pointer group">
                <div
                  onClick={() => toggleCheckbox(item)}
                  className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${
                    selected.includes(item)
                      ? 'bg-accent border-accent'
                      : 'border-[rgba(255,255,255,0.15)] group-hover:border-accent/50'
                  }`}
                >
                  {selected.includes(item) && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-[#b0ada5] group-hover:text-[#f8f7f4] transition-colors">{item}</span>
              </label>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-[#b0ada5] font-medium">Czego potrzebujesz?</label>
          <select
            value={fields.service}
            onChange={e => setFields(f => ({ ...f, service: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#f8f7f4] text-sm focus:outline-none focus:border-accent/50 transition-colors appearance-none"
          >
            <option value="" className="bg-[#1a1917]">Wybierz usługę...</option>
            {services.map(s => (
              <option key={s} value={s} className="bg-[#1a1917]">{s}</option>
            ))}
          </select>
        </div>
      )}

      {variant === 'default' && (
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-[#b0ada5] font-medium">Wiadomość <span className="opacity-50">(opcjonalnie)</span></label>
          <textarea
            rows={3}
            placeholder="Opowiedz nam o swoim projekcie..."
            value={fields.message}
            onChange={e => setFields(f => ({ ...f, message: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-[#f8f7f4] placeholder-[#b0ada5]/50 text-sm focus:outline-none focus:border-accent/50 transition-colors resize-none"
          />
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded-xl bg-accent hover:bg-accent-hover text-white font-heading font-bold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Wysyłanie...' : variant === 'audit' ? 'Wyślij - odezwiemy się w 24h' : 'Wyślij zapytanie'}
      </button>

      {error && (
        <p className="text-xs text-red-400 text-center">
          Coś poszło nie tak. Spróbuj ponownie lub napisz bezpośrednio na kontakt@tapit.com.pl
        </p>
      )}

      <p className="flex items-center gap-2 text-xs text-success">
        <CheckCircle size={13} />
        Gwarantujemy kontakt w ciągu 24h. Bez zobowiązań.
      </p>
    </form>
  )
}
