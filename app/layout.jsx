import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AdelLoader from "@/components/global_animation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ADEL ~ | Your Platform",
  description: "Experience the future with ADEL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AdelLoader />
        {children}
      </body>
    </html>
  );
}