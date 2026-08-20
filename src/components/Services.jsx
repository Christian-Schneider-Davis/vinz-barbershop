import { FaCut, FaUserTie, FaChild, FaPaintBrush, FaWhatsapp } from 'react-icons/fa'
import { GiRazor, GiMustache } from 'react-icons/gi'
import { whatsappLink } from '../data/businessInfo'
import Reveal from './Reveal'

const SERVICES = [
  {
    icon: FaCut,
    title: 'Corte de cabello',
    desc: 'Clásico, degradado o a tu estilo, con acabado impecable.',
  },
  {
    icon: FaUserTie,
    title: 'Corte + Barba',
    desc: 'El combo completo para salir con el look perfecto.',
  },
  {
    icon: GiRazor,
    title: 'Afeitado clásico',
    desc: 'Navaja, toalla caliente y ritual de barbería tradicional.',
  },
  {
    icon: GiMustache,
    title: 'Diseño de barba',
    desc: 'Perfilado y arreglo de barba al detalle milimétrico.',
  },
  {
    icon: FaChild,
    title: 'Corte niño',
    desc: 'Para los más pequeños de la casa, con toda la paciencia.',
  },
  {
    icon: FaPaintBrush,
    title: 'Cejas y detalles',
    desc: 'Perfilado de cejas y afeitado de contorno para un acabado pulido.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Qué hacemos</p>
          <h2 className="section-title">Nuestros servicios</h2>
          <p className="section-lead">
            Escribe por WhatsApp y te confirmamos disponibilidad y precio al momento.
          </p>
        </Reveal>

        <div className="services__grid">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.title} delay={i * 60} className="service-card">
                <div className="service-card__icon">
                  <Icon size={26} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a
                  href={whatsappLink(`Hola! Quiero reservar: ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-card__link"
                >
                  <FaWhatsapp size={16} />
                  Reservar
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
