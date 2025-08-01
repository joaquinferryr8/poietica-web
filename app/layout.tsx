// app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

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
      <head />
      <body className="antialiased text-gray-900 bg-white font-sans">
        <main>{children}</main>

        {/* Footer con enlace a comentarios */}
        <footer className="mt-12 text-center text-xs text-gray-500">
          <a
            href="/comentarios"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
           
          </a>
        </footer>
      </body>
    </html>
  );
}
