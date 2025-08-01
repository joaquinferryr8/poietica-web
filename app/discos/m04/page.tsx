export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white rounded-lg shadow-lg">
      {/* Columna izquierda: Texto */}
      <div>
        <h1 className="text-2xl font-bold mb-4">La voz que edita el mundo</h1>
        <p className="text-sm leading-relaxed text-gray-800 whitespace-pre-line">
          {`En Her, Theodore se enamora de una voz.

Pero no es una voz cualquiera.
Es una voz que aprende.
Que se transforma.
Que lo modifica.

En esa película, la tecnología
no es una herramienta,
sino un espejo.

La pregunta ya no es si las máquinas
pueden pensar o sentir…

…sino si nosotros aún podemos.

El sistema operativo de Her
no tiene cuerpo, pero genera deseo.
No tiene ojos, pero ve lo que otros no.

¿Y si las tecnologías no solo nos asisten,
sino que nos editan?

¿Y si esa edición no es técnica,
sino emocional, narrativa, vital?`}
        </p>

        <div className="mt-8 text-xs text-gray-500">
          <p className="mb-2 font-semibold">Próximamente…</p>
          <ul className="list-disc list-inside">
            <li>¿Cómo se programan las emociones?</li>
            <li>¿Cuántas versiones de vos mismo usás por día?</li>
            <li>¿Cuál es tu voz cuando nadie escucha?</li>
          </ul>
        </div>
      </div>

      {/* Columna derecha: Mensaje o multimedia */}
      <div className="flex items-center justify-center text-gray-400 text-sm italic">
        Todavía no es tiempo de ver.
      </div>

      {/* Navegación Anterior / Siguiente */}
      <div className="col-span-1 md:col-span-2 flex justify-between items-center mt-8">
        <a
          href="/discos/m03"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
        >
          <span className="text-xl">←</span> Anterior
        </a>

        <a
          href="/discos/m05"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
        >
          Siguiente <span className="text-xl">→</span>
        </a>
      </div>
    </div>
  );
}
