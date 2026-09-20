import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { NAV_LINKS, whatsappLink } from '@/lib/site-config';

const footerNavLinks = [...NAV_LINKS, { label: 'Diagnóstico', href: '#contacto' }];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 mt-4 relative z-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <Image
                src="/logo-icon.png"
                alt="AutoSapience Icon"
                width={28}
                height={28}
                style={{ height: '28px', width: 'auto', objectFit: 'contain' }}
              />
              <span className="text-lg font-bold tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                <span className="text-text-100">Auto</span>
                <span className="text-amber-400">Sapience</span>
              </span>
            </Link>
            <p className="text-xs text-text-400 leading-relaxed max-w-[220px]">
              Automatización de procesos llave en mano para Pymes y firmas contables colombianas.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-text-500 mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Navegación
            </p>
            {footerNavLinks.map((l) => (
              <a key={l.label} href={l.href} className="block text-sm text-text-400 hover:text-text-100 transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <div className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-text-500 mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Contacto
            </p>
            <a href="mailto:cestrad5@gmail.com" className="flex items-center gap-2 text-sm text-text-400 hover:text-text-100 transition-colors">
              <Mail size={13} /> cestrad5@gmail.com
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-400 hover:text-text-100 transition-colors"
            >
              <FaWhatsapp size={13} /> WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/camiloestradadeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-400 hover:text-text-100 transition-colors"
            >
              <FaLinkedin size={13} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex justify-center items-center">
          <p className="text-xs text-text-500">
            © {new Date().getFullYear()} AutoSapience — autosapience.com
          </p>
        </div>
      </div>
    </footer>
  );
}
