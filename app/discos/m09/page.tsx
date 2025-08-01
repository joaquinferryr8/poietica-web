export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white rounded-lg shadow-lg">
      {/* Columna izquierda: Texto */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Obsesiones que no iluminan</h1>
        <div className="text-xs text-gray-500 mb-4">
          <ul className="list-disc list-inside">
            <li>Película: The Lighthouse (Robert Eggers, 2019)</li>
            <li>Obra de arte: <i>Hipnosis</i> (Sascha Schneider, 1904)</li>
            <li>Arquitectura: Capilla Bruder Klaus, Peter Zumthor (2007)</li>
          </ul>
        </div>

        <p className="text-sm leading-relaxed text-gray-800 whitespace-pre-line">
          {`Hay faros que no iluminan.
Solo enceguecen al que mira de cerca.
Dos hombres atrapados en una isla.
O tal vez atrapados en sí mismos.
Da igual: el encierro es el mismo.

Prometeo robó el fuego y fue castigado.
Proteo sabía la verdad, pero nunca la revelaba.

Ellos también están atrapados en ese mito:
uno busca saber, el otro solo quiere huir.

Se odian. Se necesitan. Se derrumban.

Cuando el deseo de ser visto se vuelve obsesión,
no es la luz la que destruye:
es el espejo quemando al reflejo.`}
        </p>
      </div>

      {/* Columna derecha: Galería de imágenes */}
      <div className="grid grid-cols-1 gap-4">
        <img src="/images/obsesiones-que-no-iluminan-0001.png" alt="Imagen 1" className="rounded shadow" />
        <img src="/images/obsesiones-que-no-iluminan-0002.png" alt="Imagen 2" className="rounded shadow" />
        <img src="/images/obsesiones-que-no-iluminan-0003.png" alt="Imagen 3" className="rounded shadow" />
        <img src="/images/obsesiones-que-no-iluminan-0004.png" alt="Imagen 4" className="rounded shadow" />
        <img src="/images/obsesiones-que-no-iluminan-0005.png" alt="Imagen 5" className="rounded shadow" />
        <img src="/images/obsesiones-que-no-iluminan-0006.png" alt="Imagen 6" className="rounded shadow" />
        <img src="/images/obsesiones-que-no-iluminan-0007.png" alt="Imagen 7" className="rounded shadow" />
      </div>

      {/* Navegación Anterior / Siguiente */}
      <div className="col-span-1 md:col-span-2 flex justify-between items-center mt-8">
        <a
          href="/discos/m08"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
        >
          <span className="text-xl">←</span> Anterior
        </a>

        <a
          href="/discos/m01"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
        >
          Siguiente <span className="text-xl">→</span>
        </a>
      </div>
    </div>
  );
}
