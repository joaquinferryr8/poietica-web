import { NextResponse } from 'next/server'

let comentarios: { id: number; asunto: string; contenido: string }[] = []
let contador = 1

export async function GET() {
  return NextResponse.json({ success: true, data: comentarios })
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const nuevoComentario = {
      id: contador++,
      asunto: body.asunto,
      contenido: body.comentario
    }
    comentarios.push(nuevoComentario)
    return NextResponse.json({ success: true, data: nuevoComentario })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error procesando el comentario' }, { status: 500 })
  }
}
