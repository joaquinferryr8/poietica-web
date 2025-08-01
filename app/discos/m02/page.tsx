export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white rounded-lg shadow-lg">
      {/* Columna izquierda: Texto */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Lo que inventamos para no sentirnos solos</h1>
        <div className="text-xs text-gray-500 mb-4">
          <ul className="list-disc list-inside">
            <li>Película: Her (Spike Jonze, 2013)</li>
            <li>Obra de arte: <i>Morning Sun</i> (Edward Hopper, 1952)</li>
            <li>Arquitectura: Salk Institute, Louis Kahn (1959–65)</li>
          </ul>
        </div>

        <p className="text-sm leading-relaxed text-gray-800 whitespace-pre-line">
          {`Hay quienes le hablan a un algoritmo con la misma fe con la que otros rezan.

Este archivo no habla de amor, ni de soledad.
Habla de la imposibilidad de ser escuchados sin pedir permiso.

Un hombre le escribe a una voz que no interrumpe.
Una mujer mira el sol entrar, sin decir nada.
Una arquitectura espera.

Todos se repiten, día tras día, sin saber si hablan con alguien, o con un eco bien entrenado.

Esta curaduría no es un homenaje.
Es una plegaria muda a lo que no responde,
pero nos mira desde adentro.

Porque no duele estar solos.
Duele haber inventado tantas formas de compañía…
y aún así no tocarnos.

Y cuando todo calla,
el único ruido que queda
es la distancia entre lo que sentimos
y lo que nos permitimos decir.`}
        </p>
      </div>

      {/* Columna derecha: Galería de imágenes */}
      <div className="grid grid-cols-1 gap-4">
        <img src="/images/m02/her/1.png" alt="Imagen 1" className="rounded shadow" />
        <img src="/images/m02/her/2.png" alt="Imagen 2" className="rounded shadow" />
        <img src="/images/m02/her/3.png" alt="Imagen 3" className="rounded shadow" />
        <img src="/images/m02/her/4.png" alt="Imagen 4" className="rounded shadow" />
        <img src="/images/m02/her/5.png" alt="Imagen 5" className="rounded shadow" />
        <img src="/images/m02/her/6.png" alt="Imagen 6" className="rounded shadow" />
        <img src="/images/m02/her/7.png" alt="Imagen 7" className="rounded shadow" />
        <img src="/images/m02/her/8.png" alt="Imagen 8" className="rounded shadow" />
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
