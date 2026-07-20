import ScrollProgress from './components/ScrollProgress'
import VideoHero from './components/VideoHero'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GridBackground from './components/GridBackground'
import Spotlight from './components/Spotlight'
import Marquee from './components/Marquee'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <GridBackground />
      <Spotlight />
      <div className="film-grain" aria-hidden="true" />
      <ScrollProgress />

      <main id="main">
        <VideoHero />
        <Stats />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
