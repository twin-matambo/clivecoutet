import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "THIS IS KREATIVE — Agency",
  description: "We build brands that move culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}