import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CRMDetailContent } from "@/components/crm-detail-content"

export const metadata = {
  title: "Full Stack CRM Business Platform - Alixel Portfolio",
  description:
    "Enterprise-grade CRM solution with centralized admin panel, database-driven management, and full-stack client portals. Built for scale and control.",
}

export default function CRMBusinessPlatformPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <CRMDetailContent />
      </div>
      <Footer />
    </main>
  )
}

