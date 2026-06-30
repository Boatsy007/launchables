'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section
      id="cta"
      style={{ backgroundColor: '#111111' }}
      className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="orb-1 absolute rounded-full"
          style={{
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(255,92,0,0.18) 0%, transparent 70%)',
            top: '-200px',
            left: '-200px',
            filter: 'blur(60px)',
            animation: 'orbFloat1 12s ease-in-out infinite',
          }}
        />
        <div
          className="orb-2 absolute rounded-full"
          style={{
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(255,122,92,0.14) 0%, transparent 70%)',
            bottom: '-100px',
            right: '-100px',
            filter: 'blur(80px)',
            animation: 'orbFloat2 16s ease-in-out infinite',
          }}
        />
        <div
          className="orb-3 absolute rounded-full"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(255,92,0,0.10) 0%, transparent 70%)',
            top: '50%',
            left: '60%',
            filter: 'blur(60px)',
            animation: 'orbFloat3 20s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(60px, 40px) scale(1.05); }
          66% { transform: translate(-30px, 80px) scale(0.95); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(-80px, -50px) scale(1.08); }
          70% { transform: translate(40px, -30px) scale(0.92); }
        }
        @keyframes orbFloat3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.15); }
        }
      `}</style>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center max-w-5xl mx-auto"
      >
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs uppercase tracking-[0.4em] mb-6 font-semibold"
          style={{ color: '#FF5C00', fontFamily: 'Inter, sans-serif' }}
        >
          Get Started Today
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-bold leading-[1.05] mb-8"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            background: 'linear-gradient(180deg, #ffffff 0%, #d4d0c8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Ready to Launch Something Incredible?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl mb-12 mx-auto"
          style={{
            color: 'rgba(255,255,255,0.55)',
            fontFamily: 'Inter, sans-serif',
            maxWidth: '520px',
            lineHeight: 1.6,
          }}
        >
          Join 340+ businesses that trusted Launchables to build their digital presence.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full font-semibold text-white text-base transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor: '#FF5C00',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 0 40px rgba(255,92,0,0.35)',
            }}
          >
            Start My Project
          </a>
          <a
            href="#marketplace"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full font-semibold text-white text-base transition-all duration-200 hover:bg-white hover:text-black active:scale-[0.98]"
            style={{
              border: '1px solid rgba(255,255,255,0.3)',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Browse Businesses
          </a>
        </motion.div>

        {/* Guarantee line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm"
          style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}
        >
          No lock-in contracts. Cancel anytime. Results guaranteed.
        </motion.p>
      </motion.div>
    </section>
  );
}
