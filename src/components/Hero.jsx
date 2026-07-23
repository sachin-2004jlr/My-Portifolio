import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { profile, projects } from '../data/content'
import { ArrowUpRight, ArrowDownRight } from './Icons'
import useMagnetic from '../hooks/useMagnetic'

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

// Each letter flips up on the X axis — cinematic, staggered.
const char = {
  hidden: { opacity: 0, rotateX: -85, y: '0.35em' },
  show: (i = 0) => ({
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { duration: 0.75, delay: 0.22 + i * 0.045, ease: [0.22, 1, 0.36, 1] },
  }),
}

// Cycles the kicker through profile.roles with a soft vertical fade.
function RotatingRole({ roles }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (roles.length < 2) return
    const id = setInterval(() => setI((n) => (n + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [roles.length])
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={i}
        className="hero__kicker-role"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {roles[i]}
      </motion.span>
    </AnimatePresence>
  )
}

function Title({ name, reduce }) {
  if (reduce) return <h1 className="hero__title hero__title--plain">{name}</h1>
  return (
    <h1 className="hero__title" aria-label={name}>
      {name.split('').map((c, i) => (
        <motion.span
          key={i}
          className="hero__title-char"
          variants={char}
          initial="hidden"
          animate="show"
          custom={i}
          aria-hidden="true"
        >
          {/* The 3D flip lives on the outer span and the gradient text-clip on
              the inner one. Keeping them on separate elements avoids the
              compositing bug where a clipped background paints as a solid box. */}
          <span className="hero__title-glyph">{c === ' ' ? ' ' : c}</span>
        </motion.span>
      ))}
    </h1>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  // Featured first, then fill — the stack always fans out three cards.
  const stack = [
    ...projects.filter((p) => p.featured),
    ...projects.filter((p) => !p.featured),
  ].slice(0, 3)

  const ctaPrimary = useMagnetic({ strength: 0.25 })
  const ctaGhost = useMagnetic({ strength: 0.25 })

  return (
    <section className="hero" id="top">
      <div className="hero__head">
        <motion.span className="hero__year" variants={rise} initial="hidden" animate="show" custom={0}>
          {profile.year}
        </motion.span>

        <motion.p className="hero__kicker" variants={rise} initial="hidden" animate="show" custom={1}>
          {reduce ? profile.roles[0] : <RotatingRole roles={profile.roles} />}
        </motion.p>

        <Title name={profile.name} reduce={reduce} />
      </div>

      <motion.div className="hero__mid" variants={rise} initial="hidden" animate="show" custom={3}>
        <div className="hero__panel">
          <ul className="hero__services">
            {profile.services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="hero__panel-foot">
            <span className="hero__avail">
              <span className="hero__avail-dot" />
              {profile.availability}
            </span>
            <a className="btn btn--sm" href="#work">
              View work <ArrowUpRight />
            </a>
          </div>
        </div>

        <div className="hero__portrait">
          <div className="hero__portrait-frame">
            <picture>
              <source
                type="image/webp"
                srcSet={`${profile.photoWebpSmall} 480w, ${profile.photoWebp} 760w`}
                sizes="(max-width: 900px) 62vw, 340px"
              />
              <img
                className="hero__portrait-img"
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width={profile.photoWidth}
                height={profile.photoHeight}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </picture>
          </div>
          <span className="hero__portrait-cap">{profile.based}</span>
        </div>
      </motion.div>

      <motion.p className="hero__statement" variants={rise} initial="hidden" animate="show" custom={4}>
        {profile.statement}
      </motion.p>

      <motion.div className="hero__cta" variants={rise} initial="hidden" animate="show" custom={5}>
        <a className="btn btn--accent" href="#contact" ref={ctaPrimary}>Get in touch</a>
        <a className="btn btn--ghost" href="#work" ref={ctaGhost}>See selected work</a>
      </motion.div>

      <motion.div className="hero__work" variants={rise} initial="hidden" animate="show" custom={6}>
        <div className="hero__work-stack" aria-hidden="true">
          {stack.map((p) => (
            <div className="hero__work-card" key={p.name}>
              <span className="hero__work-card-name">{p.name}</span>
              <span className="hero__work-card-tag">{p.tags.slice(0, 2).join(' · ')}</span>
            </div>
          ))}
        </div>
        <div className="hero__work-label">
          <a className="hero__work-eyebrow" href="#work">
            Recent work <ArrowDownRight />
          </a>
          <h2 className="hero__work-title">Built to ship.</h2>
        </div>
      </motion.div>
    </section>
  )
}
