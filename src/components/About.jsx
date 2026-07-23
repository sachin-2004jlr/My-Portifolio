import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import AnimatedText from './AnimatedText'
import { profile, education, socials, experience } from '../data/content'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

const socialIcon = { github: GitHubIcon, linkedin: LinkedInIcon, mail: MailIcon }

export default function About() {
  const current = experience.find((e) => e.current) || experience[0]
  return (
    <section className="section about" id="about">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="Turning intelligent ideas into shipped products."
      />

      <div className="about__grid">
        <Reveal className="about__lead">
          {profile.about.map((para, i) => (
            <AnimatedText key={i} text={para} className="about__para" />
          ))}

          <div className="about__socials">
            {socials.map((s) => {
              const I = socialIcon[s.icon] || MailIcon
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target={s.icon === 'mail' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="about__social"
                >
                  <I />
                  <span>{s.handle}</span>
                </a>
              )
            })}
          </div>
        </Reveal>

        <Reveal className="about__side" delay={0.1}>
          <div className="about__card">
            <h3 className="about__card-title">Education</h3>
            <ul className="about__edu">
              {education.map((e) => (
                <li key={e.degree}>
                  <span className="about__edu-degree">{e.degree}</span>
                  <span className="about__edu-school">{e.school}</span>
                  <span className="about__edu-detail">{e.detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="about__card about__card--accent">
            <h3 className="about__card-title">Currently</h3>
            <p className="about__now">
              {current.role} at <strong>{current.company}</strong> — building AI-driven
              discovery on {current.stack.slice(0, 5).join(' · ')}.
            </p>
            <p className="about__now-loc">{current.location} · {profile.availability}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
