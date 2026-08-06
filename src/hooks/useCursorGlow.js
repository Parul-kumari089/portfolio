import { useEffect, useState } from 'react'

export function useCursorGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 })

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return pos
}
