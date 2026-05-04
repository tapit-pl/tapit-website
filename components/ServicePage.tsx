import Link from 'next/link'
import { CheckCircle, ArrowRight, LucideIcon } from 'lucide-react'
import SectionTag from '@/components/SectionTag'
import FinalCTA from '@/components/home/FinalCTA'

interface Step {
  title: string
  desc: string
}

interface Result {
  metric: string
  label: string
  desc: string
}

interface ServicePageProps {
  tag: string
  title: string
  subtitle: string
  problems: string[]
  solutionTitle: string
  solutionText: string
  solutionPoints: string[]
  steps: Step[]
  results: Result[]
  Icon: LucideIcon
}

export default function ServicePage({
  tag, title, subtitle, problems, solutionTitle, solutionText, solutionPoints, steps, results, Icon
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-28 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #f53c3c 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <SectionTag>{tag}</SectionTag>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <Icon size={26} className="text-accent" />
              </div>
              <h1>{title}</h1>
            </div>
            <p className="text-[#6b6860] text-lg md:text-xl leading-relaxed mb-8">{subtitle}</p>
            <Link
              href="/audyt"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white font-heading font-bold text-sm transition-all hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              Zamów darmowy audyt
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 bg-[rgba(0,0,0,0.02)] border-y border-[rgba(0,0,0,0.07)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <SectionTag>Problem</SectionTag>
            <h2 className="mb-8">Z czym się mierzysz?</h2>
            <div className="space-y-4">
              {problems.map((p, i) => (
                <div key={i} className="flex items-start gap-3 bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.08)] rounded-xl p-5">
                  <span className="w-6 h-6 rounded-full border border-accent/30 flex items-center justify-center text-accent text-xs font-heading font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-[#6b6860] text-sm leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <SectionTag>Rozwiązanie</SectionTag>
          <h2 className="mb-5">{solutionTitle}</h2>
          <p className="text-[#6b6860] text-base leading-relaxed mb-7">{solutionText}</p>
          <div className="space-y-3">
            {solutionPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-success shrink-0 mt-0.5" />
                <p className="text-[#6b6860] text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-[rgba(0,0,0,0.02)] border-y border-[rgba(0,0,0,0.07)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTag>Proces</SectionTag>
          <h2 className="mb-10">Jak to robimy krok po kroku</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-[rgba(0,0,0,0.05)] rounded-2xl overflow-hidden">
            {steps.map((step, i) => (
              <div key={i} className="bg-[#f0eeec] p-7 hover:bg-[rgba(0,0,0,0.03)] transition-colors">
                <span className="font-heading font-extrabold text-4xl text-accent/30 mb-3 block">0{i + 1}</span>
                <h3 className="font-heading font-bold text-base text-[#1c1b19] mb-2">{step.title}</h3>
                <p className="text-[#6b6860] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTag>Wyniki</SectionTag>
        <h2 className="mb-10">Co osiągamy dla klientów</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {results.map((r, i) => (
            <div key={i} className="bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.08)] rounded-2xl p-7 hover:border-accent/20 hover:-translate-y-1 transition-all duration-300">
              <span className="font-heading font-extrabold text-5xl text-accent block mb-1">{r.metric}</span>
              <p className="text-sm text-accent/70 font-medium mb-3">{r.label}</p>
              <p className="text-[#6b6860] text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="mb-4">Chcesz takich wyników?</h2>
        <p className="text-[#6b6860] text-lg mb-8">
          Zamów darmowy audyt — sprawdzimy, co możemy osiągnąć dla Twojego biznesu.
        </p>
        <Link
          href="/audyt"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent hover:bg-accent-hover text-white font-heading font-bold transition-all hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
        >
          Zamów darmowy audyt
          <ArrowRight size={16} />
        </Link>
      </section>

      <FinalCTA />
    </>
  )
}
