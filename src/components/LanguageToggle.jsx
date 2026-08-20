import { useLanguage } from '../context/LanguageContext'
import { UkFlag, SpainFlag } from './flags'

export default function LanguageToggle({ className = '' }) {
  const { lang, setLang } = useLanguage()

  return (
    <div className={`lang-toggle ${className}`} role="group" aria-label="Language / Idioma">
      <span className={`lang-toggle__thumb ${lang === 'en' ? 'lang-toggle__thumb--en' : 'lang-toggle__thumb--es'}`} />
      <button
        type="button"
        className={`lang-toggle__option ${lang === 'en' ? 'is-active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        <UkFlag size={16} />
        <span>EN</span>
      </button>
      <button
        type="button"
        className={`lang-toggle__option ${lang === 'es' ? 'is-active' : ''}`}
        onClick={() => setLang('es')}
        aria-pressed={lang === 'es'}
      >
        <span>SP</span>
        <SpainFlag size={16} />
      </button>
    </div>
  )
}
