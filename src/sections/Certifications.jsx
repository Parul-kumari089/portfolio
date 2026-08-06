import Reveal from '../animations/Reveal.jsx'
import { certifications } from '../data/content.js'

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 md:py-36">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <Reveal className="max-w-xl mb-14">
          <div className="eyebrow mb-4">Certifications</div>
          <h2 className="font-display text-[28px] md:text-[38px]">Continuous learning, documented</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="border border-border rounded-2xl p-5.5 bg-bgSoft flex gap-3.5 items-start hover:border-primary transition-colors duration-200">
                <div className="w-9.5 h-9.5 min-w-[38px] h-[38px] rounded-[10px] bg-accentSoft text-accent flex items-center justify-center font-display font-bold text-sm">
                  {c.code}
                </div>
                <div>
                  <h5 className="text-sm font-medium mb-1">{c.title}</h5>
                  <p className="text-xs text-textFaint">{c.issuer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
