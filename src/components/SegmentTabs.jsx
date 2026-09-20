'use client';

import { useRef, useState } from 'react';
import { Factory, Calculator, ClipboardList } from 'lucide-react';

const segments = [
  {
    id: 'manufactura',
    icon: Factory,
    label: 'Pymes Manufactureras',
    body: 'Conectamos su inventario, producción y ventas para que el gerente tenga el control total sin pisar la planta.',
  },
  {
    id: 'contable',
    icon: Calculator,
    label: 'Firmas Contables y Financieras',
    body: 'Automatizamos la extracción, validación y consolidación de datos para multiplicar su capacidad de atención de clientes sin inflar la nómina.',
  },
  {
    id: 'proyectos',
    icon: ClipboardList,
    label: 'Empresas de Proyectos',
    body: 'Seguimiento automatizado para empresas con múltiples centros de costos.',
  },
];

export default function SegmentTabs() {
  const [activeId, setActiveId] = useState(segments[0].id);
  const tabRefs = useRef([]);

  const activeIndex = segments.findIndex((s) => s.id === activeId);

  const focusTab = (index) => {
    const wrapped = (index + segments.length) % segments.length;
    setActiveId(segments[wrapped].id);
    tabRefs.current[wrapped]?.focus();
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      focusTab(activeIndex + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      focusTab(activeIndex - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      focusTab(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      focusTab(segments.length - 1);
    }
  };

  const active = segments[activeIndex];

  return (
    <section id="segmentos" className="py-24 sm:py-32 space-y-12">
      <div className="space-y-3">
        <div className="section-divider" aria-hidden="true" />
        <p className="text-xs uppercase tracking-widest text-text-400" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
          Para quién trabajamos
        </p>
        <h2
          className="text-3xl sm:text-4xl"
          style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, letterSpacing: '-0.02em', color: '#f1f5f9' }}
        >
          Elija su tipo de empresa
        </h2>
      </div>

      <div>
        <div
          role="tablist"
          aria-label="Segmentos de cliente"
          onKeyDown={onKeyDown}
          className="flex flex-wrap gap-2"
        >
          {segments.map((s, i) => (
            <button
              key={s.id}
              ref={(el) => { tabRefs.current[i] = el; }}
              role="tab"
              id={`tab-${s.id}`}
              aria-selected={s.id === activeId}
              aria-controls={`panel-${s.id}`}
              tabIndex={s.id === activeId ? 0 : -1}
              onClick={() => setActiveId(s.id)}
              className={`flex-1 sm:flex-none w-full sm:w-auto flex items-center justify-center sm:justify-start gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                s.id === activeId
                  ? 'bg-amber-400 text-navy-950'
                  : 'glass-card text-text-400 hover:text-text-100'
              }`}
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              <s.icon size={16} />
              {s.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          tabIndex={0}
          className="glass-card rounded-xl p-7 sm:p-10 mt-4"
        >
          <p className="text-lg sm:text-xl leading-relaxed text-text-200">{active.body}</p>
        </div>
      </div>
    </section>
  );
}
