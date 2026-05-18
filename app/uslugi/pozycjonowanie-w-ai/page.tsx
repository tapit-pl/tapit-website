import type { Metadata } from 'next'
import { Brain } from 'lucide-react'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Pozycjonowanie w AI - Tapit',
  description: 'Optymalizuj obecność Twojej firmy pod ChatGPT, Perplexity i Google AI Overview. Nowy kanał dotarcia, który większość firm ignoruje.',
}

export default function AiPositioningPage() {
  return (
    <ServicePage
      tag="Usługi / Pozycjonowanie w AI"
      title="Pozycjonowanie w AI"
      subtitle="Optymalizujemy Twoją obecność pod ChatGPT, Perplexity i inne wyszukiwarki AI. Nowy kanał dotarcia do klientów, który rośnie z miesiąca na miesiąc - i który większość firm nadal ignoruje."
      Icon={Brain}
      problems={[
        'Twoi potencjalni klienci coraz częściej pytają ChatGPT lub Perplexity zamiast Google - i dostają odpowiedzi, w których Cię nie ma.',
        'Nie wiesz, czy i jak Twoja firma pojawia się w odpowiedziach narzędzi AI - brakuje Ci widoczności w tym nowym kanale.',
        'Konkurencja zaczyna pojawiać się w odpowiedziach AI jako polecana opcja w Twojej branży i mieście.',
        'Treści na Twojej stronie nie są zoptymalizowane pod pytania konwersacyjne, które zadają narzędzia AI.',
      ]}
      solutionTitle="Jak to rozwiązujemy"
      solutionText="Pozycjonowanie w AI to kombinacja treści eksperckich, danych strukturalnych i obecności w źródłach, z których uczą się modele językowe. Nie ma tu skrótów - ale jest konkretna, powtarzalna metodologia."
      solutionPoints={[
        'Audyt obecnej widoczności w ChatGPT, Perplexity i Google AI Overview',
        'Strategia treści eksperckich i Q&A odpowiadających na pytania Twoich klientów',
        'Wdrożenie danych strukturalnych (Schema.org) dla lepszego rozumienia przez AI',
        'Budowanie wzmianek i cytowań w serwisach branżowych, z których uczą się LLM',
        'Optymalizacja podstron pod pytania konwersacyjne i frazy długiego ogona',
      ]}
      steps={[
        { title: 'Audyt AI visibility', desc: 'Sprawdzamy, jak Twoja firma pojawia się (lub nie) w odpowiedziach głównych narzędzi AI.' },
        { title: 'Strategia treści', desc: 'Projektujemy plan treści eksperckich odpowiadających na pytania Twoich klientów.' },
        { title: 'Wdrożenie', desc: 'Tworzymy treści, wdrażamy Schema.org i budujemy obecność w źródłach referencyjnych.' },
        { title: 'Monitoring', desc: 'Regularnie sprawdzamy widoczność w AI i aktualizujemy treści zgodnie z nowymi pytaniami.' },
      ]}
      results={[
        { metric: '3×', label: 'częstsza obecność w AI', desc: 'Wzrost liczby wzmianek w odpowiedziach ChatGPT i Perplexity po 4 miesiącach wdrożenia.' },
        { metric: '+45%', label: 'nowi klienci przez AI', desc: 'Odsetek nowych zapytań od klientów, którzy trafili przez rekomendację narzędzia AI.' },
        { metric: 'TOP 3', label: 'odpowiedzi AI w branży', desc: 'Klienci zajmują pierwsze pozycje w odpowiedziach AI dla fraz branżowych w swojej lokalizacji.' },
      ]}
    />
  )
}
