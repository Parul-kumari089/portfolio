import Reveal from '../animations/Reveal.jsx'
import { achievements } from '../data/content.js'

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 md:py-36">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <Reveal className="max-w-xl mb-14">
          <div className="eyebrow mb-4">Achievements</div>
          <h2 className="font-display text-[28px] md:text-[38px]">Featured highlights</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.06}>
              <div className="border border-border rounded-2xl p-6 bg-card h-full">
                <b className="font-display text-2xl block text-accent mb-1.5">{a.value}</b>
                <span className="text-sm text-textMute">{a.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
