import type { Metadata, Viewport } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";
import ImageProtection from "@/components/ImageProtection";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Aztec Samurai Adventures — A Twelve-Book Saga by Ketan Shukla",
  description:
    "A twelve-book YA epic fantasy saga where an Aztec-descended warrior trained in the samurai code forges an alliance of spear, steel, and sun-magic against warlords, sorcerers, and demons who seek to conquer, enslave, and erase.",
  keywords: [
    "aztec samurai",
    "YA fantasy",
    "epic fantasy series",
    "sun-blade",
    "warriors",
    "demons",
    "book series",
    "Ketan Shukla",
  ],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${garamond.variable} font-sans antialiased`}
      >
        <ImageProtection />
        {children}
      </body>
    </html>
  );
}
