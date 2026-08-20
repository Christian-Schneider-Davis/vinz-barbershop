import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { business, whatsappLink } from '../data/businessInfo'
import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="hero">
      <div className="hero__pole" aria-hidden="true">
        <div className="hero__pole-cap" />
        <div className="hero__pole-stripes" />
        <div className="hero__pole-cap hero__pole-cap--bottom" />
      </div>

      <div className="container hero__inner">
        <p className="eyebrow eyebrow--light">{t.hero.eyebrow}</p>
        <h1 className="hero__title">
          {t.hero.titleLine1}
          <br />
          {t.hero.titleLine2}
        </h1>
        <p className="hero__subtitle">{t.hero.subtitle}</p>

        <div className="hero__ctas">
          <a
            href={whatsappLink(t.hero.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <FaWhatsapp size={20} />
            {t.hero.ctaWhatsapp}
          </a>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaInstagram size={20} />
            @{business.instagramHandle}
          </a>
        </div>

        <div className="hero__meta">
          <span>
            <FaMapMarkerAlt /> {business.address.line1}, {business.address.line2}
          </span>
          <span>
            <FaClock /> {t.hero.metaHours}
          </span>
        </div>
      </div>
    </section>
  )
}
