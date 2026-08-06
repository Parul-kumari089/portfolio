import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { useScrollProgress } from '../hooks/useScrollProgress.js'

export default function BackToTop() {
  const { progress } = useScrollProgress()
  const visible = progress > 15

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-7 right-7 w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center z-[90] hover:border-accent hover:text-accent transition-colors duration-200"
        >
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
