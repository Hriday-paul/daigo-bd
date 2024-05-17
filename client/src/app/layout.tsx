import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Shared/Navbar/Navbar";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";
import StoreProvider from "@/StoreProvider";
import NextAuthSessionProvider from "@/Provider/Sessionprovid";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medico",
  description: "Medicel service menager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <NextTopLoader color="#0BCABA" initialPosition={0.30} />
          <NextAuthSessionProvider>
            {children}
          </NextAuthSessionProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
