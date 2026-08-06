import Reveal from '../animations/Reveal.jsx'
import MagneticButton from '../components/MagneticButton.jsx'
import { profile } from '../data/content.js'

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <Reveal>
          <div className="relative border border-border rounded-3xl px-8 py-16 md:py-20 text-center overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(124,92,255,0.15),transparent_60%)]">
            <div className="eyebrow justify-center mb-5">Contact</div>
            <h2 className="font-display text-[30px] md:text-[48px] max-w-2xl mx-auto leading-tight">
              Let's build something amazing together.
            </h2>
            <p className="text-textMute mt-5 mb-9 max-w-md mx-auto text-base">
              I'm looking for internship and entry-level Software Engineer opportunities where I can keep learning by
              building. If there's a problem worth working on, I'd like to hear about it.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton href={`mailto:${profile.email}`} variant="primary">
                Email me →
              </MagneticButton>
              <MagneticButton href="/resume.pdf" download="Parul_Kumari_Resume.pdf" variant="ghost">
                Download Resume
              </MagneticButton>
            </div>
            <div className="flex flex-wrap justify-center gap-7 mt-12 text-sm text-textMute">
              <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors duration-200">
                {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-200">
                LinkedIn ↗
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-200">
                GitHub ↗
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
