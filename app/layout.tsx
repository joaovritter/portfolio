import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";
import { LiquidGlassFilter } from "@/components/LiquidButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joaovritter.vercel.app"),
  title: `${profile.name} — ${profile.shortRole}`,
  description: profile.heroTagline,
  keywords: [
    "João Vitor Ritter",
    "Desenvolvedor Full Stack",
    "Front-end",
    "React",
    "Next.js",
    "Santa Maria",
    "Portfólio",
  ],
  authors: [{ name: profile.fullName }],
  openGraph: {
    title: `${profile.name} — ${profile.shortRole}`,
    description: profile.heroTagline,
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.shortRole}`,
    description: profile.heroTagline,
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0b0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <LiquidGlassFilter />
        {children}
      </body>
    </html>
  );
}
