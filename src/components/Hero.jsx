import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { business, whatsappLink } from '../data/businessInfo'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__pole" aria-hidden="true">
        <div className="hero__pole-cap" />
        <div className="hero__pole-stripes" />
        <div className="hero__pole-cap hero__pole-cap--bottom" />
      </div>

      <div className="container hero__inner">
        <p className="eyebrow eyebrow--light">Barbería en Barcelona</p>
        <h1 className="hero__title">
          Estilo clásico,
          <br />
          filo moderno.
        </h1>
        <p className="hero__subtitle">
          Cortes de precisión, arreglo de barba y afeitado clásico en pleno centro de
          Barcelona. Reserva tu cita en segundos por WhatsApp.
        </p>

        <div className="hero__ctas">
          <a
            href={whatsappLink('Hola! Me gustaría reservar una cita en Vinz Barber Shop.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <FaWhatsapp size={20} />
            Reserva por WhatsApp
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
            <FaClock /> Lun–Sáb 10:00–21:00 · Dom 11:00–20:00
          </span>
        </div>
      </div>
    </section>
  )
}
