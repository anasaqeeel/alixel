"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Users, TrendingUp } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Inc.",
      avatar: "/client-sarah-johnson.png",
      rating: 5,
      testimonial:
        "Alixel transformed our entire data infrastructure. Their ML models increased our prediction accuracy by 85% and reduced operational costs by $2M annually. Exceptional team and delivery.",
      project: "AI-Powered Analytics Platform",
      results: ["85% accuracy improvement", "$2M cost reduction", "3x faster processing"],
    },
    {
      name: "Michael Chen",
      role: "Founder & CEO",
      company: "FinanceFlow",
      avatar: "/client-michael-chen.png",
      rating: 5,
      testimonial:
        "The mobile app Alixel built for us has been a game-changer. We've seen 300% user growth and 4.9 App Store rating. Their attention to security and UX is unmatched.",
      project: "FinTech Mobile Application",
      results: ["300% user growth", "4.9 App Store rating", "Zero security incidents"],
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Operations",
      company: "HealthTech Solutions",
      avatar: "/client-emily-rodriguez.png",
      rating: 5,
      testimonial:
        "Working with Alixel was seamless. They delivered our healthcare platform ahead of schedule and under budget. The system now processes 10,000+ patients daily with 99.9% uptime.",
      project: "Healthcare Management System",
      results: ["10,000+ daily patients", "99.9% uptime", "Ahead of schedule"],
    },
    {
      name: "David Park",
      role: "Head of Digital",
      company: "RetailMax",
      avatar: "/client-david-park.png",
      rating: 5,
      testimonial:
        "The e-commerce platform Alixel built increased our conversion rate by 45% and revenue by $5M in the first quarter. Their AI recommendations are incredibly accurate.",
      project: "AI-Enhanced E-commerce Platform",
      results: ["45% conversion increase", "$5M revenue boost", "Smart recommendations"],
    },
    {
      name: "Lisa Thompson",
      role: "IT Director",
      company: "CloudFirst Corp",
      avatar: "/client-lisa-thompson.png",
      rating: 5,
      testimonial:
        "Alixel's cloud migration expertise saved us 60% on infrastructure costs while improving performance by 200%. Their DevOps practices are industry-leading.",
      project: "Cloud Infrastructure Migration",
      results: ["60% cost savings", "200% performance boost", "Zero downtime migration"],
    },
    {
      name: "James Wilson",
      role: "Security Officer",
      company: "SecureBank",
      avatar: "/client-james-wilson.png",
      rating: 5,
      testimonial:
        "The cybersecurity audit platform Alixel developed identified 95% more vulnerabilities than our previous solution. Their security expertise is world-class.",
      project: "Cybersecurity Audit Platform",
      results: ["95% more vulnerabilities found", "Automated reporting", "Compliance achieved"],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            Client Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with Alixel.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center animate-fade-in">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center animate-fade-in delay-100">
            <div className="text-3xl font-bold text-accent mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center animate-fade-in delay-200">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Client Retention</div>
          </div>
          <div className="text-center animate-fade-in delay-300">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.testimonial}"</p>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-sm flex items-center">
                    <TrendingUp className="w-4 h-4 text-primary mr-2" />
                    Key Results:
                  </h4>
                  <div className="space-y-1">
                    {testimonial.results.map((result) => (
                      <Badge key={result} variant="secondary" className="text-xs mr-1 mb-1">
                        {result}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Client Info */}
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                    <div className="text-xs text-primary font-medium mt-1">{testimonial.project}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
