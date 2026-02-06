import type { Metadata } from "next";
import "./globals.css";

const siteName = "RoomPost Studio";
const description = "Boutique post-production led by taste. Coming soon.";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : new URL("https://example.com"); // replace later OR set NEXT_PUBLIC_SITE_URL in Vercel

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: `${siteName} — Coming Soon`,
  description,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }]
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    title: `${siteName} — Coming Soon`,
    description,
    siteName,
    url: "/",
    images: [
      // Put an og.jpg in /public for best previews (1200x630)
      { url: "/og.jpg", width: 1200, height: 630, alt: `${siteName}` }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Coming Soon`,
    description,
    images: ["/og.jpg"]
  },
  themeColor: "#07080a"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="bg" />
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}