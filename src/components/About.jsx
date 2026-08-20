import { FaCheckCircle } from 'react-icons/fa'
import Reveal from './Reveal'

const POINTS = [
  'Barberos con oficio y buen ojo para el detalle',
  'Ambiente auténtico de barbería de toda la vida',
  'Atención cercana, sin prisas',
  'En pleno centro de Barcelona, fácil de encontrar',
]

export default function About() {
  return (
    <section id="nosotros" className="about">
      <div className="container about__grid">
        <Reveal className="about__copy">
          <p className="eyebrow">Nosotros</p>
          <h2 className="section-title">La barbería de tu barrio</h2>
          <p className="section-lead">
            En Vinz Barber Shop cuidamos cada corte como si fuera el nuestro. Tradición de
            barbería con un acabado moderno, en un espacio pensado para que salgas con las
            ideas claras y el look impecable.
          </p>
          <ul className="about__list">
            {POINTS.map((point) => (
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
