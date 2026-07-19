import { useEffect, useRef } from 'react'

// Editorial dotted/dashed grid, faded out with a radial mask so it reads
// as a subtle texture. Drifts slower than the page on scroll for depth.
const mask = `repeating-linear-gradient(to right, #000 0 3px, transparent 3px 8px),
  repeating-linear-gradient(to bottom, #000 0 3px, transparent 3px 8px),
  radial-gradient(ellipse 75% 65% at 50% 0%, #000 55%, transparent 100%)`

export default function GridBackground() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(0, ${window.scrollY * 0.12}px, 0)`
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="grid-bg"
      aria-hidden="true"
      style={{
        maskImage: mask,
        WebkitMaskImage: mask,
        maskComposite: 'intersect',
        WebkitMaskComposite: 'source-in',
      }}
    />
  )
}
