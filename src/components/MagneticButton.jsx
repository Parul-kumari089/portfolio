import { useRef } from 'react'
import { motion } from 'framer-motion'

/**
 * A button/link that nudges toward the cursor on hover.
 * variant: 'primary' | 'ghost'
 */
export default function MagneticButton({ as: Tag = 'a', variant = 'primary', className = '', children, ...props }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.35}px)`
  }
  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)'
  }

  const base =
    'inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-shadow duration-300 ease-out'
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-br from-primary to-[#5B3FE0] text-white hover:shadow-[0_10px_35px_-8px_rgba(124,92,255,0.6)]'
      : 'border border-border text-text hover:border-accent hover:text-accent'

  const MotionTag = motion(Tag)

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${base} ${styles} ${className}`}
      style={{ transitionProperty: 'transform, box-shadow, color, border-color' }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
