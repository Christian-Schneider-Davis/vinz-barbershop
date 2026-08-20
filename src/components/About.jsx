import { FaCheckCircle } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="nosotros" className="about">
      <div className="container about__grid">
        <Reveal className="about__copy">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-lead">{t.about.lead}</p>
          <ul className="about__list">
            {t.about.points.map((point) => (
              <li key={point}>
                <FaCheckCircle color="#c8102e" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="about__visual" aria-hidden="true">
          <div className="about__badge">
            <span className="about__badge-name">VINZ</span>
            <span className="about__badge-sub">Barber Shop</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
