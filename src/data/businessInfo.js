// Central place to edit Vinz Barber Shop's business details.
// Update phone numbers, hours, address, or socials here and the whole site updates.

export const business = {
  name: 'Vinz Barber Shop',
  tagline: 'Barbería clásica, estilo moderno',
  instagramHandle: 'Follow Us',
  instagramUrl: 'https://instagram.com/vinzbarbershop_bcn_afrobarber',
  whatsappPrimary: '34611336094',
  whatsappSecondary: '34631506846',
  whatsappDisplayPrimary: '+34 611 336 094',
  whatsappDisplaySecondary: '+34 631 506 846',
  address: {
    line1: 'Calle de la Lleialtat 6',
    line2: '08001 Barcelona',
    mapsQuery: 'Calle de la Lleialtat 6, 08001 Barcelona',
  },
  // Opening hours are language-specific (12h vs 24h format) — edit them in
  // src/data/translations.js under `hours.days` for each language instead.
}

export const whatsappLink = (message) => {
  const base = `https://wa.me/${business.whatsappPrimary}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const whatsappLinkSecondary = (message) => {
  const base = `https://wa.me/${business.whatsappSecondary}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
