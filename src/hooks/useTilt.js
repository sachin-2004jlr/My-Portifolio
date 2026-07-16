import { useEffect, useRef } from 'react'

const canAnimate = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Perspective tilt that follows the pointer.
 * Transform is written inline; the CSS transition only applies on leave,
 * so the tilt tracks the cursor 1:1 but eases back when you exit.
 */
export default function useTilt({ max = 7, scale = 1.015, lift = 6 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !canAnimate()) return

    let raf = 0

    const onEnter = () => {
      el.style.transition = 'none'
    }
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width - 0.5
      const py = (e.clientY - r.top) / r.height - 0.5
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform =
          `perspective(900px) rotateY(${px * max}deg) rotateX(${-py * max}deg) ` +
          `translateY(${-lift}px) scale(${scale})`
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(raf)
      el.style.transition = ''
      el.style.transform = ''
    }

    el.addEventListener('pointerenter', onEnter)
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointerenter', onEnter)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [max, scale, lift])

  return ref
}
