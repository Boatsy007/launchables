import { useEffect, useRef } from 'react'
import { useMotionValue, useInView, animate } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
  decimals?: number
}

export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return

    const controls = animate(motionValue, value, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent =
            prefix +
            (decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString()) +
            suffix
        }
      },
    })

    return () => controls.stop()
  }, [isInView, value, duration, motionValue, prefix, suffix, decimals])

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  )
}
