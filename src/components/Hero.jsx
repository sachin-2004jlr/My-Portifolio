import { motion } from 'framer-motion'
import { profile, projects } from '../data/content'
import { ArrowUpRight, ArrowDownRight } from './Icons'

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)
  const stack = featured.length ? featured : projects.slice(0, 3)

  return (
    <section className="hero" id="top">
      <div className="hero__head">
        <motion.span
          className="hero__year"
          variants={rise} initial="hidden" animate="show" custom={0}
        >
          {profile.year}
        </motion.span>

        <motion.p
          className="hero__kicker"
          variants={rise} initial="hidden" animate="show" custom={1}
        >
          {profile.headline.join(' ')}
        </motion.p>

        <motion.h1
          className="hero__title"
          variants={rise} initial="hidden" animate="show" custom={2}
        >
          {profile.name}
        </motion.h1>
      </div>

      <motion.div
        className="hero__mid"
        variants={rise} initial="hidden" animate="show" custom={3}
      >
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
            <img
              className="hero__portrait-img"
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width="300"
              height="375"
              loading="eager"
              decoding="async"
            />
          </div>
          <span className="hero__portrait-cap">{profile.based}</span>
        </div>
      </motion.div>

      <motion.p
        className="hero__statement"
        variants={rise} initial="hidden" animate="show" custom={4}
      >
        {profile.statement}
      </motion.p>

      <motion.div
        className="hero__cta"
        variants={rise} initial="hidden" animate="show" custom={5}
      >
        <a className="btn btn--accent" href="#contact">Get in touch</a>
        <a className="btn btn--ghost" href="#work">See selected work</a>
      </motion.div>

      <motion.div
        className="hero__work"
        variants={rise} initial="hidden" animate="show" custom={6}
      >
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
