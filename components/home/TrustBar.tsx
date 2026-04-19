const clients = [
  'AutoParts Kraków',
  'Kancelaria Nowak i Wspólnicy',
  'Restauracja Zielony Talerz',
  'DevHouse Studio',
  'MedCentr Południe',
  'TechBuild Solutions',
  'Sklep Rowerowy Pedał',
  'Akademia Jazdy ProDrive',
  'Firma Przeprowadzkowa Szybko',
  'Dental & Beauty Clinic',
]

export default function TrustBar() {
  return (
    <section className="py-10 border-y border-[rgba(0,0,0,0.07)] overflow-hidden relative">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{ background: 'linear-gradient(90deg, #f0eeec 0%, transparent 100%)' }} />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{ background: 'linear-gradient(270deg, #f0eeec 0%, transparent 100%)' }} />

      <p className="text-center text-xs uppercase tracking-[3px] text-[#6b6860] font-heading mb-6">
        Zaufali nam
      </p>

      <div className="flex overflow-hidden">
        <div className="flex gap-12 items-center whitespace-nowrap animate-scroll-left hover:[animation-play-state:paused]">
          {/* Doubled for infinite loop */}
          {[...clients, ...clients].map((client, i) => (
            <span
              key={i}
              className="text-sm font-heading font-bold text-[#6b6860] opacity-60 hover:opacity-100 transition-opacity cursor-default shrink-0"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
