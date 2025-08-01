export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white rounded-lg shadow-lg">
      {/* Columna izquierda: Texto */}
      <div>
        <h1 className="text-2xl font-bold mb-4">La voz que vibra en los márgenes</h1>
        <p className="text-sm leading-relaxed text-gray-800 whitespace-pre-line">
          {`No hay voz sin cuerpo.
No hay vibración sin materia.

Los márgenes no son el borde de algo más grande,
son territorios vivos donde se crea lo inaudito.

Una nota desafinada puede ser el comienzo de un nuevo lenguaje.
Un error, una nueva estética.

¿Y si el murmullo fuese más poderoso que el grito?
¿Y si el tartamudeo contuviera más verdad que la elocuencia?

Las voces que tiemblan,
que dudan,
que rompen el ritmo,
son las que nos enseñan a escuchar de nuevo.`}
        </p>

        <div className="mt-8 text-xs text-gray-500">
          <p className="mb-2 font-semibold">Ejercicios de escucha:</p>
          <ul className="list-disc list-inside">
            <li>Buscar vibraciones en lo que se suele descartar.</li>
            <li>Prestar atención al silencio entre las palabras.</li>
            <li>Escuchar con el cuerpo, no sólo con el oído.</li>
          </ul>
        </div>
      </div>

      {/* Columna derecha: Contenido */}
      <div className="flex items-center justify-center text-gray-400 text-sm italic">
        Hay frecuencias que aún no sabemos oír.
      </div>

      {/* Navegación Anterior / Siguiente */}
      <div className="col-span-1 md:col-span-2 flex justify-between items-center mt-8">
        <a
          href="/discos/m06"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
        >
          <span className="text-xl">←</span> Anterior
        </a>

        <a
          href="/discos/m08"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
        >
          Siguiente <span className="text-xl">→</span>
        </a>
      </div>
    </div>
  );
}
