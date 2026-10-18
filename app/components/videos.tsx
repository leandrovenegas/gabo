"use client"
import React from "react"
import ReactPlayer from "react-player"

type VideoProps = {
  url: string
  onEnded?: () => void
}

export default function Video({ url, onEnded }: VideoProps) {
  return (
    <div style={{ width: "100%", aspectRatio: "16/9" }}>
      <ReactPlayer
        src={url}
        playing
        controls
        width="100%"
        height="100%"
        onEnded={onEnded}
      />
    </div>
  )
}