import { FaMapMarkerAlt, FaWhatsapp, FaDirections } from 'react-icons/fa'
import { business, whatsappLink } from '../data/businessInfo'
import Reveal from './Reveal'

export default function HoursLocation() {
  const mapsQuery = encodeURIComponent(business.address.mapsQuery)

  return (
    <section id="horario" className="hours">
      <div className="container hours__grid">
        <Reveal className="hours__info">
          <p className="eyebrow">Horario y ubicación</p>
          <h2 className="section-title">Te esperamos</h2>

          <table className="hours__table">
            <tbody>
              {business.hours.map((row) => (
                <tr key={row.days}>
                  <td>{row.days}</td>
                  <td>{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="hours__address">
            <FaMapMarkerAlt size={20} color="#c8102e" />
            <div>
              <strong>{business.address.line1}</strong>
              <br />
              {business.address.line2}
            </div>
          </div>

          <div className="hours__ctas">
            <a
              href={whatsappLink('Hola! Quiero reservar una cita en Vinz Barber Shop.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <FaWhatsapp size={18} />
              Escríbenos
            </a>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <FaDirections size={18} />
              Cómo llegar
            </a>
          </div>
        </Reveal>

        <Reveal delay={100} className="hours__map">
          <iframe
            title="Ubicación de Vinz Barber Shop"
            src={`https://maps.google.com/maps?q=${mapsQuery}&z=16&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  )
}
