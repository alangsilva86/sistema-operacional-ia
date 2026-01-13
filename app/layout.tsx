import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Sistema Operacional - IA na Pratica | Imersao para PMEs",
  description:
    "Imersao presencial para socios e gestores de PMEs instalarem triagem comercial, reativacao de base e dashboard com IA.",
  metadataBase: new URL("https://sua-url.com"),
  openGraph: {
    title: "Sistema Operacional - IA na Pratica",
    description:
      "Imersao presencial para socios e gestores de PMEs instalarem triagem comercial, reativacao de base e dashboard com IA.",
    url: "https://sua-url.com/sistema-operacional-ia",
    type: "website",
    images: [{ url: "/alanh.jpeg" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema Operacional - IA na Pratica",
    description:
      "Imersao presencial para socios e gestores de PMEs instalarem triagem comercial, reativacao de base e dashboard com IA.",
    images: ["/alanh.jpeg"]
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="bg-[#050505]">
      <body className={`${inter.className} bg-[#050505] text-white antialiased`}>{children}</body>
    </html>
  );
}
