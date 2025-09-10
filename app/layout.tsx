import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Prana Apeksha Foundation ",
  description:
    "Supporting cancer patients at Maharagama Apeksha Hospital with care, donations, and hope.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Prana Apeksha Foundation ",
    description:
      "Join us in supporting cancer patients at Maharagama Apeksha Hospital with essential donations.",
    url: "https://pranaapeksha.org", // update later with your domain
    siteName: "Prana Apeksha Foundation",
    images: [
      {
        url: "/og-image.jpg", // optional preview image
        width: 1200,
        height: 630,
        alt: "Prana Apeksha Foundation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// ✅ Default export required by Next.js
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
