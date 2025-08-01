export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-white rounded-lg shadow-lg">
      {/* Columna izquierda: Curaduría */}
      <div>
        <h1 className="text-2xl font-bold mb-4">La culpa como forma de existencia</h1>
        <div className="text-xs text-gray-500 mb-4">
        <ul className="list-disc list-inside">
         <li>Película: The Eternal Daughter (Joanna Hogg, 2022)</li>
        </ul>
      </div>
        <p className="text-sm leading-relaxed text-gray-800 whitespace-pre-line">
          {`Esta serie es el retrato de quienes aprendieron a vivir pidiendo perdón por sentir.
Cuerpos que habitan lo cotidiano como castigo, que actúan sin saber si hay otra opción.
La culpa es una pedagogía invisible.

Se transmite en silencios, en gestos que enseñan que molestar es existir demasiado.
Las escenas de esta obra (inspiradas en la repetición doméstica, en el desborde íntimo y en el encierro emocional) nos interpelan desde lo no dicho.

Porque hay quienes nacieron ya siendo culpa. Y toda su vida intentaron no decepcionar, sin saber que nadie los esperaba libres.
Hay quienes no saben vivir sin pedir perdón.

Esta obra explora la culpa como forma de existencia: una herencia invisible, una emoción que se instala antes del lenguaje.

¿Qué pasa cuando la culpa se vuelve parte de la identidad? ¿Cuando vivir libre se siente como una traición?

“La culpa como forma de existencia” es una serie visual y poética que atraviesa lo cotidiano, lo íntimo y lo no dicho.`}
        </p>
      </div>

      {/* Columna derecha: Galería de imágenes */}
      <div className="grid grid-cols-1 gap-4">
        <img src="/images/m08/pdf /0001.png" alt="Imagen 1" className="rounded shadow" />
        <img src="/images/m08/pdf /0002.png" alt="Imagen 2" className="rounded shadow" />
        <img src="/images/m08/pdf /0003.png" alt="Imagen 3" className="rounded shadow" />
        <img src="/images/m08/pdf /0004.png" alt="Imagen 4" className="rounded shadow" />
        <img src="/images/m08/pdf /0005.png" alt="Imagen 5" className="rounded shadow" />
        <img src="/images/m08/pdf /0006.png" alt="Imagen 6" className="rounded shadow" />
        <img src="/images/m08/pdf /0007.png" alt="Imagen 7" className="rounded shadow" />
      </div>

      {/* Navegación Anterior / Siguiente */}
      <div className="col-span-1 md:col-span-2 flex justify-between items-center mt-8">
        <a
          href="/discos/m07"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
        >
          <span className="text-xl">←</span> Anterior
        </a>

        <a
          href="/discos/m09"
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition"
        >
          Siguiente <span className="text-xl">→</span>
        </a>
      </div>
    </div>
  );
}
