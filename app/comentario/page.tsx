'use client';

import React, { useState } from "react";

export default function ComentarioPage() {
  const [asunto, setAsunto] = useState("");
  const [comentario, setComentario] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Enviar a una API (la vamos a crear en el siguiente paso)
    const res = await fetch("/api/comentarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ asunto, comentario }),
    });

    if (res.ok) {
      setEnviado(true);
      setAsunto("");
      setComentario("");
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto font-sans text-gray-800">
      <h1 className="text-xl font-bold mb-4">Cliente número: 00003</h1>

      {enviado ? (
        <p className="text-green-600">Gracias por compartir. Tu comentario fue enviado.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Asunto</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Comentario</label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded"
              rows={5}
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              required
            />
          </div>

          <p className="text-xs italic text-gray-500">
            ¿Qué sentiste? Contanos lo que quieras: historia, sensación, recomendación... Armemos un museo en conjunto.
          </p>

          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
}
