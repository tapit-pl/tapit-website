import type { Metadata } from 'next'
import { Mail, Clock, MapPin } from 'lucide-react'
import SectionTag from '@/components/SectionTag'
import ContactForm from '@/components/ContactForm'
import PhoneContactItem from '@/components/PhoneContactItem'

export const metadata: Metadata = {
  title: 'Kontakt - Tapit',
  description:
    'Skontaktuj się z agencją marketingową Tapit z Krakowa. Zadzwoń, napisz lub wypełnij formularz - odpiszemy w 24 godziny.',
}

export default function ContactPage() {
  return (
    <section className="pt-20 pb-24 md:pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <SectionTag>Kontakt</SectionTag>
          <h1 className="mb-4">Porozmawiajmy</h1>
          <p className="text-[#b0ada5] text-lg max-w-xl">
            Napisz do nas, a odezwiemy się w ciągu 24 godzin w dni robocze.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          {/* Form */}
          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-3xl p-8">
            <ContactForm variant="default" />
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-7 space-y-5">
              <a
                href="mailto:kontakt@tapit.com.pl"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-[#b0ada5] uppercase tracking-wider mb-0.5">E-mail</p>
                  <p className="text-[#f8f7f4] font-medium group-hover:text-accent transition-colors">
                    kontakt@tapit.com.pl
                  </p>
                </div>
              </a>

              <PhoneContactItem />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-[#b0ada5] uppercase tracking-wider mb-0.5">Godziny pracy</p>
                  <p className="text-[#f8f7f4] font-medium">Pon–Pt, 9:00–17:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-[#b0ada5] uppercase tracking-wider mb-0.5">Adres</p>
                  <p className="text-[#f8f7f4] font-medium">Aleja Pokoju 41/6</p>
                  <p className="text-[#b0ada5] text-sm">31-564 Kraków</p>
                </div>
              </div>
            </div>

            {/* Company info */}
            <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6">
              <p className="text-xs text-[#b0ada5] uppercase tracking-wider mb-3">Dane firmy</p>
              <p className="text-sm text-[#b0ada5] leading-relaxed">
                Maciej Sieńko<br />
                Firma Marketingowo-Usługowa<br />
                NIP: 6751680027
              </p>
            </div>

            {/* Map placeholder */}
            <div className="aspect-video rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] overflow-hidden">
              <iframe
                src="https://maps.app.goo.gl/aLfYwoSM6g1KdqiP8"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja Tapit w Krakowie"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
