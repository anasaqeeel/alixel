import { Navigation } from "@/components/navigation"
import { BlogHero } from "@/components/blog-hero"
import { BlogPosts } from "@/components/blog-posts"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Blog - Alixel | Technology Insights & Industry Trends",
  description:
    "Stay updated with the latest in AI, web development, cloud computing, and cybersecurity. Expert insights and practical guides from Alixel's technology specialists.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogHero />
      <BlogPosts />
      <Footer />
    </main>
  )
}
