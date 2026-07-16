import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Max Facility | Ice Rink Operations & Management Solutions",
    template: "%s | Max Facility",
  },
  description:
    "Expert ice rink consulting, maintenance services, and RinkReports software platform. 30+ years of experience elevating ice facility operations. CIT, CIRM, CRA certified.",
  keywords: [
    "ice rink management software",
    "ice facility consulting",
    "ice rink operations",
    "CIT certified",
    "ice maintenance services",
    "ice rink management",
    "facility management software",
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
    title: "Max Facility | Ice Rink Operations & Management Solutions",
    description:
      "Expert ice rink consulting, maintenance services, and RinkReports software platform. 30+ years of experience elevating ice facility operations.",
    url: "https://maxfacility.com",
    siteName: "Max Facility",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Max Facility | Ice Rink Operations & Management Solutions",
    description:
      "Expert ice rink consulting, maintenance services, and RinkReports software platform. 30+ years of experience elevating ice facility operations.",
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
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
