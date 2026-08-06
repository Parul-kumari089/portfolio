import { useCursorGlow } from '../hooks/useCursorGlow.js'

export default function CursorGlow() {
  const { x, y } = useCursorGlow()
  return (
    <div
      className="fixed w-[420px] h-[420px] rounded-full pointer-events-none z-[1] hidden md:block"
      style={{
        background: 'radial-gradient(circle, rgba(124,92,255,0.10) 0%, rgba(124,92,255,0) 70%)',
        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
      }}
    />
  )
}
