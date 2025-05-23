import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { dir } from "i18next";
import { cookies } from "next/headers"; // server-side cookie access
import "../i18n/i18n";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   // Await cookies() since it returns a Promise
  const cookieStore = await cookies();
  const lang = cookieStore.get("i18next")?.value || "en";

  return (
    <html lang={lang} dir={dir(lang)}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
