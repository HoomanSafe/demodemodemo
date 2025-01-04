'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  size: number
  speed: number
}

export function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    let animationFrameId: number
    const stars: Star[] = []
    const numStars = 100

    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createStars = () => {
      stars.length = 0
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * (canvas?.width ?? 0),
          y: Math.random() * (canvas?.height ?? 0),
          size: Math.random() * 2,
          speed: Math.random() * 0.5
        })
      }
    }

    const animate = () => {
      if (!canvas || !context) return

      context.fillStyle = 'rgba(0, 0, 0, 0.1)'
      context.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach(star => {
        if (!context) return
        context.fillStyle = 'rgba(147, 51, 234, 0.8)'
        context.beginPath()
        context.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        context.fill()

        star.y += star.speed
        if (star.y > (canvas?.height ?? 0)) {
          star.y = 0
          star.x = Math.random() * (canvas?.width ?? 0)
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()
    createStars()
    animate()

    // Handle window resize
    window.addEventListener('resize', () => {
      resizeCanvas()
      createStars()
    })

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}

