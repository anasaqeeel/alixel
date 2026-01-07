import { Navigation } from "@/components/navigation"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contact Us - Alixel | Get Your Free IT Consultation",
  description:
    "Ready to transform your business? Contact Alixel for expert IT solutions. Get free consultation, project estimates, and 24/7 support. Multiple offices worldwide.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <ContactForm />
      <Footer />
    </main>
  )
}
