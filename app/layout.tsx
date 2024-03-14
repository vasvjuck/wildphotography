import type { Metadata } from "next";
import { fonts } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Photography",
  description: "Enjoyyyyy!!!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={fonts}>{children}</body>
    </html>
  );
}
