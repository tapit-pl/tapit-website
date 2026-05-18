import Link from 'next/link'
import { CheckCircle, ArrowRight, Repeat, CreditCard, Zap, Globe, Lock } from 'lucide-react'
import SectionTag from '@/components/SectionTag'

const plans = [
  {
    id: 'subskrypcja',
    icon: Repeat,
    label: 'Subskrypcja',
    badge: null,
    tagline: 'Zacznij bez ryzyka',
    price: '75',
    unit: 'zł netto / mies.',
    highlight: false,
    description: 'Nie płacisz ani złotówki za stworzenie strony. Testuj przez pierwszy miesiąc - jeśli nie jesteś zadowolony, po prostu kończysz.',
    features: [
      'Zero kosztów startu - strona za darmo',
      'Działasz od pierwszego dnia',
      'Możliwość rezygnacji w każdej chwili',
      'Hosting i domena w Twoim zakresie',
    ],
    note: 'Strona pozostaje własnością Tapit. Przy rezygnacji z subskrypcji zostaje wyłączona.',
    cta: 'Zacznij subskrypcję',
    ctaHref: '/kontakt',
  },
  {
    id: 'raty',
    icon: CreditCard,
    label: 'Raty',
    badge: 'Polecamy',
    tagline: 'Elastyczna płatność',
    price: '250',
    unit: 'zł netto / mies.',
    highlight: true,
    description: 'Zamów stronę teraz i płać wygodnie w ratach. Strona staje się Twoja od razu po pełnej spłacie.',
    features: [
      'Strona Twoja po spłacie rat',
      'Cena strony od 650 zł netto',
      'Prowizja za raty: tylko 3%',
      'Hosting i domena w Twoim zakresie',
    ],
    note: null,
    noteHosting: true,
    cta: 'Rozłóż na raty',
    ctaHref: '/kontakt',
  },
  {
    id: 'jednorazowa',
    icon: Zap,
    label: 'Jednorazowa',
    badge: null,
    tagline: 'Bez żadnych haczyków',
    price: '650',
    unit: 'zł netto',
    highlight: false,
    description: 'Płacisz raz - strona Twoja na zawsze. Żadnych miesięcznych opłat, żadnych ukrytych kosztów.',
    features: [
      'Pełna własność strony',
      'Certyfikat SSL gratis',
      'Bez abonamentów i zobowiązań',
      'Hosting i domena w Twoim zakresie',
    ],
    note: null,
    cta: 'Zamów stronę',
    ctaHref: '/kontakt',
  },
]

const hostingExamples = [
  { name: 'Hosting VPS (Hetzner)', cost: '~25 zł / mies.', year: '~300 zł / rok' },
  { name: 'Hosting współdzielony (Zenbox)', cost: '~20 zł / mies.', year: '~240 zł / rok' },
  { name: 'Domena .pl', cost: '~5 zł / mies.', year: '~60 zł / rok' },
]

export default function WebsitePricing() {
  return (
    <section className="py-20 border-t border-[rgba(255,255,255,0.07)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <SectionTag>Cennik</SectionTag>
          <h2 className="mb-4">Wybierz model, który Ci odpowiada</h2>
          <p className="text-[#b0ada5] text-lg max-w-2xl mx-auto">
            Jedna strona, trzy sposoby płatności. Sam decydujesz co jest dla Ciebie najlepsze.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-[#1a1917] border-2 border-accent shadow-2xl shadow-accent/10 scale-[1.02]'
                    : 'bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] hover:border-accent/30 hover:-translate-y-1'
                }`}
              >
                {/* Top gradient bar */}
                {plan.highlight && (
                  <div className="h-1 bg-gradient-to-r from-accent via-orange-400 to-accent" />
                )}

                {plan.badge && (
                  <div className="absolute top-5 right-5">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-widest bg-accent text-white px-2.5 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  {/* Icon + label */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${plan.highlight ? 'bg-accent/20' : 'bg-[rgba(255,255,255,0.06)]'}`}>
                      <Icon size={18} className={plan.highlight ? 'text-accent' : 'text-[#b0ada5]'} />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-[#f8f7f4] text-base">{plan.label}</p>
                      <p className="text-xs text-[#b0ada5]">{plan.tagline}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-5 pb-5 border-b border-[rgba(255,255,255,0.07)]">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm text-[#b0ada5]">od</span>
                      <span className="font-heading font-extrabold text-4xl text-[#f8f7f4]">{plan.price}</span>
                      <span className="text-sm text-[#b0ada5]">{plan.unit}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#b0ada5] text-sm leading-relaxed mb-5">{plan.description}</p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle size={14} className="text-success shrink-0 mt-0.5" />
                        <span className="text-sm text-[#b0ada5]">{f}</span>
                      </li>
                    ))}
                    {plan.id === 'jednorazowa' && (
                      <li className="flex items-start gap-2.5">
                        <Lock size={14} className="text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-accent font-medium">Certyfikat SSL w zestawie</span>
                      </li>
                    )}
                  </ul>

                  {/* Note */}
                  {plan.note && (
                    <p className="text-xs text-[#b0ada5]/60 mb-5 p-3 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] leading-relaxed">
                      {plan.note}
                    </p>
                  )}

                  {/* CTA */}
                  <Link
                    href={plan.ctaHref}
                    className={`flex items-center justify-center gap-2 py-3.5 rounded-full font-heading font-bold text-sm transition-all ${
                      plan.highlight
                        ? 'bg-accent hover:bg-accent-hover text-white hover:shadow-lg hover:shadow-accent/25'
                        : 'border border-[rgba(255,255,255,0.12)] text-[#f8f7f4] hover:border-accent/40 hover:text-accent'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Hosting costs note */}
        <div className="mt-10 p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.07)]">
          <div className="flex items-start gap-3 mb-4">
            <Globe size={16} className="text-[#b0ada5] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-heading font-bold text-[#f8f7f4] mb-1">Ile kosztuje hosting i domena?</p>
              <p className="text-xs text-[#b0ada5] leading-relaxed">
                Każda strona wymaga opłaconego hostingu i domeny - to Twój koszt, niezależny od modelu płatności za stronę. Poniżej orientacyjne stawki rynkowe:
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {hostingExamples.map((h, i) => (
              <div key={i} className="flex items-center justify-between sm:flex-col sm:items-start gap-1 p-3 rounded-xl bg-[rgba(255,255,255,0.03)]">
                <p className="text-xs text-[#b0ada5]">{h.name}</p>
                <div className="text-right sm:text-left">
                  <p className="text-sm font-heading font-bold text-[#f8f7f4]">{h.cost}</p>
                  <p className="text-xs text-[#b0ada5]/60">{h.year}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#b0ada5]/50 mt-3">
            * Ceny orientacyjne na maj 2026. Mozemy pomoc w konfiguracji hostingu i domeny - zapytaj nas podczas audytu.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-[#b0ada5] text-sm mb-4">
            Nie wiesz ktory model wybrać? Porozmawiajmy - doradzimy najlepsze rozwiązanie dla Twojej firmy.
          </p>
          <Link
            href="/audyt"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white font-heading font-bold text-sm transition-all hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            Zamow darmowy audyt
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
