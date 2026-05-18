import type { Metadata } from 'next'
import { BarChart3 } from 'lucide-react'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Analityka i Consent Mode - Tapit',
  description: 'Wdrożenie Google Analytics 4, GTM i Consent Mode v2. Podejmuj decyzje na danych, nie na przeczuciach.',
}

export default function AnalyticsPage() {
  return (
    <ServicePage
      tag="Usługi / Analityka"
      title="Analityka i Consent Mode"
      subtitle="Wdrażamy Google Analytics 4, Google Tag Manager i Consent Mode v2, żebyś podejmował decyzje na danych, nie na przeczuciach. I żebyś był zgodny z wymaganiami Google i RODO."
      Icon={BarChart3}
      problems={[
        'Twoje dane w Google Analytics wyglądają podejrzanie - albo zbierasz za mało danych, albo nie wiesz, jak je interpretować.',
        'Nie masz wdrożonego Consent Mode v2, przez co tracisz od 30 do 50% danych analitycznych i Twoje kampanie Google Ads są mniej skuteczne.',
        'Tagi marketingowe na stronie są niekontrolowane - niektóre mogą ładować się bez zgody użytkownika, narażając Cię na kary RODO.',
        'Kampanie reklamowe nie mają prawidłowo skonfigurowanego śledzenia konwersji - optymalizujesz kampanie na błędnych danych.',
      ]}
      solutionTitle="Jak to rozwiązujemy"
      solutionText="Analityka to fundament każdej decyzji marketingowej. Bez rzetelnych danych optymalizujesz na ślepo. Wdrażamy kompleksowy ekosystem: GA4, GTM, Consent Mode v2 i śledzenie konwersji skrojone pod Twój biznes."
      solutionPoints={[
        'Audyt istniejącej analityki i identyfikacja luk w zbieraniu danych',
        'Migracja lub fresh setup Google Analytics 4 z właściwymi zdarzeniami',
        'Google Tag Manager - jeden kontener, kontrola nad wszystkimi tagami',
        'Consent Mode v2 - zgodność z RODO i maksimum danych modelowanych przez Google',
        'Śledzenie konwersji: formularze, połączenia telefoniczne, zakupy e-commerce',
      ]}
      steps={[
        { title: 'Audyt', desc: 'Sprawdzamy stan obecnej analityki, jakie dane zbierasz i co tracisz.' },
        { title: 'Architektura', desc: 'Projektujemy strukturę GA4, plan zdarzeń i konfigurację GTM dla Twojego biznesu.' },
        { title: 'Wdrożenie', desc: 'Implementujemy Consent Mode v2, tagi i śledzenie konwersji. Testujemy każdy element.' },
        { title: 'Raportowanie', desc: 'Konfigurujemy dashboardy w Looker Studio - widzisz to, co ważne, bez szumu danych.' },
      ]}
      results={[
        { metric: '+40%', label: 'więcej danych po Consent Mode', desc: 'Wzrost ilości danych dostępnych do analizy po prawidłowym wdrożeniu Consent Mode v2 i modelowania.' },
        { metric: '-28%', label: 'niższy CPA kampanii', desc: 'Obniżenie kosztu pozyskania klienta po naprawieniu śledzenia konwersji i dostarczeniu lepszych sygnałów do Google Ads.' },
        { metric: '100%', label: 'zgodność z RODO', desc: 'Każde wdrożenie Consent Mode przechodzi przez weryfikację prawną i techniczny test zgodności.' },
      ]}
    />
  )
}
