'use client'

import { Phone, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Contact form - hidden on mobile */}
      <Link
        href="/kontakt"
        aria-label="Formularz kontaktowy"
        className="hidden md:flex w-12 h-12 rounded-full bg-accent hover:bg-accent-hover items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
      >
        <MessageSquare size={20} className="text-white" />
      </Link>
      {/* Phone - visible always */}
      <a
        href="tel:+48694843482"
        aria-label="Zadzwoń do nas"
        className="flex w-12 h-12 rounded-full bg-accent hover:bg-accent-hover items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
      >
        <Phone size={20} className="text-white" />
      </a>
    </div>
  )
}
