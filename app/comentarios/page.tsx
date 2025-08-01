'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function ComentarioPage() {
  const [asunto, setAsunto] = useState('')
  const [comentario, setComentario] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [comentariosPrevios, setComentariosPrevios] = useState<any[]>([])

  useEffect(() => {
    fetchComentarios()
  }, [])

  const fetchComentarios = async () => {
    const { data, error } = await supabase
      .from('comentarios')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error al obtener comentarios:', error)
    } else {
      setComentariosPrevios(data || [])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.from('comentarios').insert([
      { asunto, contenido: comentario }
    ])
    if (!error) {
      setEnviado(true)
      setAsunto('')
      setComentario('')
      fetchComentarios()
    } else {
      console.error('Error al enviar comentario:', error)
    }
  }

  return (
    <div className="p-8 max-w-xl mx-auto font-sans text-gray-800">
      <h1 className="text-xl font-bold mb-4">Cliente número: 00001</h1>

      <p className="text-sm italic text-gray-600 mb-4">
        ¿Querés compartir algo que sentiste al recorrer estos paisajes? Este espacio es para vos.
      </p>

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

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Enviar
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-sm font-semibold mb-2 text-gray-600">Ver lo que otros comentaron:</h2>
        <ul className="space-y-2 text-sm">
          {comentariosPrevios.map((c) => (
            <li key={c.id} className="border-t pt-2">
              <strong>{c.asunto}:</strong> {c.contenido}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
