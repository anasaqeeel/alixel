import { Navigation } from "@/components/navigation"
import { ServicesHero } from "@/components/services-hero"
import { DetailedServices } from "@/components/detailed-services"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Services - Alixel | AI, Web Development & Custom Software Solutions",
  description:
    "Explore Alixel's comprehensive IT services including machine learning, web development, mobile apps, cloud solutions, and cybersecurity. Get custom quotes and timelines.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ServicesHero />
      <DetailedServices />
      <Footer />
    </main>
  )
}
