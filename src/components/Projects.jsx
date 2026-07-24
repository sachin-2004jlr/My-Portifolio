import { useMemo, useRef, useState } from 'react'
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
    // Skip punctuation-only tokens (em dashes, separators) so they can't
    // become "letters" in the monogram.
    .filter((w) => /^[A-Za-z0-9]/.test(w))
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
        {(p.company || p.private) && (
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
            <span className="project__note">
              {p.company
                ? `Private company project · ${p.company}`
                : 'Private repository — walkthrough available on request'}
            </span>
          )}
        </div>
      </motion.article>
    </div>
  )
}

// Curated tech lenses so recruiters can jump to the kind of work they care
// about. A project matches a lens if it carries any of the lens's tags.
const LENSES = [
  { key: 'genai', label: 'GenAI / LLM', tags: ['RAG', 'LLM', 'OpenAI', 'Streamlit', 'Pinecone', 'Vector DB'] },
  { key: 'nlp', label: 'NLP', tags: ['NLP', 'Sentiment Analysis', 'Summarization'] },
  { key: 'cv', label: 'Computer Vision', tags: ['OpenCV', 'Computer Vision'] },
  { key: 'ml', label: 'Classic ML', tags: ['Scikit-learn', 'XGBoost', 'SVM', 'Random Forest', 'LSTM', 'TensorFlow', 'Keras', 'Deep Learning'] },
]

const matchesLens = (p, lens) => {
  const set = new Set(lens.tags)
  return p.tags.some((t) => set.has(t))
}

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const reduce = useReducedMotion()
  const stackRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ['start start', 'end end'],
  })

  // Build the filter bar: All + Featured + any lens that actually has matches.
  const filters = useMemo(() => {
    const base = [
      { key: 'all', label: 'All work', count: projects.length },
      { key: 'featured', label: 'Featured', count: projects.filter((p) => p.featured).length },
    ]
    const lenses = LENSES.map((l) => ({
      key: l.key,
      label: l.label,
      count: projects.filter((p) => matchesLens(p, l)).length,
    })).filter((l) => l.count > 0)
    return [...base, ...lenses]
  }, [])

  const shown = useMemo(() => {
    if (filter === 'all') return projects
    if (filter === 'featured') return projects.filter((p) => p.featured)
    const lens = LENSES.find((l) => l.key === filter)
    return lens ? projects.filter((p) => matchesLens(p, lens)) : projects
  }, [filter])

  return (
    <section className="section work" id="work">
      <SectionHeading
        index="04"
        eyebrow="Selected Work"
        title="Things I've designed, trained and shipped."
        sub="A mix of production platforms, deep-learning models and applied ML."
      />

      <Reveal className="work__filters" role="group" aria-label="Filter projects by focus">
        {filters.map((f) => (
          <button
            key={f.key}
            className={`work__filter ${filter === f.key ? 'is-active' : ''}`}
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
          >
            {f.label} <span className="work__filter-count">{f.count}</span>
          </button>
        ))}
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
