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
  metadataBase: new URL("https://aztec.ketanshukla.com"),
  title:
    "Aztec Samurai Adventures — 12-Book Epic Fantasy Series by Ketan Shukla",
  description:
    "A twelve-book YA epic fantasy saga spanning 288 chapters and 3 acts. An Aztec-descended warrior trained in the samurai code forges an alliance of spear, steel, and sun-magic against warlords, sorcerers, and demons. Available on Amazon Kindle, Paperback & Hardcover.",
  keywords: [
    "aztec samurai",
    "YA fantasy",
    "epic fantasy series",
    "12 book series",
    "sun-blade",
    "warriors",
    "demons",
    "book series",
    "Ketan Shukla",
    "Amazon KDP",
    "fantasy saga",
    "indie fantasy",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Aztec Samurai Adventures — 12-Book Epic Fantasy Series",
    description:
      "A twelve-book YA epic fantasy saga spanning 288 chapters. Warriors, sorcerers, demons, and the blade that carries the light. By Ketan Shukla.",
    url: "https://aztec.ketanshukla.com",
    siteName: "Aztec Samurai Adventures",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Aztec Samurai Adventures series logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Aztec Samurai Adventures — 12-Book Epic Fantasy Series",
    description:
      "A twelve-book YA epic fantasy saga spanning 288 chapters. Warriors, sorcerers, demons, and the blade that carries the light. By Ketan Shukla.",
    images: ["/images/logo.png"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "BookSeries",
                  name: "Aztec Samurai Adventures",
                  url: "https://aztec.ketanshukla.com",
                  description:
                    "A twelve-book YA epic fantasy saga spanning 288 chapters and 3 acts. An Aztec-descended warrior trained in the samurai code forges an alliance against warlords, sorcerers, and demons.",
                  numberOfBooks: 12,
                  genre: ["Epic Fantasy", "YA Fantasy"],
                  author: {
                    "@type": "Person",
                    name: "Ketan Shukla",
                    url: "https://www.ketanshukla.com",
                    sameAs: ["https://metronagon.com"],
                  },
                },
                {
                  "@type": "WebSite",
                  name: "Aztec Samurai Adventures",
                  url: "https://aztec.ketanshukla.com",
                },
              ],
            }),
          }}
        />
        <ImageProtection />
        {children}
      </body>
    </html>
  );
}
