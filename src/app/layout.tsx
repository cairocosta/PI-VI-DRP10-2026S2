import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: "DLG | Consultoria Tributária",
  description:
    "Somos uma consultoria especializada em soluções tributárias para empresas de todos os portes. Com anos de experiência no mercado, oferecemos serviços personalizados e eficientes para ajudar nossos clientes a alcançar seus objetivos tributários.",
  openGraph: {
    title: "DLG | Consultoria Tributária",
    url: "https://drp-10-pji-310-a2025-s1-t001.vercel.app",
    description:
      "Somos uma consultoria especializada em soluções tributárias para empresas de todos os portes. Com anos de experiência no mercado, oferecemos serviços personalizados e eficientes para ajudar nossos clientes a alcançar seus objetivos tributários.",
    images: [
      {
        url: "https://drp-10-pji-310-a2025-s1-t001.vercel.app/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Descrição da imagem",
        type: "image/svg+xml",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body cz-shortcut-listen="true">
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
