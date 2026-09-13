import { AlertTriangle } from 'lucide-react';

const pains = [
  {
    title: 'Desconexión Planta–Ventas',
    body: 'La información no fluye en tiempo real entre la operación y el área comercial, generando promesas incumplidas al cliente.',
  },
  {
    title: 'Lentitud y Reportes Tardíos',
    body: 'Toma de decisiones basada en datos del pasado por demoras en la consolidación de la información.',
  },
  {
    title: 'El Cuello de Botella del "Copia y Pega"',
    body: 'Errores humanos y procesos ineficientes al transcribir facturas y documentos manualmente.',
  },
];

export default function PainPoints() {
  return (
    <section id="problema" className="py-24 sm:py-32 space-y-12">
      <div className="space-y-3">
        <div className="section-divider" aria-hidden="true" />
        <p className="text-xs uppercase tracking-widest text-[#94a3b8]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          Lo que sufre su empresa hoy
        </p>
        <h2
          className="text-3xl sm:text-4xl max-w-xl"
          style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, letterSpacing: '-0.02em', color: '#f1f5f9' }}
        >
          ¿Su equipo pierde horas valiosas cruzando información manualmente?
        </h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        {pains.map((p) => (
          <div key={p.title} className="glass-card rounded-xl p-6 space-y-4">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}
              aria-hidden="true"
            >
              <AlertTriangle size={18} style={{ color: '#f59e0b' }} />
            </div>
            <h3 className="text-base" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, color: '#f1f5f9' }}>
              {p.title}
            </h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
