import { useState } from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { projects } from '../data/content'
import { ArrowUpRight } from './Icons'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const shown = filter === 'featured' ? projects.filter((p) => p.featured) : projects

  return (
    <section className="section work" id="work">
      <SectionHeading
        index="04"
        eyebrow="Selected Work"
        title="Things I've designed, trained and shipped."
        sub="A mix of production platforms, deep-learning models and applied ML."
      />

      <Reveal className="work__filters">
        <button
          className={`work__filter ${filter === 'all' ? 'is-active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All work
        </button>
        <button
          className={`work__filter ${filter === 'featured' ? 'is-active' : ''}`}
          onClick={() => setFilter('featured')}
        >
          Featured
        </button>
      </Reveal>

      <div className="work__grid">
        {shown.map((p, i) => (
          <Reveal
            as="article"
            className={`project ${p.featured ? 'project--featured' : ''}`}
            key={p.name}
            delay={(i % 3) * 0.05}
          >
            <div className="project__top">
              <span className="project__period">{p.period}</span>
              {p.featured && <span className="project__badge">Featured</span>}
            </div>
            <h3 className="project__name">{p.name}</h3>
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
            <a className="project__link" href={p.url} target="_blank" rel="noopener noreferrer">
              View on GitHub <ArrowUpRight />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
