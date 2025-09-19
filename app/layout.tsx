import React from "react";
import "@/styles/globals.css";
import { Footer, Header } from "@/components/layouts";
import Preloader from "@/components/Preloader/Preloader";

export const metadata = {
  title: "Ayourluxe • Meilleures montres pour femmes",
  description:
    "Page d'accueil simple pour commander facilement via WhatsApp. Workflow rapide et efficace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/icon" href="/favicon.ico" />
      </head>
      <body>
        <Preloader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
