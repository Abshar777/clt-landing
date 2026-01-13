import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import IndexLayout from "@/components/layout";
import { keywords } from "@/const/meta";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CLT Trading Academy",
  description:
    "CLT Trading Academy is a trading academy that teaches you how to trade the financial markets.",
  // description: "CLT Academy is a platform for learning trading and investing.",
  keywords: keywords,
  openGraph: {
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    title: "CLT Academy",
    description:
      "CLT Academy is a platform for learning trading and investing.",
    url: "https://clt-academy.com",
    siteName: "CLT Academy",
    locale: "uae",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CLT Academy",
    description:
      "CLT Academy is a platform for learning trading and investing.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
  },
  alternates: {
    canonical: "https://clttradingacademy.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "google-site-verification=1234567890",
  },
  authors: [{ name: "CLT Academy", url: "https://clttradingacademy.com" }],
  creator: "CLT Academy",
  publisher: "CLT Academy",
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PPVT3Q35');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PPVT3Q35"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <IndexLayout>{children}</IndexLayout>
      </body>
    </html>
  );
}
