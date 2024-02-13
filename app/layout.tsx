import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Webflow Mudd",
  description: "2023-24 Harvey Mudd Clinic Project w Webflow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
