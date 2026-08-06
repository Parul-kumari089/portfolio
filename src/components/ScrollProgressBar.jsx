import { useScrollProgress } from '../hooks/useScrollProgress.js'

export default function ScrollProgressBar() {
  const { progress } = useScrollProgress()
  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[999] bg-gradient-to-r from-primary to-accent transition-[width] duration-100 ease-linear"
      style={{ width: `${progress}%` }}
    />
  )
}
