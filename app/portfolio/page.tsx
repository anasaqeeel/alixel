import { Navigation } from "@/components/navigation"
import { PortfolioShowcase } from "@/components/portfolio-showcase"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Portfolio - Alixel | Successful IT Projects & Case Studies",
  description:
    "Explore Alixel's portfolio of successful projects including AI platforms, web applications, mobile apps, and enterprise solutions. See our proven track record.",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <PortfolioShowcase />
      </div>
      <Footer />
    </main>
  )
}
