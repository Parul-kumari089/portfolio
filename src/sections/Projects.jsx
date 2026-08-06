import { motion } from 'framer-motion'
import Reveal from '../animations/Reveal.jsx'
import { flagshipProject, otherProjects, profile } from '../data/content.js'

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <Reveal className="max-w-xl mb-12">
          <div className="eyebrow mb-4">Flagship Project</div>
          <h2 className="font-display text-[28px] md:text-[38px]">{flagshipProject.name} — {flagshipProject.subtitle}</h2>
          <p className="text-textMute mt-4 text-base">
            The project that best represents how I think through a problem, built with two teammates during an IBM
            SkillBuild internship.
          </p>
        </Reveal>

        <Reveal>
          <div className="relative overflow-hidden border border-border rounded-3xl p-8 md:p-12 bg-gradient-to-br from-card to-bgSoft">
            <div className="absolute -top-1/3 -right-1/6 w-2/3 h-[140%] bg-[radial-gradient(circle,rgba(124,92,255,0.15),transparent_65%)] pointer-events-none" />

            <div className="relative flex flex-wrap justify-between items-start gap-5">
              <div>
                <span className="font-mono text-[12px] text-accent border border-accentSoft px-3.5 py-1.5 rounded-full uppercase tracking-wide">
                  {flagshipProject.badge}
                </span>
                <h3 className="font-display text-[26px] md:text-[34px] mt-4">{flagshipProject.name}</h3>
                <p className="text-textMute mt-2.5 text-base max-w-xl">{flagshipProject.tagline}</p>
              </div>
              <div className="flex gap-3.5">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border px-4.5 py-2.5 rounded-full text-sm hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
                >
                  GitHub ↗
                </a>
                <a
                  href="#contact"
                  className="border border-border px-4.5 py-2.5 rounded-full text-sm hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden mt-10">
              {flagshipProject.breakdown.map((b) => (
                <div key={b.title} className="bg-bgSoft p-6">
                  <h5 className="font-mono text-[11.5px] uppercase tracking-wide text-accent mb-2.5">{b.title}</h5>
                  <p className="text-sm text-textMute leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>

            <div className="relative flex flex-wrap gap-2 mt-8">
              {flagshipProject.stack.map((tech) => (
                <span key={tech} className="font-mono text-[12.5px] border border-border px-3.5 py-1.5 rounded-md text-textMute">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="max-w-xl mt-24 mb-10">
          <div className="eyebrow mb-4">More Projects</div>
          <h2 className="font-display text-[26px] md:text-[34px]">Smaller problems, same care</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                className="border border-border rounded-2xl p-7 bg-card h-full hover:border-primary/40 hover:shadow-[0_20px_45px_-20px_rgba(0,0,0,0.6)] transition-colors duration-300"
              >
                <span className="font-mono text-xs text-textFaint">{String(i + 1).padStart(2, '0')}</span>
                <h4 className="text-[19px] font-display mt-3.5 mb-2.5">{p.title}</h4>
                <p className="text-sm text-textMute mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11.5px] font-mono text-accent border border-accentSoft px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
