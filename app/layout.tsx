import type { Metadata } from "next";
import "./globals.css";

import localFont from 'next/font/local'

const tungsten = localFont({
  src: [
    {
      path: './typography/Tungsten-Semibold.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './typography/Tungsten-Bold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
})

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
      <body className={tungsten.className}>{children}</body>
    </html>
  );
}
