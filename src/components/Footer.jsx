import { profile, navLinks, socials } from '../data/content'
import { socialIcons, MailIcon } from './Icons'

export default function Footer() {
  const go = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="nav__brand-mark" aria-hidden="true">S</span>
          <div>
            <p className="footer__name">{profile.name}</p>
            <p className="footer__role">{profile.tagline}</p>
            <div className="footer__socials">
              {socials.map((s) => {
                const I = socialIcons[s.icon] || MailIcon
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target={s.icon === 'mail' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                  >
                    <I />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => go(e, l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        <p className="footer__copy">
          © {new Date().getFullYear()} {profile.name} · Designed &amp; built with React — no templates harmed.
        </p>
      </div>
    </footer>
  )
}
