'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'

const services = {
  'Reklama': [
    { name: 'Google Ads & PPC', desc: 'Kampanie w Google, Meta, TikTok i LinkedIn', href: '/uslugi/google-ads' },
    { name: 'Meta Ads', desc: 'Reklamy na Facebooku i Instagramie', href: '/uslugi/google-ads' },
    { name: 'TikTok Ads', desc: 'Kampanie dla młodszych odbiorców', href: '/uslugi/google-ads' },
    { name: 'LinkedIn Ads', desc: 'Dotarcie do profesjonalistów B2B', href: '/uslugi/google-ads' },
  ],
  'Widoczność': [
    { name: 'SEO', desc: 'Pozycjonowanie w wynikach organicznych', href: '/uslugi/seo' },
    { name: 'Marketing lokalny', desc: 'Wizytówka Google i lokalne SEO', href: '/uslugi/marketing-lokalny' },
    { name: 'Pozycjonowanie w AI', desc: 'Obecność w ChatGPT i Perplexity', href: '/uslugi/pozycjonowanie-w-ai', badge: 'Nowość' },
  ],
  'Technologia': [
    { name: 'Strony internetowe', desc: 'Szybkie, nowoczesne i konwertujące strony', href: '/uslugi/strony-internetowe' },
    { name: 'Consent Mode i analityka', desc: 'GA4, GTM i Consent Mode v2', href: '/uslugi/analityka' },
  ],
}

const navLinks = [
  { label: 'Strona główna', href: '/' },
  { label: 'O nas', href: '/o-nas' },
  { label: 'Realizacje', href: '/realizacje' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '/kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 10)
      if (y < 80) {
        setHidden(false)
      } else if (y > lastY.current + 6) {
        setHidden(true)
        setDropdownOpen(false)
      } else if (y < lastY.current - 4) {
        setHidden(false)
      }
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* Sticky wrapper - hides on scroll down */}
      <div
        className={`sticky top-0 z-50 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
      >
      {/* Main nav */}
      <header
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(15,14,13,0.98)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.07)] py-3 shadow-lg'
            : 'bg-[rgba(15,14,13,0.90)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.04)] py-4'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0 group">
            <Image
              src="/logo-white.png"
              alt="Tapit"
              width={100}
              height={40}
              className="h-9 w-auto group-hover:opacity-80 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-white/70 hover:text-white rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Services dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(o => !o)}
                onMouseEnter={() => setDropdownOpen(true)}
                className="flex items-center gap-1 px-4 py-2 text-sm text-white/70 hover:text-white rounded-lg transition-colors"
              >
                Usługi
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {dropdownOpen && (
                <div
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute top-full left-1/2 mt-2 w-[580px]"
                  style={{ transform: 'translateX(-50%)' }}
                >
                <div className="bg-[#1a1918] border border-[rgba(255,255,255,0.08)] rounded-2xl shadow-2xl p-5 grid grid-cols-3 gap-6 animate-fade-in">
                  {Object.entries(services).map(([group, items]) => (
                    <div key={group}>
                      <p className="text-xs uppercase tracking-[1.5px] text-white/40 font-medium mb-3 font-heading">
                        {group}
                      </p>
                      <div className="space-y-1">
                        {items.map(item => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setDropdownOpen(false)}
                            className="flex flex-col gap-0.5 px-3 py-2 rounded-xl hover:bg-[rgba(255,255,255,0.06)] transition-colors group"
                          >
                            <span className="text-sm font-medium text-white flex items-center gap-2">
                              {item.name}
                              {'badge' in item && item.badge && (
                                <span className="text-[10px] bg-accent/20 text-accent px-1.5 py-0.5 rounded-full font-medium">
                                  {item.badge}
                                </span>
                              )}
                            </span>
                            <span className="text-xs text-white/50">{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                </div>
              )}
            </div>

            {/* Wizytówka link */}
            <Link
              href="/sprawdz-wizytowke"
              className="px-4 py-2 text-sm text-white/70 hover:text-white rounded-lg transition-colors"
            >
              Sprawdź wizytówkę
            </Link>
          </div>

          {/* CTA button + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/audyt"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
            >
              Darmowy audyt
            </Link>

            <button
              onClick={() => setMobileOpen(o => !o)}
              aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-[#1a1917] flex flex-col pt-24 pb-8 px-6 overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-xl font-heading font-bold text-[#f8f7f4] border-b border-[rgba(255,255,255,0.07)]"
              >
                {link.label}
              </Link>
            ))}

            {/* Services accordion */}
            <button
              onClick={() => setMobileServicesOpen(o => !o)}
              className="flex items-center justify-between py-3 text-xl font-heading font-bold text-[#f8f7f4] border-b border-[rgba(255,255,255,0.07)]"
            >
              Usługi
              <ChevronDown
                size={20}
                className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 py-2 space-y-1">
                {Object.values(services).flat().map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 py-2 text-[#b0ada5] hover:text-accent transition-colors"
                  >
                    <ArrowRight size={14} />
                    <span className="flex items-center gap-2">
                      {item.name}
                      {'badge' in item && item.badge && (
                        <span className="text-[10px] bg-accent/20 text-accent px-1.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </span>
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/sprawdz-wizytowke"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-xl font-heading font-bold text-[#f8f7f4] border-b border-[rgba(255,255,255,0.07)]"
            >
              Sprawdź wizytówkę
            </Link>
          </nav>

          <Link
            href="/audyt"
            onClick={() => setMobileOpen(false)}
            className="mt-8 py-4 rounded-full bg-accent hover:bg-accent-hover text-white text-center font-heading font-bold text-lg transition-colors"
          >
            Darmowy audyt
          </Link>
        </div>
      )}
    </>
  )
}
