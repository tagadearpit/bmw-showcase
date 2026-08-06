import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to target when the element comes into view.
 * Uses easeOutCubic for a smooth premium feel.
 */
export function useCountUp(target, inView, duration = 1300) {
  const [value, setValue] = useState(0)
  const frameRef = useRef(null)

  useEffect(() => {
    if (!inView) return undefined

    const start = performance.now()

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(target * eased)

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [target, inView, duration])

  return value
}
