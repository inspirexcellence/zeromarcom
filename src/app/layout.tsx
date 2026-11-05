import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Inter,
  Instrument_Serif,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ToastNotification from "@/components/ui/ToastNotification";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ZEROMARCOM - Top Web Development & Digital Marketing Agency",
  description:
    "ZEROMARCOM is a top-rated web development and digital marketing agency offering creative solutions in branding, website design, SEO, and social media marketing to grow your business.",
  keywords: [
    "zeromarcom",
    "web development agency",
    "digital marketing",
    "SEO",
    "brand strategy",
    "creative engineering",
    "Kolkata",
  ],
  authors: [{ name: "ZEROMARCOM" }],
  openGraph: {
    title: "ZEROMARCOM™ — Strategic Creative Architecture & High-Velocity Digital",
    description:
      "ZEROMARCOM is a premier agency synthesizing modern typography, kinetic motion, and deterministic conversion strategy into unignorable market leadership.",
    url: "https://zeromarcom.com",
    siteName: "ZEROMARCOM",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${inter.variable} ${instrumentSerif.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <link rel="preload" href="/video/hero.mp4" as="video" type="video/mp4" />
      </head>
      <body className="min-h-full flex flex-col bg-[#FBFBFC] text-[#101012] font-sans antialiased selection:bg-[#101012] selection:text-white">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ToastNotification />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
