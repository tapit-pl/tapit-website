import Link from 'next/link'
import { CheckCircle, ArrowRight, Repeat, CreditCard, Zap, Globe, Lock, Flame, HelpCircle } from 'lucide-react'
import SectionTag from '@/components/SectionTag'

const MONTHS = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia']
const currentMonth = MONTHS[new Date().getMonth()]

const plans = [
  {
    id: 'subskrypcja',
    icon: Repeat,
    label: 'Subskrypcja',
    badge: null,
    tagline: 'Zacznij bez ryzyka',
    pricePrefix: 'od',
    price: '75',
    unit: 'zł netto / mies.',
    highlight: false,
    promoLabel: null,
    description: 'Nie płacisz za stworzenie strony - my budujemy, Ty płacisz miesięcznie i działasz od pierwszego dnia.',
    features: [
      'Zero kosztów startu - strona za darmo',
      'Hosting i domena w naszym zakresie',
      'Strona działa od pierwszego dnia',
      'Minimalne zobowiązanie: 3 miesiące',
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
    pricePrefix: 'od nawet',
    price: '50',
    unit: 'zł netto / mies.',
    highlight: true,
    promoLabel: `Promocja ${currentMonth}`,
    description: 'Zamów stronę teraz i rozłóż płatność na wygodne raty. Strona staje się Twoja po pełnej spłacie.',
    features: [
      'Strona Twoja po spłacie rat',
      'Cena strony od 650 zł netto*',
      'Prowizja za raty: tylko 3%',
      'Pomagamy zakupić hosting i domenę',
    ],
    note: `* Cena 650 zł netto to wyjątkowa promocja ${currentMonth} dla nowych klientów.`,
    cta: 'Rozłóż na raty',
    ctaHref: '/kontakt',
  },
  {
    id: 'jednorazowa',
    icon: Zap,
    label: 'Jednorazowa',
    badge: null,
    tagline: 'Bez żadnych haczyków',
    pricePrefix: 'od',
    price: '650',
    unit: 'zł netto',
    highlight: false,
    promoLabel: `Wyjątkowa cena w ${currentMonth}`,
    description: 'Płacisz raz - strona Twoja na zawsze. Żadnych abonamentów, żadnych ukrytych kosztów.',
    features: [
      'Pełna własność strony od razu',
      'Pomagamy zakupić hosting i domenę',
      'Bez miesięcznych zobowiązań',
    ],
    note: null,
    cta: 'Zamów stronę',
    ctaHref: '/kontakt',
  },
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

                  {/* Promo label */}
                  {plan.promoLabel && (
                    <div className="flex items-center gap-1.5 mb-3">
                      <Flame size={12} className="text-orange-400" />
                      <span className="text-xs font-heading font-bold text-orange-400 uppercase tracking-wider">
                        {plan.promoLabel}
                      </span>
                    </div>
                  )}

                  {/* Price */}
                  <div className="mb-5 pb-5 border-b border-[rgba(255,255,255,0.07)]">
                    <div className="flex items-baseline gap-1.5 flex-wrap">
                      <span className="text-sm text-[#b0ada5]">{plan.pricePrefix}</span>
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
                        <span className="text-sm text-accent font-semibold">Certyfikat SSL w zestawie</span>
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

        {/* Hosting costs box */}
        <div className="mt-10 p-6 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.07)]">
          <div className="flex items-start gap-3 mb-5">
            <Globe size={16} className="text-[#b0ada5] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-heading font-bold text-[#f8f7f4] mb-1">Ile kosztuje hosting i domena?</p>
              <p className="text-xs text-[#b0ada5] leading-relaxed">
                Przy modelach ratalnym i jednorazowym hosting i domena leżą po Twojej stronie - opłacane raz w roku. Poniżej nasze stawki. <strong className="text-[#f8f7f4]">Pomagamy Ci je zakupić i skonfigurować.</strong>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { name: 'Hosting (serwer)', cost: '200 zł / rok', month: 'ok. 17 zł / mies.', detail: 'Opłacany raz rocznie' },
              { name: 'Domena .pl', cost: '100 zł / rok', month: 'ok. 8 zł / mies.', detail: 'Opłacana raz rocznie' },
              { name: 'Razem', cost: '300 zł / rok', month: 'ok. 25 zł / mies.', detail: 'Łączny koszt utrzymania', highlight: true },
            ].map((h, i) => (
              <div key={i} className={`p-4 rounded-xl ${(h as {highlight?: boolean}).highlight ? 'bg-accent/8 border border-accent/20' : 'bg-[rgba(255,255,255,0.03)]'}`}>
                <p className="text-xs text-[#b0ada5] mb-1">{h.name}</p>
                <p className={`text-lg font-heading font-bold ${(h as {highlight?: boolean}).highlight ? 'text-accent' : 'text-[#f8f7f4]'}`}>{h.cost}</p>
                <p className="text-xs text-[#b0ada5]/70">{h.month}</p>
                <p className="text-[10px] text-[#b0ada5]/50 mt-1">{h.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-start gap-2">
            <HelpCircle size={13} className="text-[#b0ada5]/50 shrink-0 mt-0.5" />
            <p className="text-xs text-[#b0ada5]/50 leading-relaxed">
              Model subskrypcji zawiera hosting i domenę w cenie abonamentu - nie płacisz za nie osobno.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-[#b0ada5] text-sm mb-4">
            Nie wiesz który model wybrać? Porozmawiajmy - doradzimy najlepsze rozwiązanie dla Twojej firmy.
          </p>
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
  )
}
