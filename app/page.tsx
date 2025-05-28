import { Button } from "@/components/ui/button"
import { ArrowRight, Battery, Droplet, Mic } from "lucide-react"
import ProductViewer from "@/components/product-viewer"
import FeatureCard from "@/components/feature-card"
import ComparisonTable from "@/components/comparison-table"
import TestimonialCard from "@/components/testimonial-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-black z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.png')] bg-cover opacity-10 z-0"></div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Feel the Future of Sound
                <span className="block text-blue-500">Oppo Enco Buds 3</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-md">
                Immerse yourself in crystal clear audio with cutting-edge technology designed for the modern listener.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8">
                  Buy Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 rounded-full px-8"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-12 md:mt-0">
              <ProductViewer />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center items-start p-1">
            <div className="w-1 h-3 bg-white/60 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-black to-blue-950">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Cutting-Edge <span className="text-blue-500">Features</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={0.1}>
              <FeatureCard
                icon={<Mic className="h-8 w-8 text-blue-500" />}
                title="AI Noise Cancellation"
                description="Smart algorithm that filters out background noise for crystal clear calls and immersive music."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <FeatureCard
                icon={<ArrowRight className="h-8 w-8 text-blue-500" />}
                title="47ms Ultra-low Latency"
                description="Lightning-fast response time for gaming and videos with perfect audio-visual sync."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <FeatureCard
                icon={<Battery className="h-8 w-8 text-blue-500" />}
                title="35-Hour Battery Life"
                description="Extended playtime with quick charging for all-day listening without interruption."
              />
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <FeatureCard
                icon={<Droplet className="h-8 w-8 text-blue-500" />}
                title="IP54 Water Resistance"
                description="Protected against sweat and splashes for worry-free workouts and outdoor activities."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-[url('/images/lifestyle.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Life, <span className="text-blue-500">Enhanced</span>
              </h2>
              <p className="text-lg text-gray-300 mb-12">
                From morning workouts to evening commutes, Oppo Enco Buds 3 seamlessly integrates into your lifestyle
                with comfort and style.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <ScrollReveal delay={0.1}>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Fitness</h3>
                  <p className="text-gray-300">Secure fit and sweat resistance for your most intense workouts.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Travel</h3>
                  <p className="text-gray-300">Noise cancellation and long battery life for your journeys.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Relaxation</h3>
                  <p className="text-gray-300">Immersive sound quality for your favorite music and podcasts.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Comparison */}
      <section className="py-24 bg-gradient-to-b from-blue-950 to-black">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              How It <span className="text-blue-500">Compares</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <ComparisonTable />
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              What Our <span className="text-blue-500">Users Say</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <TestimonialCard
                name="Alex Johnson"
                role="Fitness Enthusiast"
                image="/images/testimonial-1.jpg"
                quote="The battery life is incredible. I can go a full week of workouts without recharging!"
                rating={5}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <TestimonialCard
                name="Sarah Chen"
                role="Music Producer"
                image="/images/testimonial-2.jpg"
                quote="The sound quality is exceptional. I can hear details in my tracks I've never noticed before."
                rating={5}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <TestimonialCard
                name="Michael Rivera"
                role="Tech Reviewer"
                image="/images/testimonial-3.jpg"
                quote="The noise cancellation is on par with earbuds twice the price. Truly impressive."
                rating={4}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] bg-cover opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Experience the Future?</h2>
              <p className="text-xl text-white/80 mb-10">
                Join thousands of satisfied users and elevate your audio experience today.
              </p>
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 rounded-full px-10 py-6 text-lg">
                Get Your Oppo Enco Buds 3 Now
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
