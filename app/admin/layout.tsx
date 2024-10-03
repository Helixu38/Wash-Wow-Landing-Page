import AdminNavbar from "@/components/navigation/adminnavbar";
import localFont from "next/font/local";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "HoverSprite",
  description: "The all-in-one management solution for spraying at scale.",
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
    <html
      lang="en"
      className={`${lato.variable} antialiased`}
      suppressHydrationWarning
    >
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
