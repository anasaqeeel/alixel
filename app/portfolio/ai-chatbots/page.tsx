import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ChatbotDetailContent } from "@/components/chatbot-detail-content"

export const metadata = {
  title: "AI Chatbots & Intelligent Automation - Alixel Portfolio",
  description:
    "Enterprise-grade AI chatbot solutions with conversational automation, full-system integrations, and multi-channel deployment. Transform customer communication.",
}

export default function AIChatbotsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <ChatbotDetailContent />
      </div>
      <Footer />
    </main>
  )
}

