import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

function Char({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1])
  return <motion.span style={{ opacity }}>{children}</motion.span>
}

/**
 * Character-by-character scroll reveal: each glyph fades from dim to full
 * as the paragraph passes through the viewport. Words stay intact so
 * wrapping is clean. Falls back to plain text for reduced-motion.
 */
export default function AnimatedText({ text, className = '' }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.5'],
  })

  if (reduce) {
    return <p className={className}>{text}</p>
  }

  const total = text.length
  const words = text.split(' ')
  let idx = 0

  return (
    <p ref={ref} className={`anim-text ${className}`}>
      {words.map((word, wi) => {
        const chars = [...word]
        const wordEl = (
          <span className="anim-text__word" key={`w${wi}`}>
            {chars.map((c) => {
              const i = idx++
              const start = i / total
              const end = Math.min(1, start + 4 / total)
              return (
                <Char key={i} progress={scrollYProgress} range={[start, end]}>
                  {c}
                </Char>
              )
            })}
          </span>
        )
        idx++ // the space that follows
        return (
          <span key={`s${wi}`}>
            {wordEl}
            {wi < words.length - 1 ? ' ' : ''}
          </span>
        )
      })}
    </p>
  )
}
