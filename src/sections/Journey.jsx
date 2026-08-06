import { motion } from 'framer-motion'
import Reveal from '../animations/Reveal.jsx'
import { journey } from '../data/content.js'

export default function Journey() {
  return (
    <section id="journey" className="py-28 md:py-36">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8">
        <Reveal className="max-w-xl mb-16">
          <div className="eyebrow mb-4">Journey</div>
          <h2 className="font-display text-[28px] md:text-[38px]">How I got here</h2>
        </Reveal>

        <div className="relative pl-9">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-gradient-to-b from-primary to-accent"
          />
          {journey.map((node, i) => (
            <Reveal key={node.title} delay={i * 0.06} className="relative pb-11 last:pb-0">
              <span className="absolute -left-9 top-1 w-[11px] h-[11px] rounded-full bg-bg border-2 border-accent shadow-[0_0_0_4px_#09090B]" />
              <span className="font-mono text-xs uppercase tracking-wide text-textFaint">{node.date}</span>
              <h4 className="text-[17px] font-display mt-1.5 mb-1.5">{node.title}</h4>
              <p className="text-sm text-textMute max-w-lg">{node.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
