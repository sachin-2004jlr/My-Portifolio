import useTilt from '../hooks/useTilt'

/**
 * Card that tilts in 3D toward the pointer.
 * Kept separate from the Reveal wrapper so the entrance animation
 * (which also writes `transform`) never fights the tilt.
 */
export default function TiltCard({
  as: Tag = 'div',
  className = '',
  children,
  max,
  scale,
  lift,
  ...rest
}) {
  const ref = useTilt({ max, scale, lift })
  return (
    <Tag ref={ref} className={`tilt ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
