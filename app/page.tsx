'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const discos = [
    { id: "m01", titulo: "lo que somos, lo que escondimos", imagen: "/images/lo-que-escondimos.png" },
    { id: "m02", titulo: "lo que inventamos para no estar solos", imagen: "/images/ella-y-lo-que-no-existe.png" },
    { id: "m03", titulo: "lo que aún no se dijo", imagen: "/images/close-sin-eufemismos.png" },
    { id: "m04", titulo: "los lugares que nos detienen", imagen: "/images/el-silencio-del-recuerdo.png" },
    { id: "m05", titulo: "demasiado grande para ser niña", imagen: "/images/demasiado-grande-para-ser-nina.png" },
    { id: "m06", titulo: "la ambición que construye aísla", imagen: "/images/habra-sangre.png" },
    { id: "m07", titulo: "no todo impulso busca destino", imagen: "/images/el-corcel-sin-dueno.png" },
    { id: "m08", titulo: "la culpa como forma de existencia", imagen: "/images/la-culpa-como-forma-de-existencia.png" },
    { id: "m09", titulo: "obsesiones que no iluminan", imagen: "/images/obsesiones-que-no-iluminan.png" },
  ]

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Menú lateral / superior */}
      <aside className="bg-white border-b lg:border-r lg:border-b-0 w-full lg:w-80 lg:h-screen fixed lg:static z-10">
        <div className="flex items-center justify-between lg:flex-col lg:items-start px-4 lg:px-8 py-4 lg:py-10">
          <h1 className="text-3xl lg:text-5xl font-stardos uppercase tracking-widest">
            POIÉTICA
          </h1>
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
              <Menu size={28} />
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {menuOpen && (
          <div className="block lg:hidden px-4 pb-6 space-y-4">
            <p className="text-gray-500 uppercase text-xs">Projects</p>
            {discos.map((disco) => (
              <Link key={disco.id} href={`/discos/${disco.id}`}>
                <p className="text-black text-sm">
                  {disco.id} <br />
                  <span className="capitalize">{disco.titulo}</span>
                </p>
              </Link>
            ))}
            <p className="mt-4 italic text-sm">[ Leer entre líneas ]</p>
          </div>
        )}

        {/* Menú escritorio */}
        <div className="hidden lg:flex flex-col px-8 space-y-4 text-sm">
          <p className="text-gray-500 uppercase text-xs">Projects</p>
          {discos.map((disco) => (
            <Link key={disco.id} href={`/discos/${disco.id}`}>
              <p className="text-black">
                {disco.id} <br />
                <span className="capitalize">{disco.titulo}</span>
              </p>
            </Link>
          ))}
          <p className="mt-6 italic text-sm">[ Leer entre líneas ]</p>
        </div>
      </aside>

      {/* Contenido principal (discos) */}
      <main className={`flex-1 pt-24 lg:pt-10 px-4 sm:px-6 lg:px-12 transition-all duration-300 ${menuOpen ? 'hidden' : 'block'}`}>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {discos.map((disco) => (
            <Link key={disco.id} href={`/discos/${disco.id}`}>
              <div className="text-center cursor-pointer hover:opacity-90 transition">
                <img
                  src={disco.imagen}
                  alt={disco.titulo}
                  className="w-full rounded-xl shadow-md"
                />
                <p className="mt-4 text-sm text-gray-700 capitalize">{disco.titulo}</p>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  )
}
