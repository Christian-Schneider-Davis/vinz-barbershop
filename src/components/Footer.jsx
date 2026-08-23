import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import { business, whatsappLink } from '../data/businessInfo'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <span className="footer__brand">{business.name}</span>
          <p className="footer__tagline">{business.tagline}</p>
        </div>

        <div className="footer__col">
          <h4>{t.footer.address}</h4>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
              business.address.mapsQuery
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt /> {business.address.line1}, {business.address.line2}
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {year} {business.name}. {t.footer.rights}
        </span>
      </div>
    </footer>
  )
}
