import { KeyRound, CircleSlash2, Workflow } from 'lucide-react';

const advantages = [
  { icon: KeyRound, title: 'Llave en mano', body: 'Diseño e implementación directa. No aprende a usar una plataforma nueva.' },
  { icon: CircleSlash2, title: 'Cero código para usted', body: 'Su equipo sigue trabajando como siempre; la automatización opera detrás de escena.' },
  { icon: Workflow, title: 'Integración invisible', body: 'Conectamos sus herramientas actuales sin interrumpir la operación diaria.' },
];

export default function Advantage() {
  return (
    <section id="solucion" className="py-24 sm:py-32 space-y-14">
      <div className="max-w-2xl space-y-4">
        <div className="section-divider" aria-hidden="true" />
        <p className="text-xs uppercase tracking-widest text-text-400" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          Nuestra ventaja
        </p>
        <h2
          className="text-3xl sm:text-4xl"
          style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, letterSpacing: '-0.02em', color: '#f1f5f9' }}
        >
          No le vendemos un software; le entregamos sus procesos automatizados.
        </h2>
        <p className="text-text-400 text-base leading-relaxed">
          A diferencia de las plataformas tradicionales que obligan a su equipo a aprender a usarlas, nosotros nos encargamos de todo. Desde el diseño hasta la implementación directa, su empresa queda funcionando desde el día uno.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-8 sm:gap-10">
        {advantages.map((a) => (
          <div key={a.title} className="space-y-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}
              aria-hidden="true"
            >
              <a.icon size={22} style={{ color: '#f59e0b' }} />
            </div>
            <h3 className="text-lg" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, color: '#f1f5f9' }}>
              {a.title}
            </h3>
            <p className="text-sm text-text-400 leading-relaxed">{a.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
