import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const lato = localFont({
  src: "./fonts/lato-regular.woff",
  variable: "--font-lato-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Wash&Wow",
  description:
    "Transform your laundry day with Wash-Wow, the ultimate laundry service app!",
  icons: {
    icon: "/favicon.ico", // Automatically sets favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${lato.variable} antialiased`}>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NRJ3FG6KWS"
          strategy="afterInteractive"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NRJ3FG6KWS');
          `}
        </Script>
      </body>
    </html>
  );
}
