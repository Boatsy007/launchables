import { useEffect } from 'react'
import { useMotionValue } from 'framer-motion'

/**
 * Returns { x, y } Framer Motion MotionValues in the range [-0.5, 0.5],
 * representing the mouse position relative to the window centre.
 * Updates on mousemove and cleans up on unmount.
 */
export function useMouseParallax() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      x.set(e.clientX / window.innerWidth - 0.5)
      y.set(e.clientY / window.innerHeight - 0.5)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [x, y])

  return { x, y }
}

export default useMouseParallax
