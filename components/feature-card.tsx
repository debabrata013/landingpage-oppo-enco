import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 h-full transition-all duration-300 hover:bg-white/10 hover:scale-105">
      <div className="bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}
