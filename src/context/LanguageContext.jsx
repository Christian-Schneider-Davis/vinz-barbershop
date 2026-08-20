import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '../data/translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children, defaultLang = 'es' }) {
  const [lang, setLang] = useState(defaultLang)

  useEffect(() => {
    document.documentElement.lang = translations[lang].meta.htmlLang
  }, [lang])

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'))

  const value = {
    lang,
    setLang,
    toggleLang,
    t: translations[lang],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
