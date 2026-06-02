import type { Metadata } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";
import { siteContent } from "@/data/siteContent";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: siteContent.title,
  description: siteContent.slogan,
  keywords: [
    "NeurIPS 2026",
    "workshop",
    "brain",
    "agents",
    "robots",
    "neuroscience",
    "artificial intelligence",
    "robotics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoSlab.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
