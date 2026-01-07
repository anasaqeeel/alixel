"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Phone, Mail } from "lucide-react"

export function ContactHero() {
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
              <MessageCircle className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Let's Build Something</span>
              <br />
              <span className="text-foreground">Amazing Together</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your business with cutting-edge technology? Our team of experts is here to help you
              every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Call
              </Button>
            </div>
          </div>

          {/* Quick Contact Info */}
          <div className="animate-fade-in">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email Us</div>
                    <div className="text-muted-foreground">hello@alixel.xyz</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-medium">Call Us</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Live Chat</div>
                    <div className="text-muted-foreground">Available 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
