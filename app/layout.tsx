import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/query-provider";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/AuthContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Regular, SemiBold, Bold
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luton Sylhet Division Cup",
  description:
    "The premier football league bringing together the best teams from Luton Sylhet districts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        <QueryProvider>
          <AuthProvider>
            {children} <Toaster position="top-right" reverseOrder={false} />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
