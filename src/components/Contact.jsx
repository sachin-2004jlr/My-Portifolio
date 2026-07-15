import Reveal from './Reveal'
import { profile, socials } from '../data/content'
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowUpRight } from './Icons'

const socialIcon = { github: GitHubIcon, linkedin: LinkedInIcon, mail: MailIcon }

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact__panel">
        <Reveal className="contact__eyebrow">Let's build something</Reveal>
        <Reveal as="h2" className="contact__title" delay={0.05}>
          Have a project, a role, or an idea in mind?
        </Reveal>
        <Reveal className="contact__sub" delay={0.1}>
          I'm open to opportunities in AI engineering and full-stack development.
          The fastest way to reach me is a quick email.
        </Reveal>

        <Reveal className="contact__actions" delay={0.15}>
          <a className="btn btn--lg" href={`mailto:${profile.email}`}>
            <MailIcon /> {profile.email}
          </a>
        </Reveal>

        <Reveal className="contact__links" delay={0.2}>
          {socials.map((s) => {
            const I = socialIcon[s.icon] || MailIcon
            return (
              <a
                key={s.label}
                href={s.url}
                target={s.icon === 'mail' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="contact__link"
              >
                <I />
                <span>{s.label}</span>
                <ArrowUpRight />
              </a>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
