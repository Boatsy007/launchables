import { useRef, useMemo, useState, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { AdaptiveDpr, AdaptiveEvents } from '@react-three/drei'

// ─── WebGL support detection ──────────────────────────────────────────────────
function isWebGLSupported(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      (canvas.getContext as (id: string) => RenderingContext | null)('experimental-webgl')
    )
  } catch {
    return false
  }
}

// ─── Shared mouse ref type ────────────────────────────────────────────────────
interface MouseState {
  x: number
  y: number
  targetX: number
  targetY: number
}

// ─── Particle Field ───────────────────────────────────────────────────────────
function ParticleField({ mouseRef }: { mouseRef: React.MutableRefObject<MouseState> }) {
  const meshRef = useRef<THREE.Points>(null)

  const { positions, colors } = useMemo(() => {
    const count = 2000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const palette = [
      new THREE.Color('#FF5C00'),
      new THREE.Color('#FF7A5C'),
      new THREE.Color('#ffffff'),
      new THREE.Color('#FF8533'),
      new THREE.Color('#ffccbb'),
    ]

    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 6 + 1
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = Math.random() * Math.PI * 2
      const arm = Math.floor(Math.random() * 3) * ((Math.PI * 2) / 3)
      const spiral = theta + arm + radius * 0.3

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(spiral)
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2.5
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(spiral)

      const c = palette[Math.floor(Math.random() * palette.length)]
      const brightness = 0.5 + Math.random() * 0.5
      colors[i * 3] = c.r * brightness
      colors[i * 3 + 1] = c.g * brightness
      colors[i * 3 + 2] = c.b * brightness
    }

    return { positions, colors }
  }, [])

  useFrame(() => {
    if (!meshRef.current) return
    meshRef.current.rotation.y += 0.0003

    mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04
    mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04

    meshRef.current.rotation.x = mouseRef.current.y * 0.08
    meshRef.current.rotation.z = mouseRef.current.x * 0.04
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

// ─── Floating Orbs ────────────────────────────────────────────────────────────
const ORB_DATA: Array<{
  pos: [number, number, number]
  radius: number
  color: string
  speed: number
  phase: number
}> = [
  { pos: [2.2, 0.8, -1.5], radius: 0.55, color: '#FF5C00', speed: 0.6, phase: 0 },
  { pos: [-2.5, -0.4, -2.0], radius: 0.38, color: '#FF7A5C', speed: 0.9, phase: 1.2 },
  { pos: [1.0, -1.5, -0.8], radius: 0.28, color: '#ffffff', speed: 1.1, phase: 2.4 },
  { pos: [-1.4, 1.5, -1.2], radius: 0.45, color: '#FF5C00', speed: 0.7, phase: 0.7 },
  { pos: [3.0, -0.8, -3.0], radius: 0.62, color: '#FF8533', speed: 0.5, phase: 3.1 },
  { pos: [-3.2, 0.5, -2.5], radius: 0.3, color: '#FF7A5C', speed: 1.3, phase: 1.8 },
  { pos: [0.5, 2.2, -1.8], radius: 0.22, color: '#ffffff', speed: 1.5, phase: 0.3 },
  { pos: [-0.8, -2.0, -0.5], radius: 0.5, color: '#FF5C00', speed: 0.8, phase: 2.1 },
  { pos: [2.8, 1.5, -2.2], radius: 0.2, color: '#FF7A5C', speed: 1.2, phase: 1.5 },
  { pos: [-2.0, -1.2, -1.0], radius: 0.35, color: '#FF8533', speed: 0.65, phase: 0.9 },
  { pos: [1.5, -2.5, -2.8], radius: 0.42, color: '#ffffff', speed: 1.0, phase: 2.8 },
  { pos: [-0.3, 1.0, -0.3], radius: 0.18, color: '#FF5C00', speed: 1.4, phase: 1.0 },
]

function FloatingOrb({
  pos,
  radius,
  color,
  speed,
  phase,
  mouseRef,
}: {
  pos: [number, number, number]
  radius: number
  color: string
  speed: number
  phase: number
  mouseRef: React.MutableRefObject<MouseState>
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const originX = pos[0]
  const originY = pos[1]
  const originZ = pos[2]

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.elapsedTime
    const bobY = Math.sin(t * speed + phase) * 0.18
    const bobX = Math.cos(t * speed * 0.7 + phase) * 0.06
    const mx = mouseRef.current.x * 0.25
    const my = mouseRef.current.y * 0.25

    meshRef.current.position.x = originX + bobX + mx * radius * 0.5
    meshRef.current.position.y = originY + bobY + my * radius * 0.5
    meshRef.current.position.z = originZ
  })

  const threeColor = useMemo(() => new THREE.Color(color), [color])

  return (
    <mesh ref={meshRef} position={pos} castShadow={false} receiveShadow={false}>
      <sphereGeometry args={[radius, 24, 24]} />
      <meshStandardMaterial
        color={threeColor}
        emissive={threeColor}
        emissiveIntensity={0.6}
        roughness={0.1}
        metalness={0.2}
        transparent
        opacity={0.88}
      />
    </mesh>
  )
}

function FloatingOrbs({ mouseRef }: { mouseRef: React.MutableRefObject<MouseState> }) {
  return (
    <>
      {ORB_DATA.map((orb, i) => (
        <FloatingOrb key={i} {...orb} mouseRef={mouseRef} />
      ))}
    </>
  )
}

// ─── Three.js Scene ───────────────────────────────────────────────────────────
function Scene({ mouseRef }: { mouseRef: React.MutableRefObject<MouseState> }) {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[2, 2, 2]} intensity={60} color="#FF5C00" />
      <pointLight position={[-2, -1, 3]} intensity={40} color="#FF7A5C" />
      <pointLight position={[0, 0, 4]} intensity={20} color="#ffffff" />
      <ParticleField mouseRef={mouseRef} />
      <FloatingOrbs mouseRef={mouseRef} />
    </>
  )
}

