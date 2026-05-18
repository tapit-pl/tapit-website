import type { Metadata } from 'next'
import { Play } from 'lucide-react'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'TikTok Ads - Tapit',
  description: 'Kampanie reklamowe na TikToku docierające do młodszych odbiorców. Wideo reklamy, które angażują i sprzedają. Agencja TikTok Ads z Krakowa.',
}

export default function TikTokAdsPage() {
  return (
    <ServicePage
      heroImage="/images/hero-tiktok-ads.jpg"
      tag="Usługi / TikTok Ads"
      title="TikTok Ads"
      subtitle="Docierasz do odbiorców tam, gdzie spędzają czas - na TikToku. Kampanie wideo, które angażują, budują rozpoznawalność marki i generują sprzedaż wśród młodszych grup docelowych."
      Icon={Play}
      problems={[
        'Twoja firma nie dociera do klientów poniżej 35 roku życia - nie jesteś widoczny tam, gdzie spędzają czas.',
        'Próbowałeś TikToka, ale nie wiedziałeś jak tworzyć treści i reklamy, które działają na tej platformie.',
        'Twoja konkurencja buduje zasięg na TikToku za ułamek kosztów reklam na Facebooku czy Google.',
        'Nie masz zasobów do produkcji wideo, przez co TikTok wydaje Ci się poza zasięgiem.',
      ]}
      solutionTitle="Jak to rozwiązujemy"
      solutionText="TikTok rządzi się innymi prawami niż Facebook czy Google. Reklamy muszą wyglądać jak organiczny content - nie jak klasyczna reklama. Wiemy jak tworzyć kampanie i kreacje, które nie są skipowane."
      solutionPoints={[
        'Strategia kreacji natywnych do TikToka - reklamy, które nie wyglądają jak reklamy',
        'Konfiguracja TikTok Pixel i śledzenia konwersji',
        'Targetowanie: demografia, zainteresowania, zachowania i lookalike audiences',
        'Produkcja lub adaptacja kreacji wideo pod format platformy',
        'Optymalizacja CPM, CTR i kosztu konwersji',
      ]}
      steps={[
        { title: 'Analiza grupy docelowej', desc: 'Sprawdzamy, czy Twoi klienci są na TikToku i jak zachowują się na platformie.' },
        { title: 'Setup i kreacje', desc: 'Konfiguracja konta reklamowego, Pixel i pierwszych kreacji wideo dopasowanych do TikToka.' },
        { title: 'Kampanie testowe', desc: 'Uruchamiamy kampanie z różnymi kreacjami i grupami, żeby znaleźć to co działa.' },
        { title: 'Optymalizacja', desc: 'Skalujemy zwycięskie kreacje, testujemy nowe formaty i raportujemy wyniki co miesiąc.' },
      ]}
      results={[
        { metric: '5x', label: 'niższy CPM niż Facebook', desc: 'Koszt tysiąca wyświetleń na TikToku jest średnio 5 razy niższy niż na Facebooku - przy porównywalnym zasięgu.' },
        { metric: '+340%', label: 'wzrost zasięgu marki', desc: 'Wzrost rozpoznawalności marki wśród grupy 18-34 po 3 miesiącach kampanii TikTok Ads.' },
        { metric: '18-35', label: 'lat - główna grupa odbiorców', desc: 'TikTok to platforma z najbardziej zaangażowaną grupą młodszych konsumentów w Polsce.' },
      ]}
    />
  )
}
