"use client";

import { useState } from "react";
import { Check, Zap, Sparkles, ArrowRight } from "lucide-react";
import { PRICING_CONFIG } from "@/config/pricing";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly"); // 'monthly' | 'annual'

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getCheckoutLink = (tier) => {
    const isAnnual = billingCycle === "annual";
    const wompiUrl = isAnnual ? tier.annualWompiLink : tier.monthlyWompiLink;

    // Si ya existe el link de Wompi configurado, lo usa directamente
    if (wompiUrl && wompiUrl.trim() !== "") {
      return wompiUrl;
    }

    // Fallback hacia WhatsApp si Wompi está pendiente de validación
    const priceText = formatCurrency(isAnnual ? tier.annualPrice : tier.monthlyPrice);
    const cycleText = isAnnual ? "anual" : "mensual";
    const message = encodeURIComponent(
      `Hola, quiero suscribirme al plan *${tier.name}* (${priceText} / ${cycleText}) para mi empresa desde autosapience.com.`
    );

    return `https://wa.me/${PRICING_CONFIG.whatsappNumber}?text=${message}`;
  };

  return (
    <section id="precios" className="py-24 relative z-10 overflow-hidden">
      {/* Luz ambiental de fondo */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #f59e0b 0%, #3d3d6b 70%, transparent 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 space-y-12">
        {/* Cabecera de Sección */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20">
            <Zap size={14} />
            Inversión Transparente & Escalable
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f0e8]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Planes adaptados al tamaño de tu fábrica
          </h2>

          <p className="text-sm sm:text-base text-[#9a8c72] leading-relaxed">
            Elige la escala que mejor responda a las necesidades actuales de tu empresa. Cambia de plan o cancela en cualquier momento sin penalizaciones.
          </p>

          {/* Toggle Switch Mensual / Anual */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${billingCycle === "monthly" ? "text-[#f5f0e8]" : "text-[#9a8c72]"}`}>
              Facturación Mensual
            </span>

            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              className="relative w-16 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
              style={{ background: billingCycle === "annual" ? "#f59e0b" : "rgba(255,255,255,0.1)" }}
              aria-label="Alternar ciclo de facturación"
            >
              <div
                className={`w-6 h-6 rounded-full bg-[#0a0a12] shadow-md transform transition-transform duration-300 ${
                  billingCycle === "annual" ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </button>

            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${billingCycle === "annual" ? "text-[#f5f0e8]" : "text-[#9a8c72]"}`}>
                Facturación Anual
              </span>
              <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-[#f59e0b] text-[#0a0a12]">
                ¡Ahorras 2 meses!
              </span>
            </div>
          </div>
        </div>

        {/* Grid de Tarjetas de Precios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
          {PRICING_CONFIG.tiers.map((tier) => {
            const price = billingCycle === "annual" ? tier.annualPrice : tier.monthlyPrice;
            const periodText = billingCycle === "annual" ? "/ año" : "/ mes";
            const checkoutUrl = getCheckoutLink(tier);

            return (
              <div
                key={tier.id}
                className={`glass-card p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
                  tier.popular
                    ? "border-2 border-[#f59e0b] shadow-[0_0_30px_rgba(245,158,11,0.15)] bg-[#121222]"
                    : "hover:border-white/20"
                }`}
              >
                {/* Badge de Destaque */}
                {tier.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 ${
                      tier.popular
                        ? "bg-[#f59e0b] text-[#0a0a12]"
                        : "bg-[#3d3d6b] text-[#f5f0e8] border border-white/10"
                    }`}
                  >
                    {tier.popular && <Sparkles size={12} />}
                    {tier.badge}
                  </div>
                )}

                <div className="space-y-4">
                  {/* Nombre del Plan */}
                  <h3 className="text-lg font-bold text-[#f5f0e8]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {tier.name}
                  </h3>

                  {/* Descripción */}
                  <p className="text-xs text-[#9a8c72] leading-relaxed min-h-[36px]">
                    {tier.description}
                  </p>

                  {/* Precio */}
                  <div className="pt-2 pb-4 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold text-[#f5f0e8] tracking-tight" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                        {formatCurrency(price)}
                      </span>
                    </div>
                    <span className="text-xs text-[#9a8c72]">{periodText}</span>
                    {billingCycle === "annual" && (
                      <p className="text-[11px] text-[#f59e0b] font-medium mt-1">
                        Equivalente a 10 meses
                      </p>
                    )}
                  </div>

                  {/* Lista de características */}
                  <ul className="space-y-2.5 pt-2">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#f5f0e8]/90">
                        <Check size={14} className="text-[#f59e0b] mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón de Acción */}
                <div className="pt-6 mt-6 border-t border-white/5">
                  <a
                    href={checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all duration-300 ${
                      tier.popular
                        ? "bg-[#f59e0b] hover:bg-[#d98207] text-[#0a0a12] shadow-lg shadow-[#f59e0b]/20"
                        : "btn-secondary w-full"
                    }`}
                  >
                    <span>Suscribirme ahora</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nota aclaratoria sobre implementación */}
        <div className="text-center pt-4">
          <p className="text-xs text-[#9a8c72]">
            ¿Tienes requerimientos especiales o necesitas parametrización inicial a la medida?{" "}
            <a href="https://wa.me/573127270035?text=Hola,%20quisiera%20cotizar%20un%20proyecto%20de%20implementaci%C3%B3n%20a%20la%20medida" target="_blank" rel="noopener noreferrer" className="text-[#f59e0b] hover:underline font-semibold">
              Cotiza un plan de implementación personalizada por WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
