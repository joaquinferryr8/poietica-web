// app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POIÉTICA",
  description: "Sitio de los proyectos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased text-gray-900 bg-white">
        {children}
      </body>
    </html>
  );
}
