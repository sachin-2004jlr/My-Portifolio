import { useState } from 'react'
import Reveal from './Reveal'
import { profile, socials } from '../data/content'
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowUpRight, CopyIcon, CheckIcon } from './Icons'

const socialIcon = { github: GitHubIcon, linkedin: LinkedInIcon, mail: MailIcon }

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard blocked — the mailto button still works */
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="contact__panel">
        <Reveal className="contact__eyebrow">
          <span className="contact__index">06</span> Let's build something
        </Reveal>
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
          <button
            type="button"
            className={`contact__copy ${copied ? 'is-copied' : ''}`}
            onClick={copyEmail}
            aria-label={copied ? 'Email copied' : 'Copy email address'}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
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
