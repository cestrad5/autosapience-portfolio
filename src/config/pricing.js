// Configuración de Planes y Precios — AutoSapience
// Cuando Wompi active tu cuenta, simplemente reemplaza los valores de 'wompiLink' por los enlaces reales de Wompi.

export const PRICING_CONFIG = {
  whatsappNumber: "573127270035",
  tiers: [
    {
      id: "tier-1",
      name: "Inicial / Micro",
      badge: null,
      monthlyPrice: 99900,
      annualPrice: 999000,
      description: "Ideal para microempresas que inician la automatización de procesos clave.",
      features: [
        "Acceso a módulos iniciales",
        "Soporte por correo y WhatsApp",
        "Actualizaciones continuas de seguridad",
        "Capacitación básica de uso"
      ],
      monthlyWompiLink: "", // Colocar aquí el link mensual de Wompi cuando esté activo
      annualWompiLink: "",  // Colocar aquí el link anual de Wompi cuando esté activo
    },
    {
      id: "tier-2",
      name: "Crecimiento / Pyme",
      badge: null,
      monthlyPrice: 399900,
      annualPrice: 3999000,
      description: "Para empresas en expansión que buscan optimizar ventas y operaciones.",
      features: [
        "Acceso a suites de operaciones y ventas",
        "Soporte prioritario",
        "Integración básica de datos",
        "Reportes y métricas operativas"
      ],
      monthlyWompiLink: "",
      annualWompiLink: "",
    },
    {
      id: "tier-3",
      name: "Pro / Industrial",
      badge: "Más Popular",
      popular: true,
      monthlyPrice: 999000,
      annualPrice: 9990000,
      description: "El cerebro digital completo para plantas de producción y manufactura.",
      features: [
        "Acceso total a las 3 Suites de AutoSapience",
        "IA avanzada para costeo y producción",
        "Soporte prioritario 24/7",
        "Acompañamiento en implementación"
      ],
      monthlyWompiLink: "",
      annualWompiLink: "",
    },
    {
      id: "tier-4",
      name: "Planta / Avanzado",
      badge: "Alto Rendimiento",
      monthlyPrice: 4999000,
      annualPrice: 49990000,
      description: "Para operaciones industriales de alto volumen y requerimientos a medida.",
      features: [
        "Capacidad y volumen extendido de procesamientos",
        "Desarrollo e integraciones a medida",
        "Gerente de cuenta dedicado",
        "SLAs de soporte industrial garantizados"
      ],
      monthlyWompiLink: "",
      annualWompiLink: "",
    },
    {
      id: "tier-5",
      name: "Enterprise / Corporativo",
      badge: "Escala Total",
      monthlyPrice: 9999000,
      annualPrice: 99990000,
      description: "Infraestructura dedicada y automatización integral para grupos empresariales.",
      features: [
        "Infraestructura en la nube dedicada",
        "Desarrollos de IA a la medida exclusivos",
        "Soporte VIP presencial / remoto",
        "Múltiples plantas y sedes unificadas"
      ],
      monthlyWompiLink: "",
      annualWompiLink: "",
    }
  ]
};
