import type { Metadata } from 'next'
import { Instagram } from 'lucide-react'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Meta Ads (Facebook & Instagram) - Tapit',
  description: 'Reklamy na Facebooku i Instagramie, które docierają do Twoich klientów. Kampanie Meta Ads zarządzane przez ekspertów z Krakowa.',
}

export default function MetaAdsPage() {
  return (
    <ServicePage
      heroImage="/images/hero-meta-ads.jpg"
      tag="Usługi / Meta Ads"
      title="Meta Ads"
      subtitle="Reklamy na Facebooku i Instagramie, które trafiają do ludzi gotowych kupić Twój produkt lub skorzystać z Twojej usługi. Precyzyjne targetowanie, mierzalne wyniki."
      Icon={Instagram}
      problems={[
        'Wydajesz pieniądze na reklamy Meta, ale nie wiesz, czy przynoszą realne wyniki - brakuje klarownych danych o sprzedaży i zapytaniach.',
        'Twoje reklamy docierają do zbyt szerokiej grupy odbiorców, przez co koszt pozyskania klienta jest zbyt wysoki.',
        'Kreacje reklamowe się zużywają - te same grafiki i teksty przestają działać po kilku tygodniach, a nie masz pomysłu co zrobić dalej.',
        'Nie masz skonfigurowanego Meta Pixel ani Conversions API, przez co tracisz dane o konwersjach po zmianach prywatności iOS.',
      ]}
      solutionTitle="Jak to rozwiązujemy"
      solutionText="Kampanie Meta Ads budujemy w oparciu o dane, nie intuicję. Konfigurujemy prawidłowe śledzenie konwersji, definiujemy grupy odbiorców na podstawie realnych klientów i tworzymy kreacje, które zatrzymują scroll."
      solutionPoints={[
        'Konfiguracja Meta Pixel i Conversions API dla pełnych danych po iOS 14+',
        'Budowanie grup odbiorców: lookalike, remarketing, custom audiences',
        'Kreacje reklamowe: grafiki, wideo, karuzele dopasowane do etapu lejka',
        'Testy A/B reklam i ciągła optymalizacja kosztów',
        'Miesięczne raporty z jasnymi wskaźnikami: ROAS, CPL, CPA',
      ]}
      steps={[
        { title: 'Analiza i setup', desc: 'Audyt konta reklamowego, konfiguracja Pixel i Conversions API, analiza dotychczasowych kampanii.' },
        { title: 'Strategia', desc: 'Definiujemy lejek sprzedażowy, grupy odbiorców i plan kreacji na pierwsze 3 miesiące.' },
        { title: 'Uruchomienie', desc: 'Tworzymy kampanie, kreacje reklamowe i uruchamiamy z budżetem testowym.' },
        { title: 'Skalowanie', desc: 'Na podstawie danych skalujemy to co działa i wyłączamy co nie przynosi zwrotu.' },
      ]}
      results={[
        { metric: '-38%', label: 'niższy koszt pozyskania klienta', desc: 'Średnia redukcja CPL w ciągu 3 miesięcy dzięki optymalizacji grup odbiorców i kreacji.' },
        { metric: '3.6x', label: 'zwrot z wydatków reklamowych', desc: 'Średni ROAS osiągany przez naszych klientów e-commerce po wdrożeniu pełnego lejka Meta Ads.' },
        { metric: '+190%', label: 'więcej zapytań', desc: 'Wzrost liczby leadów przy tym samym budżecie po optymalizacji targetowania i kreacji.' },
      ]}
    />
  )
}
