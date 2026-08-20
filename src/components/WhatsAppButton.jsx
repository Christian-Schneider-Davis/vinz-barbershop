import { FaWhatsapp } from 'react-icons/fa'
import { whatsappLink } from '../data/businessInfo'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink('Hola! Me gustaría reservar una cita en Vinz Barber Shop.')}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Escríbenos por WhatsApp"
    >
      <span className="floating-whatsapp__ping" />
      <FaWhatsapp size={28} />
    </a>
  )
}
