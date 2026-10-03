// Paste the real Calendly event link here, e.g. 'https://calendly.com/n8x/30min'.
// While this is empty, the booking buttons scroll to the contact form instead of opening Calendly.
export const CALENDLY_URL = ''

export const bookingLink = CALENDLY_URL
  ? { href: CALENDLY_URL, target: '_blank', rel: 'noopener noreferrer' }
  : { href: '#contact' }
