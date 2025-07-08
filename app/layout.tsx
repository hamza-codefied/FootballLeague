import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Footsall League",
  description:
    "The official website of the Footsall League, featuring fixtures, results, and team information for the Sylhet Division Cup.",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
