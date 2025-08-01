export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white rounded-lg shadow-lg">
      {/* Columna izquierda: Texto */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Lo que somos, lo que escondimos</h1>
        <p className="text-sm leading-relaxed text-gray-800 whitespace-pre-line">
          {`Algunos cuerpos no nacen.
Algunos recuerdos no tienen dueño.
Pero eso no significa que no existan.

La memoria es una arquitectura frágil:
construimos lo que queremos mostrar,
pero también lo que decidimos ocultar.

Los replicantes, en Blade Runner 2049,
no son sólo máquinas.
Son preguntas.

¿Quién merece ser amado?
¿Quién merece ser llorado?
¿Quién merece un lugar en la historia?

La tecnología multiplica las vidas,
pero también los olvidos.

Y a veces, lo que se esconde,
dice más de nosotros
que lo que se muestra.`}
        </p>

        <div className="mt-8 text-xs text-gray-500">
          <p className="mb-2 font-semibold">Próximamente…</p>
          <ul className="list-disc list-inside">
            <li>¿Conocés la película?</li>
            <li>¿Reconocés la obra?</li>
            <li>¿Imaginás la arquitectura?</li>
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
          href="/discos/m09"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
        >
          <span className="text-xl">←</span> Anterior
        </a>

        <a
          href="/discos/m02"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
        >
          Siguiente <span className="text-xl">→</span>
        </a>
      </div>
    </div>
  );
}
