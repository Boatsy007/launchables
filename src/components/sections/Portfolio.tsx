'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const FILTERS = ['All', 'Websites', 'Trades', 'Hospitality', 'Services', 'Health']

const projects = [
  {
    name: 'Apex Plumbing',
    category: 'Trades',
    tagline: 'Local plumber, national quality.',
    result: '+340% organic traffic',
    gradientFrom: '#1e3a5f',
    gradientTo: '#0a1628',
    accent: '#3B82F6',
    url: 'apexplumbing.com.au',
  },
  {
    name: 'Nova Coffee',
    category: 'Hospitality',
    tagline: 'Where every cup tells a story.',
    result: '15K followers in 90 days',
    gradientFrom: '#2c1810',
    gradientTo: '#0f0804',
    accent: '#D97706',
    url: 'novacoffee.com.au',
  },
  {
    name: 'The Styling Room',
    category: 'Services',
    tagline: 'Beauty on your terms.',
    result: '3× more enquiries',
    gradientFrom: '#3d1a2e',
    gradientTo: '#150a12',
    accent: '#EC4899',
    url: 'thestylingroom.com.au',
  },
  {
    name: 'Greenpath Landscaping',
    category: 'Services',
    tagline: 'Gardens that last a lifetime.',
    result: '#1 Google ranking in 8 weeks',
    gradientFrom: '#0f2d1a',
    gradientTo: '#061109',
    accent: '#22C55E',
    url: 'greenpath.com.au',
  },
  {
    name: 'CleanPro Services',
    category: 'Services',
    tagline: 'Spotless. Every time.',
    result: 'Launched in 3 weeks',
    gradientFrom: '#1a2d3d',
    gradientTo: '#091118',
    accent: '#0EA5E9',
    url: 'cleanproservices.com.au',
  },
  {
    name: 'Summit Health',
    category: 'Health',
    tagline: 'Your health. Optimised.',
    result: '200+ new patients in month one',
    gradientFrom: '#2d1a3d',
    gradientTo: '#120a18',
    accent: '#8B5CF6',
    url: 'summithealth.com.au',
  },
]

function BrowserCard({ project }: { project: typeof projects[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: hovered
          ? '0 24px 60px rgba(0,0,0,0.25)'
          : '0 8px 32px rgba(0,0,0,0.12)',
        background: '#1A1A1A',
        cursor: 'pointer',
        transition: 'box-shadow 0.35s ease',
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          height: 38,
          background: '#242424',
          display: 'flex',
          alignItems: 'center',
          padding: '0 14px',
          gap: 7,
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          flexShrink: 0,
        }}
      >
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#EF4444', display: 'block' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#F59E0B', display: 'block' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#22C55E', display: 'block' }} />
        <div
          style={{
            flex: 1,
            marginLeft: 10,
            height: 22,
            background: 'rgba(255,255,255,0.05)',
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 10,
          }}
        >
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>
            {project.url}
          </span>
        </div>
      </div>

      {/* Website preview */}
      <div
        style={{
          height: 220,
          background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
          position: 'relative' as const,
          overflow: 'hidden',
          padding: '20px 18px',
        }}
      >
        {/* Accent glow */}
        <div style={{
          position: 'absolute',
          top: -20,
          right: -20,
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${project.accent}30 0%, transparent 70%)`,
        }} />

        {/* Mock nav */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <div style={{ width: 60, height: 8, background: 'rgba(255,255,255,0.15)', borderRadius: 4 }} />
          <div style={{ display: 'flex', gap: 8 }}>
            {[40, 35, 40].map((w, j) => <div key={j} style={{ width: w, height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3 }} />)}
          </div>
          <div style={{ width: 50, height: 22, borderRadius: 12, background: project.accent }} />
        </div>

        {/* Mock hero text */}
        <div style={{ marginBottom: 16 }}>
          <div style={{ width: '75%', height: 14, background: 'rgba(255,255,255,0.2)', borderRadius: 4, marginBottom: 8 }} />
          <div style={{ width: '55%', height: 14, background: 'rgba(255,255,255,0.2)', borderRadius: 4, marginBottom: 12 }} />
          <div style={{ width: '85%', height: 7, background: 'rgba(255,255,255,0.07)', borderRadius: 3, marginBottom: 5 }} />
          <div style={{ width: '65%', height: 7, background: 'rgba(255,255,255,0.07)', borderRadius: 3 }} />
        </div>

        {/* Overlay on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: '#FF5C00',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h12M10 4l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Card info */}
      <div style={{ padding: '20px 20px 22px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#ffffff', margin: 0 }}>
            {project.name}
          </h3>
          <span
            style={{
              fontSize: '0.65rem',
              fontWeight: 600,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.12em',
              color: project.accent,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {project.category}
          </span>
        </div>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', margin: '0 0 12px' }}>
          {project.tagline}
        </p>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '5px 10px',
            borderRadius: 20,
            background: 'rgba(255,92,0,0.12)',
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="#FF5C00">
            <path d="M1 7l2-2 2 1.5L7 3l2 1.5" stroke="#FF5C00" strokeWidth="1" strokeLinecap="round" fill="none" />
          </svg>
          <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#FF5C00', fontFamily: 'Inter, sans-serif' }}>
            {project.result}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" style={{ backgroundColor: '#111111', padding: '120px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={ref} style={{ marginBottom: 56 }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.2em',
              color: '#FF5C00',
              fontFamily: 'Inter, sans-serif',
              marginBottom: 16,
            }}
          >
            Our Work
          </motion.p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: '#ffffff',
                margin: 0,
              }}
            >
              Websites that get results.
            </motion.h2>

            {/* Filter pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}
            >
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    fontFamily: 'Inter, sans-serif',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    border: active === f ? 'none' : '1px solid rgba(255,255,255,0.12)',
                    background: active === f ? '#FF5C00' : 'transparent',
                    color: active === f ? '#ffffff' : 'rgba(255,255,255,0.45)',
                  }}
                >
                  {f}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 20,
            }}
          >
            {filtered.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <BrowserCard project={p} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: 56 }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 32px',
              borderRadius: '9999px',
              fontSize: '0.95rem',
              fontWeight: 600,
              color: '#ffffff',
              backgroundColor: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              textDecoration: 'none',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Start Your Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
