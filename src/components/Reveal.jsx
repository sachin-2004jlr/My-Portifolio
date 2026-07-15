import { motion, useReducedMotion } from 'framer-motion'

// Scroll-triggered reveal. Respects prefers-reduced-motion by
// collapsing to a simple fade with no travel.
export default function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 26,
  className,
  once = true,
  ...rest
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{
        duration: reduce ? 0.4 : 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
