import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import Footer from "@/components/footer/Footer";

const Garamond = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sandy Beach",
  description: "This is a new project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
