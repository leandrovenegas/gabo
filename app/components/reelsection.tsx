"use client"
import { useState } from "react"
import Video from "./videos"
import BackgroundVideo from "./backgroundvideo"

export default function PortfolioSection() {
  const [showVideo, setShowVideo] = useState(false)
  const [overlay, setOverlay] = useState(false)

  const handlePlay = () => {
    setShowVideo(true)
    setOverlay(true) // tapamos el fondo
  }

  const handleEnd = () => {
    setShowVideo(false)
    setOverlay(false) // vuelve a verse el fondo
  }

  return (
    <section className="rounded-2xl h-screen relative flex flex-col items-center justify-center text-center text-white">
      {/* Fondo loop */}
      <BackgroundVideo url={"video/loop_02.mp4"} />

      {/* Overlay negro */}
      {overlay && (
        <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
      )}

      <div className="z-10">
        <p className="mt-8 font-bold text-6xl text-neutral-100 bg-black">
          PORTFOLIO HIGHLIGHTS
        </p>

        <div className="grid grid-cols-2 justify-center h-full gap-4 mt-8">
          <div className="col-span-2">
            {!showVideo && (
              <button
                onClick={handlePlay}
                className="rounded-xl shadow-xl bg-indigo-500 hover:bg-yellow-500 mb-8 font-bold text-white h-10 w-40"
              >
                <p className="text-3xl">SEE REEL</p>
              </button>
            )}

            {showVideo && (
              <div className="w-full max-w-4xl mx-auto">
                <Video
                  url="https://youtu.be/VI7kd2GM76w" // tu reel
                  onEnded={handleEnd}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}