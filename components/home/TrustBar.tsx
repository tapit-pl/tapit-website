const clients = [
  { name: 'Kancelaria Prawna Pilawska', url: 'https://www.pilawska.com/' },
  { name: 'Kancelaria Hipoteczna', url: 'https://mwzhipoteczna.pl/' },
  { name: 'Kancelaria EGW', url: 'https://kancelariaegw.pl/' },
  { name: 'Bas Barbershop', url: 'https://www.bas-barbershop.pl/' },
  { name: 'Mr Puggy', url: 'https://mrpuggy.pl/' },
  { name: 'CelPolisa', url: 'https://www.celpolisa.pl/' },
  { name: 'Food Factory', url: 'https://foodfactorykrakow.pl/' },
  { name: 'New Day Blues Pub', url: 'https://new-day-blues-pub.localo.site/' },
  { name: 'Elektro Servis', url: 'https://elektroservis.com.pl/' },
  { name: 'Zenergy', url: 'https://www.zenergy.com.pl' },
  { name: 'Thousand Miles', url: 'https://www.thousandmiles.pl' },
  { name: 'Thousand Miles Krakow', url: 'https://www.thousandmileskrakow.pl' },
  { name: 'Creative Cats', url: 'https://www.creativecats.pl' },
  { name: '5 Stars Trans', url: 'https://www.5starstrans.com' },
  { name: 'Pancerne Łyżki', url: 'https://www.pancernelyzki.pl' },
  { name: 'Gravier', url: 'https://www.gravier.pl' },
  { name: 'Mistrzowie Magii', url: 'https://mistrzowiemagii.pl' },
  { name: 'Aryman', url: 'https://iluzjaartystyczna.pl' },
  { name: 'City Walks Krakow', url: 'https://www.citywalkspoland.com' },
  { name: 'Four Music Club', url: 'https://www.fourclub.pl' },
  { name: 'Wroclaw Boat Party', url: 'https://www.wroclawboatparty.com' },
  { name: 'Krakow Boat Party', url: 'https://www.krakowboatparty.com' },
  { name: 'Krakow Crawl', url: 'https://krakowcrawl.com' },
  { name: 'The Exchange – Bar & Grill Warszawa', url: 'https://www.the-exchange.pl' },
  { name: 'Tomasz Drwal', url: 'https://www.edudrwal.pl' },
  { name: 'PurpleRay Studio', url: 'https://purpleray.studio' },
  { name: 'Pub Maska', url: 'https://pubmaska.pl/' },
  { name: 'Vault Barbershop', url: 'https://barber-krakow.localo.site/' },
]

export default function TrustBar() {
  return (
    <section className="py-10 border-y border-[rgba(0,0,0,0.07)] overflow-hidden relative">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{ background: 'linear-gradient(90deg, #fafaf8 0%, transparent 100%)' }} />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{ background: 'linear-gradient(270deg, #fafaf8 0%, transparent 100%)' }} />

      <p className="text-center text-xs uppercase tracking-[3px] text-[#6b6860] font-heading mb-6">
        Zaufali nam
      </p>

      <div className="flex overflow-hidden">
        <div className="flex gap-12 items-center whitespace-nowrap animate-scroll-left hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((client, i) => (
            <a
              key={i}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-heading font-bold text-[#6b6860] opacity-60 hover:opacity-100 hover:text-accent transition-all cursor-pointer shrink-0"
            >
              {client.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
