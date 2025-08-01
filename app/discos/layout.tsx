'use client'

import "../globals.css";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";

const discos = [
  { id: "m01", title: "Lo que somos, Lo que escondimos." },
  { id: "m02", title: "Lo que inventamos para no estar solos." },
  { id: "m03", title: "Lo que aún no se dijo." },
  { id: "m04", title: "Los lugares que nos detienen." },
  { id: "m05", title: "Demasiado grande para ser niña" },
  { id: "m06", title: "La ambición que construye aísla." },
  { id: "m07", title: "No todo impulso busca destino." },
  { id: "m08", title: "La culpa como forma de existencia." },
  { id: "m09", title: "Obsesiones que no iluminan" },
];

export default function DiscosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showEntreLineas, setShowEntreLineas] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const entreLineasRef = useRef<HTMLDivElement>(null);

  // Cierra el texto si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        entreLineasRef.current &&
        !entreLineasRef.current.contains(event.target as Node)
      ) {
        setShowEntreLineas(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* --- Menú móvil (topbar) --- */}
      <div className="flex md:hidden justify-between items-center px-4 py-4 border-b border-gray-200 bg-white">
        <Link href="/">
          <h1 className="text-2xl font-stardos">POIÉTICA</h1>
        </Link>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {/* --- Contenido del menú móvil desplegable --- */}
      {menuOpen && (
        <div className="md:hidden px-4 py-2 border-b border-gray-100 bg-gray-50 space-y-4">
          <nav className="space-y-2">
            {discos.map((disco, index) => (
              <Link
                key={disco.id}
                href={`/discos/${disco.id}`}
                className="block text-gray-700 hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                {`${index + 1}. ${disco.title}`}
              </Link>
            ))}
          </nav>
          <div ref={entreLineasRef}>
            <p
              onClick={() => setShowEntreLineas(!showEntreLineas)}
              className="italic underline cursor-pointer text-sm text-gray-500"
            >
              [ Leer entre líneas ]
            </p>
            {showEntreLineas && (
              <p className="mt-2 text-xs text-gray-600">
                Para quienes aún sienten sin manual. No vendemos respuestas. No curamos heridas.
                No explicamos todo. Solo abrimos fisuras. En el encuadre de una película.
                En la ruina de una arquitectura. En el temblor de una frase. Esto no es inspiración.
                Es una herida abierta que aún respira arte.
              </p>
            )}
          </div>
          <button
            onClick={() => window.open("/comentarios", "Cliente número: 00003", "width=500,height=600")}
            className="text-xs text-blue-600 underline"
          >
            [ Dejá tu comentario ]
          </button>
        </div>
      )}

      {/* --- Franja izquierda en escritorio --- */}
      <div className="hidden md:flex md:flex-col fixed left-0 top-0 h-full w-80 border-r border-gray-200 bg-white px-8 py-12 space-y-8 overflow-y-auto">
        <Link href="/">
          <h1 className="text-3xl font-stardos cursor-pointer">POIÉTICA</h1>
        </Link>
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-wide text-gray-500">Projects</p>
          <nav className="space-y-2">
            {discos.map((disco, index) => (
              <Link
                key={disco.id}
                href={`/discos/${disco.id}`}
                className="block text-gray-700 hover:underline"
              >
                {`${index + 1}. ${disco.title}`}
              </Link>
            ))}
          </nav>
          <div ref={entreLineasRef} className="text-sm mt-8 text-gray-500 select-none">
            <p
              onClick={() => setShowEntreLineas(!showEntreLineas)}
              className="italic underline cursor-pointer"
            >
              [ Leer entre líneas ]
            </p>
            {showEntreLineas && (
              <p className="mt-2 text-xs text-gray-600">
                Para quienes aún sienten sin manual. No vendemos respuestas. No curamos heridas.
                No explicamos todo. Solo abrimos fisuras. En el encuadre de una película.
                En la ruina de una arquitectura. En el temblor de una frase. Esto no es inspiración.
                Es una herida abierta que aún respira arte.
              </p>
            )}
          </div>
          <button
            onClick={() => window.open("/comentarios", "Cliente número: 00003", "width=500,height=600")}
            className="text-xs text-blue-600 underline"
          >
            [ Dejá tu comentario ]
          </button>
        </div>
      </div>

      {/* --- Contenido principal --- */}
      <div className="md:ml-80 w-full bg-white">{children}</div>
    </div>
  );
}
