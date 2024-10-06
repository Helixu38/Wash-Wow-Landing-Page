import AdminNavbar from "@/components/navigation/adminnavbar";
import localFont from "next/font/local";

const defaultUrl = `https://www.washnwow.store/admin`;

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Wash&Wow",
  description:
    "Transform your laundry day with Wash-Wow, the ultimate laundry service app!.",
};

const lato = localFont({
  src: "../fonts/lato-regular.woff",
  variable: "--font-lato-sans",
  weight: "400",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable} antialiased`}>
      <head>
        <title>Wash&Wow</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-background text-foreground">
        <main className="flex min-h-screen w-screen flex-col">
          <AdminNavbar />
          {children}
        </main>
      </body>
    </html>
  );
}
