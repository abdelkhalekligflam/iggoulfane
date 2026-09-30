import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";

const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });
const arabic = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-arabic" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: { default: "IGGOULFANE | Coopérative de miel", template: "%s | IGGOULFANE" },
  description: "IGGOULFANE, coopérative marocaine dédiée au miel et au savoir-faire local.",
  applicationName: "IGGOULFANE",
  icons: { icon: "/iggoulfane-logo.jpeg", apple: "/iggoulfane-logo.jpeg" },
  openGraph: {
    title: "IGGOULFANE | Coopérative de miel",
    description: "Coopérative marocaine dédiée au miel et au savoir-faire local.",
    type: "website",
    images: [{ url: "/iggoulfane-logo.jpeg", alt: "IGGOULFANE" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning><body className={`${display.variable} ${sans.variable} ${arabic.variable}`}><LanguageProvider>{children}</LanguageProvider></body></html>;
}
