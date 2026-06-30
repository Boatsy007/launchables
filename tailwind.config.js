/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50:  '#fff3eb',
          100: '#ffe2cc',
          200: '#ffc499',
          300: '#ffa166',
          400: '#ff7a33',
          500: '#FF5C00',
          600: '#cc4900',
          700: '#993700',
          800: '#662500',
          900: '#331200',
        },
        coral:    '#FF7A5C',
        dark:     '#111111',
        offwhite: '#F8F7F4',
        surface:  '#1A1A1A',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans:    ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-sm': ['clamp(2rem, 4vw, 2.5rem)',  { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2.5rem, 5vw, 3.5rem)', { lineHeight: '1.1',  letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(3rem, 6vw, 4.5rem)',   { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-xl': ['clamp(3.5rem, 8vw, 6rem)',   { lineHeight: '1.0',  letterSpacing: '-0.035em' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'glow-orange':    '0 0 40px rgba(255, 92, 0, 0.35), 0 0 80px rgba(255, 92, 0, 0.15)',
        'glow-orange-sm': '0 0 20px rgba(255, 92, 0, 0.25)',
        'glass':          '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255,255,255,0.4)',
        'card':           '0 4px 24px rgba(0,0,0,0.06), 0 24px 48px rgba(0,0,0,0.08)',
        'card-lg':        '0 8px 40px rgba(0,0,0,0.08), 0 40px 80px rgba(0,0,0,0.12)',
        'dark-card':      '0 4px 24px rgba(0,0,0,0.3), 0 24px 48px rgba(0,0,0,0.4)',
      },
      animation: {
        'float':            'float 6s ease-in-out infinite',
        'float-slow':       'float 9s ease-in-out infinite',
        'fade-up':          'fadeUp 0.7s ease forwards',
        'glow':             'glow 3s ease-in-out infinite alternate',
        'shimmer':          'shimmer 2.5s linear infinite',
        'marquee':          'marquee 30s linear infinite',
        'marquee-reverse':  'marqueeReverse 30s linear infinite',
        'spin-slow':        'spin 12s linear infinite',
        'pulse-orange':     'pulseOrange 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(255,92,0,0.2), 0 0 40px rgba(255,92,0,0.1)' },
          to:   { boxShadow: '0 0 40px rgba(255,92,0,0.5), 0 0 80px rgba(255,92,0,0.25)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseOrange: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.6' },
        },
      },
      backgroundImage: {
        'gradient-radial':   'radial-gradient(var(--tw-gradient-stops))',
        'gradient-orange':   'linear-gradient(135deg, #FF5C00 0%, #FF7A5C 100%)',
        'shimmer-gradient':  'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
