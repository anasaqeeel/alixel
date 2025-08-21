import { Navigation } from "@/components/navigation"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { ServicesSection } from "@/components/services-section"
import { ClientLogos } from "@/components/client-logos"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CaseStudyTestimonial } from "@/components/case-study-testimonial"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <EnhancedHeroSection />
      <ClientLogos />
      <ServicesSection />
      <TestimonialsSection />
      <CaseStudyTestimonial />
      <Footer />
    </main>
  )
}
