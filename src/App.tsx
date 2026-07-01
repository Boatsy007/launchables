import { lazy, Suspense, useEffect } from 'react'
import Nav from './components/layout/Nav'
import Hero from './components/sections/Hero'
import { ErrorBoundary } from './components/ui/ErrorBoundary'

const Services       = lazy(() => import('./components/sections/Services'))
const Portfolio      = lazy(() => import('./components/sections/Portfolio'))
const Marketplace    = lazy(() => import('./components/sections/Marketplace'))
const Pricing        = lazy(() => import('./components/sections/Pricing'))
const WhyLaunchables = lazy(() => import('./components/sections/WhyLaunchables'))
const Testimonials   = lazy(() => import('./components/sections/Testimonials'))
const FAQ            = lazy(() => import('./components/sections/FAQ'))
const FinalCTA       = lazy(() => import('./components/sections/FinalCTA'))
const Footer         = lazy(() => import('./components/layout/Footer'))

const Blank = ({ h = 400 }: { h?: number }) => (
  <div style={{ minHeight: `${h}px`, backgroundColor: 'var(--bg)' }} />
)

export default function App() {
  useEffect(() => {
    document.body.classList.add('loaded')
    return () => document.body.classList.remove('loaded')
  }, [])

  return (
    <ErrorBoundary>
      <Nav />
      <main>
        <Hero />
        <Suspense fallback={<Blank h={600} />}><Services /></Suspense>
        <Suspense fallback={<Blank h={600} />}><Portfolio /></Suspense>
        <Suspense fallback={<Blank h={600} />}><Marketplace /></Suspense>
        <Suspense fallback={<Blank h={600} />}><Pricing /></Suspense>
        <Suspense fallback={<Blank h={400} />}><WhyLaunchables /></Suspense>
        <Suspense fallback={<Blank h={400} />}><Testimonials /></Suspense>
        <Suspense fallback={<Blank h={400} />}><FAQ /></Suspense>
        <Suspense fallback={<Blank h={400} />}><FinalCTA /></Suspense>
      </main>
      <Suspense fallback={null}><Footer /></Suspense>
    </ErrorBoundary>
  )
}
