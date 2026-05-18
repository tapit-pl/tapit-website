'use client'

import { useEffect, useState } from 'react'

const SWITCH_DATE = new Date('2026-05-28T00:00:00')
const TEMP = { display: '+48 883 838 407', href: 'tel:+48883838407' }
const MAIN = { display: '+48 694 843 482', href: 'tel:+48694843482' }

function getPhone() {
  return new Date() >= SWITCH_DATE ? MAIN : TEMP
}

export default function PhoneLink({ className }: { className?: string }) {
  const [phone, setPhone] = useState(TEMP)
  useEffect(() => { setPhone(getPhone()) }, [])
  return <a href={phone.href} className={className}>{phone.display}</a>
}
