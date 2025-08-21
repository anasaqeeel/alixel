"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react"

export function CaseStudyTestimonial() {
  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Featured Success Story</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep dive into how we helped RetailMax transform their e-commerce platform with AI-powered solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Case Study Content */}
          <div className="animate-slide-in-left">
            <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-primary text-primary-foreground">Featured Case Study</Badge>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-2xl">AI-Powered E-commerce Transformation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="/client-david-park.png" alt="David Park" />
                    <AvatarFallback>DP</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-lg">David Park</div>
                    <div className="text-muted-foreground">Head of Digital, RetailMax</div>
                    <div className="text-primary text-sm font-medium">Fortune 500 Retail Company</div>
                  </div>
                </div>

                <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-4">
                  "Alixel didn't just build us a platform – they revolutionized our entire customer experience. The AI
                  recommendations alone generated $5M in additional revenue in the first quarter."
                </blockquote>

                {/* Challenge */}
                <div>
                  <h4 className="font-semibold mb-2">The Challenge:</h4>
                  <p className="text-muted-foreground text-sm">
                    RetailMax was struggling with low conversion rates, poor user experience, and outdated inventory
                    management. They needed a complete digital transformation.
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="font-semibold mb-2">Our Solution:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">AI Recommendation Engine</Badge>
                    <Badge variant="secondary">Real-time Inventory</Badge>
                    <Badge variant="secondary">Personalized UX</Badge>
                    <Badge variant="secondary">Mobile-First Design</Badge>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Metrics */}
          <div className="animate-slide-in-right">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Measurable Results</h3>

              {/* Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-2">45%</div>
                    <div className="text-muted-foreground text-sm">Conversion Rate Increase</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                  <CardContent className="p-6 text-center">
                    <DollarSign className="w-8 h-8 text-accent mx-auto mb-3" />
                    <div className="text-3xl font-bold text-accent mb-2">$5M</div>
                    <div className="text-muted-foreground text-sm">Additional Revenue (Q1)</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-2">60%</div>
                    <div className="text-muted-foreground text-sm">Faster Page Load Times</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
                    <div className="text-3xl font-bold text-accent mb-2">200%</div>
                    <div className="text-muted-foreground text-sm">Mobile Traffic Increase</div>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline */}
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Project Timeline</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                      <div className="text-sm">
                        <span className="font-medium">Week 1-2:</span> Discovery & Planning
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                      <div className="text-sm">
                        <span className="font-medium">Week 3-8:</span> AI Engine Development
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                      <div className="text-sm">
                        <span className="font-medium">Week 9-12:</span> Platform Integration
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                      <div className="text-sm">
                        <span className="font-medium">Week 13-14:</span> Testing & Launch
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
