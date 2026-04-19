import type { Metadata } from 'next'
import { MapPin } from 'lucide-react'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Marketing lokalny — Tapit',
  description: 'Pozycjonowanie wizytówki Google i lokalne SEO. Bądź pierwszy, gdy klienci z Twojego miasta szukają Twoich usług.',
}

export default function LocalMarketingPage() {
  return (
    <ServicePage
      tag="Usługi / Marketing lokalny"
      title="Marketing lokalny"
      subtitle="Pozycjonowanie wizytówki Google i lokalne SEO, żeby klienci z Twojego miasta znajdowali Cię jako pierwszego. Idealne dla biznesów stacjonarnych, restauracji, klinik i salonów."
      Icon={MapPin}
      problems={[
        'Wpisujesz nazwę swojej branży + miasto w Google i zamiast siebie widzisz konkurencję — tracisz codziennie klientów, którzy szukają właśnie Ciebie.',
        'Twoja wizytówka Google Business Profile jest niekompletna lub nieoptymalna — opisy, zdjęcia, kategorie nie pracują na Twoją widoczność.',
        'Masz mało opinii Google lub negatywne opinie obniżają Twój ranking lokalny i odstraszają potencjalnych klientów.',
        'Klienci mówią, że "przypadkowo" Cię znaleźli — zamiast celowo szukać i trafiać na Ciebie jako pierwszego wyboru.',
      ]}
      solutionTitle="Jak to rozwiązujemy"
      solutionText="Marketing lokalny to połączenie optymalizacji wizytówki Google, lokalnego SEO na stronie i budowania autorytetu w lokalizacji. Każde z tych trzech elementów wzmacnia pozostałe."
      solutionPoints={[
        'Pełna optymalizacja profilu Google Business: kategorie, opisy, zdjęcia, godziny',
        'Strategia pozyskiwania opinii Google (bez naruszania regulaminu)',
        'Lokalne słowa kluczowe na stronie i w meta tagach',
        'Cytowania NAP (nazwa, adres, telefon) w katalogach branżowych',
        'Google Posts i aktualizacje profilu zwiększające zaangażowanie',
      ]}
      steps={[
        { title: 'Audyt wizytówki', desc: 'Sprawdzamy stan profilu GBP, konkurencję i słowa kluczowe dla Twojej lokalizacji.' },
        { title: 'Optymalizacja', desc: 'Uzupełniamy i optymalizujemy profil, dodajemy zdjęcia i wdrażamy lokalne SEO na stronie.' },
        { title: 'Budowanie autorytetu', desc: 'Cytowania, opinie i linki lokalne zwiększają zaufanie Google do Twojej lokalizacji.' },
        { title: 'Monitoring', desc: 'Śledzimy pozycję w pakiecie lokalnym, wyświetlenia i kliknięcia w wizytówkę.' },
      ]}
      results={[
        { metric: '#1', label: 'w Google Maps', desc: 'Klient budowlany z Krakowa — pozycja lidera lokalnego SEO osiągnięta w 3 miesiące od startu.' },
        { metric: '+320%', label: 'więcej połączeń z wizytówki', desc: 'Wzrost liczby połączeń telefonicznych generowanych bezpośrednio przez Google Maps.' },
        { metric: '80%', label: 'leadów z Google', desc: 'Odsetek nowych zapytań od klientów, którzy trafili przez wyszukiwanie lokalne.' },
      ]}
    />
  )
}
