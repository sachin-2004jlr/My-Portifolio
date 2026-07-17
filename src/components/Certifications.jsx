import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TiltCard from './TiltCard'
import { certifications } from '../data/content'
import { ArrowUpRight } from './Icons'

export default function Certifications() {
  return (
    <section className="section certs" id="certifications">
      <SectionHeading index="05" eyebrow="Credentials" title="Certifications & achievements." />

      <div className="certs__grid">
        {certifications.map((c, i) => (
          <Reveal className="certs__cell" key={c.title} delay={i * 0.06}>
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
    </section>
  )
}
