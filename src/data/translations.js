// All user-facing copy for the site, in English and Spanish.
// The LanguageContext picks one of these trees based on the active language.

export const translations = {
  es: {
    meta: {
      htmlLang: 'es',
    },
    nav: {
      services: 'Servicios',
      about: 'Nosotros',
      instagram: 'Instagram',
      hours: 'Horario y ubicación',
      cta: 'Reservar cita',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
    },
    hero: {
      eyebrow: 'Barbería en Barcelona',
      titleLine1: 'Estilo clásico,',
      titleLine2: 'filo moderno.',
      subtitle:
        'Cortes de precisión, arreglo de barba y afeitado clásico en pleno centro de Barcelona. Reserva tu cita en segundos por WhatsApp.',
      ctaWhatsapp: 'Reserva por WhatsApp',
      metaHours: 'Lun–Sáb 10:00–21:00 · Dom 11:00–20:00',
      whatsappMessage: 'Hola! Me gustaría reservar una cita en Vinz Barber Shop.',
    },
    services: {
      eyebrow: 'Qué hacemos',
      title: 'Nuestros servicios',
      lead: 'Escribe por WhatsApp y te confirmamos disponibilidad y precio al momento.',
      bookLabel: 'Reservar',
      items: [
        {
          title: 'Corte de cabello',
          desc: 'Clásico, degradado o a tu estilo, con acabado impecable.',
        },
        {
          title: 'Corte + Barba',
          desc: 'El combo completo para salir con el look perfecto.',
        },
        {
          title: 'Afeitado clásico',
          desc: 'Navaja, toalla caliente y ritual de barbería tradicional.',
        },
        {
          title: 'Diseño de barba',
          desc: 'Perfilado y arreglo de barba al detalle milimétrico.',
        },
        {
          title: 'Corte niño',
          desc: 'Para los más pequeños de la casa, con toda la paciencia.',
        },
      ],
      bookingMessage: (service) => `Hola! Quiero reservar: ${service}.`,
    },
    about: {
      eyebrow: 'Nosotros',
      title: 'La barbería de tu barrio',
      lead:
        'En Vinz Barber Shop cuidamos cada corte como si fuera el nuestro. Tradición de barbería con un acabado moderno, en un espacio pensado para que salgas con las ideas claras y el look impecable.',
      points: [
        'Barberos con oficio y buen ojo para el detalle',
        'Ambiente auténtico de barbería de toda la vida',
        'Atención cercana, sin prisas',
        'En pleno centro de Barcelona, fácil de encontrar',
      ],
    },
    instagram: {
      eyebrow: 'Redes sociales',
      title: 'Síguenos en Instagram',
      lead:
        'Cortes, transformaciones y el día a día de la barbería. Etiquétanos en tus fotos y sé parte de la comunidad Vinz.',
      cta: 'Seguir',
    },
    hours: {
      eyebrow: 'Horario y ubicación',
      title: 'Te esperamos',
      days: [
        { days: 'Lunes a Sábado', time: '10:00 – 21:00' },
        { days: 'Domingo', time: '11:00 – 20:00' },
      ],
      ctaWhatsapp: 'Escríbenos',
      ctaDirections: 'Cómo llegar',
      whatsappMessage: 'Hola! Quiero reservar una cita en Vinz Barber Shop.',
      mapTitle: 'Ubicación de Vinz Barber Shop',
    },
    footer: {
      contact: 'Contacto',
      address: 'Dirección',
      rights: 'Todos los derechos reservados.',
    },
    whatsappButton: {
      ariaLabel: 'Escríbenos por WhatsApp',
      message: 'Hola! Me gustaría reservar una cita en Vinz Barber Shop.',
    },
  },

  en: {
    meta: {
      htmlLang: 'en',
    },
    nav: {
      services: 'Services',
      about: 'About',
      instagram: 'Instagram',
      hours: 'Hours & Location',
      cta: 'Book Now',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    hero: {
      eyebrow: 'Barbershop in Barcelona',
      titleLine1: 'Classic style,',
      titleLine2: 'modern edge.',
      subtitle:
        'Precision haircuts, beard grooming and classic shaves in the heart of Barcelona. Book your appointment in seconds on WhatsApp.',
      ctaWhatsapp: 'Book via WhatsApp',
      metaHours: 'Mon–Sat 10:00–21:00 · Sun 11:00–20:00',
      whatsappMessage: 'Hi! I\'d like to book an appointment at Vinz Barber Shop.',
    },
    services: {
      eyebrow: 'What we do',
      title: 'Our services',
      lead: 'Message us on WhatsApp and we\'ll confirm availability and price right away.',
      bookLabel: 'Book',
      items: [
        {
          title: 'Haircut',
          desc: 'Classic, fade, or your own style, finished to perfection.',
        },
        {
          title: 'Haircut + Beard',
          desc: 'The full combo for a flawless finished look.',
        },
        {
          title: 'Classic shave',
          desc: 'Straight razor, hot towel, and a traditional barbershop ritual.',
        },
        {
          title: 'Beard design',
          desc: 'Precision beard shaping and trimming down to the last detail.',
        },
        {
          title: 'Kids\' haircut',
          desc: 'For the little ones of the house, with all the patience needed.',
        },
      ],
      bookingMessage: (service) => `Hi! I'd like to book: ${service}.`,
    },
    about: {
      eyebrow: 'About us',
      title: 'Your neighborhood barbershop',
      lead:
        'At Vinz Barber Shop, we treat every cut like it\'s our own. Barbershop tradition with a modern finish, in a space designed for you to leave with a clear mind and a flawless look.',
      points: [
        'Skilled barbers with an eye for detail',
        'Authentic, old-school barbershop atmosphere',
        'Friendly, unhurried service',
        'Right in the heart of Barcelona, easy to find',
      ],
    },
    instagram: {
      eyebrow: 'Social media',
      title: 'Follow us on Instagram',
      lead:
        'Haircuts, transformations, and everyday life at the barbershop. Tag us in your photos and be part of the Vinz community.',
      cta: 'Follow',
    },
    hours: {
      eyebrow: 'Hours & location',
      title: 'We\'ll be here',
      days: [
        { days: 'Monday to Saturday', time: '10:00 AM – 9:00 PM' },
        { days: 'Sunday', time: '11:00 AM – 8:00 PM' },
      ],
      ctaWhatsapp: 'Message us',
      ctaDirections: 'Get directions',
      whatsappMessage: 'Hi! I\'d like to book an appointment at Vinz Barber Shop.',
      mapTitle: 'Vinz Barber Shop location',
    },
    footer: {
      contact: 'Contact',
      address: 'Address',
      rights: 'All rights reserved.',
    },
    whatsappButton: {
      ariaLabel: 'Message us on WhatsApp',
      message: 'Hi! I\'d like to book an appointment at Vinz Barber Shop.',
    },
  },
}
