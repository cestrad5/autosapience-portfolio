import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/site-config';

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-white/5"
      style={{ background: 'rgba(7,12,23,0.88)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 flex justify-between items-center">
        <Link href="/" aria-label="AutoSapience inicio" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
          <Image
            src="/logo-icon.png"
            alt="AutoSapience Icon"
            width={32}
            height={32}
            priority
            style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
          />
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            <span className="text-text-100">Auto</span>
            <span className="text-amber-400">Sapience</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Navegación principal">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden sm:block px-3 py-2 text-sm text-text-400 hover:text-text-100 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="ml-2 btn-primary" style={{ padding: '11px 18px', fontSize: '0.85rem' }}>
            Agendar Diagnóstico
          </a>
        </nav>
      </div>
    </header>
  );
}
