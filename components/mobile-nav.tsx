'use client'

import { useState } from 'react'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-50">
      <h1 className="text-xl font-bold">POIÉTICO</h1>
      <button
        onClick={() => setOpen(!open)}
        className="text-sm border px-3 py-1 rounded"
      >
        {open ? 'Cerrar' : 'Menú'}
      </button>

      {open && (
        <nav className="absolute top-16 right-4 bg-white shadow p-4 rounded w-48">
          <ul className="flex flex-col gap-2">
            <li><a href="#expo">Expo</a></li>
            <li><a href="#disco2">Disco 2</a></li>
            <li><a href="#disco3">Disco 3</a></li>
          </ul>
        </nav>
      )}
    </header>
  )
}
