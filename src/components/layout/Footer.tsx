'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  'Web Design', 'Development', 'SEO', 'Social Media',
  'Branding', 'Photography', 'Video', 'AI Automation',
];
const marketplace = [
  'Ready-to-Launch', 'Business Ideas', 'Website Templates',
  'AI Businesses', 'Digital Products',
];
const company = ['About', 'Portfolio', 'Blog', 'Contact', 'Careers'];

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.73a8.28 8.28 0 0 0 4.84 1.55V6.84a4.85 4.85 0 0 1-1.07-.15z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer
      style={{ backgroundColor: '#111111', borderTop: '1px solid rgba(255,255,255,0.08)' }}
      className="pt-20 pb-10 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Big animated brand name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4 overflow-hidden"
        >
          <span
            className="font-bold tracking-[0.15em] leading-none select-none"
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(3rem, 10vw, 9rem)',
              color: 'rgba(255,255,255,0.06)',
              display: 'block',
            }}
          >
            LAUNCHABLES
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
          style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif' }}
        >
          The premium place to launch your next business.
        </motion.p>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} className="mb-16" />

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Logo + description + newsletter + social */}
          <div>
            <div className="mb-4">
              <span
                className="text-xl font-bold text-white tracking-tight"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Launchables
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}
            >
              We build, launch, and grow digital businesses for ambitious founders across Australia.
            </p>

            {/* Newsletter */}
            <p
              className="text-sm font-medium text-white mb-3"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Stay in the loop.
            </p>
            {subscribed ? (
              <p className="text-sm" style={{ color: '#FF5C00', fontFamily: 'Inter, sans-serif' }}>
                You're subscribed!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 min-w-0 px-3 py-2 rounded-lg text-sm outline-none"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white',
                    fontFamily: 'Inter, sans-serif',
                  }}
                />
                <button
                  type="submit"
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-white flex-shrink-0"
                  style={{ backgroundColor: '#FF5C00', fontFamily: 'Inter, sans-serif' }}
                >
                  Join
                </button>
              </form>
            )}

            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {[
                { icon: <InstagramIcon />, label: 'Instagram', href: '#' },
                { icon: <TikTokIcon />, label: 'TikTok', href: '#' },
                { icon: <LinkedInIcon />, label: 'LinkedIn', href: '#' },
                { icon: <FacebookIcon />, label: 'Facebook', href: '#' },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.35)' }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4
              className="text-xs uppercase tracking-[0.25em] mb-5 font-semibold"
              style={{ color: '#FF5C00', fontFamily: 'Inter, sans-serif' }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Marketplace */}
          <div>
            <h4
              className="text-xs uppercase tracking-[0.25em] mb-5 font-semibold"
              style={{ color: '#FF5C00', fontFamily: 'Inter, sans-serif' }}
            >
              Marketplace
            </h4>
            <ul className="flex flex-col gap-3">
              {marketplace.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h4
              className="text-xs uppercase tracking-[0.25em] mb-5 font-semibold"
              style={{ color: '#FF5C00', fontFamily: 'Inter, sans-serif' }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {company.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p
            className="text-xs"
            style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter, sans-serif' }}
          >
            &copy; 2025 Launchables. All rights reserved.
          </p>

          <div className="flex gap-5">
            {['Privacy Policy', 'Terms', 'Sitemap'].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs transition-colors hover:text-white"
                style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter, sans-serif' }}
              >
                {l}
              </a>
            ))}
          </div>

          <p
            className="text-xs"
            style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter, sans-serif' }}
          >
            Trusted by 340+ businesses across Australia
          </p>
        </div>
      </div>
    </footer>
  );
}
