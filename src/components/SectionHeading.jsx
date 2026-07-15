import Reveal from './Reveal'

export default function SectionHeading({ index, eyebrow, title, sub }) {
  return (
    <div className="section-heading">
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
