import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { TonConnectUIProvider } from "@/components/providers/ton-connect-provider";
import { BottomNav } from "@/components/layout/bottom-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hamster Mini App",
  description: "Tap to earn TON coins and share with friends!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TonConnectUIProvider>
          {children}
          <BottomNav />
          <Toaster />
        </TonConnectUIProvider>
      </body>
    </html>
  );
}