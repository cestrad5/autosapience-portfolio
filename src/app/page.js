import Image from 'next/image';
import { getRecentRepos } from '@/lib/github';
import {
  ExternalLink,
  Mail,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Zap,
  BarChart3,
  ShoppingCart,
  Factory,
  Sparkles,
  ChevronRight,
  Phone,
} from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export const metadata = {
  title: 'AutoSapience — El cerebro digital de tu fábrica',
  description:
    'Automatización con IA para empresas de manufactura y producción. Software modular y SaaS accesible para MiPyMEs colombianas.',
};

/* ─── Pain points data ─── */
const pains = [
  {
    icon: AlertTriangle,
    title: 'Visibilidad cero',
    body: 'Datos críticos dispersos en WhatsApp, cuadernos y hojas de Excel desconectadas. Nadie sabe en tiempo real qué hay en inventario, qué cuesta fabricar ni cuánto se vendió hoy.',
  },
  {
    icon: BarChart3,
    title: 'Costos ocultos',
    body: 'No saben exactamente cuánto cuesta fabricar cada producto cuando se incluyen los CIF, la mano de obra real y las mermas de material. El margen se "come" sin que nadie lo vea.',
  },
  {
    icon: AlertTriangle,
    title: 'Ventas sin control',
    body: 'El asesor promete en la calle lo que la planta no puede cumplir. Los pedidos viajan por WhatsApp y se pierden, se duplican o se olvidan antes de llegar a producción.',
  },
];

/* ─── Suites data ─── */
const suites = [
  {
    icon: Factory,
    color: '#f59e0b',
    colorBg: 'rgba(245,158,11,0.1)',
    colorBorder: 'rgba(245,158,11,0.2)',
    tag: 'Suite Operaciones',
    title: 'El núcleo de tu planta',
    description:
      'Digitaliza el corazón manufacturero de tu empresa. Controla costos, produce sin errores y despacha con trazabilidad completa.',
    modules: [
      'Costeo Inteligente — CIF, mano de obra y materias primas',
      'Gestión de Órdenes de Producción',
      'Control de Despachos y Remisiones',
    ],
  },
  {
    icon: ShoppingCart,
    color: '#a78bfa',
    colorBg: 'rgba(167,139,250,0.1)',
    colorBorder: 'rgba(167,139,250,0.2)',
    tag: 'Suite Fuerza Comercial',
    title: 'Vende más, con más orden',
    description:
      'Equipa a tu equipo de ventas con herramientas que convierten cada visita en un pedido limpio, rastreable y sin errores.',
    modules: [
      'App de Pedidos en Campo B2B — PDF automático a producción',
      'E-commerce autogestionable por el cliente',
      'Registro y gestión de facturas y remisiones',
    ],
  },
  {
    icon: Sparkles,
    color: '#34d399',
    colorBg: 'rgba(52,211,153,0.1)',
    colorBorder: 'rgba(52,211,153,0.2)',
    tag: 'Suite Crecimiento Digital',
    title: 'IA que trabaja por ti',
    description:
      'Automatización inteligente para que tu empresa crezca sin aumentar la carga de trabajo. Del producto físico al contenido digital en minutos.',
    modules: [
      'Generador de contenido con IA — fotos → posts listos',
      'Copilot de LinkedIn — posicionamiento automatizado',
      'Control financiero — ingresos y egresos empresariales',
    ],
  },
];

/* ─── How it works ─── */
const steps = [
  {
    num: '01',
    title: 'Diagnóstico gratuito',
    body: 'Analizamos tus procesos operativos actuales e identificamos los 3 puntos de mayor fricción en tu operación.',
  },
  {
    num: '02',
    title: 'Implementación ágil',
    body: 'Instalamos los módulos específicos para tu empresa en semanas — no meses. Sin grandes inversiones de arranque.',
  },
  {
    num: '03',
    title: 'Escala con IA',
    body: 'Conectamos inteligencia artificial a los datos de tu operación para que el sistema mejore con cada semana que pasa.',
  },
];

