'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [prefs, setPrefs] = useState({ analytics: true, marketing: false })

  useEffect(() => {
    const consent = localStorage.getItem('tapit_cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('tapit_cookie_consent', JSON.stringify({ analytics: true, marketing: true }))
    setVisible(false)
  }

  const save = () => {
    localStorage.setItem('tapit_cookie_consent', JSON.stringify(prefs))
    setVisible(false)
    setShowSettings(false)
  }

  if (!visible) return null

  return (
    <>
      {/* Main banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-[#1a1917] border-t border-[rgba(255,255,255,0.08)] shadow-2xl animate-fade-in">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4">
            <p className="text-[#b0ada5] text-sm flex-1 leading-relaxed">
              Używamy plików cookies, żeby lepiej rozumieć, jak korzystasz z naszej strony i doskonalić nasze usługi.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setShowSettings(true)}
                className="text-sm text-[#b0ada5] hover:text-[#f8f7f4] underline transition-colors"
              >
                Ustawienia
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 rounded-full bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors"
              >
                Akceptuję
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#1a1917] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading font-bold text-lg text-[#f8f7f4]">Ustawienia cookies</h3>
              <button onClick={() => setShowSettings(false)} className="text-[#b0ada5] hover:text-[#f8f7f4]">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              {/* Necessary */}
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[rgba(255,255,255,0.04)]">
                <div className="w-10 h-6 rounded-full bg-accent/30 flex items-center mt-0.5 shrink-0 cursor-not-allowed" />
                <div>
                  <p className="font-medium text-sm text-[#f8f7f4]">Niezbędne</p>
                  <p className="text-xs text-[#b0ada5] mt-0.5">Wymagane do działania strony. Zawsze włączone.</p>
                </div>
              </div>

              {/* Analytics */}
              <label className="flex items-start gap-3 p-3 rounded-xl bg-[rgba(255,255,255,0.04)] cursor-pointer">
                <div
                  className={`w-10 h-6 rounded-full flex items-center px-0.5 mt-0.5 shrink-0 transition-colors ${prefs.analytics ? 'bg-accent' : 'bg-[rgba(255,255,255,0.08)]'}`}
                  onClick={() => setPrefs(p => ({ ...p, analytics: !p.analytics }))}
                >
                  <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${prefs.analytics ? 'translate-x-4' : 'translate-x-0'}`} />
                </div>
                <div>
                  <p className="font-medium text-sm text-[#f8f7f4]">Analityczne</p>
                  <p className="text-xs text-[#b0ada5] mt-0.5">Pomagają nam rozumieć, jak korzystasz ze strony.</p>
                </div>
              </label>

              {/* Marketing */}
              <label className="flex items-start gap-3 p-3 rounded-xl bg-[rgba(255,255,255,0.04)] cursor-pointer">
                <div
                  className={`w-10 h-6 rounded-full flex items-center px-0.5 mt-0.5 shrink-0 transition-colors ${prefs.marketing ? 'bg-accent' : 'bg-[rgba(255,255,255,0.08)]'}`}
                  onClick={() => setPrefs(p => ({ ...p, marketing: !p.marketing }))}
                >
                  <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${prefs.marketing ? 'translate-x-4' : 'translate-x-0'}`} />
                </div>
                <div>
                  <p className="font-medium text-sm text-[#f8f7f4]">Marketingowe</p>
                  <p className="text-xs text-[#b0ada5] mt-0.5">Używane do personalizacji reklam.</p>
                </div>
              </label>
            </div>

            <button
              onClick={save}
              className="mt-5 w-full py-2.5 rounded-full bg-accent hover:bg-accent-hover text-white font-medium text-sm transition-colors"
            >
              Zapisz ustawienia
            </button>
          </div>
        </div>
      )}
    </>
  )
}
