import { useEffect, useState } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const total = h.scrollHeight - h.clientHeight
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0)
      setScrolled(h.scrollTop > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { progress, scrolled }
}
