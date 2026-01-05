"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, Lightbulb } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-br from-background via-card to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              About Alixel
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Innovating Tomorrow,</span>
              <br />
              <span className="text-foreground">Delivering Today</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Founded in 2020, Alixel has been at the forefront of digital transformation, helping businesses leverage
              cutting-edge technology to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent">
                Meet the Team
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <Target className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">50+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <Lightbulb className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">4</div>
              <div className="text-muted-foreground">Years of Innovation</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <Target className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
