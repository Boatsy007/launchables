'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const FILTERS = ['All', 'Trades', 'Hospitality', 'Services', 'Health']

const projects = [
  {
    name: 'Apex Plumbing',
    category: 'Trades',
    result: '+340% organic traffic',
    bg: 'linear-gradient(140deg, #0a1628 0%, #071020 100%)',
    accent: '#2563EB',
    textAccent: '#60A5FA',
    headline: 'Your local plumber.',
  },
  {
    name: 'Nova Coffee',
    category: 'Hospitality',
    result: '15K followers in 90 days',
    bg: 'linear-gradient(140deg, #1a0c04 0%, #0d0603 100%)',
    accent: '#D97706',
    textAccent: '#FCD34D',
    headline: 'Every cup, a story.',
  },
  {
    name: 'The Styling Room',
    category: 'Services',
    result: '3× more enquiries',
    bg: 'linear-gradient(140deg, #1a0a14 0%, #0d0509 100%)',
    accent: '#DB2777',
    textAccent: '#F472B6',
    headline: 'Beauty on your terms.',
  },
  {
    name: 'Greenpath',
    category: 'Services',
    result: '#1 Google ranking, 8 weeks',
    bg: 'linear-gradient(140deg, #061a0c 0%, #030d06 100%)',
    accent: '#16A34A',
    textAccent: '#4ADE80',
    headline: 'Gardens that last.',
  },
  {
    name: 'CleanPro Services',
    category: 'Services',
    result: 'Launched in 3 weeks',
    bg: 'linear-gradient(140deg, #041a24 0%, #020e14 100%)',
    accent: '#0284C7',
    textAccent: '#38BDF8',
    headline: 'Spotless. Every time.',
  },
  {
    name: 'Summit Health',
    category: 'Health',
    result: '200+ new patients, month one',
    bg: 'linear-gradient(140deg, #130a24 0%, #0a0514 100%)',
    accent: '#7C3AED',
    textAccent: '#A78BFA',
    headline: 'Your health. Optimised.',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: 12,
        overflow: 'hidden',
        cursor: 'pointer',
        border: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* Website preview area */}
      <motion.div
        animate={{ scale: hovered ? 1.03 : 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: project.bg,
          padding: '28px 24px 24px',
          aspectRatio: '16/9',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Accent glow */}
        <div style={{
          position: 'absolute',
          top: -20, right: -20,
          width: 180, height: 180,
          background: `radial-gradient(circle, ${project.accent}22 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />

        {/* Fake nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, position: 'relative', zIndex: 2 }}>
          <div style={{ width: 60, height: 7, background: 'rgba(255,255,255,0.15)', borderRadius: 3 }} />
          <div style={{ display: 'flex', gap: 12 }}>
            {[40, 35, 45].map((w, j) => <div key={j} style={{ width: w, height: 5, background: 'rgba(255,255,255,0.08)', borderRadius: 2 }} />)}
          </div>
          <div style={{ width: 56, height: 22, background: project.accent, borderRadius: 4 }} />
        </div>

        {/* Fake headline */}
        <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 18, color: project.textAccent, marginBottom: 8, lineHeight: 1.2 }}>
            {project.headline}
          </div>
          <div style={{ width: '65%', height: 7, background: 'rgba(255,255,255,0.1)', borderRadius: 3, marginBottom: 5 }} />
          <div style={{ width: '45%', height: 7, background: 'rgba(255,255,255,0.07)', borderRadius: 3, marginBottom: 18 }} />
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 72, height: 26, background: project.accent, borderRadius: 4 }} />
            <div style={{ width: 72, height: 26, background: 'rgba(255,255,255,0.06)', borderRadius: 4, border: '1px solid rgba(255,255,255,0.1)' }} />
          </div>
        </div>
      </motion.div>

      {/* Card footer */}
      <div style={{
        background: '#111111',
        padding: '16px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div>
          <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#ffffff', marginBottom: 3 }}>
            {project.name}
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#555555' }}>
            {project.category}
          </div>
        </div>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5,
          padding: '5px 10px',
          background: 'rgba(255,90,0,0.1)',
          borderRadius: 20,
        }}>
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <path d="M1 6l2-2 2 2 3-5" stroke="#FF5A00" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 600, color: '#FF5A00' }}>
            {project.result}
          </span>
        </div>
      </div>

      {/* Hover overlay */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      >
        <div style={{
          width: 48, height: 48,
          borderRadius: '50%',
          background: '#FF5A00',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 9h12M9 4l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="portfolio" style={{ backgroundColor: '#0A0A0A', padding: 'clamp(80px, 10vw, 120px) 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(24px, 5vw, 48px)' }}>

        {/* Header */}
        <div ref={ref} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#555555',
                marginBottom: 14,
              }}
            >
              Our Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#ffffff',
                margin: 0,
              }}
            >
              Websites that get results.
            </motion.h2>
          </div>

          {/* Filter pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}
          >
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  fontFamily: 'Inter, sans-serif',
                  cursor: 'pointer',
                  border: '1px solid',
                  transition: 'all 0.2s ease',
                  borderColor: active === f ? '#FF5A00' : 'rgba(255,255,255,0.1)',
                  background: active === f ? '#FF5A00' : 'transparent',
                  color: active === f ? '#ffffff' : 'rgba(255,255,255,0.4)',
                }}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 20,
            }}
          >
            {filtered.map((p, i) => (
              <ProjectCard key={p.name} project={p} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: 56 }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, backgroundColor: '#f0f0f0' }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 32px',
              borderRadius: '9999px',
              background: '#ffffff',
              color: '#0A0A0A',
              textDecoration: 'none',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              transition: 'background 0.2s ease',
            }}
          >
            Start Your Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
