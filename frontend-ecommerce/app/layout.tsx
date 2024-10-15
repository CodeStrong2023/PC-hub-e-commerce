import type { Metadata } from "next";
import Urbanist from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Urbanist({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = Urbanist({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PCHub - E-Commerce",
  description: "Bienvenido al E-Commerce de HelloWorld",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
      </body>
    </html>
  );
}
