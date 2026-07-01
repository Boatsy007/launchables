'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check } from 'lucide-react'

const PLANS = [
  {
    name: 'Website',
    price: 'From $2,500',
    period: 'one-time',
    line: 'A fast, converting website. Built properly. Built once.',
    features: [
      'Custom design — no templates',
      'Mobile-first & responsive',
      'Up to 10 pages',
      'SEO optimised',
      'CMS for self-editing',
      'Google Analytics',
      '30-day post-launch support',
    ],
    cta: 'Enquire',
    featured: false,
  },
  {
    name: 'Website + Social',
    price: 'From $1,500',
    period: 'per month',
    line: 'The full picture. Website plus consistent social presence that compounds.',
    features: [
      'Everything in Website',
      'Social content creation',
      'Daily posting, 3–5 platforms',
      'Growth strategy',
      'Community management',
      'Monthly performance reports',
      'Priority support',
    ],
    cta: 'Get Started',
    featured: true,
    badge: 'Most popular',
  },
  {
    name: 'Social Media',
    price: 'From $800',
    period: 'per month',
    line: 'Your social, handled. Content created, posted, managed.',
    features: [
      'Content creation & copy',
      'Daily posting, 2–3 platforms',
      'Growth strategy',
      'Reels & stories',
      'Community management',
      'Monthly performance reports',
      'Dedicated account manager',
    ],
    cta: 'Enquire',
    featured: false,
  },
]

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" style={{ background: 'var(--bg)', padding: 'clamp(80px, 10vw, 120px) clamp(20px, 4vw, 48px)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div ref={ref} style={{ marginBottom: 'clamp(48px, 6vw, 72px)' }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--muted)', marginBottom: 20 }}
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4.5vw, 4.5rem)',
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              color: 'var(--text)',
              margin: 0,
            }}
          >
            Simple.<br />Honest.
          </motion.h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: 'clamp(16px, 2vw, 20px)',
        }}>
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: plan.featured ? 'var(--surface)' : 'transparent',
                border: `1px solid ${plan.featured ? 'rgba(255,255,255,0.14)' : 'var(--border)'}`,
                borderRadius: 12,
                padding: 'clamp(24px, 3vw, 36px)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              {plan.badge && (
                <span style={{
                  position: 'absolute', top: -1, right: 24,
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.68rem',
                  fontWeight: 500,
                  color: 'var(--bg)',
                  background: 'var(--text)',
                  padding: '3px 10px',
                  borderRadius: '0 0 6px 6px',
                  letterSpacing: '0.05em',
                }}>
                  {plan.badge}
                </span>
              )}

              <div style={{ marginBottom: 28 }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--muted)', marginBottom: 20 }}>
                  {plan.name}
                </p>
                <div style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
                  color: 'var(--text)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  marginBottom: 4,
                }}>
                  {plan.price}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'var(--muted)', marginBottom: 16 }}>
                  {plan.period}
                </div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', lineHeight: 1.65, color: 'var(--secondary)' }}>
                  {plan.line}
                </p>
              </div>

              <div style={{ height: 1, background: 'var(--border)', marginBottom: 24 }} />

              <ul style={{ listStyle: 'none', flex: 1, display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <Check size={13} style={{ color: 'var(--secondary)', flexShrink: 0, marginTop: 3 }} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'var(--secondary)', lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '11px 20px',
                  border: '1px solid',
                  borderColor: plan.featured ? 'rgba(255,255,255,0.25)' : 'var(--border)',
                  borderRadius: 8,
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: 'var(--text)',
                  textDecoration: 'none',
                  transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--text)'
                  e.currentTarget.style.color = 'var(--bg)'
                  e.currentTarget.style.borderColor = 'var(--text)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--text)'
                  e.currentTarget.style.borderColor = plan.featured ? 'rgba(255,255,255,0.25)' : 'var(--border)'
                }}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'var(--muted)', marginTop: 32, textAlign: 'center' }}
        >
          All prices AUD. No lock-in contracts. Custom packages available.
        </motion.p>
      </div>
    </section>
  )
}
