'use client'
import { useFormStatus } from "react-dom";


export default function SubmitButton(){
    const {pending} = useFormStatus();
    return(
        <button 
        type='submit'
        aria-disabled={pending}
        disabled={pending}
        className="w-full bg-blue-600 text-white p2  rounded-lg hover:bg-blue-700"
        
        >
            {pending ? "Loading...":"Enviar"}
        </button>

    )
}