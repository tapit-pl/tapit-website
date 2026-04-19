export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  category: string
  readTime: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'pozycjonowanie-w-ai',
    title: 'Czym jest pozycjonowanie w AI i dlaczego powinno Cię obchodzić',
    date: '2025-03-15',
    excerpt:
      'ChatGPT, Perplexity i Google AI Overview zmieniają sposób, w jaki ludzie szukają informacji. Twoja firma może być w tych odpowiedziach — albo nie istnieć.',
    category: 'Nowości',
    readTime: '7 min',
    content: `
Przez ostatnie dwa lata coś fundamentalnie zmieniło się w tym, jak ludzie szukają informacji w internecie. Zamiast wpisywać frazę w Google i klikać wyniki, coraz więcej osób zadaje pytania bezpośrednio narzędziom AI — ChatGPT, Perplexity, Claude, a teraz też Google AI Overview.

## Dlaczego to ważne dla Twojego biznesu?

Wyobraź sobie, że potencjalny klient pyta ChatGPT: "Jaka agencja marketingowa w Krakowie jest dobra?". Jeśli Twoja firma nie jest zoptymalizowana pod AI — nie pojawisz się w odpowiedzi. Klient trafi do konkurencji.

Szacunki mówią, że do końca 2025 roku nawet 30% zapytań informacyjnych będzie przechodzić przez narzędzia AI, a nie tradycyjne wyszukiwarki.

## Jak działa pozycjonowanie w AI?

Narzędzia AI uczą się na danych z internetu. Żeby Twoja firma pojawiała się w ich odpowiedziach, musisz:

1. **Mieć autorytatywne treści** — szczegółowe, eksperckie artykuły, które AI uzna za wiarygodne źródło.
2. **Budować wzmianki i cytowania** — publikacje w branżowych serwisach, które AI „zna".
3. **Strukturyzować dane** — Schema.org, dane strukturalne, które pomagają AI zrozumieć, czym zajmuje się Twoja firma.
4. **Optymalizować pod pytania konwersacyjne** — treści napisane w formie odpowiedzi na konkretne pytania.

## Czy to zastąpi klasyczne SEO?

Nie. AI Optimization i SEO to komplementarne podejścia. Klasyczne SEO nadal przynosi ogromny ruch — ale firmy, które ignorują AI, oddają rosnący kawałek rynku konkurencji.

Najrozsądniejsza strategia to integracja obu podejść. To właśnie robimy w Tapit.

## Jak zacząć?

Pierwszym krokiem jest audyt Twojej obecnej widoczności — sprawdzamy, czy i jak pojawiasz się w odpowiedziach AI. Następnie budujemy plan działania.

Zamów darmowy audyt i dowiedz się, gdzie stoi Twoja firma w świecie AI search.
    `,
  },
  {
    slug: 'reklama-google-ads-koszty',
    title: 'Ile kosztuje reklama w Google Ads — prawdziwe liczby',
    date: '2025-02-20',
    excerpt:
      'Nie ma jednej odpowiedzi — ale jest kilka kluczowych liczb, które powinieneś znać zanim wpłacisz pierwszą złotówkę w Google.',
    category: 'Google Ads',
    readTime: '9 min',
    content: `
"Ile kosztuje reklama w Google?" — to pytanie, które słyszymy kilka razy w tygodniu. I rozumiemy frustrację: większość agencji odpowiada "to zależy" i kończy rozmowę. Spróbujmy dać konkretne liczby.

## Minimalny budżet na start

W praktyce, żeby kampania Google Ads miała sens i dostarczała statystycznie istotnych danych, potrzebujesz minimum **2 000–3 000 zł miesięcznie** na budżet reklamowy. Poniżej tej kwoty kampania zbiera dane zbyt wolno, żeby skutecznie optymalizować.

Dla branż konkurencyjnych (ubezpieczenia, prawo, stomatologia) — realistyczny budżet startowy to **5 000–10 000 zł miesięcznie**.

## Koszt kliknięcia (CPC) w Polsce

Branżowe benchmarki:
- Usługi finansowe: 8–25 zł za kliknięcie
- Prawo i usługi prawne: 6–20 zł
- Stomatologia/medycyna: 4–15 zł
- Budowlanka i remonty: 3–10 zł
- E-commerce (moda, elektronika): 0,50–4 zł
- Restauracje i gastronomia: 0,30–2 zł

## Koszt zarządzania przez agencję

Większość agencji pobiera opłatę za zarządzanie kampaniami. Modele:
- **Procent od budżetu**: 10–20% miesięcznie od wydanego budżetu reklamowego
- **Stała opłata**: 800–3 000 zł miesięcznie w zależności od zakresu
- **Hybryda**: stała kwota + procent od nadwyżki

W Tapit pracujemy w modelu transparentnym — wiesz dokładnie, ile idzie do Google, ile do nas.

## Kiedy oczekiwać zwrotu z inwestycji?

Przy prawidłowo skonfigurowanej kampanii pierwsze konwersje zazwyczaj pojawiają się w ciągu 2–4 tygodni. Pełna optymalizacja i stabilne ROAS (zwrot z inwestycji reklamowej) — po 2–3 miesiącach.

Kampanie, które widzieliśmy przejęte od poprzednich agencji, często przepalały 40–60% budżetu na błędnie dobrane słowa kluczowe, brak wykluczeń i nieoptymalne ustawienia targetowania.

Dlatego zaczynamy od audytu — żeby wiedzieć, co naprawdę działa w Twoim biznesie.
    `,
  },
  {
    slug: 'consent-mode-v2',
    title: 'Consent Mode v2 — co musisz wiedzieć jako właściciel firmy',
    date: '2025-01-10',
    excerpt:
      'Od marca 2024 Google wymaga Consent Mode v2. Jeśli tego nie wdrożysz, tracisz dane z analityki i obniżasz skuteczność kampanii. Wyjaśniamy, o co chodzi.',
    category: 'Analityka',
    readTime: '6 min',
    content: `
Od marca 2024 roku Google wprowadził obowiązek Consent Mode v2 dla wszystkich reklamodawców w Europie (w tym Polsce). Brzmi technicznie — ale konsekwencje są bardzo praktyczne i finansowe.

## Co to jest Consent Mode?

Consent Mode to system, który mówi narzędziom Google (Analytics, Ads, Floodlight), jak zachowywać się, gdy użytkownik **nie wyrazi zgody** na śledzenie.

**Wersja 1 (stara)**: narzędzia po prostu się wyłączały — traciłeś 100% danych.

**Wersja 2 (obowiązkowa od 2024)**: Google używa modelowania statystycznego do "odgadnięcia" zachowań użytkowników bez zgody. Nie masz pełnych danych, ale masz lepsze szacunki niż zero.

## Dlaczego to ważne?

Jeśli nie wdrożysz Consent Mode v2:

1. **Tracisz dane** — w Polsce średnio 30–50% użytkowników nie akceptuje cookies marketingowych. To oznacza, że widzisz tylko połowę ruchu w Analytics.
2. **Kampanie Google Ads działają gorzej** — algorytm ma mniej danych do optymalizacji, CPA rośnie.
3. **Ryzyko niezgodności z RODO** — i potencjalne kary od UODO.

## Co trzeba wdrożyć?

- Platformę Consent Management (CMP) — np. Cookiebot, CookieYes, OneTrust
- Consent Mode v2 w Google Tag Manager
- Aktualizację Google Analytics 4 i Google Ads
- Prawidłową konfigurację sygnałów konwersji

## Jak to robimy w Tapit?

Wdrażamy Consent Mode v2 kompleksowo — od doboru odpowiedniego CMP, przez konfigurację GTM, po weryfikację, że wszystko działa poprawnie. Efekt: masz maksimum danych w granicach prawa i Twoje kampanie działają efektywniej.

Zamów audyt analityki i sprawdzimy, czy Twoja strona jest prawidłowo skonfigurowana.
    `,
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return blogPosts.map(p => p.slug)
}
