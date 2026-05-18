import Link from 'next/link'
import { ArrowRight, MapPin, Clock } from 'lucide-react'
import { caseStudies } from '@/lib/caseStudies'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Realizacje - Case Studies | Tapit Agencja Marketingowa Kraków',
  description: 'Sprawdź konkretne wyniki naszych klientów. Prawdziwe liczby z kampanii Google Ads, SEO i marketingu lokalnego - e-commerce, gastronomia, budownictwo, prawo.',
  openGraph: {
    title: 'Realizacje - Case Studies | Tapit',
    description: 'Konkretne wyniki marketingowe naszych klientów.',
  },
}

const serviceColors: Record<string, string> = {
  'SEO': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'Google Ads': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Meta Ads': 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  'Marketing lokalny': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Strona internetowa': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Analityka': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Pozycjonowanie w AI': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
}

export default function RealizacjePage() {
  return (
    <main className="pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-5">
            <span className="text-accent text-xs font-heading font-bold uppercase tracking-[2px]">
              Realizacje
            </span>
          </div>
          <h1 className="mb-4">
            Wyniki, które mówią same za siebie
          </h1>
          <p className="text-[#b0ada5] text-lg leading-relaxed">
            Konkretne liczby od prawdziwych klientów. Bez retuszu, bez uśredniania - tylko to, co faktycznie osiągnęliśmy razem.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 p-6 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)]">
          {[
            { metric: '50+', label: 'klientów obsłużonych' },
            { metric: '4 lata', label: 'na rynku' },
            { metric: '-40%', label: 'średni spadek CPA' },
            { metric: '+250%', label: 'średni wzrost ruchu' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <p className="font-heading font-bold text-2xl text-accent">{s.metric}</p>
              <p className="text-xs text-[#b0ada5] mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Case studies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/realizacje/${cs.slug}`}
              className="group flex flex-col rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] hover:border-accent/30 hover:bg-[rgba(255,255,255,0.04)] transition-all duration-300 overflow-hidden"
            >
              {/* Top color bar + industry */}
              <div className={`h-1.5 bg-gradient-to-r ${cs.coverColor}`} />

              <div className="flex flex-col flex-1 p-6">
                {/* Industry tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] text-[#b0ada5]">
                    {cs.industryTag}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#b0ada5]">
                    <Clock size={11} />
                    {cs.period}
                  </div>
                </div>

                {/* Client name */}
                <h2 className="font-heading font-bold text-[#f8f7f4] text-xl mb-1 group-hover:text-accent transition-colors">
                  {cs.client}
                </h2>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-[#b0ada5] mb-4">
                  <MapPin size={11} />
                  {cs.location}
                </div>

                {/* Challenge excerpt */}
                <p className="text-sm text-[#b0ada5] leading-relaxed line-clamp-3 mb-5 flex-1">
                  {cs.challenge}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {cs.results.map(r => (
                    <div key={r.label} className="text-center p-2 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)]">
                      <p className="font-heading font-bold text-accent text-sm leading-tight">{r.metric}</p>
                      <p className="text-[10px] text-[#b0ada5] mt-0.5 leading-tight">{r.label}</p>
                    </div>
                  ))}
                </div>

                {/* Services */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cs.services.map(s => (
                    <span
                      key={s}
                      className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${serviceColors[s] ?? 'bg-[rgba(255,255,255,0.06)] text-[#b0ada5] border-[rgba(255,255,255,0.08)]'}`}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-sm text-accent font-medium">
                  Przeczytaj case study
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center p-10 rounded-3xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20">
          <h2 className="font-heading font-bold text-2xl text-[#f8f7f4] mb-3">
            Chcesz być następnym case study?
          </h2>
          <p className="text-[#b0ada5] mb-6 max-w-md mx-auto">
            Zamów bezpłatny audyt i sprawdź, jakie wyniki możemy osiągnąć razem.
          </p>
          <Link
            href="/audyt"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white font-heading font-bold text-sm transition-all hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            Zamów darmowy audyt
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  )
}
