import type { Metadata } from 'next'
import { Monitor } from 'lucide-react'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Strony internetowe — Tapit',
  description: 'Projektujemy szybkie, nowoczesne strony WWW, które konwertują odwiedzających w klientów. Next.js, SEO-ready, PageSpeed 90+.',
}

export default function WebsitesPage() {
  return (
    <ServicePage
      tag="Usługi / Strony internetowe"
      title="Strony internetowe"
      subtitle="Projektujemy i budujemy szybkie, nowoczesne strony, które nie tylko dobrze wyglądają — przede wszystkim zamieniają odwiedzających w klientów. Bo strona to Twój najważniejszy sprzedawca."
      Icon={Monitor}
      problems={[
        'Twoja strona wyładowuje się wolno, wygląda przestarzale i odpycha klientów zanim zdążą przeczytać co oferujesz.',
        'Strona nie sprzedaje — masz ruch, ale brakuje jasnych CTA, formularzy i ścieżki, która prowadzi do kontaktu.',
        'Strona nie jest zoptymalizowana pod SEO — brakuje technicznych podstaw, przez co Google nie rankuje jej wysoko.',
        'Poprzednia strona była robiona "po znajomości" — trudno ją aktualizować i nie ma żadnego systemu analityki.',
      ]}
      solutionTitle="Jak to rozwiązujemy"
      solutionText="Strony budujemy na Next.js — najszybszej technologii webowej dostępnej obecnie. Każda strona jest mobile-first, zoptymalizowana pod Core Web Vitals i SEO, z wbudowaną analityką i Consent Mode v2."
      solutionPoints={[
        'Projekt UI/UX zorientowany na konwersję — nie na estetykę dla estetyki',
        'Next.js + Tailwind CSS: strony szybkie jak błyskawica, PageSpeed 90+ na mobile',
        'SEO techniczne wbudowane od podstaw: meta tagi, dane strukturalne, sitemap',
        'Responsywność mobile-first — ponad 60% ruchu pochodzi z telefonów',
        'Integracja z Google Analytics 4, GTM i Consent Mode v2',
      ]}
      steps={[
        { title: 'Discovery', desc: 'Poznajemy Twój biznes, klientów i cele. Analizujemy konkurencję i definiujemy strategię strony.' },
        { title: 'Projekt UI', desc: 'Projektujemy makiety i wygląd strony. Pracujemy iteracyjnie — Twój feedback kształtuje wynik.' },
        { title: 'Budowa', desc: 'Kodujemy stronę w Next.js z pełnym SEO technicznym, analityką i integracjami.' },
        { title: 'Launch i wsparcie', desc: 'Wdrażamy stronę, konfigurujemy hosting i domenę. Zostajemy do wsparcia po starcie.' },
      ]}
      results={[
        { metric: '2.1s', label: 'średni czas ładowania', desc: 'Czas ładowania stron, które budujemy — mierzony na urządzeniach mobilnych w realnych warunkach sieciowych.' },
        { metric: '+185%', label: 'wzrost konwersji', desc: 'Wzrost liczby zapytań po przeprojektowaniu strony klienta z branży usług profesjonalnych.' },
        { metric: '96/100', label: 'PageSpeed Mobile', desc: 'Średni wynik PageSpeed Insights na mobile dla stron zbudowanych przez Tapit.' },
      ]}
    />
  )
}
