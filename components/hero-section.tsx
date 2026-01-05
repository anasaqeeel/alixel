"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Zap, Target } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Transforming Ideas into Digital Reality
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Premium IT Solutions</span>
            <br />
            <span className="text-foreground">for Modern Businesses</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We specialize in cutting-edge machine learning, web development, and custom software solutions that drive
            innovation and accelerate your business growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 bg-transparent">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="animate-slide-in-left">
              <div className="flex items-center justify-center mb-2">
                <Target className="w-8 h-8 text-primary mr-2" />
                <span className="text-3xl font-bold text-foreground">500+</span>
              </div>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="animate-fade-in delay-200">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-8 h-8 text-accent mr-2" />
                <span className="text-3xl font-bold text-foreground">98%</span>
              </div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="animate-slide-in-right">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="w-8 h-8 text-primary mr-2" />
                <span className="text-3xl font-bold text-foreground">24/7</span>
              </div>
              <p className="text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
