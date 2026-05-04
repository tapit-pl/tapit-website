import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <span className="font-heading font-extrabold text-8xl text-accent/20 mb-4">404</span>
      <h1 className="text-3xl font-heading font-bold text-[#f8f7f4] mb-4">Strona nie istnieje</h1>
      <p className="text-[#b0ada5] mb-8 max-w-sm">
        Nie znaleźliśmy strony, której szukasz. Wróć na stronę główną lub skontaktuj się z nami.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-white font-heading font-bold text-sm transition-colors"
        >
          Strona główna
        </Link>
        <Link
          href="/kontakt"
          className="px-6 py-3 rounded-full border border-[rgba(255,255,255,0.15)] text-[#f8f7f4] font-heading font-bold text-sm hover:border-[rgba(0,0,0,0.30)] transition-colors"
        >
          Kontakt
        </Link>
      </div>
    </section>
  )
}
