import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Camilo Estrada | Ingeniero de Producto & Automatización B2B",
  description:
    "AutoSapience — Portafolio de Camilo Estrada. Soluciones de software e inteligencia operativa para empresas tradicionales en Latinoamérica.",
  openGraph: {
    title: "Camilo Estrada | Ingeniero de Producto & Automatización B2B",
    description:
      "Construyo motores de automatización e inteligencia operativa para Pymes. Mira mis casos de estudio y proyectos.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
