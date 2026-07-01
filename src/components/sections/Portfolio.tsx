'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PROJECTS = [
  {
    id: 'swept',
    name: 'Swept Services',
    category: 'Commercial',
    year: '2024',
    result: 'Booked solid 6 weeks post-launch',
    description: 'Complete website redesign for a commercial sweeping company in South East Queensland.',
    bg: '#0c131f',
    accent: '#3b7fcf',
  },
  {
    id: 'apex',
    name: 'Apex Plumbing',
    category: 'Trades',
    year: '2024',
    result: '+340% organic traffic',
    description: 'Full website and local SEO for a Sydney-based plumbing company.',
    bg: '#0f0f12',
    accent: '#8888aa',
  },
  {
    id: 'nova',
    name: 'Nova Coffee',
    category: 'Hospitality',
    year: '2023',
    result: '15K followers in 90 days',
    description: 'Brand identity, website and social media management for a Melbourne café.',
    bg: '#140e08',
    accent: '#9a7040',
  },
  {
    id: 'summit',
    name: 'Summit Health',
    category: 'Health',
    year: '2024',
    result: '200+ new patients in month one',
    description: 'Complete digital presence for a health clinic — website, SEO, Google Ads.',
    bg: '#0e0c14',
    accent: '#7060a0',
  },
  {
    id: 'greenpath',
    name: 'Greenpath Landscaping',
    category: 'Services',
    year: '2023',
    result: '#1 Google ranking in 8 weeks',
    description: 'Website and SEO campaign that took a landscaping company to the top of search.',
    bg: '#0a120c',
    accent: '#407050',
  },
  {
    id: 'styling',
    name: 'The Styling Room',
    category: 'Beauty',
    year: '2024',
    result: '3× more enquiries',
    description: 'Elegant website redesign and social media management for a Brisbane hair salon.',
    bg: '#140a10',
    accent: '#9a5070',
  },
]

function ProjectCard({ p, i }: { p: typeof PROJECTS[0]; i: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ position: 'relative' }}
    >
      {/* Visual */}
      <div style={{
        background: p.bg,
        border: '1px solid var(--border)',
        borderRadius: 12,
        overflow: 'hidden',
        aspectRatio: '16/10',
        position: 'relative',
        marginBottom: 20,
      }}>
        {/* Minimal site preview */}
        <motion.div
          animate={{ scale: hovered ? 1.02 : 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', height: '100%', padding: '20px 22px', display: 'flex', flexDirection: 'column' }}
        >
          {/* Fake nav */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingBottom: 14, borderBottom: `1px solid rgba(255,255,255,0.05)` }}>
            <div style={{ width: 48, height: 5, background: 'rgba(255,255,255,0.15)', borderRadius: 2 }} />
            <div style={{ display: 'flex', gap: 10 }}>
              {[32, 28, 36].map((w, j) => <div key={j} style={{ width: w, height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }} />)}
            </div>
          </div>
          {/* Headline lines */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 10 }}>
            <div style={{ width: '65%', height: 11, background: `rgba(${parseInt(p.accent.slice(1,3),16)},${parseInt(p.accent.slice(3,5),16)},${parseInt(p.accent.slice(5,7),16)},0.7)`, borderRadius: 3 }} />
            <div style={{ width: '50%', height: 7, background: 'rgba(255,255,255,0.12)', borderRadius: 2 }} />
            <div style={{ width: '40%', height: 7, background: 'rgba(255,255,255,0.07)', borderRadius: 2 }} />
            <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
              <div style={{ width: 64, height: 22, background: `rgba(${parseInt(p.accent.slice(1,3),16)},${parseInt(p.accent.slice(3,5),16)},${parseInt(p.accent.slice(5,7),16)},0.5)`, borderRadius: 4 }} />
              <div style={{ width: 64, height: 22, background: 'rgba(255,255,255,0.04)', borderRadius: 4, border: '1px solid rgba(255,255,255,0.07)' }} />
            </div>
          </div>
        </motion.div>

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'absolute', inset: 0,
                background: 'rgba(0,0,0,0.5)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <div style={{
                padding: '10px 24px',
                border: '1px solid rgba(247,247,245,0.3)',
                borderRadius: 8,
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 400,
                color: 'var(--text)',
              }}>
                View Project
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Caption */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <div>
          <h3 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 600,
            fontSize: '1rem',
            color: 'var(--text)',
            letterSpacing: '-0.02em',
            marginBottom: 4,
          }}>
            {p.name}
          </h3>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.82rem',
            color: 'var(--muted)',
          }}>
            {p.category} · {p.year}
          </p>
        </div>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.82rem',
          color: 'var(--secondary)',
          textAlign: 'right',
          lineHeight: 1.5,
          maxWidth: 160,
        }}>
          {p.result}
        </p>
      </div>
    </motion.article>
  )
}

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ background: 'var(--bg)', padding: 'clamp(80px, 10vw, 120px) clamp(20px, 4vw, 48px)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            flexWrap: 'wrap', gap: 24,
            marginBottom: 'clamp(40px, 6vw, 64px)',
          }}
        >
          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--muted)', marginBottom: 20 }}>
              Featured Work
            </p>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4.5vw, 4.5rem)',
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              color: 'var(--text)',
            }}>
              Work that<br />gets results
            </h2>
          </div>
          <a
            href="#contact"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              color: 'var(--muted)',
              padding: '8px 0',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            Start your project →
          </a>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
          gap: 'clamp(24px, 3vw, 36px)',
        }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}
