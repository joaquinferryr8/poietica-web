import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const data = await req.json(); // Recibe { asunto, comentario }

  const filePath = path.join(process.cwd(), "comentarios.json");

  let comentarios = [];

  // Si el archivo ya existe, leemos su contenido
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    comentarios = JSON.parse(fileContent);
  }

  // Agregamos el nuevo comentario
  comentarios.push({
    ...data,
    fecha: new Date().toISOString(),
  });

  // Guardamos el nuevo array en el archivo
  fs.writeFileSync(filePath, JSON.stringify(comentarios, null, 2));

  return NextResponse.json({ success: true });
}
