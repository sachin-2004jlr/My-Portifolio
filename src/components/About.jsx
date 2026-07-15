import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { profile, education, socials } from '../data/content'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

const socialIcon = { github: GitHubIcon, linkedin: LinkedInIcon, mail: MailIcon }

export default function About() {
  return (
    <section className="section about" id="about">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="Turning intelligent ideas into shipped products."
      />

      <div className="about__grid">
        <Reveal className="about__lead">
          <p>
            I'm an <strong>AI Engineer &amp; Full-Stack Developer</strong> who loves the whole
            arc — from a raw model or a fuzzy idea, all the way to a polished product people
            actually use. My sweet spot is the intersection of <em>Generative AI</em> and{' '}
            <em>production-grade engineering</em>.
          </p>
          <p>
            Lately I've been building an AI-powered talent-matching platform: semantic search
            with vector embeddings, resume parsing and ATS scoring, real-time messaging, and
            the unglamorous-but-essential pieces like auth, access control and rate limiting.
            I care about systems that are intelligent <em>and</em> dependable.
          </p>

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
              Full-Stack Developer Intern at <strong>Budhhi Technologies</strong>, building
              AI-driven discovery on React · Flask · MongoDB · OpenAI · Pinecone.
            </p>
            <p className="about__now-loc">{profile.location} · {profile.availability}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
