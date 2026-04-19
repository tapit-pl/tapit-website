export interface CaseStudy {
  slug: string
  client: string
  industry: string
  industryTag: string
  location: string
  services: string[]
  period: string
  challenge: string
  solution: string
  solutionPoints: string[]
  results: { metric: string; label: string; desc: string }[]
  quote: string
  quoteName: string
  quoteRole: string
  coverColor: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'sklep-z-odzieza-krakow',
    client: 'ModaHouse',
    industry: 'E-commerce — odzież damska',
    industryTag: 'E-commerce',
    location: 'Kraków',
    services: ['SEO', 'Google Ads'],
    period: '6 miesięcy',
    challenge:
      'Sklep internetowy z odzieżą damską działał od 3 lat, ale 95% ruchu przychodziło z płatnych reklam. Właścicielka płaciła za każde kliknięcie i bała się wyłączyć kampanie, bo sprzedaż natychmiast spadała. Ruch organiczny praktycznie nie istniał — strona nie pojawiała się na żadne frazy zakupowe.',
    solution:
      'Przeprowadziliśmy pełny audyt techniczny sklepu i opracowaliśmy strategię SEO opartą na frazach zakupowych z wysoką intencją. Równolegle zoptymalizowaliśmy kampanie Google Ads, eliminując przepalanie budżetu na niekonwertujące frazy.',
    solutionPoints: [
      'Audyt techniczny: naprawa 847 błędów indeksacji, optymalizacja Core Web Vitals (LCP z 6.2s do 1.8s)',
      'Strategia słów kluczowych: 340 fraz zakupowych pogrupowanych w 28 kategorii produktowych',
      'Optymalizacja 180 stron produktowych i 40 stron kategorii pod SEO',
      'Content plan: 24 artykuły poradnikowe budujące autorytet domeny',
      'Google Ads: przebudowa struktury, lista 1 200 wykluczeń, Smart Bidding z własnym modelem konwersji',
    ],
    results: [
      { metric: '+340%', label: 'ruch organiczny', desc: 'Wzrost sesji z wyszukiwania organicznego w ciągu 6 miesięcy od startu działań SEO.' },
      { metric: '-38%', label: 'koszt pozyskania klienta', desc: 'Obniżenie CPA w Google Ads dzięki eliminacji nietrafionych słów kluczowych i optymalizacji stawek.' },
      { metric: '+180%', label: 'przychody z SEO', desc: 'Wzrost przychodów z kanału organicznego — sklep po raz pierwszy zaczął sprzedawać bez reklam.' },
    ],
    quote:
      'Przez trzy lata byłam zakładnikiem Google Ads — bez kampanii nie było sprzedaży. Teraz połowa zamówień przychodzi organicznie i w końcu mogę oddychać. Tapit zmienił mój biznes.',
    quoteName: 'Anna K.',
    quoteRole: 'Właścicielka ModaHouse',
    coverColor: 'from-violet-600/20 to-indigo-600/10',
  },
  {
    slug: 'klinika-stomatologiczna',
    client: 'Dental Prestige',
    industry: 'Stomatologia — klinika prywatna',
    industryTag: 'Zdrowie',
    location: 'Kraków, Krowodrza',
    services: ['Google Ads', 'Marketing lokalny'],
    period: '4 miesiące',
    challenge:
      'Klinika stomatologiczna z pięcioma gabinetami miała problem z zapełnieniem kalendarza. Prowadziła kampanie Google Ads samodzielnie, ale koszt jednego nowego pacjenta wynosił ponad 280 zł i cały budżet przepalał się na frazy takie jak "ból zęba" zamiast fraz zakupowych. Wizytówka Google nie była zoptymalizowana.',
    solution:
      'Całkowicie przebudowaliśmy kampanie Google Ads z naciskiem na frazy o wysokiej intencji zakupowej ("implanty kraków", "ortodonta prywatny krowodrza"). Równolegle zoptymalizowaliśmy wizytówkę Google Business Profile i wdrożyliśmy strategię pozyskiwania opinii.',
    solutionPoints: [
      'Zamknięcie starych kampanii i budowa nowych z zerową bazą — czysta struktura grup reklam',
      'Targetowanie wyłącznie fraz z intencją zakupową, 600 wykluczeń informacyjnych',
      'Optymalizacja wizytówki GBP: 47 zdjęć, kompletny opis, 12 usług z cenami',
      'System pozyskiwania opinii: z 18 do 94 recenzji w ciągu 4 miesięcy (śr. ocena 4.9)',
      'Śledzenie konwersji telefonicznych przez GTM + Consent Mode v2',
    ],
    results: [
      { metric: '-62%', label: 'koszt pozyskania pacjenta', desc: 'Spadek kosztu pozyskania nowego pacjenta z 280 zł do 107 zł — przy tym samym budżecie miesięcznym.' },
      { metric: '3×', label: 'więcej zapytań', desc: 'Trzykrotny wzrost liczby telefonów i formularzy kontaktowych od nowych pacjentów miesięcznie.' },
      { metric: '#1', label: 'w Google Maps — Krowodrza', desc: 'Klinika osiągnęła pierwszą pozycję w pakiecie lokalnym dla frazy "stomatolog krowodrza" i fraz pokrewnych.' },
    ],
    quote:
      'W cztery miesiące trafiliśmy na pierwszą pozycję w Google Maps i mamy kalendarz zapełniony na 6 tygodni do przodu. Nigdy wcześniej tak się nie zdarzyło.',
    quoteName: 'dr Piotr W.',
    quoteRole: 'Dyrektor Dental Prestige',
    coverColor: 'from-emerald-600/20 to-teal-600/10',
  },
  {
    slug: 'firma-budowlana',
    client: 'BudMaster Małopolska',
    industry: 'Usługi budowlane — remonty i wykończenia',
    industryTag: 'Budownictwo',
    location: 'Małopolska',
    services: ['Marketing lokalny', 'SEO', 'Strona internetowa'],
    period: '5 miesięcy',
    challenge:
      'Firma remontowa działała od 8 lat wyłącznie na poleceniach. Właściciel chciał wejść w cyfrowy marketing, ale miał przestarzałą stronę z 2016 roku i zerową obecność w internecie. Konkurencja od lat zajmowała dobre pozycje w Google Maps.',
    solution:
      'Zaczęliśmy od nowej strony internetowej zoptymalizowanej pod konwersję i SEO lokalne. Następnie od podstaw zbudowaliśmy obecność w Google Maps i wdrożyliśmy lokalną strategię SEO na całą Małopolskę.',
    solutionPoints: [
      'Nowa strona internetowa na Next.js: PageSpeed 94/100 mobile, pełne SEO techniczne',
      'Google Business Profile od zera: kompletny profil, zdjęcia realizacji, usługi z cenami',
      'Lokalne SEO: optymalizacja pod 8 miast w Małopolsce (Kraków, Tarnów, Nowy Sącz...)',
      'Cytowania NAP w 34 katalogach branżowych i lokalnych',
      'System zbierania opinii po zakończeniu każdego zlecenia',
    ],
    results: [
      { metric: '#1', label: 'w Google Maps — Kraków', desc: 'Pierwsza pozycja w pakiecie lokalnym dla frazy "firma remontowa kraków" i 12 fraz pokrewnych po 5 miesiącach.' },
      { metric: '80%', label: 'leadów z internetu', desc: 'Odsetek nowych zapytań pochodzących z wyszukiwania w Google — firma uniezależniła się od polecień.' },
      { metric: '+420%', label: 'wzrost zapytań', desc: 'Wzrost liczby miesięcznych zapytań ofertowych w porównaniu do okresu przed wdrożeniem działań.' },
    ],
    quote:
      'Przez 8 lat żyłem z polecień i bałem się internetu. Teraz mam więcej zleceń niż moce przerobowe. To dobry problem do rozwiązania.',
    quoteName: 'Marcin B.',
    quoteRole: 'Właściciel BudMaster Małopolska',
    coverColor: 'from-amber-600/20 to-orange-600/10',
  },
  {
    slug: 'kancelaria-prawna',
    client: 'Kancelaria Radców Prawnych Nowak & Partnerzy',
    industry: 'Usługi prawne — kancelaria',
    industryTag: 'Prawo',
    location: 'Kraków',
    services: ['SEO', 'Google Ads', 'Pozycjonowanie w AI'],
    period: '8 miesięcy',
    challenge:
      'Kancelaria z trzema prawnikami miała dobrą reputację, ale znikomą widoczność w internecie. Frazy prawnicze w Google Ads kosztują 15–30 zł za kliknięcie, co przy małym budżecie dawało bardzo mało kontaktów. Kancelaria szukała tańszego i długofalowego rozwiązania.',
    solution:
      'Opracowaliśmy długofalową strategię SEO treści eksperckich połączoną z precyzyjnymi kampaniami Google Ads skierowanymi wyłącznie na frazy z intencją zakupu. Jako pierwszej kancelarii w Polsce wdrożyliśmy pozycjonowanie pod wyszukiwarki AI.',
    solutionPoints: [
      'Strategia content SEO: 36 artykułów eksperckich odpowiadających na pytania klientów kancelarii',
      'Google Ads: wąskie targetowanie na 45 fraz wysokokonwertujących, budżet -30%',
      'Pozycjonowanie w AI: optymalizacja treści pod ChatGPT i Perplexity dla fraz "prawnik kraków"',
      'Schema.org LegalService, FAQ strukturalny na każdej podstronie specjalizacji',
      'Link building z portali prawniczych i biznesowych',
    ],
    results: [
      { metric: '+290%', label: 'ruch organiczny', desc: 'Wzrost sesji z Google w ciągu 8 miesięcy — kancelaria pojawia się na pierwszej stronie dla 67 fraz prawniczych.' },
      { metric: '2×', label: 'zapytania przy -30% budżetu', desc: 'Podwojenie liczby kontaktów z Google Ads przy jednoczesnej redukcji miesięcznego budżetu reklamowego.' },
      { metric: 'TOP 3', label: 'w odpowiedziach ChatGPT', desc: 'Kancelaria pojawia się w TOP 3 odpowiedzi ChatGPT na pytanie "dobry prawnik kraków" i frazy pokrewne.' },
    ],
    quote:
      'Nie wierzyłem, że kancelaria prawna może mieć "marketing". Okazuje się, że można — i że klienci szukają prawników w ChatGPT. Tapit to po prostu wiedział.',
    quoteName: 'mec. Tomasz N.',
    quoteRole: 'Partner zarządzający, Nowak & Partnerzy',
    coverColor: 'from-blue-600/20 to-indigo-600/10',
  },
  {
    slug: 'restauracja-krakow',
    client: 'Zielony Talerz',
    industry: 'Gastronomia — restauracja',
    industryTag: 'Gastronomia',
    location: 'Kraków, Kazimierz',
    services: ['Marketing lokalny', 'Meta Ads'],
    period: '3 miesiące',
    challenge:
      'Restauracja na krakowskim Kazimierzu miała świetne jedzenie i fatalne wyniki w internecie. Ocena Google 3.8, mała liczba recenzji, brak w TOP 5 dla fraz lokalnych. Meta Ads prowadzone samodzielnie przez właściciela generowały dużo "polubień" i zero rezerwacji.',
    solution:
      'Skupiliśmy się na dwóch frontach: Google Business Profile (widoczność + reputacja) oraz Meta Ads przebudowane na kampanie nastawione na rezerwacje, nie na lajki.',
    solutionPoints: [
      'Pełna optymalizacja GBP: menu, zdjęcia dań (profesjonalna sesja), godziny, atrybuty',
      'Strategia opinii: system SMS po wizycie z prośbą o recenzję, odpowiedzi na wszystkie opinie',
      'Meta Ads: przebudowa na kampanie Reach & Frequency + konwersje na rezerwacje przez link',
      'Retargeting odwiedzających profil FB/IG z ofertą tygodniową',
      'Google Posts: 3 posty tygodniowo z menu i wydarzeniami',
    ],
    results: [
      { metric: '4.9★', label: 'ocena Google (z 3.8)', desc: 'Wzrost średniej oceny dzięki systematycznemu pozyskiwaniu autentycznych recenzji od zadowolonych gości.' },
      { metric: '+180%', label: 'wyświetlenia wizytówki', desc: 'Wzrost wyświetleń w Google Maps i wyszukiwarce — restauracja weszła do TOP 3 dla "restauracja kazimierz".' },
      { metric: '4.2×', label: 'ROAS Meta Ads', desc: 'Zwrot z inwestycji w reklamy Meta — każda złotówka wydana na reklamę generuje 4.20 zł przychodu z rezerwacji.' },
    ],
    quote:
      'Zawsze myśleliśmy, że dobra kuchnia wystarczy. Nie wystarczy — trzeba jeszcze żeby ludzie Cię znaleźli. Teraz nas znajdują.',
    quoteName: 'Katarzyna M.',
    quoteRole: 'Współwłaścicielka Zielony Talerz',
    coverColor: 'from-green-600/20 to-emerald-600/10',
  },
  {
    slug: 'sklep-rowerowy',
    client: 'VeloKrak',
    industry: 'Sklep rowerowy — sprzedaż i serwis',
    industryTag: 'Retail',
    location: 'Kraków',
    services: ['Google Ads', 'Analityka', 'Marketing lokalny'],
    period: '4 miesiące',
    challenge:
      'Sklep rowerowy z 15-letnią historią wydawał 8 000 zł miesięcznie na Google Ads bez żadnego śledzenia konwersji. Właściciel nie wiedział, które kampanie przynoszą klientów do sklepu, a które przepalają budżet. Analytics pokazywał ruch, ale dane były bezużyteczne po zmianach w RODO.',
    solution:
      'Zaczęliśmy od fundamentów: prawidłowe wdrożenie GA4 z Consent Mode v2, śledzenie konwersji i pełna analityka. Dopiero na tej podstawie przebudowaliśmy kampanie Google Ads i wdrożyliśmy marketing lokalny.',
    solutionPoints: [
      'Wdrożenie GA4 od zera z pełnym śledzeniem: wizyty w sklepie, połączenia, formularze serwisowe',
      'Consent Mode v2 + CookieYes: odzyskanie 35% danych analitycznych utraconych po RODO',
      'Google Ads Performance Max dla produktów fizycznych + kampania lokalna "sklep rowerowy kraków"',
      'Google Business Profile: zdjęcia sklepu i rowerów, usługi serwisowe, produkty w ofercie',
      'Dashboard Looker Studio: jeden ekran pokazujący co napędza sprzedaż i ruch do sklepu',
    ],
    results: [
      { metric: '+35%', label: 'więcej danych analitycznych', desc: 'Odzyskanie danych utraconych przez brak Consent Mode — lepsze dane to lepsze decyzje reklamowe.' },
      { metric: '-44%', label: 'koszt pozyskania klienta', desc: 'Eliminacja nieefektywnych kampanii po uruchomieniu śledzenia konwersji — budżet pracuje skuteczniej.' },
      { metric: '+95%', label: 'wizyty w sklepie z Google', desc: 'Wzrost liczby klientów, którzy trafili do sklepu stacjonarnego po wyszukaniu w Google Maps.' },
    ],
    quote:
      'Przez dwa lata płaciłem za reklamy nie wiedząc co działa. Teraz wiem dokładnie — i płacę 44% mniej za tego samego klienta. Powinieneś był zadzwonić wcześniej.',
    quoteName: 'Krzysztof D.',
    quoteRole: 'Właściciel VeloKrak',
    coverColor: 'from-rose-600/20 to-pink-600/10',
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find(c => c.slug === slug)
}

export function getAllCaseSlugs() {
  return caseStudies.map(c => c.slug)
}
