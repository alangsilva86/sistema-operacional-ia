import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });
export const metadata: Metadata = {
  title: "Sistema Operacional - IA na Prática | Imersão para PMEs",
  description:
    "Imersão presencial para sócios e gestores de PMEs instalarem triagem comercial, reativação de base e dashboard com IA.",
  metadataBase: new URL("https://sua-url.com"),
  openGraph: {
    title: "Sistema Operacional - IA na Prática",
    description:
      "Imersão presencial para sócios e gestores de PMEs instalarem triagem comercial, reativação de base e dashboard com IA.",
    url: "https://sua-url.com/sistema-operacional-ia",
    type: "website",
    images: [{ url: "/alanh.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema Operacional - IA na Prática",
    description:
      "Imersão presencial para sócios e gestores de PMEs instalarem triagem comercial, reativação de base e dashboard com IA.",
    images: ["/alanh.jpeg"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="bg-[#050505]">
      <body className={`${inter.className} bg-[#050505] text-white antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
