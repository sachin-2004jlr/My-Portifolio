import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { projects } from '../data/content'
import { ArrowUpRight } from './Icons'

// Initials from the first two significant words — a stand-in "logo" so each
// text card gets a visual anchor without inventing a fake screenshot.
const monogram = (name) =>
  name
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

// One card in the sticky stack. As the section scrolls, earlier cards shrink
// while later ones slide up and settle on top — a physical "deck" of work.
function StackCard({ p, i, total, progress, reduce }) {
  const targetScale = 1 - (total - 1 - i) * 0.035
  const scale = useTransform(progress, [i / total, 1], [1, targetScale])

  return (
    <div
      className="work__sticky"
      style={{ top: `calc(var(--nav-h, 72px) + 1.75rem + ${i * 16}px)` }}
    >
      <motion.article
        className={`project ${p.featured ? 'project--featured' : ''}`}
        style={reduce ? undefined : { scale }}
      >
        <div
          className="project__cover"
          style={{ '--cover-angle': `${118 + i * 31}deg` }}
          aria-hidden="true"
        >
          <span className="project__monogram">{monogram(p.name)}</span>
          <span className="project__cover-tag">{p.tags[0]}</span>
        </div>
        <div className="project__top">
          <span className="project__meta">
            <span className="project__index">
              {String(i + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
            </span>
            <span className="project__period">{p.period}</span>
          </span>
          {p.featured && <span className="project__badge">Featured</span>}
        </div>
        <h3 className="project__name">{p.name}</h3>
        {p.company && (
          <p className="project__company">
            {p.company}
            {p.private && <span className="project__private">Private</span>}
          </p>
        )}
        <p className="project__blurb">{p.blurb}</p>
        <ul className="project__points">
          {p.highlights.map((h, idx) => (
            <li key={idx}>{h}</li>
          ))}
        </ul>
        <ul className="project__tags">
          {p.tags.map((t) => (
            <li key={t} className="tag">{t}</li>
          ))}
        </ul>
        <div className="project__links">
          {p.demo && (
            <a
              className="project__link project__link--demo"
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo <ArrowUpRight />
            </a>
          )}
          {p.url && (
            <a className="project__link" href={p.url} target="_blank" rel="noopener noreferrer">
              View on GitHub <ArrowUpRight />
            </a>
          )}
          {!p.url && !p.demo && (
            <span className="project__note">Private company project · {p.company}</span>
          )}
        </div>
      </motion.article>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const reduce = useReducedMotion()
  const featuredCount = projects.filter((p) => p.featured).length
  const stackRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ['start start', 'end end'],
  })

  const shown = filter === 'featured' ? projects.filter((p) => p.featured) : projects

  return (
    <section className="section work" id="work">
      <SectionHeading
        index="04"
        eyebrow="Selected Work"
        title="Things I've designed, trained and shipped."
        sub="A mix of production platforms, deep-learning models and applied ML."
      />

      <Reveal className="work__filters" role="group" aria-label="Filter projects">
        <button
          className={`work__filter ${filter === 'all' ? 'is-active' : ''}`}
          onClick={() => setFilter('all')}
          aria-pressed={filter === 'all'}
        >
          All work <span className="work__filter-count">{projects.length}</span>
        </button>
        <button
          className={`work__filter ${filter === 'featured' ? 'is-active' : ''}`}
          onClick={() => setFilter('featured')}
          aria-pressed={filter === 'featured'}
        >
          Featured <span className="work__filter-count">{featuredCount}</span>
        </button>
      </Reveal>

      <div className="work__stack" ref={stackRef}>
        {shown.map((p, i) => (
          <StackCard
            key={p.name}
            p={p}
            i={i}
            total={shown.length}
            progress={scrollYProgress}
            reduce={reduce}
          />
        ))}
      </div>
    </section>
  )
}
