import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const serviceLinks = [
  { label: 'Google Ads & PPC', href: '/uslugi/google-ads' },
  { label: 'Pozycjonowanie SEO', href: '/uslugi/seo' },
  { label: 'Marketing lokalny', href: '/uslugi/marketing-lokalny' },
  { label: 'Pozycjonowanie w AI', href: '/uslugi/pozycjonowanie-w-ai' },
  { label: 'Strony internetowe', href: '/uslugi/strony-internetowe' },
  { label: 'Analityka i Consent Mode', href: '/uslugi/analityka' },
]

const companyLinks = [
  { label: 'O nas', href: '/o-nas' },
  { label: 'Realizacje', href: '/realizacje' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Darmowy audyt', href: '/audyt' },
  { label: 'Sprawdź wizytówkę', href: '/sprawdz-wizytowke' },
  { label: 'Polityka prywatności', href: '/polityka-prywatnosci' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.07)] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + desc */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity">
              <Image
                src="/logo-white.png"
                alt="Tapit"
                width={90}
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-[#b0ada5] text-sm leading-relaxed mb-5">
              Agencja marketingowa z Krakowa. Pomagamy firmom rosnąć przez Google Ads, SEO i marketing lokalny. Bez korporacyjnego dystansu.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#b0ada5] hover:text-accent hover:border-accent/30 transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#b0ada5] hover:text-accent hover:border-accent/30 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#b0ada5] hover:text-accent hover:border-accent/30 transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-[#f8f7f4] text-sm uppercase tracking-widest mb-4">
              Usługi
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#b0ada5] hover:text-[#f8f7f4] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-[#f8f7f4] text-sm uppercase tracking-widest mb-4">
              Firma
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#b0ada5] hover:text-[#f8f7f4] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-[#f8f7f4] text-sm uppercase tracking-widest mb-4">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:kontakt@tapit.com.pl"
                  className="flex items-center gap-2.5 text-sm text-[#b0ada5] hover:text-accent transition-colors"
                >
                  <Mail size={15} className="shrink-0" />
                  kontakt@tapit.com.pl
                </a>
              </li>
              <li>
                <a
                  href="tel:+48694843482"
                  className="flex items-center gap-2.5 text-sm text-[#b0ada5] hover:text-accent transition-colors"
                >
                  <Phone size={15} className="shrink-0" />
                  +48 694 843 482
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-[#b0ada5]">
                <MapPin size={15} className="shrink-0 mt-0.5" />
                <span>Aleja Pokoju 41/6<br />31-564 Kraków</span>
              </li>
            </ul>
            <div className="mt-5 pt-4 border-t border-[rgba(255,255,255,0.07)]">
              <p className="text-xs text-[#b0ada5] leading-relaxed">
                NIP: 6751680027<br />
                Maciej Sieńko<br />
                Firma Marketingowo-Usługowa
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(255,255,255,0.07)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#b0ada5]">
            © 2025 Tapit. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-[#b0ada5]">
            Dotknij, a zajmiemy się resztą.
          </p>
        </div>
      </div>
    </footer>
  )
}
