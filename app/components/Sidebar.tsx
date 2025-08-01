// app/components/Sidebar.tsx
import Link from "next/link"

const discos = [
  { id: "m01", title: "M01. Nombre del Disco" },
  { id: "m02", title: "M02. Nombre del Disco" },
  { id: "m03", title: "M03. Nombre del Disco" },
  { id: "m04", title: "M04. Nombre del Disco" },
  { id: "m05", title: "M05. Nombre del Disco" },
  { id: "m06", title: "M06. Nombre del Disco" },
  { id: "m07", title: "M07. Nombre del Disco" },
  { id: "m08", title: "M08. Nombre del Disco" },
  { id: "m09", title: "M09. Nombre del Disco" },
]

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white p-6 border-r border-gray-300 z-30">
      <h1 className="text-2xl font-bold mb-4">POIÉTICA</h1>
      <ul className="space-y-2 text-sm">
        {discos.map((d) => (
          <li key={d.id}>
            <Link href={`/discos/${d.id}`} className="hover:underline block">
              {d.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
