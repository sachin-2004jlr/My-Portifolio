import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <SectionHeading index="03" eyebrow="Journey" title="Where I've been building." />

      <div className="exp">
        {experience.map((job, i) => (
          <Reveal className="exp__item" key={job.company} delay={i * 0.06}>
            <div className="exp__meta">
              {job.current ? (
                <span className="exp__period exp__period-live">
                  <span className="exp__dot" />
                  {job.period}
                </span>
              ) : (
                <span className="exp__period">{job.period}</span>
              )}
            </div>
            <div className="exp__body">
              <div className="exp__role-row">
                <h3 className="exp__role">{job.role}</h3>
                {job.type && <span className="exp__type">{job.type}</span>}
              </div>
              <p className="exp__company">
                {job.company} <span>· {job.location}</span>
              </p>
              <ul className="exp__points">
                {job.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
              <ul className="exp__stack">
                {job.stack.map((s) => (
                  <li key={s} className="tag">{s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
