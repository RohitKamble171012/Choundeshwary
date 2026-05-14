import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: "Choundeshwary Machinery — Khoa & Dairy Processing Machines",
  description:
    "Choundeshwary Machinery — Manufacturers & Suppliers of Khoya, Paneer, Lassi, Ghee and Dairy Processing Machines from Ichalkaranji, India.",
  keywords: [
    "Khoya Machine", "Paneer Machine", "Cream Separator", "Lassi Machine",
    "Ghee Machine", "Dairy Machinery", "Ichalkaranji", "Choundeshwary Machinery"
  ],
  openGraph: {
    title: "Choundeshwary Machinery — Khoa & Dairy Processing Machines",
    description: "Khoa Machine & All Milk Product Machines. Made in India.",
    type: "website",
    images: ["/images/hero-machine.jpg"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans antialiased bg-white text-ink">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
