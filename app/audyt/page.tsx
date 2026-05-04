'use client'

import { useState } from 'react'
import { Search, Eye, BarChart3, FileText, Video } from 'lucide-react'
import SectionTag from '@/components/SectionTag'
import ContactForm from '@/components/ContactForm'

export default function AuditPage() {
  const [budget, setBudget] = useState(5000)
  const wastePercent = Math.round(20 + ((budget - 1000) / 49000) * 15)
  const wasteAmount = Math.round(budget * (wastePercent / 100))

  return (
    <>
      {/* Hero */}
      <section
        className="pt-20 pb-16 md:pt-28 relative overflow-hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(245,60,60,0.04) 0%, transparent 60%)',
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <SectionTag className="justify-center">Darmowy audyt</SectionTag>
          <h1 className="mb-6">Sprawdź, gdzie znika Twój budżet</h1>
          <p className="text-[#6b6860] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Nasi specjaliści przeanalizują Twoją stronę, reklamy i widoczność w Google. Dostaniesz raport z konkretnymi rekomendacjami — co poprawić, żeby przestać tracić pieniądze. Bez zobowiązań.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.08)] rounded-2xl p-8 md:p-10">
          <h2 className="font-heading font-bold text-2xl text-[#1c1b19] mb-2" style={{ fontSize: '1.8rem' }}>
            Ile możesz tracić?
          </h2>
          <p className="text-[#6b6860] text-sm mb-8">Przesuń suwak i sprawdź szacunkowe straty w Twoim budżecie.</p>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm text-[#6b6860] font-medium">
                Twój miesięczny budżet na marketing
              </label>
              <span className="font-heading font-bold text-accent text-lg">
                {budget.toLocaleString('pl-PL')} zł
              </span>
            </div>
            <input
              type="range"
              min={1000}
              max={50000}
              step={500}
              value={budget}
              onChange={e => setBudget(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #f53c3c 0%, #f53c3c ${((budget - 1000) / 49000) * 100}%, rgba(0,0,0,0.08) ${((budget - 1000) / 49000) * 100}%, rgba(0,0,0,0.08) 100%)`,
              }}
            />
            <div className="flex justify-between text-xs text-[#6b6860] mt-1.5">
              <span>1 000 zł</span>
              <span>50 000 zł</span>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-xl p-5">
            <p className="text-[#1c1b19] text-base leading-relaxed">
              Statystycznie{' '}
              <strong className="text-accent font-bold">{wastePercent}% budżetu</strong>
              {' '}jest przepalane przez brak optymalizacji, złe targetowanie lub niedziałającą analitykę. Dla Twojego budżetu to{' '}
              <strong className="text-accent font-bold text-xl">
                {wasteAmount.toLocaleString('pl-PL')} zł miesięcznie
              </strong>
              .
            </p>
          </div>

          <a
            href="#formularz"
            className="mt-6 flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-accent hover:bg-accent-hover text-white font-heading font-bold transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            Zamów darmowy audyt — pokażemy Ci, gdzie dokładnie
          </a>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 bg-[rgba(0,0,0,0.02)] border-y border-[rgba(0,0,0,0.07)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <SectionTag className="justify-center">Zakres audytu</SectionTag>
            <h2>Co dostajesz w audycie</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: Search,
                title: 'Analiza strony internetowej',
                desc: 'Sprawdzimy szybkość, UX, SEO techniczne i konwersyjność Twojej strony.',
              },
              {
                icon: Eye,
                title: 'Analiza widoczności w Google',
                desc: 'Pokażemy, na jakie frazy się wyświetlasz, a na jakie powinieneś.',
              },
              {
                icon: BarChart3,
                title: 'Przegląd konta reklamowego',
                desc: 'Jeśli prowadzisz kampanie PPC, sprawdzimy, czy Twój budżet pracuje efektywnie.',
              },
              {
                icon: FileText,
                title: 'Raport z rekomendacjami',
                desc: 'Dostaniesz konkretny plan — co poprawić i jakich wyników się spodziewać.',
              },
            ].map(item => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.08)] rounded-xl p-6 hover:border-accent/20 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#1c1b19] mb-1.5">{item.title}</h3>
                  <p className="text-[#6b6860] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example report */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <SectionTag className="justify-center">Przykład</SectionTag>
          <h2 className="mb-4">Jak wygląda audyt? Oto przykład</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {[
            'Analiza widoczności fraz kluczowych',
            'Przegląd kampanii Google Ads',
            'Rekomendacje i plan działania',
          ].map(label => (
            <div
              key={label}
              className="aspect-video bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.08)] rounded-xl flex items-center justify-center p-4"
            >
              <p className="text-[#6b6860] text-xs text-center">[Screen: {label}]</p>
            </div>
          ))}
        </div>

        <p className="text-center text-[#6b6860] text-sm">
          Każdy audyt jest spersonalizowany — analizujemy Twoją konkretną sytuację, nie wysyłamy generycznych PDF-ów.
        </p>
      </section>

      {/* Form */}
      <section id="formularz" className="py-16 max-w-2xl mx-auto px-4 sm:px-6">
        <div className="bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.07)] rounded-3xl p-8 md:p-10">
          <h2 className="font-heading font-bold text-2xl text-[#1c1b19] mb-1" style={{ fontSize: '1.8rem' }}>
            Zamów darmowy audyt
          </h2>
          <p className="text-[#6b6860] text-sm mb-6">
            Wypełnij formularz — nasz specjalista skontaktuje się z Tobą w ciągu 24h.
          </p>
          <ContactForm variant="audit" showCheckboxes />
          <p className="mt-4 text-center text-xs text-[#6b6860]">
            Bez zobowiązań. Bez spamu. Twoje dane są bezpieczne.
          </p>
        </div>
      </section>

      {/* Video format promise */}
      <section className="py-12 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex items-start gap-4 bg-accent/[0.05] border border-accent/15 rounded-2xl p-6">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
            <Video size={20} className="text-accent" />
          </div>
          <div>
            <p className="text-[#1c1b19] text-base leading-relaxed">
              Twój audyt otrzymasz w formie{' '}
              <strong className="text-accent">spersonalizowanego nagrania wideo</strong>{' '}
              — nasz specjalista pokaże Ci palcem, co wymaga poprawy i dlaczego. Żadnych generycznych raportów.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
