import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'

/**
 * A circular badge with text looping around its edge (via SVG textPath),
 * rotating slowly, with a static arrow in the center. Clicking smooth-
 * scrolls to the target section. Used as the hero's scroll cue.
 */
export default function RotatingScrollCTA({ targetId = '#about', label = 'SCROLL TO EXPLORE • SCROLL TO EXPLORE • ' }) {
  const handleClick = (e) => {
    e.preventDefault()
    const el = document.querySelector(targetId)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.button
      onClick={handleClick}
      aria-label="Scroll to next section"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-24 h-24 flex items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur"
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
      >
        <defs>
          <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text fontSize="8.2" letterSpacing="1.5" fill="#9BA1AE" fontFamily="JetBrains Mono, monospace">
          <textPath href="#circlePath">{label}</textPath>
        </text>
      </motion.svg>
      <span className="relative z-10 text-accent text-lg">
        <FiArrowDown />
      </span>
    </motion.button>
  )
}
