import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GoToTop from "@/components/gototop";
import WhatsAppCall from "@/components/whatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <WhatsAppCall />
        <GoToTop />
        <Footer />
      </body>
    </html>
  );
}