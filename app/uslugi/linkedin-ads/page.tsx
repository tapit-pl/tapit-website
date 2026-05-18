import type { Metadata } from 'next'
import { Briefcase } from 'lucide-react'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'LinkedIn Ads - Tapit',
  description: 'Reklamy LinkedIn docierające do decydentów B2B. Kampanie LinkedIn Ads dla firm, które chcą dotrzeć do menedżerów, dyrektorów i właścicieli firm.',
}

export default function LinkedInAdsPage() {
  return (
    <ServicePage
      heroImage="/images/hero-linkedin-ads.jpg"
      tag="Usługi / LinkedIn Ads"
      title="LinkedIn Ads"
      subtitle="Docierasz bezpośrednio do decydentów - menedżerów, dyrektorów i właścicieli firm. LinkedIn Ads to najprecyzyjniejsza platforma B2B, która pozwala targetować po stanowisku, branży i wielkości firmy."
      Icon={Briefcase}
      problems={[
        'Twoja oferta B2B nie dociera do osób, które podejmują decyzje zakupowe w firmach - trafiasz do złych odbiorców.',
        'Reklamy na Facebooku i Google nie sprawdzają się w sprzedaży B2B z długim cyklem zakupowym i wysoką wartością kontraktu.',
        'Nie masz sposobu na dotarcie do konkretnych stanowisk, branż czy firm, które są Twoją grupą docelową.',
        'Leady z innych kanałów są niskiej jakości - kontaktują się osoby bez budżetu lub bez uprawnień do zakupu.',
      ]}
      solutionTitle="Jak to rozwiązujemy"
      solutionText="LinkedIn Ads wymaga innej strategii niż kampanie B2C. Dłuższy lejek, wyższe CPL, ale znacznie wyższa wartość klienta. Budujemy kampanie, które generują wartościowe leady i budują pozycję eksperta w branży."
      solutionPoints={[
        'Targetowanie po stanowisku, branży, wielkości firmy i lokalizacji',
        'Formaty dopasowane do B2B: Sponsored Content, InMail, Lead Gen Forms',
        'Lead Gen Forms - formularze bezpośrednio w LinkedIn bez wychodzenia z platformy',
        'Retargeting odwiedzających stronę i zaangażowanych w treści',
        'Integracja leadów z CRM i raportowanie jakości pozyskanych kontaktów',
      ]}
      steps={[
        { title: 'Definicja ICP', desc: 'Precyzyjnie definiujemy Ideal Customer Profile - branże, stanowiska, wielkość firm.' },
        { title: 'Strategia i treści', desc: 'Tworzymy plan kampanii, kreacje i formularze Lead Gen Forms dopasowane do odbiorcy B2B.' },
        { title: 'Uruchomienie', desc: 'Konfigurujemy kampanie, Insight Tag i uruchamiamy z rekomendowanym budżetem testowym.' },
        { title: 'Optymalizacja i raport', desc: 'Analizujemy jakość leadów, optymalizujemy koszty i dostarczamy miesięczny raport wyników.' },
      ]}
      results={[
        { metric: '4x', label: 'wyższa jakość leadów vs Facebook', desc: 'Leady z LinkedIn Ads mają znacznie wyższe kwalifikacje zakupowe i krótszy cykl sprzedaży.' },
        { metric: '+220%', label: 'więcej zapytań B2B', desc: 'Wzrost liczby kwalifikowanych zapytań od firm po uruchomieniu kampanii LinkedIn Ads.' },
        { metric: '92%', label: 'precyzja targetowania', desc: 'LinkedIn posiada najbardziej aktualne dane zawodowe spośród wszystkich platform reklamowych.' },
      ]}
    />
  )
}
