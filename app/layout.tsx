import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
const display=Playfair_Display({subsets:["latin"],variable:"--font-display"});
const sans=Plus_Jakarta_Sans({subsets:["latin"],variable:"--font-sans"});
export const metadata:Metadata={title:"IGGOULFANE | Moroccan Honey Cooperative",description:"IGGOULFANE is a Moroccan cooperative dedicated to honey and local know-how."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>}
