'use client'

import { motion } from 'framer-motion'
import SectionTag from '@/components/SectionTag'

const reasons = [
  {
    num: '01',
    title: 'Partnerstwo, nie usługa',
    desc: 'Traktujemy Cię jak partnera biznesowego, nie jak numer na fakturze. Znamy Twój biznes, Twoje cele i Twoich klientów. Dlatego 93% firm zostaje z nami dłużej niż rok.',
  },
  {
    num: '02',
    title: 'Konkretne wyniki, nie raporty',
    desc: 'Nie zasypujemy Cię 40-stronicowymi PDF-ami. Dostajesz jasną informację: ile wydałeś, ile zarobiłeś, co robimy dalej. Transparentność to nasz fundament.',
  },
  {
    num: '03',
    title: 'Bez długich umów',
    desc: 'Nie wiążemy klientów 12-miesięcznymi kontraktami. Zostajesz, bo widzisz wyniki — nie dlatego, że musisz. To motywuje nas do lepszej pracy.',
  },
  {
    num: '04',
    title: 'Jeden zespół, pełna obsługa',
    desc: 'Od reklam przez SEO po analitykę — wszystko pod jednym dachem. Bez przekazywania między agencjami, bez gubienia kontekstu. Jeden opiekun, jedna strategia.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 bg-[rgba(0,0,0,0.02)] border-y border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <SectionTag className="justify-center">Dlaczego my</SectionTag>
          <h2>Co nas wyróżnia</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-2xl p-10 hover:border-accent/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              style={{
                boxShadow: '0 0 0 0 rgba(245,60,60,0)',
              }}
            >
              {/* Big number watermark */}
              <span
                aria-hidden
                className="absolute top-4 right-5 font-heading font-extrabold text-7xl text-accent leading-none pointer-events-none select-none"
                style={{ opacity: 0.06 }}
              >
                {r.num}
              </span>

              <h3 className="font-heading font-bold text-xl text-[#f8f7f4] mb-3">{r.title}</h3>
              <p className="text-[#b0ada5] text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
