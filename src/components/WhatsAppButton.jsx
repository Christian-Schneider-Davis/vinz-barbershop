import { FaWhatsapp } from 'react-icons/fa'
import { whatsappLink } from '../data/businessInfo'
import { useLanguage } from '../context/LanguageContext'

export default function WhatsAppButton() {
  const { t } = useLanguage()

  return (
    <a
      href={whatsappLink(t.whatsappButton.message)}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label={t.whatsappButton.ariaLabel}
    >
      <span className="floating-whatsapp__ping" />
      <FaWhatsapp size={28} />
    </a>
  )
}
