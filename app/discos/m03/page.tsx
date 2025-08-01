export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white rounded-lg shadow-lg">
      {/* Columna izquierda: Texto */}
      <div>
        <h1 className="text-2xl font-bold mb-4">En el centro, la voz</h1>
        <p className="text-sm leading-relaxed text-gray-800 whitespace-pre-line">
          {`A veces creemos que la voz es el canal.

Que sirve para transmitir lo que pensamos,
lo que sentimos, lo que somos.

Pero hay momentos en que la voz
es el mensaje.

No importa tanto lo que dice,
sino cómo vibra.

Cómo se quiebra.
Cómo se sostiene.

La voz construye presencias
aunque no haya cuerpo.

Y eso, en medio del ruido digital,
es una forma de resistencia.

Escuchar es también una forma de cuidar.`}
        </p>

        <div className="mt-8 text-xs text-gray-500">
          <p className="mb-2 font-semibold">Próximamente…</p>
          <ul className="list-disc list-inside">
            <li>¿Cómo suena una ausencia?</li>
            <li>¿Cuándo una voz se vuelve paisaje?</li>
            <li>¿Podemos grabar el silencio?</li>
          </ul>
        </div>
      </div>

      {/* Columna derecha: Galería de imágenes */}
      <div className="grid grid-cols-1 gap-4">
        <img src="/images/m03/close/0001.png" alt="Imagen 1" className="rounded shadow" />
        <img src="/images/m03/close/0002.png" alt="Imagen 2" className="rounded shadow" />
        <img src="/images/m03/close/0003.png" alt="Imagen 3" className="rounded shadow" />
        <img src="/images/m03/close/0004.png" alt="Imagen 4" className="rounded shadow" />
        <img src="/images/m03/close/0005.png" alt="Imagen 5" className="rounded shadow" />
        <img src="/images/m03/close/0006.png" alt="Imagen 6" className="rounded shadow" />
        <img src="/images/m03/close/0007.png" alt="Imagen 7" className="rounded shadow" />
      </div>

      {/* Navegación Anterior / Siguiente */}
      <div className="col-span-1 md:col-span-2 flex justify-between items-center mt-8">
        <a
          href="/discos/m02"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
        >
          <span className="text-xl">←</span> Anterior
        </a>

        <a
          href="/discos/m04"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
        >
          Siguiente <span className="text-xl">→</span>
        </a>
      </div>
    </div>
  );
}
