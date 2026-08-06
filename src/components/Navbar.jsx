import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { useScrollProgress } from '../hooks/useScrollProgress.js'
import { navLinks } from '../data/content.js'

export default function Navbar() {
  const { scrolled } = useScrollProgress()
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'bg-bg/75 backdrop-blur-md border-b border-border py-3.5' : 'py-5'
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-6 md:px-8 flex items-center justify-between">
        <a href="#home" className="font-display font-bold text-lg">
          parul<span className="text-primary">.</span>dev
        </a>

        <nav className="hidden md:flex gap-8 text-sm text-textMute">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="relative py-1 hover:text-text transition-colors duration-200 group">
              {link.label}
              <span className="absolute left-0 bottom-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-200" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex border border-border px-5 py-2 rounded-full text-sm font-medium hover:border-accent hover:bg-accentSoft hover:text-accent transition-all duration-200"
        >
          Let's talk
        </a>

        <button className="md:hidden text-xl" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-bg/95 border-t border-border mt-4"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="py-3 text-sm text-textMute border-b border-border/50">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
