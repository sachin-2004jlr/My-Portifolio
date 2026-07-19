import Nav from './components/Nav'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GridBackground from './components/GridBackground'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <GridBackground />
      <ScrollProgress />
      <Nav />

      <main id="main">
        <Hero />
        <Stats />
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
