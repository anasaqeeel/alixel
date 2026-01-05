"use client"
import { useState, useEffect } from "react"
import { ArrowRight, Play, Sparkles, Zap, Target } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { MagneticButton } from "@/components/magnetic-button"
import { AnimatedCounter } from "@/components/animated-counter"

export function EnhancedHeroSection() {
  const [particles, setParticles] = useState<
    Array<{
      left: string
      top: string
      animationDelay: string
      animationDuration: string
    }>
  >([])

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const newParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${3 + Math.random() * 4}s`,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-background">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float morph-shape"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float morph-shape"
        style={{ animationDelay: "3s" }}
      ></div>

      {/* Animated particles - now client-only */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation>
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20 backdrop-blur-enhanced">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Transforming Ideas into Digital Reality
          </div>

          {/* Main Heading with text reveal */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text text-reveal">Premium IT Solutions</span>
            <br />
            <span className="text-foreground text-reveal" style={{ animationDelay: "0.5s" }}>
              for Modern Businesses
            </span>
          </h1>

          {/* Subheading */}
          <ScrollAnimation delay={300}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We specialize in cutting-edge machine learning, web development, and custom software solutions that drive
              innovation and accelerate your business growth.
            </p>
          </ScrollAnimation>

          {/* Enhanced CTA Buttons */}
          <ScrollAnimation delay={500}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <MagneticButton
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </MagneticButton>
              <MagneticButton
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-2 bg-transparent backdrop-blur-enhanced"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </MagneticButton>
            </div>
          </ScrollAnimation>

          {/* Enhanced Stats with animated counters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <ScrollAnimation delay={600} className="animate-stagger-1">
              <div className="card-hover-lift bg-card/30 backdrop-blur-enhanced rounded-xl p-6 border border-border/50">
                <div className="flex items-center justify-center mb-2">
                  <Target className="w-8 h-8 text-primary mr-2" />
                  <span className="text-3xl font-bold text-foreground">
                    <AnimatedCounter end={500} suffix="+" />
                  </span>
                </div>
                <p className="text-muted-foreground">Projects Delivered</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={700} className="animate-stagger-2">
              <div className="card-hover-lift bg-card/30 backdrop-blur-enhanced rounded-xl p-6 border border-border/50">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="w-8 h-8 text-accent mr-2" />
                  <span className="text-3xl font-bold text-foreground">
                    <AnimatedCounter end={98} suffix="%" />
                  </span>
                </div>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={800} className="animate-stagger-3">
              <div className="card-hover-lift bg-card/30 backdrop-blur-enhanced rounded-xl p-6 border border-border/50">
                <div className="flex items-center justify-center mb-2">
                  <Sparkles className="w-8 h-8 text-primary mr-2" />
                  <span className="text-3xl font-bold text-foreground">24/7</span>
                </div>
                <p className="text-muted-foreground">Support Available</p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center animate-pulse-glow">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
