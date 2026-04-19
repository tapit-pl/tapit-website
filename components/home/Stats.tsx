'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 50, suffix: '+', label: 'Zadowolonych klientów' },
  { value: 2, prefix: '', suffix: ' mln zł', label: 'Zarządzanego budżetu rocznie' },
  { value: 4, suffix: ' lata', label: 'Doświadczenia w branży' },
  { value: 93, suffix: '%', label: 'Klientów zostaje na dłużej' },
]

function Counter({ value, suffix, prefix }: { value: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1500
          const start = performance.now()
          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const ease = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(ease * value))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 bg-[rgba(0,0,0,0.05)] rounded-2xl overflow-hidden">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-[#f0eeec] px-8 py-10 flex flex-col items-center text-center group hover:bg-[rgba(0,0,0,0.03)] transition-colors"
          >
            <span className="font-heading font-extrabold text-4xl md:text-5xl text-accent mb-2 tabular-nums">
              <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
            </span>
            <span className="text-sm text-[#6b6860] leading-snug">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
