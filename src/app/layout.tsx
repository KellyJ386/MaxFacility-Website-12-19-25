import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Max Facility | RinkReports & Ice Rink Operations",
    template: "%s | Max Facility",
  },
  description:
    "Expert ice rink consulting and maintenance, and the RinkReports ice rink management platform. CIT, CIRM, CRA certified.",
  keywords: [
    "ice rink management software",
    "ice facility consulting",
    "ice rink operations",
    "CIT certified",
    "ice maintenance services",
    "ice rink management",
    "RinkReports",
  ],
  authors: [{ name: "Max Facility" }],
  creator: "Max Facility",
  publisher: "Max Facility",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Max Facility | RinkReports & Ice Rink Operations",
    description:
      "Expert ice rink consulting and maintenance, and the RinkReports ice rink management platform.",
    url: "https://maxfacility.com",
    siteName: "Max Facility",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Max Facility | RinkReports & Ice Rink Operations",
    description:
      "Expert ice rink consulting and maintenance, and the RinkReports ice rink management platform.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
