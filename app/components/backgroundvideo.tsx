"use client";
import React from "react";

export default function BackgroundVideo({url}) {
  return (
   
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0  w-full h-full object-cover"
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  );
}