import { FaInstagram, FaCut, FaUserTie } from 'react-icons/fa'
import { GiRazor, GiMustache, GiScissors, GiComb } from 'react-icons/gi'
import { business } from '../data/businessInfo'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'

const TILE_ICONS = [FaCut, GiRazor, FaUserTie, GiMustache, GiScissors, GiComb]

export default function Instagram() {
  const { t } = useLanguage()

  return (
    <section id="instagram" className="instagram">
      <div className="container instagram__inner">
        <Reveal className="instagram__copy">
          <p className="eyebrow eyebrow--light">{t.instagram.eyebrow}</p>
          <h2 className="section-title section-title--light">{t.instagram.title}</h2>
          <p className="section-lead section-lead--light">{t.instagram.lead}</p>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaInstagram size={20} />
            {t.instagram.cta} @{business.instagramHandle}
          </a>
        </Reveal>

        <Reveal delay={100} className="instagram__grid" aria-hidden="true">
          {TILE_ICONS.map((Icon, i) => (
            <a
              key={i}
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram__tile"
            >
              <Icon size={28} />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
