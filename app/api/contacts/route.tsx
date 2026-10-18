import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// ✅ Variables de entorno correctas
console.log("SUPABASE_URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log(
  "SUPABASE_SERVICE_ROLE_KEY:",
  process.env.SUPABASE_SERVICE_ROLE_KEY ? "✅ cargada" : "❌ vacía"
);

// ⚙️ Cliente Supabase para backend
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// 📤 POST — Crear un nuevo contacto
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validación rápida
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // Inserta los datos en la tabla "contacts"
    const { error } = await supabase.from("contacts").insert([
      {
        name: body.name,
        email: body.email,
        phone: body.phone,
        option: body.option,
        tipo: body.tipo,
        uso: body.uso,
        presupuesto: body.presupuesto,
        tipodeContacto: body.tipodeContacto,
      },
    ]);

    if (error) throw error;

    return NextResponse.json({ message: "Contacto guardado correctamente" });
  } catch (err: any) {
    console.error("❌ Error al guardar contacto:", err.message);
    return NextResponse.json(
      { error: "Error interno del servidor", details: err.message },
      { status: 500 }
    );
  }
}

// 📥 GET — Obtener todos los contactos
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json(data);
  } catch (err: any) {
    console.error("❌ Error al obtener contactos:", err.message);
    return NextResponse.json(
      { error: "Error al obtener contactos", details: err.message },
      { status: 500 }
    );
  }
}
