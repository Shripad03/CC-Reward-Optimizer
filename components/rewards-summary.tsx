"use client"

import { useEffect, useRef } from "react"

// This would normally be imported from a charting library like Chart.js
// For this example, we'll create a simple placeholder
export function RewardsSummary() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    // Set canvas dimensions
    const width = canvasRef.current.width
    const height = canvasRef.current.height

    // Draw a simple bar chart
    const data = [
      { label: "HDFC", value: 32450, color: "#16a34a" },
      { label: "Air India", value: 24560, color: "#2563eb" },
      { label: "Vistara", value: 12340, color: "#9333ea" },
      { label: "Marriott", value: 45780, color: "#dc2626" },
      { label: "IHG", value: 32670, color: "#ea580c" },
    ]

    const maxValue = Math.max(...data.map((item) => item.value))
    const barWidth = width / data.length - 20

    data.forEach((item, index) => {
      const x = index * (barWidth + 20) + 10
      const barHeight = (item.value / maxValue) * (height - 60)
      const y = height - barHeight - 30

      // Draw bar
      ctx.fillStyle = item.color
      ctx.fillRect(x, y, barWidth, barHeight)

      // Draw label
      ctx.fillStyle = "#64748b"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(item.label, x + barWidth / 2, height - 10)

      // Draw value
      ctx.fillStyle = "#64748b"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(item.value.toString(), x + barWidth / 2, y - 5)
    })
  }, [])

  return (
    <div className="w-full h-64">
      <canvas ref={canvasRef} width={500} height={250} className="w-full h-full" />
    </div>
  )
}

