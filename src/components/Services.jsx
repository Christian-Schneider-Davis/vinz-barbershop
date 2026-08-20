import { FaCut, FaUserTie, FaChild, FaPaintBrush, FaWhatsapp } from 'react-icons/fa'
import { GiRazor, GiMustache } from 'react-icons/gi'
import { whatsappLink } from '../data/businessInfo'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'

// Icons are matched to translated service items by index — see
// src/data/translations.js `services.items` for the text in each language.
const SERVICE_ICONS = [FaCut, FaUserTie, GiRazor, GiMustache, FaChild, FaPaintBrush]

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="servicios" className="services">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-lead">{t.services.lead}</p>
        </Reveal>

        <div className="services__grid">
          {t.services.items.map((service, i) => {
            const Icon = SERVICE_ICONS[i]
            return (
              <Reveal key={service.title} delay={i * 60} className="service-card">
                <div className="service-card__icon">
                  <Icon size={26} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a
                  href={whatsappLink(t.services.bookingMessage(service.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-card__link"
                >
                  <FaWhatsapp size={16} />
                  {t.services.bookLabel}
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
