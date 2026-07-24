import { useMemo, useState } from 'react'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TiltCard from './TiltCard'
import { certifications } from '../data/content'
import { ArrowUpRight } from './Icons'

// Bucket each certificate by issuer so recruiters can filter.
const groupOf = (issuer = '') => {
  const s = issuer.toLowerCase()
  if (s.includes('anthropic')) return 'Anthropic'
  if (s.includes('google')) return 'Google'
  return 'Other'
}

const PREVIEW_COUNT = 6

export default function Certifications() {
  const [filter, setFilter] = useState('All')
  const [expanded, setExpanded] = useState(false)
  const verifiable = certifications.filter((c) => c.url).length

  const filters = useMemo(() => {
    const counts = certifications.reduce((acc, c) => {
      const g = groupOf(c.issuer)
      acc[g] = (acc[g] || 0) + 1
      return acc
    }, {})
    return [
      { key: 'All', count: certifications.length },
      ...['Google', 'Anthropic', 'Other']
        .filter((g) => counts[g])
        .map((g) => ({ key: g, count: counts[g] })),
    ]
  }, [])

  const shown =
    filter === 'All'
      ? certifications
      : certifications.filter((c) => groupOf(c.issuer) === filter)

  const visible = expanded ? shown : shown.slice(0, PREVIEW_COUNT)
  const hidden = shown.length - visible.length

  const pick = (key) => {
    setFilter(key)
    setExpanded(false) // each filter starts collapsed
  }

  return (
    <section className="section certs" id="certifications">
      <SectionHeading
        index="05"
        eyebrow="Credentials"
        title="Certifications & achievements."
        sub={`${certifications.length} credentials across Generative AI, cloud and data — ${verifiable} with public verification links.`}
      />

      <Reveal className="work__filters" role="group" aria-label="Filter certifications by issuer">
        {filters.map((f) => (
          <button
            key={f.key}
            className={`work__filter ${filter === f.key ? 'is-active' : ''}`}
            onClick={() => pick(f.key)}
            aria-pressed={filter === f.key}
          >
            {f.key} <span className="work__filter-count">{f.count}</span>
          </button>
        ))}
      </Reveal>

      <div className="certs__grid">
        {visible.map((c, i) => (
          <Reveal className="certs__cell" key={c.title + c.year} delay={(i % 3) * 0.05}>
            <TiltCard className="cert-card" max={5} lift={3}>
              <span className="cert-card__num">{String(i + 1).padStart(2, '0')}</span>
              <div className="cert-card__head">
                <h3 className="cert-card__title">{c.title}</h3>
                <span className="cert-card__year">{c.year}</span>
              </div>
              {c.issuer && <p className="cert-card__issuer">{c.issuer}</p>}
              <p className="cert-card__detail">{c.detail}</p>
              {c.url && (
                <a
                  className="cert-card__verify"
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify credential <ArrowUpRight />
                </a>
              )}
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {shown.length > PREVIEW_COUNT && (
        <div className="certs__more">
          <button
            className="certs__more-btn"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? 'Show less' : `Show all ${shown.length}`}
            {!expanded && hidden > 0 && (
              <span className="certs__more-count">+{hidden}</span>
            )}
          </button>
        </div>
      )}
    </section>
  )
}
