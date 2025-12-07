'use client';

import { useEffect, useRef, useState } from "react"

export default function AdelLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const containerRef = useRef(null)
  const lettersRef = useRef([])
  const tildeRef = useRef(null)
  const particlesRef = useRef([])
  const glowCircleRef = useRef(null)

  useEffect(() => {
    // Animation timeline
    const animateLoader = async () => {
      // Wait a bit before starting
      await wait(300)

      // Animate letters sequentially
      for (let i = 0; i < lettersRef.current.length; i++) {
        const letter = lettersRef.current[i]
        if (letter) {
          letter.style.opacity = "1"
          letter.style.transform = "translateY(0) scale(1)"
          await wait(150)
        }
      }

      // Animate tilde with bounce
      if (tildeRef.current) {
        tildeRef.current.style.opacity = "1"
        tildeRef.current.style.transform = "translateY(0) scale(1) rotate(0deg)"
        await wait(200)
      }

      // Pulse effect on all letters
      lettersRef.current.forEach((letter, i) => {
        if (letter) {
          setTimeout(() => {
            letter.style.transform = "scale(1.2)"
            setTimeout(() => {
              letter.style.transform = "scale(1)"
            }, 200)
          }, i * 80)
        }
      })

      // Trigger particle explosion
      particlesRef.current.forEach((particle, i) => {
        if (particle) {
          const angle = (i / particlesRef.current.length) * Math.PI * 2
          const distance = 150 + Math.random() * 100
          const x = Math.cos(angle) * distance
          const y = Math.sin(angle) * distance

          setTimeout(() => {
            particle.style.opacity = "1"
            particle.style.transform = `translate(${x}px, ${y}px) scale(1)`

            setTimeout(() => {
              particle.style.opacity = "0"
            }, 600)
          }, i * 30)
        }
      })

      await wait(1800)

      // Glow circle expansion
      if (glowCircleRef.current) {
        glowCircleRef.current.style.transform = "scale(3)"
        glowCircleRef.current.style.opacity = "0"
      }

      await wait(400)

      // Fade out container
      if (containerRef.current) {
        containerRef.current.style.opacity = "0"
      }

      await wait(800)
      setIsLoading(false)
    }

    animateLoader()
  }, [])

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

  if (!isLoading) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 transition-opacity duration-800"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] animate-pulse" />

      {/* Glow circle */}
      <div
        ref={glowCircleRef}
        className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30 blur-3xl transition-all duration-700 ease-out"
      />

      {/* Particles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (particlesRef.current[i] = el)}
            className="absolute w-3 h-3 rounded-full transition-all duration-700 ease-out"
            style={{
              opacity: 0,
              transform: "translate(0, 0) scale(0)",
              backgroundColor: i % 3 === 0 ? "#a855f7" : i % 3 === 1 ? "#ec4899" : "#06b6d4",
              boxShadow: `0 0 20px currentColor`,
            }}
          />
        ))}
      </div>

      {/* Main logo container */}
      <div className="relative z-10 flex items-center gap-1 md:gap-2">
        {/* Letters */}
        {["A", "D", "E", "L"].map((letter, i) => (
          <div
            key={i}
            ref={(el) => (lettersRef.current[i] = el)}
            className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight opacity-0 translate-y-8 transition-all duration-500 ease-out"
            style={{
              transform: "translateY(30px) scale(0.8)",
              background: "linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 30px rgba(168, 85, 247, 0.5))",
              fontFamily: "system-ui, -apple-system, sans-serif",
              transitionDelay: `${i * 100}ms`,
            }}
          >
            {letter}
          </div>
        ))}

        {/* Tilde */}
        <div
          ref={tildeRef}
          className="text-5xl sm:text-7xl md:text-8xl font-black opacity-0 transition-all duration-700 ease-out"
          style={{
            transform: "translateY(30px) scale(0.5) rotate(-180deg)",
            background: "linear-gradient(135deg, #06b6d4 0%, #a855f7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 0 30px rgba(6, 182, 212, 0.6))",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          ~
        </div>
      </div>


      {/* Orbiting dots */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] animate-spin-slow">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${i * 120}deg) translateX(min(250px, 40vw))`,
                boxShadow: "0 0 10px rgba(168, 85, 247, 0.8)",
                animation: `pulse 2s ease-in-out infinite ${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  )
}