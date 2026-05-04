import type { Metadata } from 'next'
import { Eye, Handshake, TrendingUp } from 'lucide-react'
import SectionTag from '@/components/SectionTag'
import FinalCTA from '@/components/home/FinalCTA'

export const metadata: Metadata = {
  title: 'O nas — Tapit',
  description:
    'Poznaj historię Tapit — agencji marketingowej z Krakowa. Od sceny do pierwszej strony Google. Założyciel Maciej Sieńko i zespół specjalistów.',
}

const team = [
  { initials: 'MS', name: 'Maciej Sieńko', role: 'Założyciel i strateg' },
  { initials: 'PK', name: 'Paulina Koza-Antolak', role: 'Specjalistka ds. marketingu' },
  { initials: 'ZU', name: 'Zuzanna Uczeń', role: 'Specjalistka ds. marketingu lokalnego' },
  { initials: 'DW', name: 'Dominika Warańska', role: 'Specjalistka Google Ads' },
  { initials: 'AS', name: 'Adam Socha', role: 'Specjalista SEO' },
]

const values = [
  {
    icon: Eye,
    title: 'Transparentność',
    desc: 'Wiesz, za co płacisz i jakie masz wyniki. Bez raportów-wydmuszek, bez ukrywania danych.',
  },
  {
    icon: Handshake,
    title: 'Partnerstwo',
    desc: 'Nie jesteśmy dostawcą usługi — jesteśmy częścią Twojego zespołu. Twoje cele są naszymi celami.',
  },
  {
    icon: TrendingUp,
    title: 'Wynik',
    desc: 'Jedyna metryka, która się liczy. Nie obiecujemy — pokazujemy liczby.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Story section */}
      <section className="pt-20 pb-16 md:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Text */}
            <div>
              <SectionTag>Nasza historia</SectionTag>
              <h1 className="mb-6">Od sceny do pierwszej strony Google</h1>

              <div className="space-y-5 text-[#6b6860] text-base leading-relaxed">
                <p>
                  Przez wiele lat występowałem jako iluzjonista. W tej branży, żeby mieć zlecenia, trzeba być widocznym w internecie. Przez lata rozwijałem swoją markę osobistą do tego stopnia, że po wpisaniu frazy &ldquo;iluzjonista Kraków&rdquo; wyświetlam się na pierwszych pozycjach Google.
                </p>
                <p>
                  W pewnym momencie zrozumiałem, że mogę to samo robić dla innych firm — wynieść je na pozycje, na których znajdą ich klienci.
                </p>
              </div>

              {/* Blockquote */}
              <blockquote className="my-8 pl-6 border-l-[3px] border-accent">
                <p className="font-heading font-bold text-2xl text-[#1c1b19] leading-snug">
                  &ldquo;Mechanizm jest ten sam — przyciąganie uwagi. Na scenie robiłem to gestem i słowem. W internecie robię to danymi i strategią.&rdquo;
                </p>
                <footer className="mt-3 text-sm text-accent font-medium">— Maciej Sieńko, założyciel Tapit</footer>
              </blockquote>

              <p className="text-[#6b6860] text-base leading-relaxed">
                Tak powstało Tapit — od &ldquo;tap it&rdquo;, czyli dotknij, a my zajmiemy się resztą. Ale Tapit to też coś więcej. To podejście do klientów jak do partnerów — wszystkich traktujemy na tym samym, koleżeńsko-biznesowym poziomie.
              </p>
            </div>

            {/* Photo placeholder */}
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-2xl bg-[rgba(0,0,0,0.04)] border border-[rgba(0,0,0,0.09)] flex items-center justify-center">
                <p className="text-[#6b6860] text-sm">[Zdjęcie Macieja Sieńko]</p>
              </div>
              {/* Accent decoration */}
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl border border-accent/20"
                style={{ background: 'rgba(245,60,60,0.03)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[rgba(0,0,0,0.02)] border-y border-[rgba(0,0,0,0.07)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <SectionTag className="justify-center">Wartości</SectionTag>
            <h2>Co nami kieruje</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(v => (
              <div
                key={v.title}
                className="bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.08)] rounded-2xl p-8 text-center hover:border-accent/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/15 flex items-center justify-center mx-auto mb-4">
                  <v.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#1c1b19] mb-3">{v.title}</h3>
                <p className="text-[#6b6860] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <SectionTag className="justify-center">Zespół</SectionTag>
          <h2 className="mb-4">Ludzie, z którymi będziesz pracować</h2>
          <p className="text-[#6b6860] text-lg max-w-xl mx-auto">
            Każdy z nas odpowiada za konkretny obszar. Razem tworzymy strategię, która napędza Twój biznes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {team.map(member => (
            <div
              key={member.name}
              className="group bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.08)] rounded-2xl p-6 text-center hover:border-accent/25 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center font-heading font-bold text-lg text-white"
                style={{ background: 'linear-gradient(135deg, #f53c3c, #f59e0b)' }}>
                {member.initials}
              </div>
              <p className="font-heading font-bold text-sm text-[#1c1b19] leading-snug">{member.name}</p>
              <p className="text-xs text-[#6b6860] mt-1 leading-snug">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
