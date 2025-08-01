export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white rounded-lg shadow-lg">
      {/* Columna izquierda: Texto */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Los sonidos que no oímos</h1>
        <p className="text-sm leading-relaxed text-gray-800 whitespace-pre-line">
          {`Un edificio puede ser mudo, pero no sordo.

Hay sonidos que lo atraviesan, lo desgastan,
lo transforman desde adentro.

Los pasos repetidos en un pasillo.
El timbre que nunca se atendió.
El eco de una conversación perdida.

En esta propuesta,
la arquitectura no se ve, se escucha.

¿Y si diseñamos espacios
pensando en lo que suena y resuena?

¿Y si el silencio también es un material
de construcción?

A veces, lo que no se oye
es lo que más pesa.`}
        </p>

        <div className="mt-8 text-xs text-gray-500">
          <p className="mb-2 font-semibold">Próximamente…</p>
          <ul className="list-disc list-inside">
            <li>¿Podrías imaginar el sonido del espacio?</li>
            <li>¿Qué ruido hace un recuerdo?</li>
            <li>¿Y el silencio, dónde vibra?</li>
          </ul>
        </div>
      </div>

      {/* Columna derecha: Mensaje o multimedia */}
      <div className="flex items-center justify-center text-gray-400 text-sm italic">
        Todavía no es tiempo de escuchar.
      </div>

      {/* Navegación Anterior / Siguiente */}
      <div className="col-span-1 md:col-span-2 flex justify-between items-center mt-8">
        <a
          href="/discos/m04"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
        >
          <span className="text-xl">←</span> Anterior
        </a>

        <a
          href="/discos/m06"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
        >
          Siguiente <span className="text-xl">→</span>
        </a>
      </div>
    </div>
  );
}
