import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Уральский государственный архитектурно-художественный университет",
  description: "УрГАХУ - ведущий вуз России в области архитектуры, дизайна и изобразительного искусства",
  keywords: "УрГАХУ, архитектура, дизайн, искусство, образование, Екатеринбург",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