// ─── CSS Fallback ─────────────────────────────────────────────────────────────
function FallbackBackground() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,92,0,0.18) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 20%, rgba(255,122,92,0.12) 0%, transparent 60%), #111111',
      }}
    >
      {[
        { size: 320, left: '15%', top: '20%', color: 'rgba(255,92,0,0.12)', dur: 8 },
        { size: 240, left: '70%', top: '50%', color: 'rgba(255,122,92,0.10)', dur: 10 },
        { size: 180, left: '40%', top: '70%', color: 'rgba(255,92,0,0.08)', dur: 12 },
      ].map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            top: b.top,
            background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
            animation: `heroFloat ${b.dur}s ease-in-out infinite`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}
    </div>
  )
}

// ─── Animated headline word-by-word ──────────────────────────────────────────
const HEADLINE_WORDS = ['Launch', 'Businesses', 'Worth', 'Remembering.']

function AnimatedHeadline() {
  return (
    <h1
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: 'clamp(3.5rem, 8vw, 7rem)',
        lineHeight: 0.92,
        color: '#ffffff',
        letterSpacing: '-0.02em',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '0 1rem',
      }}
    >
      {HEADLINE_WORDS.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.09, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'inline-block' }}
        >
          {word}
        </motion.span>
      ))}
    </h1>
  )
}

// ─── Scroll Indicator ─────────────────────────────────────────────────────────
function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.9, duration: 0.6 }}
    >
      <span
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.65rem',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          color: 'rgba(255,255,255,0.38)',
        }}
      >
        Scroll
      </span>
      <motion.div
        style={{ width: 1, height: 40, backgroundColor: '#FF5C00', originY: 0 }}
        animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#FF5C00' }}
        animate={{ y: [0, 6, 0], opacity: [1, 0.4, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}

// ─── Main Hero ────────────────────────────────────────────────────────────────
export default function Hero() {
  const [webglSupported] = useState(() => isWebGLSupported())
  const mouseRef = useRef<MouseState>({ x: 0, y: 0, targetX: 0, targetY: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth - 0.5) * 2
      mouseRef.current.targetY = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      style={{ minHeight: '100vh', backgroundColor: '#111111', position: 'relative', overflow: 'hidden' }}
    >
      {/* 3D Canvas or CSS fallback */}
      {webglSupported ? (
        <div style={{ position: 'absolute', inset: 0, zIndex: 10 }}>
          <Canvas
            camera={{ position: [0, 0, 5], fov: 60 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
          >
            <AdaptiveDpr pixelated />
            <AdaptiveEvents />
            <Suspense fallback={null}>
              <Scene mouseRef={mouseRef} />
            </Suspense>
          </Canvas>
        </div>
      ) : (
        <div style={{ position: 'absolute', inset: 0, zIndex: 10 }}>
          <FallbackBackground />
        </div>
      )}

      {/* Radial vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 15,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 70% 80% at 50% 50%, transparent 30%, rgba(17,17,17,0.65) 100%)',
        }}
      />

      {/* Text overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 1.5rem',
        }}
      >
        <div style={{ maxWidth: '64rem', width: '100%', textAlign: 'center' }}>
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.7rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
              color: '#FF5C00',
              marginBottom: '1.5rem',
              display: 'inline-block',
            }}
          >
            Premium Digital Agency
          </motion.p>

          {/* Headline */}
          <div style={{ marginBottom: '1.5rem' }}>
            <AnimatedHeadline />
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: '1.125rem',
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.68)',
              maxWidth: '38rem',
              margin: '0 auto 2.5rem',
            }}
          >
            Premium websites, social media, branding, AI automation, and ready-to-launch
            businesses — all in one place.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: '#FF7A1A' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '1rem 2rem',
                borderRadius: '9999px',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#ffffff',
                backgroundColor: '#FF5C00',
                border: 'none',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                boxShadow: '0 8px 32px rgba(255,92,0,0.35)',
              }}
            >
              Launch My Business
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.12)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '1rem 2rem',
                borderRadius: '9999px',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#ffffff',
                backgroundColor: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.18)',
                backdropFilter: 'blur(12px)',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Browse Ready-Made Businesses
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '8rem',
          zIndex: 25,
          pointerEvents: 'none',
          background: 'linear-gradient(to bottom, transparent, #111111)',
        }}
      />

      {/* Scroll indicator */}
      <div style={{ position: 'relative', zIndex: 30 }}>
        <ScrollIndicator />
      </div>

      {/* Keyframe for CSS fallback animation */}
      <style>{`
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-22px) scale(1.05); }
        }
      `}</style>
    </section>
  )
}
