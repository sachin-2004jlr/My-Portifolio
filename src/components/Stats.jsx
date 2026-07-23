import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { stats as STATS } from '../data/content'

function Counter({ value, decimals = 0, suffix }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(reduce ? value : 0)

  useEffect(() => {
    if (reduce) return
    const el = ref.current
    if (!el) return
    let raf = 0
    let started = false
    const run = () => {
      const start = performance.now()
      const dur = 1300
      const tick = (now) => {
        const t = Math.min(1, (now - start) / dur)
        const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
        setDisplay(value * eased)
        if (t < 1) raf = requestAnimationFrame(tick)
        else setDisplay(value)
      }
      raf = requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true
            run()
          }
        })
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, reduce])

  const shown = decimals ? display.toFixed(decimals) : Math.round(display).toString()
  return (
    <span ref={ref} className="stat__value">
      {shown}
      <span className="stat__suffix">{suffix}</span>
    </span>
  )
}

export default function Stats() {
  return (
    <section className="stats" aria-label="Highlights">
      <div className="stats__inner">
        {STATS.map((s, i) => (
          <motion.div
            className="stat"
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
            <span className="stat__label">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
