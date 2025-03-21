import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Espace Administrateur",
  description: "Espace de gestion des produits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased py-8 px-4 sm:px-8`}
      >
        <header className="flex justify-center mb-8">
          <h1 className="text-4xl font-bold">Espace Administrateur</h1>
        </header>
        <main className="flex flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
