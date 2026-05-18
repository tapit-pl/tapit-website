import type { Metadata } from 'next'
import Script from 'next/script'
import SectionTag from '@/components/SectionTag'
import FinalCTA from '@/components/home/FinalCTA'

export const metadata: Metadata = {
  title: 'Sprawdź pozycję wizytówki Google - Tapit',
  description: 'Bezpłatne narzędzie do sprawdzania pozycji Twojej wizytówki Google Business Profile w wynikach lokalnych. Dowiedz się, gdzie jesteś w Google Maps.',
}

export default function WizytowkaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-12 md:pt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <SectionTag className="justify-center">Narzędzie</SectionTag>
          <h1 className="mb-5">Sprawdź pozycję wizytówki Google</h1>
          <p className="text-[#b0ada5] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Wpisz nazwę swojej firmy i lokalizację - sprawdź, na której pozycji wyświetlasz się w Google Maps. Bezpłatne, bez rejestracji.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="pb-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden min-h-[500px] p-4">
          <div id="free-tool" className="min-h-[480px]">
            <div className="flex items-center justify-center h-48 text-[#b0ada5] text-sm">
              Ładowanie narzędzia...
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-16 bg-[rgba(0,0,0,0.02)] border-y border-[rgba(255,255,255,0.07)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <SectionTag className="justify-center">Dlaczego to ważne</SectionTag>
            <h2>Twoja pozycja w Google Maps = Twoi klienci</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                stat: '76%',
                desc: 'użytkowników odwiedzających lokalny biznes po wyszukiwaniu "w pobliżu" robi to tego samego dnia.',
              },
              {
                stat: 'TOP 3',
                desc: 'wyniki w pakiecie lokalnym Google (tzw. "local pack") zbierają ponad 70% kliknięć w wynikach lokalnych.',
              },
              {
                stat: '5×',
                desc: 'więcej kliknięć generuje wizytówka na pozycji #1 w porównaniu do pozycji #4 i niżej.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-7 text-center">
                <span className="font-heading font-extrabold text-5xl text-accent block mb-3">{item.stat}</span>
                <p className="text-[#b0ada5] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to local marketing */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="mb-4">Niska pozycja? Możemy to zmienić.</h2>
        <p className="text-[#b0ada5] text-lg mb-8">
          Zamów darmowy audyt - przeanalizujemy Twoją wizytówkę i pokażemy, co zrobić, żeby wskoczyć wyżej w Google Maps.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/audyt"
            className="px-7 py-3.5 rounded-full bg-accent hover:bg-accent-hover text-white font-heading font-bold text-sm transition-all hover:shadow-xl hover:shadow-accent/25"
          >
            Zamów darmowy audyt
          </a>
          <a
            href="/uslugi/marketing-lokalny"
            className="px-7 py-3.5 rounded-full border border-[rgba(255,255,255,0.15)] text-[#f8f7f4] font-heading font-bold text-sm hover:border-[rgba(0,0,0,0.30)] transition-all"
          >
            Dowiedz się o marketingu lokalnym →
          </a>
        </div>
      </section>

      {/* Localo script */}
      <Script
        id="localo-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.LOCALO_FREE_TOOL = {
              container: "#free-tool",
              denyGeolocation: true,
              hidePoweredBy: true,
              token: "BL1sG482kx0dGCEY6cNKfxvr_pUHZcJ1tK1uAUAMje4"
            };
          `,
        }}
      />
      <Script
        src="https://jstools.localo.app/scripts/freetool.js"
        strategy="afterInteractive"
      />

      <FinalCTA />
    </>
  )
}
