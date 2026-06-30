'use client';

import { motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  category: string;
  initials: string;
  avatarColor: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Launchables built our website in 2 weeks and it immediately ranked on page one. We've seen a 340% increase in organic traffic.",
    name: 'Sarah K.',
    role: 'Director',
    company: 'Apex Plumbing',
    category: 'Trades',
    initials: 'SK',
    avatarColor: '#FF5C00',
  },
  {
    quote:
      "The best investment we've made. Our social media went from 200 to 15,000 followers in 90 days.",
    name: 'Marcus T.',
    role: 'Owner',
    company: 'Nova Coffee',
    category: 'Hospitality',
    initials: 'MT',
    avatarColor: '#7C3AED',
  },
  {
    quote:
      'We bought a ready-to-launch business from their marketplace and were trading within a month. Incredible.',
    name: 'Priya M.',
    role: 'Founder',
    company: 'CleanPro',
    category: 'Services',
    initials: 'PM',
    avatarColor: '#059669',
  },
  {
    quote:
      'The AI automation they set up saves us 20 hours a week. It paid for itself in the first month.',
    name: 'James W.',
    role: 'CEO',
    company: 'Summit Events',
    category: 'Events',
    initials: 'JW',
    avatarColor: '#0284C7',
  },
  {
    quote:
      'Honest, fast, and genuinely talented. Our rebrand drove a 3x increase in enquiries.',
    name: 'Emily R.',
    role: 'Owner',
    company: 'The Styling Room',
    category: 'Beauty',
    initials: 'ER',
    avatarColor: '#DB2777',
  },
  {
    quote:
      "Their SEO work put us at #1 for our main keyword in 8 weeks. We've never had so many leads.",
    name: 'Tom B.',
    role: 'Director',
    company: 'Greenpath',
    category: 'Landscaping',
    initials: 'TB',
    avatarColor: '#16A34A',
  },
  {
    quote:
      'We launched our SaaS product through their marketplace and got 200 signups before we even had a full product.',
    name: 'Alex C.',
    role: 'Founder',
    company: 'Clearform AI',
    category: 'Tech / SaaS',
    initials: 'AC',
    avatarColor: '#EA580C',
  },
  {
    quote:
      'The team feels like an extension of our business. Professional, responsive, and obsessed with results.',
    name: 'Natasha V.',
    role: 'CMO',
    company: 'Velocity Gym',
    category: 'Fitness',
    initials: 'NV',
    avatarColor: '#9333EA',
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#FF5C00">
          <path d="M8 1l1.854 4.326L14.5 5.9l-3.25 3.167.767 4.433L8 11.25l-4.017 2.25.767-4.433L1.5 5.9l4.646-.574L8 1z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="break-inside-avoid mb-6"
    >
      <div
        className="bg-white rounded-2xl p-7"
        style={{
          borderLeft: '4px solid #FF5C00',
          boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
        }}
      >
        <StarRating />
        <blockquote
          className="text-base italic leading-relaxed mb-6"
          style={{ color: '#222', fontFamily: 'Inter, sans-serif' }}
        >
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
            style={{ backgroundColor: t.avatarColor, fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {t.initials}
          </div>
          <div className="flex-1 min-w-0">
            <p
              className="font-semibold text-sm leading-tight"
              style={{ color: '#111', fontFamily: 'Inter, sans-serif' }}
            >
              {t.name}
            </p>
            <p
              className="text-xs leading-tight"
              style={{ color: 'rgba(17,17,17,0.45)', fontFamily: 'Inter, sans-serif' }}
            >
              {t.role}, {t.company}
            </p>
          </div>
          <span
            className="text-xs px-2.5 py-1 rounded-full flex-shrink-0"
            style={{
              backgroundColor: 'rgba(255,92,0,0.08)',
              color: '#FF5C00',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
            }}
          >
            {t.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{ backgroundColor: '#F8F7F4' }}
      className="py-32 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs uppercase tracking-[0.3em] mb-4 font-semibold"
            style={{ color: '#FF5C00', fontFamily: 'Inter, sans-serif' }}
          >
            Client Stories
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#111111' }}
          >
            What Our Clients Say.
          </h2>
        </motion.div>

        <style>{`
          .masonry-testimonials { column-count: 1; column-gap: 1.5rem; }
          @media (min-width: 640px) { .masonry-testimonials { column-count: 2; } }
          @media (min-width: 1024px) { .masonry-testimonials { column-count: 3; } }
        `}</style>
        <div className="masonry-testimonials">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 16 16" fill="#FF5C00">
                  <path d="M8 1l1.854 4.326L14.5 5.9l-3.25 3.167.767 4.433L8 11.25l-4.017 2.25.767-4.433L1.5 5.9l4.646-.574L8 1z" />
                </svg>
              ))}
            </div>
            <span
              className="font-bold text-lg"
              style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#111' }}
            >
              4.9/5
            </span>
          </div>
          <p
            className="text-sm"
            style={{ color: 'rgba(17,17,17,0.5)', fontFamily: 'Inter, sans-serif' }}
          >
            Based on 340+ client reviews across Australia
          </p>
        </motion.div>
      </div>
    </section>
  );
}
