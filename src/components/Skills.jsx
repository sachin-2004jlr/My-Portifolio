import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TiltCard from './TiltCard'
import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <SectionHeading
        index="02"
        eyebrow="Toolkit"
        title="The stack I build with."
        sub="From model to metal — the languages, AI tooling and infrastructure I reach for."
      />

      <div className="skills__grid">
        {skillGroups.map((group, i) => (
          <Reveal className="skills__cell" key={group.title} delay={i * 0.05}>
            <TiltCard className="skill-card" max={5} lift={3}>
              <div className="skill-card__head">
                <span className="skill-card__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="skill-card__title">{group.title}</h3>
              </div>
              <ul className="skill-card__tags">
                {group.items.map((item) => (
                  <li key={item} className="tag">{item}</li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
