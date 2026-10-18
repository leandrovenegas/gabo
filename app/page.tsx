import Video from './components/videos'
import WhatsAppButton from './components/whastapp'
import Image from 'next/image'
import BackgroundVideo from './components/backgroundvideo'
import Footer from './components/footer'
import PortfolioSection from './components/reelsection'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="text-white bg-black overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center h-screen">
        <BackgroundVideo url="video/loop_01.mp4" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70" />

        <div className="relative z-10 p-6">
          <h1 className="italic mb-6 font-bold tracking-tighter text-5xl md:text-7xl">
            <span className="block shadow-2xl">NEXT LIGHT</span>
            <span className="block text-4xl md:text-5xl">STUDIOS</span>
          </h1>

          <svg
            className="w-6 h-6 mx-auto mb-4 animate-bounce text-indigo-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>

          <h2 className="text-2xl md:text-3xl font-medium mb-8">
            We help you create the videos your next version would make.
          </h2>

          <Link href="/form">
            <button className="rounded-xl px-6 py-3 shadow-xl bg-indigo-500 hover:bg-fuchsia-500 font-bold text-xl transition-all duration-200">
              Start Your Project
            </button>
          </Link>
        </div>
      </section>

      {/* SECTION: DREAMS */}
      <section className="flex items-center justify-center text-center h-screen bg-cover bg-center bg-[url('/img/larain.jpg')]">
        <h3 className="text-4xl md:text-6xl font-bold px-6 md:px-12 max-w-3xl">
          We are a companion to your dreams
        </h3>
      </section>

      {/* SECTION: WHAT WE DO */}
      <section className="py-16 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-8">WHAT WE DO</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto px-4">
          {['Films & Docs', 'Commercials', 'Social Media', 'Corporate Content'].map((item, i) => (
            <li key={i} className="border border-white py-4 text-2xl rounded-xl hover:bg-white hover:text-black transition">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <PortfolioSection />

      {/* SECTION: GABRIEL BIO */}
      <section className="grid place-items-center min-h-screen bg-[url('/img/malla.svg')] bg-cover px-6 py-12">
  <div className="bg-stone-900/80 rounded-2xl p-8 md:p-10 max-w-4xl w-full flex flex-col items-center md:items-start gap-8 shadow-2xl">

    {/* Imagen de Gabriel */}
    <div className="relative w-[180px] h-[180px] flex-shrink-0 rounded-full overflow-hidden ring-4 ring-white/10">
      <Image
        src="/img/avatarGabo.jpg"
        alt="Portrait of Gabriel Hidalgo"
        fill
        style={{
          objectFit: 'cover',
          objectPosition: '50% 50%',
        }}
        priority
      />
    </div>

    {/* Texto biográfico */}
    <div className="text-left leading-relaxed">
      <h2 className="text-2xl font-bold mb-3">Gabriel Hidalgo</h2>

      <p className="text-lg mb-3">
        Film Director, Screenwriter, Cinematographer, Editor, Producer, and Executive Producer.
      </p>

      <p className="mb-3">
        He studied cinema in Chile, Cuba, and Argentina. Currently, he is working on an American
        feature film in Costa Rica titled <em>The Call of Mother Earth</em>.
      </p>

      <p className="mb-3">
        He has worked in over 15 countries as a content creator and digital nomad, producing diverse
        works for entrepreneurs around the world. His artistic interests include fiction filmmaking
        and virtual reality experiences.
      </p>

      <p>
        He currently resides in Costa Rica and is focused on creating spiritual cinema rooted in reality.
      </p>
    </div>

  </div>
</section>

      {/* OPTIONAL: Add footer if needed */}
      {/* <Footer /> */}
    </div>
  )
}
