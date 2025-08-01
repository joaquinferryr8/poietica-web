'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const discos = [
    { id: 'm01', title: 'Lo que somos, lo que escondimos' },
    { id: 'm02', title: 'Lo que inventamos para huir' },
    { id: 'm03', title: 'Lo que aún no se dijo' },
    { id: 'm04', title: 'Los lugares que nos construyen' },
    { id: 'm05', title: 'Demasiado grande para este mundo' },
    { id: 'm06', title: 'La ambición que consume' },
    { id: 'm07', title: 'No todo impulso busca ser real' },
    { id: 'm08', title: 'La culpa como forma de lenguaje' },
    { id: 'm09', title: 'Obsesiones que no iluminan' },
  ];

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col justify-between h-screen w-64 p-6 bg-white shadow-lg sticky top-0">
        <div>
          <h1 className="text-3xl font-bold mb-6 tracking-widest">POIÉTICA</h1>
          <p className="text-xs text-gray-400 mb-4">PROJECTS</p>
          <ul className="space-y-2 text-sm">
            {discos.map((disco, index) => (
              <li key={disco.id}>
                <Link
                  href={`/discos/${disco.id}`}
                  className="hover:underline text-gray-800"
                >
                  {String(index + 1).padStart(2, '0')} {disco.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-xs text-gray-500 mt-4">
          [ Leer entre líneas ]
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white p-4 shadow z-50 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-widest">POIÉTICA</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white z-40 p-4 shadow">
          <ul className="space-y-3 text-sm">
            {discos.map((disco, index) => (
              <li key={disco.id}>
                <Link
                  href={`/discos/${disco.id}`}
                  onClick={() => setIsOpen(false)}
                  className="block hover:underline text-gray-800"
                >
                  {String(index + 1).padStart(2, '0')} {disco.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
