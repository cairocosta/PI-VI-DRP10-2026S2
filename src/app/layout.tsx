import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: "DLG | Consultoria Tributária",
  description:
    "Somos uma consultoria especializada em soluções tributárias para empresas de todos os portes. Com anos de experiência no mercado, oferecemos serviços personalizados e eficientes para ajudar nossos clientes a alcançar seus objetivos tributários.",
  openGraph: {
    title: "DLG | Consultoria Tributária",
    description:
      "Somos uma consultoria especializada em soluções tributárias para empresas de todos os portes. Com anos de experiência no mercado, oferecemos serviços personalizados e eficientes para ajudar nossos clientes a alcançar seus objetivos tributários.",
    images: [
      {
        url: "/src/assets/og-image.svg",
        width: 630,
        height: 630,
        alt: "DLG Consultoria Tributária",
      },
    ],
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
