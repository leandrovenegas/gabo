import Image from "next/image";
import React from "react";

type Props = {
  phone: string; // número en formato internacional, ej: "56912345678"
  message?: string; // mensaje opcional
};

export default function WhatsAppButton({ phone, message = "" }: Props) {

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      aria-label="Chat on WhatsApp"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/img/whastapp.svg" 
        alt="Chat on WhatsApp"
        width={200}
        height={60}
      />
    </a>
  );
}