"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Sparkles } from "lucide-react"

export function ServicesHero() {
  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-br from-background via-card to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Code className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Comprehensive IT Solutions</span>
            <br />
            <span className="text-foreground">Tailored for Your Success</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            From AI-powered applications to scalable web platforms, we deliver end-to-end technology solutions that
            drive innovation and accelerate business growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Get Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              <Sparkles className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
