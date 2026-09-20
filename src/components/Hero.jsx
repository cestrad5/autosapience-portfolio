import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react';

const metrics = [
  { value: '8+', label: 'Años en operación real' },
  { value: '0', label: 'Personal de TI requerido' },
  { value: 'Día 1', label: 'Su empresa funcionando' },
];

export default function Hero() {
  return (
    <section id="inicio" className="py-24 sm:py-32 space-y-8">
      <div className="animate-fade-up">
        <span className="badge-available">
          <span className="badge-dot" aria-hidden="true" />
          Diagnóstico operativo 100% gratuito
        </span>
      </div>

      <div className="space-y-3 animate-fade-up delay-100">
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl leading-[1.04]"
          style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, letterSpacing: '-0.03em', color: '#f1f5f9' }}
        >
          Conecte planta y ventas<br />
          <span className="text-gradient-amber">sin digitar un solo dato.</span>
        </h1>
      </div>

      <p
        className="text-lg sm:text-xl max-w-2xl leading-relaxed text-text-400 animate-fade-up delay-200"
        style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
      >
        Para Pymes manufactureras y firmas contables en Colombia: eliminamos la transcripción manual entre operación y ventas. Información precisa y en tiempo real, operada por Inteligencia Artificial y sin requerir un departamento de TI interno.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 pt-2 animate-fade-up delay-300">
        <a href="#contacto" className="btn-primary">
          Agendar Diagnóstico Operativo Gratuito
          <ArrowRight size={16} />
        </a>
        <a href="#solucion" className="btn-secondary">
          Ver cómo funciona
          <ChevronRight size={16} />
        </a>
      </div>

      <div className="flex items-center gap-2.5 pt-2 text-sm text-text-500 animate-fade-up delay-400">
        <ShieldCheck size={16} className="text-amber-400 flex-shrink-0" aria-hidden="true" />
        <span>Con el respaldo de la Ruta de Emprendimiento Beca SER ANDI / Créame Incubadora</span>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-8 mt-4 border-t border-white/5 animate-fade-up delay-500">
        {metrics.map((m) => (
          <div key={m.label} className="space-y-1">
            <p className="text-2xl sm:text-3xl" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, color: '#f59e0b' }}>
              {m.value}
            </p>
            <p className="text-xs text-text-400">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
