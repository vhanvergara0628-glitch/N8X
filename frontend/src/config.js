// Paste the real Calendly event link here, e.g. 'https://calendly.com/n8x/30min'.
// While this is empty, the booking buttons scroll to the contact form instead of opening Calendly.
export const CALENDLY_URL = ''

// Where the backend lives. Empty in local dev, where the Vite proxy forwards /api to port 3000.
// For the deployed site, set VITE_API_URL to the hosted backend, e.g. 'https://n8x-api.onrender.com'.
export const API_URL = import.meta.env.VITE_API_URL || ''

export const bookingLink = CALENDLY_URL
  ? { href: CALENDLY_URL, target: '_blank', rel: 'noopener noreferrer' }
  : { href: '#contact' }
