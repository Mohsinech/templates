import React from "react";
import "@/styles/globals.css";
import { Footer, Header } from "@/components/layouts";
import Preloader from "@/components/Preloader/Preloader";

export const metadata = {
  title: "Ayourluxe • ep Template",
  description: "A simple, elegant, and powerful landing page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Preloader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
