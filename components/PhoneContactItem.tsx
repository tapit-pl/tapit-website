'use client'

import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'

const SWITCH_DATE = new Date('2026-05-28T00:00:00')
const TEMP = { display: '+48 883 838 407', href: 'tel:+48883838407' }
const MAIN = { display: '+48 694 843 482', href: 'tel:+48694843482' }

export default function PhoneContactItem() {
  const [phone, setPhone] = useState(TEMP)
  useEffect(() => {
    setPhone(new Date() >= SWITCH_DATE ? MAIN : TEMP)
  }, [])

  return (
    <a href={phone.href} className="flex items-start gap-4 group">
      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
        <Phone size={18} className="text-accent" />
      </div>
      <div>
        <p className="text-xs text-[#b0ada5] uppercase tracking-wider mb-0.5">Telefon</p>
        <p className="text-[#f8f7f4] font-medium group-hover:text-accent transition-colors">
          {phone.display}
        </p>
      </div>
    </a>
  )
}
