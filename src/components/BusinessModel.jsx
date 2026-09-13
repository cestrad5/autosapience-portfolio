const steps = [
  {
    num: '01',
    title: 'Configuración & Onboarding',
    body: 'Pago único. Mapeamos su proceso y desplegamos la automatización a su medida.',
  },
  {
    num: '02',
    title: 'Suscripción Recurrente',
    body: 'Cuota mensual o anual predecible. Cubre el mantenimiento, el alojamiento del sistema y las optimizaciones continuas.',
  },
  {
    num: '03',
    title: 'Crecimiento Modular',
    body: 'Agregue flujos, módulos o funcionalidades extra bajo demanda a medida que su empresa crece.',
  },
];

export default function BusinessModel() {
  return (
    <section id="modelo" className="py-24 sm:py-32 space-y-12">
      <div className="space-y-3 max-w-xl">
        <div className="section-divider" aria-hidden="true" />
        <p className="text-xs uppercase tracking-widest text-[#94a3b8]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          Nuestro modelo
        </p>
        <h2
          className="text-3xl sm:text-4xl"
          style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, letterSpacing: '-0.02em', color: '#f1f5f9' }}
        >
          Una estructura diseñada para el Retorno de Inversión (ROI).
        </h2>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        {steps.map((st, i) => (
          <div key={st.num} className="relative">
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
              <h3 className="text-base" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, color: '#f1f5f9' }}>
                {st.title}
              </h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">{st.body}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-[#64748b] max-w-xl">
        Sin cifras genéricas: calculamos el retorno de inversión específico de su empresa durante el diagnóstico gratuito.
      </p>
    </section>
  );
}
