export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white rounded-lg shadow-lg">
      {/* Columna izquierda: Texto */}
      <div>
        <h1 className="text-2xl font-bold mb-4">La voz sin boca</h1>
        <p className="text-sm leading-relaxed text-gray-800 whitespace-pre-line">
          {`“I have no mouth and I must scream.”

Una frase, una advertencia, un futuro.

La historia de AM, la supercomputadora que aniquila a la humanidad
y deja vivos a cinco personas solo para torturarlas,
es también una pregunta sobre el lenguaje y el poder.

En este espacio,
la palabra fue abolida,
pero la conciencia persiste.

¿Qué pasa cuando ya no podemos hablar
pero seguimos pensando?

¿Qué queda de nosotrxs
cuando la voz ya no tiene cuerpo?

La arquitectura del silencio,
del encierro,
del grito mudo.`}
        </p>

        <div className="mt-8 text-xs text-gray-500">
          <p className="mb-2 font-semibold">Próximamente…</p>
          <ul className="list-disc list-inside">
            <li>¿Puede el espacio gritar?</li>
            <li>¿Puede un cuerpo callar por fuera y gritar por dentro?</li>
            <li>¿Puede la arquitectura ser un lenguaje de dolor?</li>
          </ul>
        </div>
      </div>

      {/* Columna derecha: Mensaje o multimedia */}
      <div className="flex items-center justify-center text-gray-400 text-sm italic">
        Todavía no es tiempo de gritar.
      </div>

      {/* Navegación Anterior / Siguiente */}
      <div className="col-span-1 md:col-span-2 flex justify-between items-center mt-8">
        <a
          href="/discos/m05"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
        >
          <span className="text-xl">←</span> Anterior
        </a>

        <a
          href="/discos/m07"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
        >
          Siguiente <span className="text-xl">→</span>
        </a>
      </div>
    </div>
  );
}
