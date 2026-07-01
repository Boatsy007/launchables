import { lazy, Suspense, useEffect } from 'react'
import Nav from './components/layout/Nav'
import Hero from './components/sections/Hero'
import { ErrorBoundary } from './components/ui/ErrorBoundary'

const WhyLaunchables = lazy(() => import('./components/sections/WhyLaunchables'))
const Services       = lazy(() => import('./components/sections/Services'))
const Process        = lazy(() => import('./components/sections/Process'))
const Portfolio      = lazy(() => import('./components/sections/Portfolio'))
const Testimonials   = lazy(() => import('./components/sections/Testimonials'))
const Pricing        = lazy(() => import('./components/sections/Pricing'))
const FAQ            = lazy(() => import('./components/sections/FAQ'))
const FinalCTA       = lazy(() => import('./components/sections/FinalCTA'))
const Footer         = lazy(() => import('./components/layout/Footer'))
const CustomCursor   = lazy(() => import('./components/ui/CustomCursor'))

const Blank = ({ h = 400 }: { h?: number }) => (
  <div style={{ minHeight: `${h}px`, backgroundColor: '#0A0A0A' }} />
)

export default function App() {
  useEffect(() => {
    document.body.classList.add('loaded')
    return () => document.body.classList.remove('loaded')
  }, [])

  return (
    <ErrorBoundary>
      <Suspense fallback={null}><CustomCursor /></Suspense>
      <Nav />
      <main>
        <Hero />
        <Suspense fallback={<Blank h={600} />}><WhyLaunchables /></Suspense>
        <Suspense fallback={<Blank h={600} />}><Services /></Suspense>
        <Suspense fallback={<Blank h={500} />}><Process /></Suspense>
        <div id="portfolio" data-section="portfolio">
          <Suspense fallback={<Blank h={600} />}><Portfolio /></Suspense>
        </div>
        <Suspense fallback={<Blank h={500} />}><Testimonials /></Suspense>
        <div id="pricing" data-section="pricing">
          <Suspense fallback={<Blank h={600} />}><Pricing /></Suspense>
        </div>
        <Suspense fallback={<Blank h={400} />}><FAQ /></Suspense>
        <div id="contact" data-section="contact">
          <Suspense fallback={<Blank h={400} />}><FinalCTA /></Suspense>
        </div>
      </main>
      <Suspense fallback={null}><Footer /></Suspense>
    </ErrorBoundary>
  )
}
