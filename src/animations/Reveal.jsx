import { motion } from 'framer-motion'

/**
 * Wraps children in a fade/slide-up reveal that triggers once, when
 * scrolled into view. Keep the amount small so section headers reveal
 * before their content.
 */
export default function Reveal({ children, delay = 0, y = 32, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
