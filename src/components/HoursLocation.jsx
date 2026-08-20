import { FaMapMarkerAlt, FaWhatsapp, FaDirections } from 'react-icons/fa'
import { business, whatsappLink } from '../data/businessInfo'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'

export default function HoursLocation() {
  const { t } = useLanguage()
  const mapsQuery = encodeURIComponent(business.address.mapsQuery)

  return (
    <section id="horario" className="hours">
      <div className="container hours__grid">
        <Reveal className="hours__info">
          <p className="eyebrow">{t.hours.eyebrow}</p>
          <h2 className="section-title">{t.hours.title}</h2>

          <table className="hours__table">
            <tbody>
              {t.hours.days.map((row) => (
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
              href={whatsappLink(t.hours.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <FaWhatsapp size={18} />
              {t.hours.ctaWhatsapp}
            </a>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              <FaDirections size={18} />
              {t.hours.ctaDirections}
            </a>
          </div>
        </Reveal>

        <Reveal delay={100} className="hours__map">
          <iframe
            title={t.hours.mapTitle}
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
