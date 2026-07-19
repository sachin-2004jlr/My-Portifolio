import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'

export default function SectionHeading({ index, eyebrow, title, sub }) {
  const reduce = useReducedMotion()
  return (
    <div className="section-heading">
      <motion.span
        className="section-heading__rule"
        initial={{ scaleX: reduce ? 1 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
      <Reveal className="section-heading__row">
        {index && <span className="section-heading__index">{index}</span>}
        <span className="section-heading__eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal as="h2" className="section-heading__title" delay={0.05}>
        {title}
      </Reveal>
      {sub && (
        <Reveal className="section-heading__sub" delay={0.1}>
          {sub}
        </Reveal>
      )}
    </div>
  )
}
