import { FaInstagram, FaCut, FaUserTie } from 'react-icons/fa'
import { GiRazor, GiMustache, GiScissors, GiComb } from 'react-icons/gi'
import { business } from '../data/businessInfo'
import Reveal from './Reveal'

const TILE_ICONS = [FaCut, GiRazor, FaUserTie, GiMustache, GiScissors, GiComb]

export default function Instagram() {
  return (
    <section id="instagram" className="instagram">
      <div className="container instagram__inner">
        <Reveal className="instagram__copy">
          <p className="eyebrow eyebrow--light">Redes sociales</p>
          <h2 className="section-title section-title--light">
            Síguenos en Instagram
          </h2>
          <p className="section-lead section-lead--light">
            Cortes, transformaciones y el día a día de la barbería. Etiquétanos en tus
            fotos y sé parte de la comunidad Vinz.
          </p>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FaInstagram size={20} />
            Seguir @{business.instagramHandle}
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
