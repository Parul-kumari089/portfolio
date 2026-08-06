import Reveal from '../animations/Reveal.jsx'
import { profile } from '../data/content.js'

const stats = [
  { value: profile.cgpa, label: 'CGPA / 10' },
  { value: profile.gradYear, label: 'Graduating' },
  { value: '6-wk', label: 'IBM Internship' },
  { value: '6', label: 'Certifications' },
]

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-[.9fr_1.1fr] gap-16 items-start">
          <Reveal>
            <div className="eyebrow mb-4">About</div>
            <h2 className="font-display text-[26px] md:text-[36px] leading-tight">
              A student who learns by building, not just by studying.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-textMute text-[16.5px] mb-4">
              I'm a final-year Computer Science Engineering student at Rajasthan College of Engineering for Women,
              affiliated with Rajasthan Technical University. My academic record reflects consistency, but what I
              value more is what happens outside the syllabus — the projects I chose to build because a problem
              interested me.
            </p>
            <p className="text-textMute text-[16.5px] mb-4">
              I'm drawn to problems where software has to meet reality: a model that has to work outside a notebook,
              an API that has to handle a real request, a sensor that has to raise an alert on time. My flagship
              project, <b className="text-text font-semibold">ResQ</b>, came out of exactly that curiosity — exploring
              how live data and AI reasoning could support people during a disaster.
            </p>
            <p className="text-textMute text-[16.5px] mb-4">
              I don't have industry experience yet, and I'm not going to pretend otherwise. What I do have is a strong
              foundation, a habit of finishing what I start, and a genuine interest in becoming a better engineer with
              every project I take on.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-2">
              {stats.map((s) => (
                <div key={s.label} className="border border-border rounded-2xl p-5 bg-bgSoft">
                  <b className="font-display text-3xl block text-gradient">{s.value}</b>
                  <span className="text-[12.5px] uppercase tracking-wide text-textFaint">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
