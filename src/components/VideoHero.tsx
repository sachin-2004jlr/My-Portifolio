import { useEffect, useRef, type FormEvent } from 'react'
import { Globe, ArrowRight, Mail } from 'lucide-react'
// lucide dropped brand marks (GitHub/LinkedIn) — use our own inline SVGs.
import { GitHubIcon, LinkedInIcon } from './Icons'

// Self-hosted (downloaded from the original, compressed) so nothing is
// hotlinked from a third-party CDN and it can't disappear.
const VIDEO_SRC = './hero.mp4'
const VIDEO_POSTER = './hero-poster.jpg'

const EMAIL = 'sachin2004jlr@gmail.com'

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number>(0)
  const fadingOutRef = useRef<boolean>(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Respect reduced-motion: hold a single still frame (the poster), no loop/fade.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const still = () => {
        video.pause()
        video.style.opacity = '1'
      }
      video.addEventListener('loadeddata', still)
      still()
      return () => video.removeEventListener('loadeddata', still)
    }

    video.style.opacity = '0'

    // rAF-based opacity fade that resumes from the current opacity and
    // cancels any in-flight animation so fades never compete.
    const fade = (target: number, duration: number, onDone?: () => void) => {
      cancelAnimationFrame(rafRef.current)
      const from = parseFloat(video.style.opacity || '0')
      const start = performance.now()
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration)
        video.style.opacity = String(from + (target - from) * t)
        if (t < 1) rafRef.current = requestAnimationFrame(step)
        else onDone?.()
      }
      rafRef.current = requestAnimationFrame(step)
    }

    const fadeIn = () => {
      fadingOutRef.current = false
      fade(1, 500)
    }
    const fadeOut = () => {
      fadingOutRef.current = true
      fade(0, 500)
    }

    const onLoaded = () => {
      video.play().catch(() => {})
      fadeIn()
    }
    const onTimeUpdate = () => {
      if (!video.duration) return
      const remaining = video.duration - video.currentTime
      if (remaining <= 0.55 && !fadingOutRef.current) fadeOut()
    }
    const onEnded = () => {
      cancelAnimationFrame(rafRef.current)
      video.style.opacity = '0'
      setTimeout(() => {
        video.currentTime = 0
        video.play().catch(() => {})
        fadeIn()
      }, 100)
    }

    video.addEventListener('loadeddata', onLoaded)
    video.addEventListener('timeupdate', onTimeUpdate)
    video.addEventListener('ended', onEnded)
    if (video.readyState >= 2) onLoaded()

    return () => {
      cancelAnimationFrame(rafRef.current)
      video.removeEventListener('loadeddata', onLoaded)
      video.removeEventListener('timeupdate', onTimeUpdate)
      video.removeEventListener('ended', onEnded)
    }
  }, [])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const input = (e.currentTarget as HTMLFormElement).elements.namedItem(
      'email',
    ) as HTMLInputElement | null
    const from = input?.value?.trim()
    const body = from ? `\n\n(Reply to: ${from})` : ''
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      "Let's work together",
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="top" className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      {/* Full-screen looping background video (custom JS fade, see effect) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover translate-y-[17%] scale-110"
        src={VIDEO_SRC}
        poster={VIDEO_POSTER}
        muted
        autoPlay
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      {/* Legibility scrim over the video */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70 pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-20 pl-6 pr-6 py-6">
        <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-8">
            <a href="#top" className="flex items-center gap-2 text-white font-semibold text-lg whitespace-nowrap">
              <Globe size={24} />
              Sachin S
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#work" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Work</a>
              <a href="#skills" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Skills</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sachin-2004jlr"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline text-white text-sm font-medium hover:text-white/80 transition-colors whitespace-nowrap"
            >
              GitHub
            </a>
            <a href="#contact" className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium whitespace-nowrap">
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        <h1
          style={{ fontFamily: "'Instrument Serif', serif" }}
          className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight whitespace-nowrap"
        >
          Built for the curious
        </h1>

        <div className="max-w-xl w-full space-y-4">
          <form onSubmit={onSubmit} className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              aria-label="Your email"
              className="flex-1 bg-transparent outline-none border-none text-white placeholder:text-white/40 text-base"
            />
            <button
              type="submit"
              aria-label="Get in touch"
              className="bg-white rounded-full p-3 text-black hover:scale-105 transition-transform"
            >
              <ArrowRight size={20} />
            </button>
          </form>

          <p className="text-white text-sm leading-relaxed px-4">
            Full Stack AI Engineer building intelligent, production-grade applications — from model to
            interface. Drop your email and let's build something, or explore my work below.
          </p>
        </div>

        <a
          href="#work"
          className="liquid-glass rounded-full px-8 py-3 mt-8 text-white text-sm font-medium hover:bg-white/5 transition-colors"
        >
          View selected work
        </a>
      </div>

      {/* Social footer */}
      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <a
          href="https://github.com/sachin-2004jlr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <GitHubIcon width={20} height={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/sachin-s-4a74b72a9/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <LinkedInIcon width={20} height={20} />
        </a>
        <a
          href={`mailto:${EMAIL}`}
          aria-label="Email"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <Mail size={20} />
        </a>
      </div>
    </section>
  )
}
