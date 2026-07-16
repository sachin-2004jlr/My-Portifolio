import { useEffect, useState } from 'react'
import { ArrowUp } from './Icons'

// Appears once you're well down the page; returns you to the top.
export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`to-top ${show ? 'is-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
    >
      <ArrowUp />
    </button>
  )
}
