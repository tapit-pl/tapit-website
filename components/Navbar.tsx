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
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
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
      {/* Top bar */}
      <a
        href="/audyt"
        className="block w-full bg-accent hover:bg-accent-hover transition-colors py-2 px-4 text-center z-50 relative"
      >
        <span className="hidden md:inline text-white text-sm font-medium">
          Darmowy audyt Twojego marketingu — sprawdź, ile tracisz →
        </span>
        <span className="md:hidden text-white text-sm font-medium">
          Darmowy audyt → kliknij
        </span>
      </a>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(250,250,248,0.97)] backdrop-blur-xl border-b border-[rgba(0,0,0,0.08)] py-3 shadow-sm'
            : 'bg-[rgba(250,250,248,0.90)] backdrop-blur-xl border-b border-[rgba(0,0,0,0.05)] py-4'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="2.5" fill="#6366f1" />
                <path d="M3.5 10.5a5 5 0 0 1 0-7" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
                <path d="M1 13a9 9 0 0 1 0-12" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
                <path d="M10.5 10.5a5 5 0 0 0 0-7" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
                <path d="M13 13a9 9 0 0 0 0-12" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
              </svg>
            </div>
            <span className="font-heading font-extrabold text-xl text-[#1c1b19] tracking-tight">
              Tapit<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-[#6b6860] hover:text-[#1c1b19] rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Services dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(o => !o)}
                onMouseEnter={() => setDropdownOpen(true)}
                className="flex items-center gap-1 px-4 py-2 text-sm text-[#6b6860] hover:text-[#1c1b19] rounded-lg transition-colors"
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
                <div className="bg-white border border-[rgba(0,0,0,0.09)] rounded-2xl shadow-xl shadow-black/5 p-5 grid grid-cols-3 gap-6 animate-fade-in">
                  {Object.entries(services).map(([group, items]) => (
                    <div key={group}>
                      <p className="text-xs uppercase tracking-[1.5px] text-[#6b6860] font-medium mb-3 font-heading">
                        {group}
                      </p>
                      <div className="space-y-1">
                        {items.map(item => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setDropdownOpen(false)}
                            className="flex flex-col gap-0.5 px-3 py-2 rounded-xl hover:bg-[rgba(0,0,0,0.06)] transition-colors group"
                          >
                            <span className="text-sm font-medium text-[#1c1b19] flex items-center gap-2">
                              {item.name}
                              {'badge' in item && item.badge && (
                                <span className="text-[10px] bg-accent/20 text-accent px-1.5 py-0.5 rounded-full font-medium">
                                  {item.badge}
                                </span>
                              )}
                            </span>
                            <span className="text-xs text-[#6b6860]">{item.desc}</span>
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
              className="px-4 py-2 text-sm text-[#6b6860] hover:text-[#1c1b19] rounded-lg transition-colors"
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
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#1c1b19] rounded-lg hover:bg-[rgba(0,0,0,0.07)] transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 bg-[#f0eeec] flex flex-col pt-24 pb-8 px-6 overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-xl font-heading font-bold text-[#1c1b19] border-b border-[rgba(0,0,0,0.07)]"
              >
                {link.label}
              </Link>
            ))}

            {/* Services accordion */}
            <button
              onClick={() => setMobileServicesOpen(o => !o)}
              className="flex items-center justify-between py-3 text-xl font-heading font-bold text-[#1c1b19] border-b border-[rgba(0,0,0,0.07)]"
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
                    className="flex items-center gap-2 py-2 text-[#6b6860] hover:text-accent transition-colors"
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
              className="py-3 text-xl font-heading font-bold text-[#1c1b19] border-b border-[rgba(0,0,0,0.07)]"
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
