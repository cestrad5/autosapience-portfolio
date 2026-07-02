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
  title: "AutoSapience — El cerebro digital de tu fábrica",
  description:
    "Automatización con IA para empresas de manufactura y producción. Software modular y SaaS accesible para MiPyMEs colombianas que quieren operar con precisión — sin contratar un departamento de IT.",
  metadataBase: new URL("https://autosapience.com"),
  openGraph: {
    title: "AutoSapience — El cerebro digital de tu fábrica",
    description:
      "Automatización con IA para empresas de manufactura y producción en Colombia. Pedidos B2B, órdenes de producción, costeo inteligente y más.",
    type: "website",
    url: "https://autosapience.com",
    siteName: "AutoSapience",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoSapience — El cerebro digital de tu fábrica",
    description:
      "Software modular con IA para MiPyMEs manufactureras en Colombia.",
  },
  keywords: [
    "automatización manufactura Colombia",
    "software MiPyME",
    "SaaS industria colombiana",
    "IA para fábricas",
    "gestión producción",
    "pedidos B2B",
    "costeo productos manufactura",
  ],
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
