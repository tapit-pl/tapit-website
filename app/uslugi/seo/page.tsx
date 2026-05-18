import type { Metadata } from 'next'
import { TrendingUp } from 'lucide-react'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Pozycjonowanie SEO - Tapit',
  description: 'Długofalowe pozycjonowanie SEO w Google. Budujemy organiczny ruch, który nie znika gdy wyłączysz reklamy.',
}

export default function SeoPage() {
  return (
    <ServicePage
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80"
      tag="Usługi / SEO"
      title="Pozycjonowanie SEO"
      subtitle="Budujemy widoczność Twojej strony w wynikach organicznych Google. Długofalowa strategia, która przynosi stały ruch bez ciągłego płacenia za każde kliknięcie."
      Icon={TrendingUp}
      problems={[
        'Twoja strona nie pojawia się w Google na frazy, na które Twoi klienci szukają usług - wszystkich odwiedzających musisz kupować w reklamach.',
        'Poprzednia agencja obiecywała efekty, ale po roku pozycji brak - nie wiesz, co poszło nie tak i czy cokolwiek w ogóle było robione.',
        'Masz ruch na stronie, ale nie wiesz, czy pochodzi z właściwych fraz i czy to są Twoi potencjalni klienci.',
        'Konkurencja zajmuje pierwsze miejsca w Google od lat - nie wiesz, jak możesz ich dogonić.',
      ]}
      solutionTitle="Jak to rozwiązujemy"
      solutionText="SEO to maraton, nie sprint - ale musi być prowadzony z planem. Zaczynamy od audytu technicznego strony i analizy fraz kluczowych. Potem działamy jednocześnie na trzech frontach: SEO techniczne, treści i link building."
      solutionPoints={[
        'Audyt techniczny: szybkość strony, Core Web Vitals, indeksacja, dane strukturalne',
        'Strategia słów kluczowych dopasowana do intencji zakupowych Twoich klientów',
        'Optymalizacja istniejących treści i plan nowych, eksperckich artykułów',
        'Link building z polskich, tematycznych serwisów',
        'Miesięczny raport pozycji, ruchu i widoczności',
      ]}
      steps={[
        { title: 'Audyt SEO', desc: 'Techniczny przegląd strony, analiza backlinków i benchmarking konkurencji.' },
        { title: 'Strategia', desc: 'Mapa fraz kluczowych, plan treści i priorytetyzacja działań technicznych.' },
        { title: 'Wdrożenie', desc: 'Optymalizacja techniczna, treści i pozyskiwanie wartościowych linków.' },
        { title: 'Monitoring', desc: 'Śledzenie pozycji i ruchu co tydzień. Reagujemy na zmiany algorytmu Google.' },
      ]}
      results={[
        { metric: '+340%', label: 'wzrost ruchu organicznego', desc: 'Wynik osiągnięty dla klienta e-commerce w branży modowej w ciągu 6 miesięcy od wdrożenia strategii.' },
        { metric: 'TOP 3', label: 'dla głównych fraz', desc: 'Średni wynik pozycjonowania głównych fraz klientów po 9–12 miesiącach współpracy.' },
        { metric: '+180%', label: 'wzrost przychodów z SEO', desc: 'Wzrost przychodów z kanału organicznego po pełnym wdrożeniu strategii treści i link buildingu.' },
      ]}
    />
  )
}
