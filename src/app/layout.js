import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { Metadata } from "next";

export const metadata = {
  title: "Platinum Group - AC Repair & Services in Pune",
  description: "Professional AC repair, installation, and maintenance services in Pune. Expert technicians, transparent pricing, and quality service.",
  keywords: "AC repair, AC service, AC maintenance, AC installation, Pune",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/images/hero/hero-home.webp" />
        <link rel="preload" as="image" href="/logo.png" />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
