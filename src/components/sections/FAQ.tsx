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
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderBottom: '1px solid rgba(17,17,17,0.08)',
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
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
          textAlign: 'left' as const,
        }}
      >
        <span
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 600,
            fontSize: '1rem',
            color: '#111111',
            lineHeight: 1.4,
          }}
        >
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: open ? '#FF5C00' : 'rgba(17,17,17,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'background-color 0.2s ease',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 2v10M2 7h10" stroke={open ? '#ffffff' : '#111111'} strokeWidth="1.5" strokeLinecap="round" />
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
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: 'rgba(17,17,17,0.58)',
                margin: '0 0 24px',
                paddingRight: 56,
              }}
            >
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
    <section id="faq" style={{ backgroundColor: '#F8F7F4', padding: '120px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div ref={ref} style={{ marginBottom: 64, textAlign: 'center' }}>
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
            FAQ
          </motion.p>
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
              color: '#111111',
              margin: 0,
            }}
          >
            Questions answered.
          </motion.h2>
        </div>

        <div>
          {faqs.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            marginTop: 56,
            padding: '32px',
            background: '#ffffff',
            borderRadius: 20,
            border: '1px solid rgba(17,17,17,0.07)',
            textAlign: 'center',
          }}
        >
          <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '1rem', color: '#111', margin: '0 0 8px' }}>
            Still have questions?
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', color: 'rgba(17,17,17,0.5)', margin: '0 0 20px' }}>
            We're happy to chat. Book a free 30-minute discovery call with our team.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 24px',
              borderRadius: '9999px',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: '#ffffff',
              backgroundColor: '#FF5C00',
              textDecoration: 'none',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 6px 20px rgba(255,92,0,0.25)',
            }}
          >
            Book A Free Call
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
