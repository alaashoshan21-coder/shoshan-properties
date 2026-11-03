import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SHOSHAN PROPERTIES | السوق العقاري",
    template: "%s | SHOSHAN PROPERTIES",
  },
  description:
    "منصة SHOSHAN PROPERTIES العقارية المتكاملة للبيع والإيجار والاستثمار العقاري.",
  applicationName: "SHOSHAN PROPERTIES",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}