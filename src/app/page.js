import { getRecentRepos } from '@/lib/github';
import {
  Terminal,
  Settings,
  Database,
  ExternalLink,
  Mail,
  Code2,
  Cpu,
  ArrowRight,
  MapPin,
  Layers,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const metadata = {
  title: 'Camilo Estrada | Ingeniero de Producto & Automatización B2B',
  description:
    'AutoSapience — Soluciones de software e inteligencia operativa para Pymes latinoamericanas. Casos de estudio, proyectos y automatización B2B.',
};

export default async function Home() {
  const repos = await getRecentRepos();

  return (
    <div className="min-h-screen bg-[#0a0a12] text-[#e8e0d0] relative overflow-hidden bg-noise">

      {/* ── AMBIENT BACKGROUND ORBS ── */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="orb orb-amber"
          style={{ width: '600px', height: '600px', top: '-200px', right: '-200px' }}
        />
        <div
          className="orb orb-violet"
          style={{ width: '500px', height: '500px', bottom: '10%', left: '-150px' }}
        />
        <div
          className="orb orb-amber"
          style={{ width: '300px', height: '300px', top: '50%', left: '50%', opacity: 0.5 }}
        />
      </div>

      {/* ══════════════════════════════════════════
          HEADER / NAV
      ══════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 border-b border-white/5"
        style={{ background: 'rgba(10, 10, 18, 0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex justify-between items-center">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group" aria-label="AutoSapience inicio">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', boxShadow: '0 0 16px rgba(245,158,11,0.3)' }}>
              <Cpu size={16} color="#0a0a12" strokeWidth={2.5} />
            </div>
            <span
              style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em', color: '#f5f0e8' }}
            >
              Auto<span style={{ color: '#f59e0b' }}>Sapience</span>
            </span>
          </a>

          {/* Nav Icons */}
          <nav className="flex items-center gap-1" aria-label="Redes sociales y contacto">
            <a
              href="https://github.com/cestrad5"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="p-2.5 rounded-lg text-[#9a8c72] hover:text-[#f5f0e8] hover:bg-white/5 transition-all duration-200"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/camiloestradadeveloper"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="p-2.5 rounded-lg text-[#9a8c72] hover:text-[#f5f0e8] hover:bg-white/5 transition-all duration-200"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:cestrad5@gmail.com"
              title="Enviar email"
              className="p-2.5 rounded-lg text-[#9a8c72] hover:text-[#f5f0e8] hover:bg-white/5 transition-all duration-200"
            >
              <Mail size={18} />
            </a>
            <a
              href="mailto:cestrad5@gmail.com"
              className="ml-2 hidden sm:inline-flex items-center gap-2 btn-primary"
              style={{ padding: '8px 18px', fontSize: '0.85rem' }}
            >
              Conversemos
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">

        {/* ══════════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════════ */}
        <section className="py-24 sm:py-36 space-y-8">

          {/* Location & status badge */}
          <div className="flex flex-wrap items-center gap-3 animate-fade-up">
            <span className="badge-available">
              <span className="badge-dot" aria-hidden="true" />
              Disponible para nuevos proyectos
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#9a8c72]">
              <MapPin size={12} />
              Colombia, Latinoamérica
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4 animate-fade-up delay-100">
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05]"
              style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif', fontWeight: 700, letterSpacing: '-0.03em', color: '#f5f0e8' }}
            >
              Ingeniería de Producto<br />
              <span className="text-gradient-amber">&amp; Automatización</span><br />
              <span style={{ color: '#c4b89a', fontWeight: 300 }}>para Pymes.</span>
            </h1>
          </div>

          {/* Sub-headline */}
          <p
            className="text-lg sm:text-xl max-w-2xl leading-relaxed text-[#9a8c72] animate-fade-up delay-200"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}
          >
            Construyo motores de automatización inteligente y soluciones de software a medida para empresas tradicionales, conectando la brecha entre operaciones y tecnología.
          </p>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2 animate-fade-up delay-300" aria-label="Tecnologías principales">
            {['React / Next.js', 'Node.js', 'TypeScript', 'AppSheet', 'Google Apps Script', 'PostgreSQL'].map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 animate-fade-up delay-400">
            <a href="#casos" className="btn-primary">
              Ver Casos de Estudio
              <ArrowRight size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/camiloestradadeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FaLinkedin size={16} />
              Conectar en LinkedIn
            </a>
          </div>

          {/* Metrics row */}
          <div
            className="grid grid-cols-3 gap-4 pt-8 mt-4 border-t border-white/5 animate-fade-up delay-500"
          >
            {[
              { value: '5+', label: 'Años de experiencia' },
              { value: '15h', label: 'Ahorradas por automatización' },
              { value: '100%', label: 'Precisión en entregas' },
            ].map((m) => (
              <div key={m.label} className="space-y-1">
                <p
                  className="text-2xl sm:text-3xl"
                  style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: '#f59e0b' }}
                >
                  {m.value}
                </p>
                <p className="text-xs text-[#9a8c72]">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CASOS DE ESTUDIO
        ══════════════════════════════════════════ */}
        <section id="casos" className="py-20 space-y-12">

          {/* Section header */}
          <div className="space-y-3">
            <div className="section-divider" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <Database size={20} style={{ color: '#f59e0b' }} aria-hidden="true" />
              <span className="text-xs uppercase tracking-widest text-[#9a8c72]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Trabajo real, impacto real
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl"
              style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, letterSpacing: '-0.02em', color: '#f5f0e8' }}
            >
              Casos de Estudio
            </h2>
            <p className="text-[#9a8c72] max-w-xl text-base leading-relaxed">
              Soluciones de software construidas para resolver problemas operativos reales en empresas latinoamericanas.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid sm:grid-cols-2 gap-5">

            {/* ── Caso 1: Bonetto B2B ── */}
            <article className="glass-card rounded-xl p-7 sm:p-8 flex flex-col gap-5">
              <div>
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)' }}
                  aria-hidden="true"
                >
                  <Settings size={20} style={{ color: '#f59e0b' }} />
                </div>
                <p className="text-xs uppercase tracking-widest text-[#9a8c72] mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  E-commerce B2B · WordPress
                </p>
                <h3
                  className="text-xl sm:text-2xl mb-3"
                  style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: '#f5f0e8', letterSpacing: '-0.02em' }}
                >
                  Plataforma B2B para Clientes Mayoristas
                </h3>
                <p className="text-[#9a8c72] text-sm leading-relaxed line-clamp-4">
                  Transformación de un modelo de pedidos manual por WhatsApp a una plataforma de autogestión comercial autónoma 24/7. Reducción del 100% de errores de pedido y liberación de más de 15 horas semanales del equipo comercial.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {['WooCommerce', 'PHP', 'RBAC', 'WordPress'].map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>

              <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-3 text-xs text-[#9a8c72]">
                  <span>📈 +20% ventas fuera de horario</span>
                </div>
                <a
                  href="https://github.com/cestrad5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-[#f59e0b] hover:text-[#fbbf24] transition-colors"
                  style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600 }}
                >
                  Ver en GitHub <ExternalLink size={14} />
                </a>
              </div>
            </article>

            {/* ── Caso 2: Livestock SaaS ── */}
            <article className="glass-card rounded-xl p-7 sm:p-8 flex flex-col gap-5">
              <div>
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: 'rgba(167, 139, 250, 0.1)', border: '1px solid rgba(167, 139, 250, 0.2)' }}
                  aria-hidden="true"
                >
                  <Terminal size={20} style={{ color: '#a78bfa' }} />
                </div>
                <p className="text-xs uppercase tracking-widest text-[#9a8c72] mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  SaaS Ganadero · AppSheet
                </p>
                <h3
                  className="text-xl sm:text-2xl mb-3"
                  style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: '#f5f0e8', letterSpacing: '-0.02em' }}
                >
                  SaaS para Gestión Ganadera Multifinca
                </h3>
                <p className="text-[#9a8c72] text-sm leading-relaxed line-clamp-4">
                  Plataforma móvil corporativa con segregación estricta de datos entre fincas (multi-tenant), trazabilidad de animales, control de pesajes, sanidad y reportes automáticos. Reducción del 70% en trabajo manual de campo.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {['AppSheet', 'Apps Script', 'RBAC', 'Google Sheets'].map((t) => (
                  <span key={t} className="tech-pill tech-pill-violet">{t}</span>
                ))}
              </div>

              <div className="mt-auto pt-5 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-3 text-xs text-[#9a8c72]">
                  <span>🔒 100% datos seguros</span>
                </div>
                <a
                  href="https://github.com/cestrad5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-[#a78bfa] hover:text-[#c4b5fd] transition-colors"
                  style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600 }}
                >
                  Ver en GitHub <ExternalLink size={14} />
                </a>
              </div>
            </article>

            {/* ── Caso 3: Cotizador Logístico (full width) ── */}
            <article className="glass-card rounded-xl p-7 sm:p-8 sm:col-span-2 flex flex-col sm:flex-row gap-8">
              <div className="flex-1 space-y-4">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)' }}
                  aria-hidden="true"
                >
                  <Layers size={20} style={{ color: '#f59e0b' }} />
                </div>
                <p className="text-xs uppercase tracking-widest text-[#9a8c72]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  App Web · TypeScript + React
                </p>
                <h3
                  className="text-xl sm:text-2xl"
                  style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: '#f5f0e8', letterSpacing: '-0.02em' }}
                >
                  Cotizador Logístico Interactivo
                </h3>
                <p className="text-[#9a8c72] text-sm leading-relaxed">
                  Herramienta web de alta velocidad que calcula tarifas y presupuestos de transporte en menos de 5 segundos. Sustituyó un proceso manual de 15 minutos por consulta e incrementó el cierre de ventas en un 25%.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'React', 'Vite', 'CSS Grid'].map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>
              <div className="sm:w-56 flex flex-col gap-4 sm:border-l sm:border-white/5 sm:pl-8">
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-[#f59e0b]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>15min → 5s</p>
                  <p className="text-xs text-[#9a8c72]">Tiempo de cotización</p>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-[#a78bfa]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>+25%</p>
                  <p className="text-xs text-[#9a8c72]">Conversión de ventas</p>
                </div>
                <a
                  href="https://github.com/cestrad5/cotizador_logistico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center gap-1.5 text-sm font-medium text-[#f59e0b] hover:text-[#fbbf24] transition-colors"
                  style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600 }}
                >
                  Ver el proyecto <ExternalLink size={14} />
                </a>
              </div>
            </article>

          </div>
        </section>

        {/* ══════════════════════════════════════════
            LABORATORIO DE CÓDIGO (GitHub dinámico)
        ══════════════════════════════════════════ */}
        <section className="py-20 space-y-12">

          {/* Section header */}
          <div className="space-y-3">
            <div className="section-divider" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <Code2 size={20} style={{ color: '#f59e0b' }} aria-hidden="true" />
              <span className="text-xs uppercase tracking-widest text-[#9a8c72]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Actualizado automáticamente · GitHub API
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl"
              style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, letterSpacing: '-0.02em', color: '#f5f0e8' }}
            >
              Laboratorio de Código
            </h2>
            <p className="text-[#9a8c72] max-w-xl text-base leading-relaxed">
              Experimentos, herramientas y repositorios extraídos en tiempo real desde mi GitHub. Se actualizan automáticamente con cada push.
            </p>
          </div>

          {/* Repo grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.length > 0 ? (
              repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-card"
                  aria-label={`Ver repositorio ${repo.name} en GitHub`}
                >
                  {/* Card top */}
                  <div className="flex justify-between items-start mb-5">
                    <FaGithub className="text-[#9a8c72]" size={20} aria-hidden="true" />
                    <ExternalLink size={14} className="text-[#3d3d6b]" aria-hidden="true" />
                  </div>

                  {/* Repo name */}
                  <h3
                    className="text-base mb-2 truncate"
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, color: '#f5f0e8', letterSpacing: '-0.01em' }}
                    title={repo.name}
                  >
                    {repo.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#9a8c72] mb-5 flex-grow line-clamp-2 leading-relaxed">
                    {repo.description || (
                      <span className="italic text-[#3d3d6b]">Sin descripción — agrega una en el campo &quot;About&quot; del repo.</span>
                    )}
                  </p>

                  {/* Footer */}
                  <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                    <span className="tech-pill">
                      {repo.language || 'Code'}
                    </span>
                    <span className="text-xs text-[#3d3d6b]">
                      {new Date(repo.updated_at).toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: '2-digit' })}
                    </span>
                  </div>
                </a>
              ))
            ) : (
              <div className="col-span-full py-16 flex flex-col items-center gap-4 border border-dashed border-white/10 rounded-xl text-center">
                <FaGithub size={32} className="text-[#2a2a4a]" />
                <p className="text-[#9a8c72]">No se pudieron cargar los repositorios en este momento.</p>
                <a
                  href="https://github.com/cestrad5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#f59e0b] hover:underline"
                >
                  Ver en GitHub directamente →
                </a>
              </div>
            )}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CONTACTO CTA
        ══════════════════════════════════════════ */}
        <section className="py-20">
          <div
            className="rounded-2xl p-10 sm:p-14 text-center space-y-6 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(167,139,250,0.06) 100%)', border: '1px solid rgba(245,158,11,0.15)' }}
          >
            {/* Glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.12) 0%, transparent 60%)' }}
              aria-hidden="true"
            />

            <div className="relative z-10 space-y-6">
              <p className="text-xs uppercase tracking-widest text-[#f59e0b]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                ¿Tienes un proyecto en mente?
              </p>
              <h2
                className="text-3xl sm:text-4xl"
                style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, letterSpacing: '-0.02em', color: '#f5f0e8' }}
              >
                Hablemos de tu negocio
              </h2>
              <p className="text-[#9a8c72] max-w-md mx-auto">
                Cuéntame el problema operativo que quieres resolver. La primera consulta es gratuita.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                <a href="mailto:cestrad5@gmail.com" className="btn-primary">
                  <Mail size={16} />
                  Enviar un email
                </a>
                <a
                  href="https://www.linkedin.com/in/camiloestradadeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <FaLinkedin size={16} />
                  Mensaje en LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className="border-t border-white/5 py-10 mt-4 relative z-10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Left: brand */}
            <div className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 rounded-md flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}
                aria-hidden="true"
              >
                <Cpu size={13} color="#0a0a12" strokeWidth={2.5} />
              </div>
              <span
                style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: '0.9rem', color: '#9a8c72' }}
              >
                AutoSapience
              </span>
            </div>

            {/* Center: copyright */}
            <p className="text-xs text-[#3d3d6b]" style={{ fontFamily: 'var(--font-inter)' }}>
              © {new Date().getFullYear()} Camilo Estrada. Construido con Next.js & desplegado en CamiCloud.
            </p>

            {/* Right: icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/cestrad5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Camilo Estrada"
                className="text-[#3d3d6b] hover:text-[#9a8c72] transition-colors"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/camiloestradadeveloper"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Camilo Estrada"
                className="text-[#3d3d6b] hover:text-[#9a8c72] transition-colors"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="mailto:cestrad5@gmail.com"
                aria-label="Correo de Camilo Estrada"
                className="text-[#3d3d6b] hover:text-[#9a8c72] transition-colors"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
