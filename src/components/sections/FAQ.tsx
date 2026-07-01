'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'How long does it take to build my website?',
    a: "Most websites are delivered within 2–4 weeks from the time we receive your content and approval. We work fast without cutting corners — our streamlined process means you get a premium result in a fraction of the usual time.",
  },
  {
    q: 'Do I need to provide content for my website?',
    a: "We can work with content you provide, or our team can write professional copy for you. We'll guide you on what we need and make the process as easy as possible.",
  },
  {
    q: 'Will my website rank on Google?',
    a: "Yes — every website we build is fully SEO optimised from day one. That includes proper site structure, fast loading speeds, meta data, schema markup, and mobile optimisation. Many of our clients see page-one rankings within weeks of launch.",
  },
  {
    q: 'What platforms do you manage for social media?',
    a: "We manage all major platforms — Instagram, Facebook, TikTok, LinkedIn, and Google Business Profile. We'll recommend the right mix based on your industry and target audience.",
  },
  {
    q: "Can I update my website myself after it's built?",
    a: "Absolutely. Every website comes with a user-friendly CMS so you can update text, images, and blog posts without touching any code. We'll also provide a walkthrough once your site is live.",
  },
  {
    q: 'Do you work with businesses outside Australia?',
    a: "We're based in Australia and primarily serve Australian businesses, but we do work with international clients. Get in touch and we'll see how we can help.",
  },
  {
    q: "What if I'm not happy with the design?",
    a: "We include two rounds of revisions in every project and work closely with you throughout the design process. We want you to love the result — and our track record shows that clients always do.",
  },
  {
    q: 'Is there a lock-in contract for social media management?',
    a: "No. We work on a month-to-month basis. We earn your business every month through results, not contracts. Most clients stay with us for years because of the outcomes we deliver.",
  },
]

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
    >
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          padding: '24px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 600,
          fontSize: '1rem',
          color: '#ffffff',
          lineHeight: 1.4,
          letterSpacing: '-0.01em',
        }}>
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: 28, height: 28,
            borderRadius: '50%',
            background: open ? '#ffffff' : 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2v8M2 6h8" stroke={open ? '#0A0A0A' : '#ffffff'} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.div>
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
              color: '#666666',
              margin: '0 0 24px',
              paddingRight: 52,
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
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" style={{ backgroundColor: '#0A0A0A', padding: 'clamp(80px, 10vw, 120px) 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(24px, 5vw, 48px)' }}>

        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(240px, 380px) 1fr',
            gap: 'clamp(40px, 8vw, 120px)',
            alignItems: 'start',
          }}
        >
          <div style={{ position: 'sticky', top: 100 }}>
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
                color: '#444444',
                marginBottom: 16,
              }}
            >
              FAQ
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: '#ffffff',
                margin: '0 0 24px',
              }}
            >
              Questions answered.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.25, duration: 0.6 }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.88rem',
                lineHeight: 1.7,
                color: '#555555',
                margin: 0,
              }}
            >
              Still have questions? Book a free 30-minute discovery call — we're happy to chat.
            </motion.p>
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                marginTop: 24,
                padding: '11px 22px',
                borderRadius: '9999px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#0A0A0A',
                background: '#AAFF00',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
              }}
            >
              Book A Free Call
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1.5 5.5h8M6 2l3.5 3.5L6 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {faqs.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
