'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const plans = [
  {
    name: 'Website Design',
    price: 'From $2,500',
    period: 'one-time',
    description: 'A premium custom website designed to convert visitors into customers.',
    features: [
      'Custom design (no templates)',
      'Mobile-first & responsive',
      'Up to 10 pages',
      'SEO optimised',
      'Contact forms & CTA setup',
      'Google Analytics integration',
      'CMS for easy updates',
      '30-day post-launch support',
    ],
    cta: 'Enquire Now',
    featured: false,
  },
  {
    name: 'Website + Social Media',
    price: 'From $1,500',
    period: 'per month',
    description: 'Everything you need to dominate online — a beautiful website plus active social media management.',
    features: [
      'Everything in Website Design',
      'Social media content creation',
      'Daily posting (3–5 platforms)',
      'Growth strategy & planning',
      'Professional photography',
      'Community management',
      'Monthly performance reports',
      'Priority support',
    ],
    cta: 'Get Started',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Social Media Management',
    price: 'From $800',
    period: 'per month',
    description: 'Full-service social media management that grows your audience and drives real engagement.',
    features: [
      'Content creation & copywriting',
      'Daily posting (2–3 platforms)',
      'Growth & engagement strategy',
      'Story & reel creation',
      'Community management',
      'Paid advertising (optional)',
      'Monthly performance reports',
      'Dedicated account manager',
    ],
    cta: 'Enquire Now',
    featured: false,
  },
]

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" style={{ backgroundColor: '#ffffff', padding: 'clamp(80px, 10vw, 120px) 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(24px, 5vw, 48px)' }}>

        <div ref={ref} style={{ marginBottom: 72 }}>
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
              color: '#AAAAAA',
              marginBottom: 16,
            }}
          >
            Pricing
          </motion.p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#0A0A0A',
                margin: 0,
              }}
            >
              Clear, honest pricing.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25, duration: 0.6 }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9rem',
                color: '#888888',
                maxWidth: 320,
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              No hidden fees. No lock-in contracts. Enquire and we'll tailor a package to your needs.
            </motion.p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          borderTop: '1px solid rgba(0,0,0,0.08)',
        }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '48px 32px',
                borderRight: i < 2 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                paddingLeft: i === 0 ? 0 : 32,
                paddingRight: i === 2 ? 0 : 32,
                position: 'relative',
                background: plan.featured ? '#0A0A0A' : 'transparent',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {plan.badge && (
                <div style={{
                  position: 'absolute',
                  top: 20,
                  right: i === 2 ? 0 : 32,
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '4px 10px',
                  background: '#AAFF00',
                  borderRadius: '9999px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  color: '#0A0A0A',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  {plan.badge}
                </div>
              )}

              <div style={{ marginBottom: 32 }}>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: plan.featured ? '#555555' : '#AAAAAA',
                  marginBottom: 20,
                }}>
                  {plan.name}
                </p>

                <div style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
                  color: plan.featured ? '#ffffff' : '#0A0A0A',
                  lineHeight: 1,
                  marginBottom: 6,
                  letterSpacing: '-0.02em',
                }}>
                  {plan.price}
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.8rem',
                  color: plan.featured ? '#555555' : '#AAAAAA',
                  marginBottom: 20,
                }}>
                  {plan.period}
                </div>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.85rem',
                  lineHeight: 1.65,
                  color: plan.featured ? '#666666' : '#888888',
                  margin: 0,
                }}>
                  {plan.description}
                </p>
              </div>

              <div style={{ width: '100%', height: 1, background: plan.featured ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)', marginBottom: 28 }} />

              <ul style={{ listStyle: 'none', margin: '0 0 36px', padding: 0, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.83rem',
                    color: plan.featured ? '#888888' : '#666666',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
                      <path d="M2 6l3 3 5-6" stroke={plan.featured ? '#ffffff' : '#0A0A0A'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 6,
                  padding: '13px 24px',
                  borderRadius: '9999px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                  textDecoration: 'none',
                  border: plan.featured ? 'none' : '1px solid rgba(0,0,0,0.15)',
                  background: plan.featured ? '#ffffff' : 'transparent',
                  color: plan.featured ? '#0A0A0A' : '#0A0A0A',
                  letterSpacing: '-0.01em',
                }}
              >
                {plan.cta}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.8rem',
            color: '#BBBBBB',
            marginTop: 40,
            textAlign: 'center',
          }}
        >
          All prices are in AUD. Custom packages available — just ask.
        </motion.p>
      </div>
    </section>
  )
}
