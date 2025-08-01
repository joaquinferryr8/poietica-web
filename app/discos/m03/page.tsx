export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white rounded-lg shadow-lg">
      {/* Columna izquierda: Curaduría */}
      <div>
        <h1 className="text-2xl font-bold mb-4">El amor antes del lenguaje</h1>

        <div className="text-xs text-gray-500 mb-4">
          <ul className="list-disc list-inside">
            <li>Película: Close (Lukas Dhont, 2022)</li>
          </ul>
        </div>

        <p className="text-sm leading-relaxed text-gray-800 whitespace-pre-line">
          {`¿Qué cuerpos quedan atrapados cuando el lenguaje no alcanza?
¿Qué vínculos se disuelven porque nunca se les enseñó a nombrarse sin culpa?

Hay gestos que son ternura… hasta que se vuelven sospecha.
Hay silencios que se heredan como forma de protección.

Pero nadie enseña cómo se sobrevive al amor que no se puede decir.

Lo que no se dijo,
¿de verdad nunca existió?

Esta pieza no busca justicia,
ni redención.

Es un testimonio sin voz,
un intento de traducir lo que se fractura
cuando alguien aprende que amar —si no se dice—
duele igual.

Porque hay juegos que se transforman en heridas.
Porque hay gestos que, solo después de perderse,
entendemos como confesiones.

Porque la infancia no protege:
a veces, condena.

Y lo más cruel del olvido…
es saber que aún sigue esperando ser perdonado.`}
        </p>

        {/* Preguntas en lista */}
        <div className="mt-8 text-xs text-gray-500">
          <p className="mb-2 font-semibold">Preguntas para no olvidar:</p>
          <ul className="list-disc list-inside">
            <li>¿Alguna vez heriste por no saber cómo nombrar lo que sentías?</li>
            <li>¿Qué parte de vos todavía espera que alguien entienda lo que nunca dijiste?</li>
            <li>¿Cuántas veces confundiste silencio con protección?</li>
            <li>¿A quién quisiste perdonar pero no supiste cómo?</li>
            <li>¿Y si ese gesto que ignoraste… era un pedido de ayuda?</li>
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
