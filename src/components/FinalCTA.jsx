import { CheckCircle2, Mail } from 'lucide-react';

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
              <p className="text-xs uppercase tracking-widest text-[#f59e0b] mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Diagnóstico gratuito — cupos limitados
              </p>
              <h2
                className="text-3xl sm:text-4xl"
                style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, letterSpacing: '-0.02em', color: '#f1f5f9' }}
              >
                ¿Listo para eliminar el caos manual de su operación?
              </h2>
            </div>
            <p className="text-[#94a3b8] leading-relaxed">
              El costo de apagar un flujo automatizado es volver al trabajo manual. Empiece hoy y descubra cuántas horas hombre puede ahorrar su empresa cada mes.
            </p>
            <ul className="space-y-2">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm text-[#cbd5e1]">
                  <CheckCircle2 size={15} style={{ color: '#f59e0b', flexShrink: 0 }} aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl p-6 space-y-4"
            style={{ background: 'rgba(7,12,23,0.6)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <p className="text-sm font-semibold text-[#f1f5f9] mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Cuéntenos sobre su empresa
            </p>

            <form
              action="https://formsubmit.co/cestrad5@gmail.com"
              method="POST"
              className="space-y-3"
              aria-label="Formulario de solicitud de diagnóstico"
            >
              <input type="hidden" name="_subject" value="🚀 Nueva solicitud de diagnóstico: AutoSapience!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_next" value="https://autosapience.com" />

              <div>
                <label htmlFor="contact-name" className="block text-xs text-[#94a3b8] mb-1.5">
                  Su nombre *
                </label>
                <input id="contact-name" name="nombre" type="text" required placeholder="Camilo Estrada" className="pilot-input" />
              </div>
              <div>
                <label htmlFor="contact-company" className="block text-xs text-[#94a3b8] mb-1.5">
                  Empresa *
                </label>
                <input id="contact-company" name="empresa" type="text" required placeholder="Nombre de su empresa" className="pilot-input" />
              </div>
              <div>
                <label htmlFor="contact-role" className="block text-xs text-[#94a3b8] mb-1.5">
                  Cargo *
                </label>
                <input id="contact-role" name="cargo" type="text" required placeholder="Gerente, propietario..." className="pilot-input" />
              </div>
              <div>
                <label htmlFor="contact-whatsapp" className="block text-xs text-[#94a3b8] mb-1.5">
                  WhatsApp *
                </label>
                <input id="contact-whatsapp" name="whatsapp" type="tel" required placeholder="+57 300 000 0000" className="pilot-input" />
              </div>
              <div>
                <label htmlFor="contact-pain" className="block text-xs text-[#94a3b8] mb-1.5">
                  ¿Qué proceso manual le quita más tiempo hoy? *
                </label>
                <textarea
                  id="contact-pain"
                  name="proceso_manual"
                  rows={3}
                  required
                  placeholder="Describa brevemente el proceso que más tiempo le consume..."
                  className="pilot-input resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center mt-2">
                <Mail size={15} />
                Solicitar Análisis de ROI para mi Empresa
              </button>
            </form>

            <p className="text-xs text-center text-[#64748b] pt-1">
              Le respondemos en menos de 24 horas. Sin spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
