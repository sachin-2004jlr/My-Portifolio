import { useEffect, useRef } from 'react'

/**
 * A second, darker copy of the dotted grid, masked to a soft circle that
 * follows the pointer — the grid "lights up" around the cursor.
 * Monochrome, uses the existing grid motif. Desktop / fine-pointer only.
 */
export default function Spotlight() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (
      !window.matchMedia('(pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }
    el.dataset.on = 'true'

    let raf = 0
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--mx', e.clientX + 'px')
        el.style.setProperty('--my', e.clientY + 'px')
      })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
    }
  }, [])

  return <div ref={ref} className="spotlight-grid" aria-hidden="true" />
}
