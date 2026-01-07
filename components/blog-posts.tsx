"use client"

import { useState } from "react"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, Calendar, Clock, Eye, Filter } from "lucide-react"

export function BlogPosts() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "AI/ML", "Web Development", "Cloud", "Cybersecurity", "Industry Trends", "Case Studies"]

  const blogPosts = [
    {
      title: "The Future of AI in Enterprise Software Development",
      excerpt:
        "Exploring how artificial intelligence is revolutionizing enterprise software development and what it means for businesses in 2024.",
      category: "AI/ML",
      author: "Sarah Chen",
      authorAvatar: "/cto-headshot.png",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      views: "2.3K",
      image: "/blog-ai-enterprise.png",
      featured: true,
    },
    {
      title: "Building Scalable Web Applications with Next.js 15",
      excerpt:
        "A comprehensive guide to leveraging the latest features in Next.js 15 for building high-performance, scalable web applications.",
      category: "Web Development",
      author: "Michael Johnson",
      authorAvatar: "/ai-engineer-headshot.png",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      views: "1.8K",
      image: "/blog-nextjs-guide.png",
      featured: false,
    },
    {
      title: "Cloud Security Best Practices for 2024",
      excerpt:
        "Essential security measures every organization should implement when migrating to cloud infrastructure.",
      category: "Cybersecurity",
      author: "Emily Davis",
      authorAvatar: "/professional-designer-headshot.png",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      views: "1.5K",
      image: "/blog-cloud-security.png",
      featured: false,
    },
    {
      title: "Machine Learning Model Deployment: From Development to Production",
      excerpt:
        "Step-by-step guide to deploying ML models in production environments with monitoring and maintenance strategies.",
      category: "AI/ML",
      author: "David Kim",
      authorAvatar: "/placeholder-gysc1.png",
      date: "Dec 8, 2024",
      readTime: "15 min read",
      views: "2.1K",
      image: "/blog-ml-deployment.png",
      featured: false,
    },
    {
      title: "The Rise of Edge Computing: Opportunities and Challenges",
      excerpt:
        "Understanding edge computing's impact on modern applications and how businesses can leverage this technology.",
      category: "Industry Trends",
      author: "Lisa Thompson",
      authorAvatar: "/professional-project-manager-headshot.png",
      date: "Dec 5, 2024",
      readTime: "7 min read",
      views: "1.2K",
      image: "/blog-edge-computing.png",
      featured: false,
    },
    {
      title: "Case Study: Transforming Healthcare with AI-Powered Diagnostics",
      excerpt:
        "How we helped MedTech Solutions implement AI diagnostics that improved accuracy by 40% and reduced diagnosis time by 60%.",
      category: "Case Studies",
      author: "Alex Rodriguez",
      authorAvatar: "/professional-ceo-headshot.png",
      date: "Dec 3, 2024",
      readTime: "11 min read",
      views: "3.2K",
      image: "/blog-healthcare-ai.png",
      featured: true,
    },
  ]

  const filteredPosts =
    activeCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent hover:bg-primary/10"
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {activeCategory === "All" && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Featured Article</h2>
            {blogPosts
              .filter((post) => post.featured)
              .slice(0, 1)
              .map((post) => (
                <Card
                  key={post.title}
                  className="group hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg?height=400&width=600"}
                        alt={post.title}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        {post.category}
                      </Badge>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <CardTitle className="text-2xl mb-4 group-hover:text-primary transition-colors duration-300">
                        {post.title}
                      </CardTitle>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                          <Avatar className="w-10 h-10 mr-3">
                            <AvatarImage src={post.authorAvatar || "/placeholder.svg"} alt={post.author} />
                            <AvatarFallback>
                              {post.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-sm">{post.author}</div>
                            <div className="text-muted-foreground text-xs flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {post.date}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                          <Eye className="w-4 h-4 ml-3 mr-1" />
                          {post.views}
                        </div>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts
            .filter((post) => !post.featured || activeCategory !== "All")
            .map((post, index) => (
              <Card
                key={post.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  {/* Post Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg?height=200&width=400"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">{post.category}</Badge>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <CardTitle className="text-lg mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                    {/* Author & Meta */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Avatar className="w-8 h-8 mr-2">
                          <AvatarImage src={post.authorAvatar || "/placeholder.svg"} alt={post.author} />
                          <AvatarFallback className="text-xs">
                            {post.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-xs">{post.author}</div>
                          <div className="text-muted-foreground text-xs flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {post.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-muted-foreground text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 bg-transparent"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8 bg-transparent">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
