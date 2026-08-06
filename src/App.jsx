import ScrollProgressBar from './components/ScrollProgressBar.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import Navbar from './components/Navbar.jsx'
import BackToTop from './components/BackToTop.jsx'

import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Journey from './sections/Journey.jsx'
import Achievements from './sections/Achievements.jsx'
import Certifications from './sections/Certifications.jsx'
import GitHub from './sections/GitHub.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  return (
    <div className="relative">
      <ScrollProgressBar />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Achievements />
        <Certifications />
        <GitHub />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
