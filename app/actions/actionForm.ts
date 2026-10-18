'use server';

import { supabase } from "../../lib/supabase";

// CREATE
export async function createContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const option = formData.get("option") as string;
  const uso = formData.get("uso") as string;
  const tipo = formData.get("tipo") as string;
  const presupuesto = formData.get("presupuesto") as string;
  const duracion = formData.get("duracion") as string;
  const tipodeContacto = formData.get("tipodeContacto") as string;

  const { error } = await supabase.from("contacts").insert([
    { 
      name, 
      email, 
      phone, 
      option, 
      uso, 
      tipo, 
      presupuesto, 
      duracion, 
      tipodeContacto 
    },
  ]);

  if (error) {
    console.error("Error al crear contacto:", error);
    throw new Error(error.message);
  }

  console.log("Contacto creado con éxito!");
}

// READ
export async function getContacts() {
  const { data, error } = await supabase
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
}

// DELETE
export async function deleteContact(id: string) {
  const { error } = await supabase.from("contacts").delete().eq("id", id);
  if (error) throw new Error(error.message);
}
