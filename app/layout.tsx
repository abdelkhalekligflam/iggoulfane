import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";

const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });
const arabic = Noto_Kufi_Arabic({ subsets: ["arabic"], variable: "--font-arabic" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://iggoulfane.vercel.app";

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: { default: "IGGOULFANE | تعاونية العسل", template: "%s | IGGOULFANE" },
  description: "تعاونية IGGOULFANE للعسل الطبيعي في تابونت، ورزازات. عسل طبيعي 1 كلغ بثمن 300 درهم.",
  applicationName: "IGGOULFANE",
  keywords: ["IGGOULFANE", "natural honey", "Tabounte", "Ouarzazate", "miel naturel"],
  authors: [{ name: "IGGOULFANE" }],
  creator: "IGGOULFANE",
  icons: { icon: "/iggoulfane-logo.jpeg", apple: "/iggoulfane-logo.jpeg" },
  openGraph: {
    title: "IGGOULFANE | تعاونية العسل",
    description: "تعاونية مغربية للعسل الطبيعي في تابونت، ورزازات.",
    type: "website",
    locale: "ar_MA",
    siteName: "IGGOULFANE",
    images: [{ url: "/iggoulfane-logo.jpeg", alt: "IGGOULFANE" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ar" dir="rtl" suppressHydrationWarning><body className={`${display.variable} ${sans.variable} ${arabic.variable}`}><LanguageProvider>{children}</LanguageProvider></body></html>;
}
