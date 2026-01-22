import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { ConciergeWidget } from "@/app/components/ConciergeWidget";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });
export const metadata: Metadata = {
  title: "Sistema Operacional de IA | Tire sua empresa do manual",
  description:
    "Workshop Presencial em Maringá. Instale processos autônomos, agentes de triagem e dashboards de gestão em 4 encontros. Com Alan (Momentum).",
  // IMPORTANTE: Substitua pela URL final de produção (vercel) assim que tiver
  metadataBase: new URL("https://sistema-operacional-ia.vercel.app"),
  openGraph: {
    title: "A IA não vai te substituir (Mas quem usa vai)",
    description: "Pare de apagar incêndio. Instale um Sistema Operacional de IA na sua empresa em 4 encontros práticos.",
    url: "https://sistema-operacional-ia.vercel.app",
    siteName: "Sistema Operacional IA",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sistema Operacional de IA - Dashboard Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "A IA não vai te substituir (Mas quem usa vai)",
    description: "Deixe de ser obsoleto em 4 encontros. Workshop presencial em Maringá.",
    images: ["/og.png"]
  },
  icons: {
    icon: [{ url: "/momentum-negativo 2.png", type: "image/png" }],
    apple: [{ url: "/momentum-negativo 2.png", type: "image/png" }]
  }
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="bg-[#06070d]">
      <body className={`${inter.className} bg-[#06070d] text-slate-100 antialiased`}>
        {children}
        <ConciergeWidget />
        <Analytics />
      </body>
    </html>
  );
}
