import { lazy, Suspense, useEffect } from 'react'
import Nav from './components/layout/Nav'
import Hero from './components/sections/Hero'
import FloatingBottomNav from './components/layout/FloatingBottomNav'
import { ErrorBoundary } from './components/ui/ErrorBoundary'

const Services           = lazy(() => import('./components/sections/Services'))
const Marketplace        = lazy(() => import('./components/sections/Marketplace'))
const FeaturedBusinesses = lazy(() => import('./components/sections/FeaturedBusinesses'))
const WebsiteStore       = lazy(() => import('./components/sections/WebsiteStore'))
const SocialMedia        = lazy(() => import('./components/sections/SocialMedia'))
const Portfolio          = lazy(() => import('./components/sections/Portfolio'))
const Process            = lazy(() => import('./components/sections/Process'))
const WhyLaunchables     = lazy(() => import('./components/sections/WhyLaunchables'))
const Results            = lazy(() => import('./components/sections/Results'))
const Testimonials       = lazy(() => import('./components/sections/Testimonials'))
const Blog               = lazy(() => import('./components/sections/Blog'))
const FinalCTA           = lazy(() => import('./components/sections/FinalCTA'))
const Footer             = lazy(() => import('./components/layout/Footer'))
const CustomCursor       = lazy(() => import('./components/ui/CustomCursor'))

const Blank = ({ h = 400 }: { h?: number }) => (
  <div style={{ minHeight: `${h}px` }} />
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
      <FloatingBottomNav />
      <main>
        <Hero />
        <div id="services" data-section="services">
          <Suspense fallback={<Blank h={600} />}><Services /></Suspense>
        </div>
        <div id="marketplace" data-section="marketplace">
          <Suspense fallback={<Blank h={800} />}><Marketplace /></Suspense>
        </div>
        <div id="businesses" data-section="businesses">
          <Suspense fallback={<Blank h={600} />}><FeaturedBusinesses /></Suspense>
        </div>
        <div id="websites" data-section="websites">
          <Suspense fallback={<Blank h={600} />}><WebsiteStore /></Suspense>
        </div>
        <Suspense fallback={<Blank h={600} />}><SocialMedia /></Suspense>
        <div id="portfolio" data-section="portfolio">
          <Suspense fallback={<Blank h={600} />}><Portfolio /></Suspense>
        </div>
        <Suspense fallback={<Blank h={500} />}><Process /></Suspense>
        <Suspense fallback={<Blank h={500} />}><WhyLaunchables /></Suspense>
        <Suspense fallback={<Blank h={400} />}><Results /></Suspense>
        <Suspense fallback={<Blank h={500} />}><Testimonials /></Suspense>
        <Suspense fallback={<Blank h={600} />}><Blog /></Suspense>
        <div id="contact" data-section="contact">
          <Suspense fallback={<Blank h={400} />}><FinalCTA /></Suspense>
        </div>
      </main>
      <Suspense fallback={null}><Footer /></Suspense>
    </ErrorBoundary>
  )
}
