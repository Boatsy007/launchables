import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import MagneticButton from '../ui/MagneticButton'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Marketplace', href: '#marketplace' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#blog' },
]

function NavLink({
  label,
  href,
  scrolled,
  index,
}: {
  label: string
  href: string
  scrolled: boolean
  index: number
}) {
  return (
    <motion.a
      href={href}
      className="relative group text-sm font-medium tracking-wide"
      style={{ color: scrolled ? '#111111' : '#ffffff', transition: 'color 0.4s ease' }}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index + 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {label}
      <motion.span
        className="absolute -bottom-0.5 left-0 h-px w-full origin-left"
        style={{ backgroundColor: scrolled ? '#111111' : '#ffffff' }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.a>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsub = scrollY.on('change', (v) => {
      setScrolled(v > 50)
    })
    return unsub
  }, [scrollY])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="mx-4 mt-4 rounded-2xl px-6 py-4 flex items-center justify-between"
          animate={{
            backgroundColor: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.04)',
            backdropFilter: scrolled ? 'blur(24px)' : 'blur(12px)',
            boxShadow: scrolled
              ? '0 4px 24px rgba(0,0,0,0.08), 0 1px 0 rgba(0,0,0,0.04)'
              : '0 0 0 1px rgba(255,255,255,0.08)',
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            border: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid rgba(255,255,255,0.10)',
          }}
        >
          {/* Logo */}
          <a
            href="/"
            className="font-bold text-lg tracking-tight select-none"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: scrolled ? '#111111' : '#ffffff',
              transition: 'color 0.4s ease',
            }}
          >
            LAUNCHABLES
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <NavLink key={link.href} {...link} scrolled={scrolled} index={i} />
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <MagneticButton
              className="hidden md:block"
              style={{ backgroundColor: '#FF5C00', borderRadius: '9999px' }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-full">
                Get Started
              </span>
            </MagneticButton>

            {/* Hamburger */}
            <button
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              style={{ color: scrolled ? '#111111' : '#ffffff' }}
            >
              <motion.span
                className="block h-px w-6 rounded-full bg-current origin-center"
                animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.span
                className="block h-px w-6 rounded-full bg-current"
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-px w-6 rounded-full bg-current origin-center"
                animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col md:hidden"
            style={{ backgroundColor: '#111111' }}
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl font-bold text-white tracking-tight py-3"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ delay: i * 0.07 + 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ color: '#FF5C00', x: 8 }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8"
              >
                <button
                  className="px-8 py-4 rounded-full text-lg font-semibold text-white"
                  style={{ backgroundColor: '#FF5C00', fontFamily: "'Inter', sans-serif" }}
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started
                </button>
              </motion.div>
            </div>

            {/* Decorative glow */}
            <div
              className="absolute bottom-0 right-0 w-72 h-72 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255,92,0,0.18) 0%, transparent 70%)',
                transform: 'translate(30%, 30%)',
              }}
            />
            <div
              className="absolute top-0 left-0 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(255,122,92,0.10) 0%, transparent 70%)',
                transform: 'translate(-30%, -30%)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
