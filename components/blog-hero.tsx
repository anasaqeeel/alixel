"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, TrendingUp } from "lucide-react"

export function BlogHero() {
  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-br from-background via-card to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Alixel Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Insights & Innovation</span>
            <br />
            <span className="text-foreground">in Technology</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights, industry trends, and practical guides from our team of
            technology specialists.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-3 bg-card/50 backdrop-blur-sm border-2 border-border focus:border-primary"
              />
              <Button size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                Search
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="animate-fade-in">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="w-6 h-6 text-primary mr-2" />
                <span className="text-2xl font-bold text-foreground">150+</span>
              </div>
              <p className="text-muted-foreground">Articles Published</p>
            </div>
            <div className="animate-fade-in delay-200">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-accent mr-2" />
                <span className="text-2xl font-bold text-foreground">50K+</span>
              </div>
              <p className="text-muted-foreground">Monthly Readers</p>
            </div>
            <div className="animate-fade-in delay-400">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="w-6 h-6 text-primary mr-2" />
                <span className="text-2xl font-bold text-foreground">Weekly</span>
              </div>
              <p className="text-muted-foreground">New Content</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
