export const WHATSAPP_NUMBER = '573127270035';

export function whatsappLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const NAV_LINKS = [
  { label: 'Soluciones', href: '#solucion' },
  { label: 'Para quién', href: '#segmentos' },
  { label: 'Modelo', href: '#modelo' },
];
