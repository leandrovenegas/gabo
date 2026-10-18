import Link from 'next/link';
import {getContacts} from '../actions/actionForm';
export const revalidate = 0;
export default async function  page(){

  
  const formularios = await getContacts();
 let fecha = (fecha)=>{

   let creaction  = new Date(fecha);    
   const fechaChilena = creaction.toLocaleString("es-CL", {
  timeZone: "America/Santiago",
  dateStyle: "full",
  timeStyle: "short",
});

   return fechaChilena;
 }
console.log(formularios);

    return (
        <div>
        <div className="flex flex-col justify-center items-center  mt-10 mb-10">
       <Link href={'/'}>
        <h1 className="text-6xl font-bold mb-4">Forms NextLights</h1></Link>
        </div>

        <div className="flex flex-col items-center">
       
        {formularios.map((form) => (
            <div key={form.id} className="font-semibold  bg-gray-600 p-4 rounded  w-96 mb-4 shadow-lg">
            <p className="">Nombre: {form.name}</p>
            <p className="">Email: {form.email}</p>
            <p className="">Teléfono: {form.phone}</p>
            <p className="">Tipo: {form.tipo}</p>
            <p className="">Duracion: {form.duracion}</p>
            <p className="">uso: {form.uso}</p>
            <p className="">Producción: {form.presupuesto}</p>
            <p className="">tipo decontacto: {form.tipodeContacto}</p>
            <p className="">Fecha de creación: {fecha(form.created_at)}</p>
            </div>
        ))}
        </div>
        </div>)
         
};