/* ─── Cases ─── */
const cases = [
  {
    tag: 'E-commerce B2B · WordPress',
    title: 'Portal Mayorista Bonetto',
    metric: '+20%',
    metricLabel: 'ventas fuera de horario',
    result: '0 errores de pedido, 15h/sem liberadas del equipo comercial gracias a autogestión 24/7.',
    techs: ['WooCommerce', 'PHP', 'RBAC'],
    color: '#f59e0b',
  },
  {
    tag: 'SaaS Ganadero · AppSheet',
    title: 'Gestión Ganadera Multifinca',
    metric: '70%',
    metricLabel: 'menos trabajo manual',
    result: '100% de datos seguros entre fincas. Alertas veterinarias automáticas.',
    techs: ['AppSheet', 'Apps Script', 'RBAC'],
    color: '#a78bfa',
  },
  {
    tag: 'App Web · TypeScript + React',
    title: 'Cotizador Logístico',
    metric: '15min → 5s',
    metricLabel: 'por cotización',
    result: '+25% conversión de ventas. Precios consistentes sin errores humanos.',
    techs: ['TypeScript', 'React', 'Vite'],
    color: '#34d399',
  },
];

export default async function Home() {
  const repos = await getRecentRepos();

  return (
    <div className="min-h-screen bg-[#0a0a12] text-[#e8e0d0] relative overflow-hidden bg-noise">

      {/* ── AMBIENT ORBS ── */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="orb orb-amber" style={{ width: '700px', height: '700px', top: '-250px', right: '-200px' }} />
        <div className="orb orb-violet" style={{ width: '500px', height: '500px', bottom: '15%', left: '-150px' }} />
        <div className="orb orb-amber" style={{ width: '350px', height: '350px', top: '55%', left: '45%', opacity: 0.4 }} />
      </div>

      {/* ══════════════════════════════════════════
          HEADER
      ══════════════════════════════════════════ */}
      <header
        className="sticky top-0 z-50 border-b border-white/5"
        style={{ background: 'rgba(10,10,18,0.88)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 flex justify-between items-center">
          {/* Logo */}
          <a href="/" aria-label="AutoSapience inicio">
            <Image
              src="/logo.png"
              alt="AutoSapience logo"
              width={180}
              height={44}
              priority
              style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
            />
          </a>

          {/* Nav */}
          <nav className="flex items-center gap-1 sm:gap-2" aria-label="Navegación principal">
            <a href="#soluciones" className="hidden sm:block px-3 py-2 text-sm text-[#9a8c72] hover:text-[#f5f0e8] transition-colors">
              Soluciones
            </a>
            <a href="#casos" className="hidden sm:block px-3 py-2 text-sm text-[#9a8c72] hover:text-[#f5f0e8] transition-colors">
              Casos
            </a>
            <a href="#sobre" className="hidden sm:block px-3 py-2 text-sm text-[#9a8c72] hover:text-[#f5f0e8] transition-colors">
              Sobre nosotros
            </a>
            <a
              href="#piloto"
              className="ml-2 btn-primary"
              style={{ padding: '8px 18px', fontSize: '0.85rem' }}
            >
              Solicitar piloto
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">

        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section className="py-24 sm:py-36 space-y-8">
          {/* Badge */}
          <div className="animate-fade-up">
            <span className="badge-available">
              <span className="badge-dot" aria-hidden="true" />
              Aceptando 5 empresas piloto — cupos limitados
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-3 animate-fade-up delay-100">
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl leading-[1.04]"
              style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, letterSpacing: '-0.03em', color: '#f5f0e8' }}
            >
              El cerebro digital<br />
              <span className="text-gradient-amber">de tu fábrica.</span>
            </h1>
          </div>

          {/* Sub */}
          <p
            className="text-lg sm:text-xl max-w-2xl leading-relaxed text-[#9a8c72] animate-fade-up delay-200"
            style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
          >
            Automatización con IA para empresas de manufactura y producción que quieren operar con precisión —
            sin contratar un departamento de IT ni pagar un ERP de millones.
          </p>

          {/* ICP chips */}
          <div className="flex flex-wrap gap-2 animate-fade-up delay-300" aria-label="Sectores que atendemos">
            {['🏭 Manufactura', '🪵 Carpintería y MDF', '🐄 Agro y Ganadería', '📦 Logística', '🛒 Comercio B2B'].map((s) => (
              <span key={s} className="tech-pill">{s}</span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2 animate-fade-up delay-400">
            <a href="#piloto" className="btn-primary">
              Quiero ser empresa piloto
              <ArrowRight size={16} />
            </a>
            <a href="#soluciones" className="btn-secondary">
              Ver soluciones
              <ChevronRight size={16} />
            </a>
          </div>

          {/* Trust metrics */}
          <div className="grid grid-cols-3 gap-4 pt-8 mt-4 border-t border-white/5 animate-fade-up delay-500">
            {[
              { value: '8+', label: 'Años en manufactura real' },
              { value: '3', label: 'Productos listos hoy' },
              { value: '0', label: 'Meses de espera para empezar' },
            ].map((m) => (
              <div key={m.label} className="space-y-1">
                <p className="text-2xl sm:text-3xl" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: '#f59e0b' }}>
                  {m.value}
                </p>
                <p className="text-xs text-[#9a8c72]">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            EL PROBLEMA
        ══════════════════════════════════════════ */}
        <section className="py-20 space-y-12">
          <div className="space-y-3">
            <div className="section-divider" aria-hidden="true" />
            <p className="text-xs uppercase tracking-widest text-[#9a8c72]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Lo que sufre tu empresa hoy
            </p>
            <h2
              className="text-3xl sm:text-4xl max-w-xl"
              style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, letterSpacing: '-0.02em', color: '#f5f0e8' }}
            >
              La fricción operativa te está costando dinero
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {pains.map((p) => (
              <div
                key={p.title}
                className="glass-card rounded-xl p-6 space-y-4"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}
                  aria-hidden="true"
                >
                  <p.icon size={18} style={{ color: '#f59e0b' }} />
                </div>
                <h3
                  className="text-base"
                  style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, color: '#f5f0e8' }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-[#9a8c72] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>

          {/* Transition line */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex-1 h-px bg-white/5" />
            <span className="text-sm text-[#f59e0b] font-medium" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              AutoSapience lo resuelve
            </span>
            <div className="flex-1 h-px bg-white/5" />
          </div>
        </section>

        {/* ══════════════════════════════════════════
            3 SUITES
        ══════════════════════════════════════════ */}
        <section id="soluciones" className="py-20 space-y-12">
          <div className="space-y-3">
            <div className="section-divider" aria-hidden="true" />
            <p className="text-xs uppercase tracking-widest text-[#9a8c72]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Portafolio de soluciones
            </p>
            <h2
              className="text-3xl sm:text-4xl"
              style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, letterSpacing: '-0.02em', color: '#f5f0e8' }}
            >
              Tres suites. Un solo sistema.
            </h2>
            <p className="text-[#9a8c72] max-w-xl text-base leading-relaxed">
              Módulos independientes que puedes adoptar uno a uno, o conectar para obtener una visión
              completa de tu operación de extremo a extremo.
            </p>
          </div>

          <div className="space-y-5">
            {suites.map((s, i) => (
              <article
                key={s.tag}
                className="glass-card rounded-xl p-7 sm:p-8 flex flex-col sm:flex-row gap-7"
              >
                {/* Left */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: s.colorBg, border: `1px solid ${s.colorBorder}` }}
                      aria-hidden="true"
                    >
                      <s.icon size={20} style={{ color: s.color }} />
                    </div>
                    <span
                      className="text-xs uppercase tracking-widest"
                      style={{ fontFamily: 'var(--font-space-grotesk)', color: s.color }}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <h3
                    className="text-xl sm:text-2xl"
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: '#f5f0e8', letterSpacing: '-0.02em' }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[#9a8c72] text-sm leading-relaxed">{s.description}</p>
                </div>

                {/* Right — modules */}
                <div
                  className="sm:w-72 space-y-3 sm:border-l sm:border-white/5 sm:pl-8"
                >
                  <p className="text-xs uppercase tracking-widest text-[#9a8c72] mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    Módulos incluidos
                  </p>
                  {s.modules.map((mod) => (
                    <div key={mod} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} style={{ color: s.color, flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                      <span className="text-sm text-[#c4b89a] leading-snug">{mod}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CÓMO FUNCIONA
        ══════════════════════════════════════════ */}
        <section className="py-20 space-y-12">
          <div className="space-y-3">
            <div className="section-divider" aria-hidden="true" />
            <p className="text-xs uppercase tracking-widest text-[#9a8c72]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              El proceso
            </p>
            <h2
              className="text-3xl sm:text-4xl"
              style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, letterSpacing: '-0.02em', color: '#f5f0e8' }}
            >
              De la fricción al flujo en 3 pasos
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {steps.map((st, i) => (
              <div key={st.num} className="relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden sm:block absolute top-6 left-[calc(100%+10px)] w-10 h-px"
                    style={{ background: 'linear-gradient(90deg, rgba(245,158,11,0.4), transparent)' }}
                    aria-hidden="true"
                  />
                )}
                <div className="glass-card rounded-xl p-6 space-y-4 h-full">
                  <span
                    className="text-4xl"
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: 'rgba(245,158,11,0.15)', letterSpacing: '-0.04em' }}
                    aria-hidden="true"
                  >
                    {st.num}
                  </span>
                  <h3
                    className="text-base"
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, color: '#f5f0e8' }}
                  >
                    {st.title}
                  </h3>
                  <p className="text-sm text-[#9a8c72] leading-relaxed">{st.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CASOS DE ÉXITO
        ══════════════════════════════════════════ */}
        <section id="casos" className="py-20 space-y-12">
          <div className="space-y-3">
            <div className="section-divider" aria-hidden="true" />
            <p className="text-xs uppercase tracking-widest text-[#9a8c72]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Resultados reales
            </p>
            <h2
              className="text-3xl sm:text-4xl"
              style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, letterSpacing: '-0.02em', color: '#f5f0e8' }}
            >
              Casos de éxito
            </h2>
            <p className="text-[#9a8c72] max-w-xl text-base leading-relaxed">
              Soluciones implementadas en empresas reales. No son demos — son sistemas en producción hoy.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {cases.map((c) => (
              <article
                key={c.title}
                className="glass-card rounded-xl p-7 flex flex-col gap-5"
              >
                <div>
                  <p className="text-xs uppercase tracking-widest mb-3" style={{ fontFamily: 'var(--font-space-grotesk)', color: c.color }}>
                    {c.tag}
                  </p>
                  <h3
                    className="text-lg mb-4"
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: '#f5f0e8', letterSpacing: '-0.01em' }}
                  >
                    {c.title}
                  </h3>
                  <div className="mb-4">
                    <span
                      className="text-3xl"
                      style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: c.color }}
                    >
                      {c.metric}
                    </span>
                    <span className="text-xs text-[#9a8c72] ml-2">{c.metricLabel}</span>
                  </div>
                  <p className="text-sm text-[#9a8c72] leading-relaxed">{c.result}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {c.techs.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CTA PILOTO
        ══════════════════════════════════════════ */}
        <section id="piloto" className="py-20">
          <div
            className="rounded-2xl p-8 sm:p-14 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(245,158,11,0.07) 0%, rgba(167,139,250,0.05) 100%)',
              border: '1px solid rgba(245,158,11,0.15)',
            }}
          >
            {/* Glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.1) 0%, transparent 65%)' }}
              aria-hidden="true"
            />

            <div className="relative z-10 grid sm:grid-cols-2 gap-10 items-start">
              {/* Left — copy */}
              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#f59e0b] mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    Programa piloto — 5 cupos
                  </p>
                  <h2
                    className="text-3xl sm:text-4xl"
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, letterSpacing: '-0.02em', color: '#f5f0e8' }}
                  >
                    Sé parte de las primeras 5 empresas piloto
                  </h2>
                </div>
                <p className="text-[#9a8c72] leading-relaxed">
                  Buscamos empresas manufactureras o de producción que quieran ser pioneras en la
                  implementación. Las empresas piloto reciben acompañamiento directo de Camilo,
                  precio preferencial y prioridad en el desarrollo de nuevas funciones.
                </p>
                <ul className="space-y-2">
                  {[
                    'Diagnóstico operativo gratuito',
                    'Implementación acompañada en semanas',
                    'Precio piloto — sin contratos largos',
                    'Acceso anticipado a nuevos módulos',
                  ].map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-[#c4b89a]">
                      <CheckCircle2 size={15} style={{ color: '#f59e0b', flexShrink: 0 }} aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — form */}
              <div
                className="rounded-xl p-6 space-y-4"
                style={{ background: 'rgba(10,10,18,0.6)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <p
                  className="text-sm font-semibold text-[#f5f0e8] mb-2"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Cuéntanos sobre tu empresa
                </p>

                <form
                  action="mailto:cestrad5@gmail.com"
                  method="post"
                  encType="text/plain"
                  className="space-y-3"
                  aria-label="Formulario de solicitud de piloto"
                >
                  <div>
                    <label htmlFor="pilot-name" className="block text-xs text-[#9a8c72] mb-1.5">
                      Tu nombre *
                    </label>
                    <input
                      id="pilot-name"
                      name="nombre"
                      type="text"
                      required
                      placeholder="Camilo Estrada"
                      className="pilot-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="pilot-company" className="block text-xs text-[#9a8c72] mb-1.5">
                      Empresa *
                    </label>
                    <input
                      id="pilot-company"
                      name="empresa"
                      type="text"
                      required
                      placeholder="Nombre de tu empresa"
                      className="pilot-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="pilot-sector" className="block text-xs text-[#9a8c72] mb-1.5">
                      Sector / industria *
                    </label>
                    <input
                      id="pilot-sector"
                      name="sector"
                      type="text"
                      required
                      placeholder="Manufactura, logística, carpintería..."
                      className="pilot-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="pilot-whatsapp" className="block text-xs text-[#9a8c72] mb-1.5">
                      WhatsApp *
                    </label>
                    <input
                      id="pilot-whatsapp"
                      name="whatsapp"
                      type="tel"
                      required
                      placeholder="+57 300 000 0000"
                      className="pilot-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="pilot-pain" className="block text-xs text-[#9a8c72] mb-1.5">
                      ¿Cuál es tu mayor dolor operativo hoy?
                    </label>
                    <textarea
                      id="pilot-pain"
                      name="dolor_operativo"
                      rows={3}
                      placeholder="Describe brevemente el problema más grande que quieres resolver..."
                      className="pilot-input resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center mt-2"
                  >
                    <Mail size={15} />
                    Solicitar mi cupo piloto
                  </button>
                </form>

                <p className="text-xs text-center text-[#3d3d6b] pt-1">
                  Te respondemos en menos de 24 horas. Sin spam.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            SOBRE CAMILO / CREDENCIALES
        ══════════════════════════════════════════ */}
        <section id="sobre" className="py-20 space-y-12">
          <div className="space-y-3">
            <div className="section-divider" aria-hidden="true" />
            <p className="text-xs uppercase tracking-widest text-[#9a8c72]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Quiénes somos
            </p>
            <h2
              className="text-3xl sm:text-4xl"
              style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, letterSpacing: '-0.02em', color: '#f5f0e8' }}
            >
              Construido desde adentro de la fábrica
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 items-start">
            <div className="space-y-5">
              <p className="text-[#9a8c72] leading-relaxed">
                AutoSapience nace de la combinación directa entre más de{' '}
                <strong className="text-[#c4b89a]">8 años como fundador y director de Bonetto con amor</strong>,
                una empresa del sector manufacturero en Colombia, y un perfil técnico en desarrollo de software e
                inteligencia artificial.
              </p>
              <p className="text-[#9a8c72] leading-relaxed">
                Vivir desde adentro los desafíos operativos de una MiPyME física nos da una perspectiva
                única: diseñamos software pensando en el operario, el vendedor y el gerente — no solo en el código.
              </p>
              <p className="text-[#9a8c72] leading-relaxed">
                Cada herramienta del portafolio fue construida primero para resolver un problema real dentro de
                nuestra propia operación, y luego empaquetada para otras empresas.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Factory,
                  color: '#f59e0b',
                  title: '8+ años en manufactura',
                  body: 'Fundador de Bonetto con amor — empresa de manufactura en MDF. Cliente #1 de todas las herramientas.',
                },
                {
                  icon: Zap,
                  color: '#a78bfa',
                  title: 'Beca IA SER ANDI — EAFIT',
                  body: 'Seleccionado en el programa de emprendimientos de base tecnológica de EAFIT y la ANDI.',
                },
                {
                  icon: Sparkles,
                  color: '#34d399',
                  title: 'Hackatón All-in-One Content Generator',
                  body: 'Prototipo funcional de IA generativa para manufactura desarrollado en etapa de hackathon.',
                },
              ].map((cr) => (
                <div
                  key={cr.title}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${cr.color}15`, border: `1px solid ${cr.color}30` }}
                    aria-hidden="true"
                  >
                    <cr.icon size={16} style={{ color: cr.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#f5f0e8] mb-0.5" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      {cr.title}
                    </p>
                    <p className="text-xs text-[#9a8c72] leading-relaxed">{cr.body}</p>
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/cestrad5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '0.8rem' }}
                >
                  <FaGithub size={14} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/camiloestradadeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '0.8rem' }}
                >
                  <FaLinkedin size={14} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            LABORATORIO (GitHub repos — discreto)
        ══════════════════════════════════════════ */}
        {repos.length > 0 && (
          <section className="py-20 space-y-10">
            <div className="space-y-3">
              <div className="section-divider" aria-hidden="true" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#9a8c72]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    Código abierto · GitHub
                  </p>
                  <h2
                    className="text-2xl sm:text-3xl mt-1"
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, letterSpacing: '-0.02em', color: '#f5f0e8' }}
                  >
                    Laboratorio de proyectos
                  </h2>
                </div>
                <a
                  href="https://github.com/cestrad5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:flex items-center gap-1.5 text-sm text-[#9a8c72] hover:text-[#f5f0e8] transition-colors"
                >
                  Ver todos <ExternalLink size={13} />
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.slice(0, 6).map((repo) => (
                <a
                  key={repo.id}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-card"
                  aria-label={`Ver repositorio ${repo.name} en GitHub`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <FaGithub className="text-[#9a8c72]" size={18} aria-hidden="true" />
                    <ExternalLink size={13} className="text-[#3d3d6b]" aria-hidden="true" />
                  </div>
                  <h3
                    className="text-sm mb-2 truncate"
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, color: '#f5f0e8' }}
                    title={repo.name}
                  >
                    {repo.name}
                  </h3>
                  <p className="text-xs text-[#9a8c72] mb-4 flex-grow line-clamp-2 leading-relaxed">
                    {repo.description || (
                      <span className="italic text-[#2a2a4a]">Sin descripción aún.</span>
                    )}
                  </p>
                  <div className="mt-auto pt-3 border-t border-white/5 flex justify-between items-center">
                    <span className="tech-pill" style={{ fontSize: '0.65rem' }}>
                      {repo.language || 'Code'}
                    </span>
                    <span className="text-[10px] text-[#3d3d6b]">
                      {new Date(repo.updated_at).toLocaleDateString('es-CO', { day: '2-digit', month: 'short' })}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

      </main>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className="border-t border-white/5 py-12 mt-4 relative z-10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-3">
              <Image
                src="/logo.png"
                alt="AutoSapience"
                width={160}
                height={40}
                style={{ height: '30px', width: 'auto', objectFit: 'contain' }}
              />
              <p className="text-xs text-[#9a8c72] leading-relaxed max-w-[220px]">
                El cerebro digital de tu fábrica. IA y automatización para MiPyMEs colombianas.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-[#3d3d6b] mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Navegación
              </p>
              {[
                { label: 'Soluciones', href: '#soluciones' },
                { label: 'Casos de éxito', href: '#casos' },
                { label: 'Programa piloto', href: '#piloto' },
                { label: 'Sobre nosotros', href: '#sobre' },
              ].map((l) => (
                <a key={l.label} href={l.href} className="block text-sm text-[#9a8c72] hover:text-[#f5f0e8] transition-colors">
                  {l.label}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-[#3d3d6b] mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Contacto
              </p>
              <a
                href="mailto:cestrad5@gmail.com"
                className="flex items-center gap-2 text-sm text-[#9a8c72] hover:text-[#f5f0e8] transition-colors"
              >
                <Mail size={13} /> cestrad5@gmail.com
              </a>
              <a
                href="https://github.com/cestrad5"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#9a8c72] hover:text-[#f5f0e8] transition-colors"
              >
                <FaGithub size={13} /> github.com/cestrad5
              </a>
              <a
                href="https://www.linkedin.com/in/camiloestradadeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#9a8c72] hover:text-[#f5f0e8] transition-colors"
              >
                <FaLinkedin size={13} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-[#3d3d6b]">
              © {new Date().getFullYear()} AutoSapience — autosapience.com
            </p>
            <p className="text-xs text-[#3d3d6b]">
              Construido con Next.js · Desplegado en CamiCloud VPS
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
