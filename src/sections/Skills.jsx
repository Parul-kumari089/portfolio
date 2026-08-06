import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../animations/Reveal.jsx'
import { skillGroups } from '../data/content.js'

export default function Skills() {
  const [active, setActive] = useState(skillGroups[0].key)
  const activeGroup = skillGroups.find((g) => g.key === active)

  return (
    <section id="skills" className="py-28 md:py-36">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <Reveal className="max-w-xl mb-14">
          <div className="eyebrow mb-4">Skills</div>
          <h2 className="font-display text-[28px] md:text-[38px]">Tools I'm learning to use well</h2>
          <p className="text-textMute mt-4 text-base">
            Not mastery — working familiarity, built through coursework and projects, growing with every one of them.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="flex flex-wrap gap-2.5 mb-10">
          {skillGroups.map((g) => (
            <button
              key={g.key}
              onClick={() => setActive(g.key)}
              className={`px-5 py-2.5 rounded-full border text-sm transition-colors duration-200 ${
                active === g.key
                  ? 'border-primary bg-primarySoft text-text'
                  : 'border-border text-textMute hover:text-text hover:border-primary'
              }`}
            >
              {g.label}
            </button>
          ))}
        </Reveal>

        <div className="relative min-h-[64px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5"
            >
              {activeGroup.items.map((item) => (
                <div
                  key={item}
                  className="border border-border bg-card rounded-xl px-4 py-4 text-sm flex items-center gap-2.5 hover:border-accent hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="w-2 h-2 rounded-sm bg-accent shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
