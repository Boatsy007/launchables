'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  { q: 'How long does it actually take?', a: '2–4 weeks for a website. We work fast, not sloppy. Send us a brief and we\'ll give you an exact timeline.' },
  { q: 'Do I need to provide content?', a: 'We can work with what you have, or write it for you. Most clients send us rough notes and we handle the rest.' },
  { q: 'Will my site rank on Google?', a: 'Yes. SEO isn\'t an add-on — it\'s built in. We build for performance and search from day one.' },
  { q: 'What platforms do you manage for social?', a: 'Instagram, Facebook, TikTok, LinkedIn, Google Business. We recommend the right mix for your industry.' },
  { q: 'Can I update the site myself?', a: 'Yes. Every site has a CMS so you can edit without touching code. We\'ll show you how.' },
  { q: 'Is there a lock-in contract?', a: 'No. Month-to-month for social media. We earn your business every month. Most clients stay for years.' },
  { q: 'What if I don\'t love the design?', a: 'We include revision rounds. We\'ve never had a client not love the result. But if something\'s off, we fix it.' },
  { q: 'Do you work outside Australia?', a: 'Primarily Australia, but we work internationally. Get in touch.' },
]

function Item({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: i * 0.04, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 24,
          padding: 'clamp(18px, 2.5vw, 24px) 0',
          background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer',
        }}
      >
        <span style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 500,
          fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
          color: open ? 'var(--text)' : 'var(--secondary)',
          lineHeight: 1.4,
          transition: 'color 0.2s',
        }}>
          {q}
        </span>
        <span style={{ color: 'var(--muted)', flexShrink: 0 }}>
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9rem',
              lineHeight: 1.75,
              color: 'var(--secondary)',
              paddingBottom: 24,
              maxWidth: 600,
            }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" style={{ background: 'var(--bg)', padding: 'clamp(80px, 10vw, 120px) clamp(20px, 4vw, 48px)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 340px) 1fr', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'start' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'sticky', top: 80 }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--muted)', marginBottom: 20 }}>
              FAQ
            </p>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              color: 'var(--text)',
              marginBottom: 24,
            }}>
              Questions.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'var(--secondary)', lineHeight: 1.65, marginBottom: 28 }}>
              Still not answered? Just ask.
            </p>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 400,
                color: 'var(--secondary)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--secondary)')}
            >
              Get in touch →
            </a>
          </motion.div>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            {FAQS.map((f, i) => <Item key={i} q={f.q} a={f.a} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
