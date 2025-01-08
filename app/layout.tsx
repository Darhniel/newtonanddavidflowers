import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Newton and David Flowers",
  description: "Newton and David Flowers Website",
  keywords: ["flowers", "florist", "flower delivery", "florist near me", "flowers near me", "flower shop", "flower arrangements", "wedding flowers"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
