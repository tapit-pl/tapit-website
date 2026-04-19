'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Wróć na górę"
      className="fixed bottom-24 right-6 z-40 w-10 h-10 rounded-full bg-[rgba(0,0,0,0.07)] border border-[rgba(0,0,0,0.08)] text-[#6b6860] hover:text-[#1c1b19] hover:bg-[rgba(0,0,0,0.08)] transition-all duration-200 flex items-center justify-center shadow-lg"
    >
      <ArrowUp size={16} />
    </button>
  )
}
