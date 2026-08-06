import { motion } from 'framer-motion'
import MagneticButton from '../components/MagneticButton.jsx'
import RotatingScrollCTA from '../components/RotatingScrollCTA.jsx'
import { profile } from '../data/content.js'

const lineVariants = {
  hidden: { y: '110%' },
  visible: (i) => ({
    y: 0,
    transition: { duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.2, 0.8, 0.2, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-24 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-[1.15fr_.85fr] gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="font-mono text-[13px] text-textMute mb-6 flex items-center gap-2.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ADE80] animate-pulse" />
              {profile.status}
            </motion.div>

            <h1 className="font-display text-[38px] sm:text-[52px] lg:text-[66px] leading-[1.05] font-semibold">
              {['Learning to build', 'software that solves', 'problems worth solving.'].map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={lineVariants}
                    className={`inline-block ${i === 2 ? 'text-gradient' : ''}`}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="mt-6 text-lg text-textMute max-w-lg"
            >
              I'm {profile.name}, a final-year Computer Science Engineering student. My work sits at the intersection
              of curiosity and craft — turning coursework and self-driven projects like ResQ into software that
              actually holds up when it runs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <MagneticButton href="#projects" variant="primary">
                View my work →
              </MagneticButton>
              <MagneticButton href="#contact" variant="ghost">
                Get in touch
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="mt-14 flex gap-9"
            >
              {[
                [profile.cgpa, 'CGPA'],
                ['4+', 'Academic Projects'],
                ['6', 'Certifications'],
              ].map(([v, l]) => (
                <div key={l}>
                  <b className="font-display text-2xl block">{v}</b>
                  <span className="text-[12px] uppercase tracking-wide text-textFaint">{l}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="glass rounded-xl2 p-7"
          >
            <div className="flex gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
            </div>
            <div className="font-mono text-[13.5px] text-textMute leading-loose">
              <div>$ whoami</div>
              <div>&gt; <span className="text-accent">parul_kumari</span></div>
              <div>&gt; year: <span className="text-green-300">"Final Year, B.Tech CSE"</span></div>
              <div>&gt; focus: <span className="text-green-300">"problem-solving, applied learning"</span></div>
              <div>&gt; currently: <span className="text-green-300">"preparing for SDE placements"</span></div>
              <div className="mt-3">
                $ <span className="inline-block w-1.5 h-3.5 bg-primary animate-pulse align-middle" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center mt-16">
          <RotatingScrollCTA targetId="#about" />
        </div>
      </div>
    </section>
  )
}
