import type { Metadata } from 'next'
import { Target } from 'lucide-react'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Google Ads & PPC - Tapit',
  description: 'Precyzyjne kampanie PPC w Google, Meta, TikTok i LinkedIn. Płacisz tylko za kliknięcia od klientów, którzy szukają Twoich usług.',
}

export default function GoogleAdsPage() {
  return (
    <ServicePage
      heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80"
      tag="Usługi / Google Ads"
      title="Google Ads & PPC"
      subtitle="Precyzyjne kampanie reklamowe w Google, Meta, TikTok i LinkedIn, które docierają do Twoich klientów dokładnie wtedy, gdy szukają Twoich usług. Płacisz tylko za realne kliknięcia."
      Icon={Target}
      problems={[
        'Prowadzisz kampanie Google Ads, ale nie wiesz, czy budżet jest dobrze wydawany - brakuje Ci przejrzystych wyników.',
        'Twoje reklamy wyświetlają się na niewłaściwe frazy, przez co płacisz za kliknięcia osób, które nigdy nie zostaną Twoimi klientami.',
        'Reklamy mają wysokie koszty kliknięcia (CPC), ale niską konwersję - strona nie przekształca odwiedzających w zapytania.',
        'Nie masz czasu ani wiedzy, żeby śledzić zmiany w platformach reklamowych i optymalizować kampanie na bieżąco.',
      ]}
      solutionTitle="Jak to rozwiązujemy"
      solutionText="Podchodzimy do kampanii PPC analitycznie. Zaczynamy od audytu konta i analizy konkurencji, żeby wiedzieć, na czym stoisz. Następnie budujemy strukturę kampanii dopasowaną do Twoich celów biznesowych - nie do wskaźników, które dobrze wyglądają w raporcie."
      solutionPoints={[
        'Pełny audyt istniejącego konta i identyfikacja przepalanych budżetów',
        'Badanie słów kluczowych i lista wykluczeń minimalizująca nietrafialne kliknięcia',
        'Tworzenie reklam i landing pages zoptymalizowanych pod konwersję',
        'Konfiguracja śledzenia konwersji i Consent Mode v2',
        'Miesięczna optymalizacja i przejrysty raport wyników',
      ]}
      steps={[
        { title: 'Audyt i analiza', desc: 'Sprawdzamy stan konta, historię kampanii i działania konkurencji w Google Ads.' },
        { title: 'Strategia i structure', desc: 'Projektujemy strukturę kampanii, grupujemy słowa kluczowe i tworzymy treści reklam.' },
        { title: 'Uruchomienie', desc: 'Konfigurujemy kampanie, śledzenie konwersji i Consent Mode. Ruszamy z budżetem testowym.' },
        { title: 'Optymalizacja', desc: 'Co tydzień analizujemy dane i wprowadzamy zmiany. Co miesiąc raportujemy wyniki.' },
      ]}
      results={[
        { metric: '-42%', label: 'niższy koszt pozyskania klienta', desc: 'Średnia redukcja CPA w pierwszych 3 miesiącach współpracy dzięki eliminacji nietrafionych kliknięć.' },
        { metric: '+280%', label: 'więcej konwersji', desc: 'Wzrost liczby zapytań przy tym samym budżecie reklamowym po pełnej optymalizacji kampanii.' },
        { metric: '4.8x', label: 'zwrot z inwestycji (ROAS)', desc: 'Średni ROAS osiągany przez naszych klientów e-commerce po 6 miesiącach współpracy.' },
      ]}
    />
  )
}
