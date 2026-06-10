import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Realizacje - Case Studies | Tapit Agencja Marketingowa Kraków',
  description: 'Sprawdź konkretne wyniki naszych klientów. Prawdziwe liczby z kampanii Google Ads, SEO i marketingu lokalnego.',
}

export default function RealizacjePage() {
  return (
    <main className="min-h-[80vh] flex items-center pt-16 pb-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center w-full">

        {/* Icon */}
        <div className="relative inline-flex mb-8">
          <div className="w-24 h-24 rounded-3xl bg-accent/10 border border-accent/20 flex items-center justify-center">
            <Clock size={40} className="text-accent" />
          </div>
          <div
            aria-hidden
            className="absolute inset-0 rounded-3xl blur-2xl opacity-30"
            style={{ background: 'radial-gradient(circle, #f53c3c 0%, transparent 70%)' }}
          />
        </div>

        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-5">
          <span className="text-accent text-xs font-heading font-bold uppercase tracking-[2px]">
            Realizacje
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-4">Już wkrótce</h1>

        {/* Description */}
        <p className="text-[#b0ada5] text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          Pracujemy nad opisami naszych projektów. Wkrótce znajdziesz tu konkretne liczby i wyniki od prawdziwych klientów — bez retuszu.
        </p>

        {/* Stats teaser */}
        <div className="grid grid-cols-3 gap-4 mb-10 p-6 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)]">
          {[
            { metric: '50+', label: 'klientów' },
            { metric: '-40%', label: 'średni spadek CPA' },
            { metric: '+250%', label: 'wzrost ruchu' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <p className="font-heading font-bold text-2xl text-accent">{s.metric}</p>
              <p className="text-xs text-[#b0ada5] mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white font-heading font-bold text-sm transition-all hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            Zapytaj o wyniki
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.09)] border border-[rgba(255,255,255,0.1)] text-[#f8f7f4] font-heading font-bold text-sm transition-all"
          >
            Wróć na stronę główną
          </Link>
        </div>

      </div>
    </main>
  )
}
