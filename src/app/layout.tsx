import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { ClientLayout } from "./client-layout";
import QueryProvider from "@/lib/QueryProvider";

import "./globals.css";
import "keen-slider/keen-slider.min.css";

export const metadata: Metadata = {
  title: "Mugiwara Crew",
  description: "A Fan-Made Tribute for One Piece",
};

// fonts.ts
const bodyFont = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-body",
});

const onePieceFont = localFont({
  src: "../fonts/one-piece-font.ttf",
  variable: "--font-one-piece",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${onePieceFont.variable} ${bodyFont.variable}`}
    >
      <body className="font-body text-shadow-2xs text-shadow-custom-deep-black">
        <link rel="icon" href="/img/icon.png" sizes="any" />
        <QueryProvider>
          <ClientLayout>{children}</ClientLayout>
        </QueryProvider>
      </body>
    </html>
  );
}
