import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  role: string
  image: string
  quote: string
  rating: number
}

export default function TestimonialCard({ name, role, image, quote, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 h-full">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-blue-900/50">
          <div className="w-full h-full relative">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" unoptimized />
          </div>
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>

      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`} />
        ))}
      </div>

      <blockquote className="text-gray-300 italic">"{quote}"</blockquote>
    </div>
  )
}
