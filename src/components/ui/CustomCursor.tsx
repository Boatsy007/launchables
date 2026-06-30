import { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(false)
  const [cursorState, setCursorState] = useState<'default' | 'pointer' | 'view'>('default')

  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)

  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)

  const ringX = useSpring(rawX, { stiffness: 140, damping: 18, mass: 0.6 })
  const ringY = useSpring(rawY, { stiffness: 140, damping: 18, mass: 0.6 })

  const lastRef = useRef({ x: -100, y: -100 })

  useEffect(() => {
    // Detect touch device — don't render on coarse pointer
    const mq = window.matchMedia('(pointer: coarse)')
    if (mq.matches) {
      setIsTouch(true)
      return
    }

    // Hide default cursor
    document.body.style.cursor = 'none'

    const onMouseMove = (e: MouseEvent) => {
      lastRef.current = { x: e.clientX, y: e.clientY }
      dotX.set(e.clientX)
      dotY.set(e.clientY)
      rawX.set(e.clientX)
      rawY.set(e.clientY)
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest('[data-cursor="view"]')) {
        setCursorState('view')
      } else if (
        target.closest('a, button, [data-cursor="pointer"], [role="button"]')
      ) {
        setCursorState('pointer')
      } else {
        setCursorState('default')
      }
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseover', onMouseOver, { passive: true })

    return () => {
      document.body.style.cursor = ''
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
    }
  }, [dotX, dotY, rawX, rawY])

  if (isTouch) return null

  const ringSize = cursorState === 'default' ? 40 : cursorState === 'pointer' ? 56 : 72
  const ringScale = cursorState === 'pointer' ? 1.3 : cursorState === 'view' ? 1.6 : 1
  const dotOpacity = cursorState === 'view' ? 0 : 1

  return (
    <>
      {/* Small dot — exact cursor position */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#ffffff',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: dotOpacity,
          mixBlendMode: 'normal',
        }}
        transition={{ opacity: { duration: 0.15 } }}
      />

      {/* Larger ring — spring lag */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: ringSize,
          height: ringSize,
          borderRadius: '50%',
          border: '1.5px solid rgba(255, 255, 255, 0.4)',
          pointerEvents: 'none',
          zIndex: 99998,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: cursorState === 'view' ? 'blur(4px)' : 'none',
          background: cursorState === 'view' ? 'rgba(255,255,255,0.08)' : 'transparent',
          scale: ringScale,
        }}
        transition={{ scale: { type: 'spring', stiffness: 200, damping: 20 }, opacity: { duration: 0.15 } }}
      >
        {cursorState === 'view' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '0.625rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: '#ffffff',
              textTransform: 'uppercase',
              userSelect: 'none',
            }}
          >
            VIEW
          </motion.span>
        )}
      </motion.div>
    </>
  )
}
