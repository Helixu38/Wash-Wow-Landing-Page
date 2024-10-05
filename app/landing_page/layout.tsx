import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/ui/footer";

const lato = localFont({
  src: "../fonts/lato-regular.woff",
  variable: "--font-lato-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Wash Wow",
  description:
    "Transform your laundry day with Wash-Wow, the ultimate laundry service app!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Wash&Wow</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${lato.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
