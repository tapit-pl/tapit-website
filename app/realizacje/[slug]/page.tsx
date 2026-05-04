import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, MapPin, Clock, CheckCircle, ArrowRight, Quote } from 'lucide-react'
import { getCaseStudy, getAllCaseSlugs, caseStudies } from '@/lib/caseStudies'
import type { Metadata } from 'next'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllCaseSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = getCaseStudy(params.slug)
  if (!cs) return {}
  return {
    title: `${cs.client} — Case Study | Tapit`,
    description: `Jak pomogliśmy ${cs.client} osiągnąć wyniki w ${cs.industry}. Sprawdź konkretne liczby z ${cs.period} współpracy.`,
    openGraph: {
      title: `${cs.client} — Case Study | Tapit`,
      description: `${cs.results[0].metric} ${cs.results[0].label} w ${cs.period}.`,
    },
  }
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

export default function CaseStudyPage({ params }: Props) {
  const cs = getCaseStudy(params.slug)
  if (!cs) notFound()

  const otherCases = caseStudies.filter(c => c.slug !== cs.slug).slice(0, 3)

  return (
    <main className="pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Back */}
        <Link
          href="/realizacje"
          className="inline-flex items-center gap-2 text-sm text-[#b0ada5] hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={15} />
          Wszystkie realizacje
        </Link>

        {/* Header */}
        <div className="mb-10">
          {/* Industry + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] text-[#b0ada5]">
              {cs.industryTag}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-[#b0ada5]">
              <MapPin size={12} />
              {cs.location}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-[#b0ada5]">
              <Clock size={12} />
              {cs.period} współpracy
            </div>
          </div>

          <h1 className="mb-3">{cs.client}</h1>
          <p className="text-[#b0ada5] text-lg">{cs.industry}</p>

          {/* Services */}
          <div className="flex flex-wrap gap-2 mt-4">
            {cs.services.map(s => (
              <span
                key={s}
                className={`text-xs font-medium px-3 py-1 rounded-full border ${serviceColors[s] ?? 'bg-[rgba(255,255,255,0.06)] text-[#b0ada5] border-[rgba(255,255,255,0.08)]'}`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Results hero */}
        <div className={`rounded-2xl bg-gradient-to-br ${cs.coverColor} border border-[rgba(255,255,255,0.08)] p-8 mb-12`}>
          <p className="text-xs uppercase tracking-[2px] text-[#b0ada5] font-heading font-bold mb-5">
            Kluczowe wyniki
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {cs.results.map(r => (
              <div key={r.label}>
                <p className="font-heading font-bold text-4xl text-accent mb-1">{r.metric}</p>
                <p className="font-medium text-[#f8f7f4] text-sm mb-1">{r.label}</p>
                <p className="text-xs text-[#b0ada5] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge */}
        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-[#f8f7f4] mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xs font-bold">1</span>
            Wyzwanie
          </h2>
          <p className="text-[#b0ada5] leading-relaxed text-[15px]">{cs.challenge}</p>
        </section>

        <div className="border-t border-[rgba(255,255,255,0.07)] mb-10" />

        {/* Solution */}
        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-[#f8f7f4] mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xs font-bold">2</span>
            Nasze działania
          </h2>
          <p className="text-[#b0ada5] leading-relaxed text-[15px] mb-5">{cs.solution}</p>

          <div className="space-y-2.5">
            {cs.solutionPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)]">
                <CheckCircle size={15} className="text-success shrink-0 mt-0.5" />
                <p className="text-sm text-[#b0ada5]">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-[rgba(255,255,255,0.07)] mb-10" />

        {/* Results detail */}
        <section className="mb-12">
          <h2 className="font-heading font-bold text-xl text-[#f8f7f4] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xs font-bold">3</span>
            Wyniki
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {cs.results.map(r => (
              <div key={r.label} className="p-5 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] text-center">
                <p className="font-heading font-bold text-3xl text-accent mb-1">{r.metric}</p>
                <p className="font-medium text-[#f8f7f4] text-sm mb-2">{r.label}</p>
                <p className="text-xs text-[#b0ada5] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quote */}
        <blockquote className="relative p-8 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] mb-16">
          <Quote size={32} className="text-accent/20 absolute top-6 left-6" />
          <p className="text-[#f8f7f4] text-lg leading-relaxed font-medium italic mb-5 pl-2">
            &bdquo;{cs.quote}&rdquo;
          </p>
          <div className="flex items-center gap-3 border-t border-[rgba(255,255,255,0.07)] pt-4">
            <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold font-heading">
              {cs.quoteName.charAt(0)}
            </div>
            <div>
              <p className="font-medium text-[#f8f7f4] text-sm">{cs.quoteName}</p>
              <p className="text-xs text-[#b0ada5]">{cs.quoteRole}</p>
            </div>
          </div>
        </blockquote>

        {/* CTA */}
        <div className="text-center p-10 rounded-3xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 mb-16">
          <h2 className="font-heading font-bold text-2xl text-[#f8f7f4] mb-3">
            Chcesz podobnych wyników?
          </h2>
          <p className="text-[#b0ada5] mb-6 max-w-sm mx-auto">
            Umów bezpłatny audyt i sprawdź, co możemy osiągnąć razem dla Twojego biznesu.
          </p>
          <Link
            href="/audyt"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white font-heading font-bold text-sm transition-all hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            Zamów darmowy audyt
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Other cases */}
        {otherCases.length > 0 && (
          <section>
            <h3 className="font-heading font-bold text-lg text-[#f8f7f4] mb-5">
              Inne realizacje
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherCases.map(c => (
                <Link
                  key={c.slug}
                  href={`/realizacje/${c.slug}`}
                  className="group p-4 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] hover:border-accent/30 transition-all"
                >
                  <div className={`h-1 rounded-full bg-gradient-to-r ${c.coverColor} mb-3`} />
                  <p className="font-medium text-[#f8f7f4] text-sm group-hover:text-accent transition-colors mb-1">{c.client}</p>
                  <p className="text-xs text-[#b0ada5]">{c.industryTag}</p>
                  <div className="flex items-center gap-1 text-xs text-accent mt-2">
                    Czytaj <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  )
}
