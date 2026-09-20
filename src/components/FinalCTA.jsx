import { CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { whatsappLink } from '@/lib/site-config';

const WHATSAPP_MESSAGE = 'Hola, quiero agendar mi Diagnóstico Operativo Gratuito con AutoSapience. Mi empresa es: ';

const bullets = [
  'Auditoría rápida de sus procesos actuales',
  'Identificación de fugas de tiempo y errores',
  'Ruta clara de implementación',
  'Análisis de Retorno de Inversión (ROI)',
];

export default function FinalCTA() {
  return (
    <section id="contacto" className="py-24 sm:py-32">
      <div
        className="rounded-2xl p-8 sm:p-14 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(245,158,11,0.07) 0%, rgba(31,44,77,0.4) 100%)',
          border: '1px solid rgba(245,158,11,0.15)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(245,158,11,0.1) 0%, transparent 65%)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 grid sm:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <div>
              <p className="text-xs uppercase tracking-widest text-amber-400 mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Diagnóstico gratuito — respuesta en 24 horas
              </p>
              <h2
                className="text-3xl sm:text-4xl"
                style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, letterSpacing: '-0.02em', color: '#f1f5f9' }}
              >
                ¿Listo para eliminar el caos manual de su operación?
              </h2>
            </div>
            <p className="text-text-400 leading-relaxed">
              El costo de apagar un flujo automatizado es volver al trabajo manual. Empiece hoy y descubra cuántas horas hombre puede ahorrar su empresa cada mes.
            </p>
            <ul className="space-y-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm text-text-300">
                  <CheckCircle2 size={15} style={{ color: '#f59e0b', flexShrink: 0 }} aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl p-6 sm:p-8 space-y-5 flex flex-col items-center text-center"
            style={{ background: 'rgba(7,12,23,0.6)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)' }}
              aria-hidden="true"
            >
              <FaWhatsapp size={26} style={{ color: '#25D366' }} />
            </div>
            <div className="space-y-1.5">
              <p className="text-sm font-semibold text-text-100" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Hablemos por WhatsApp
              </p>
              <p className="text-sm text-text-400 leading-relaxed">
                Cuéntenos sobre su empresa y agendamos su diagnóstico gratuito directamente en el chat.
              </p>
            </div>

            <a
              href={whatsappLink(WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              <FaWhatsapp size={16} />
              Solicitar Análisis de ROI para mi Empresa
            </a>

            <p className="text-xs text-text-500">
              Le respondemos en menos de 24 horas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
