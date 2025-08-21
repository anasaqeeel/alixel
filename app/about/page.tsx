import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { MissionValues } from "@/components/mission-values"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About Us - Alixel | Leading IT Software House",
  description:
    "Learn about Alixel's mission, values, and expert team. Discover how we've been transforming businesses through innovative technology solutions since 2020.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <MissionValues />
      <TeamSection />
      <Footer />
    </main>
  )
}
