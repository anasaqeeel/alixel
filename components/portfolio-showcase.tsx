"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, ArrowRight, Filter } from "lucide-react"

export function PortfolioShowcase() {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      title: "AI-Powered E-commerce Platform",
      category: "AI/ML",
      description:
        "Intelligent recommendation engine and inventory management system that increased sales by 40% for a major retailer.",
      image: "/ecommerce-ai-platform.png",
      technologies: ["React", "Python", "TensorFlow", "AWS", "PostgreSQL"],
      results: ["40% increase in sales", "60% better user engagement", "25% reduction in inventory costs"],
      client: "RetailCorp",
      timeline: "12 weeks",
      link: "#",
      github: "#",
    },
    {
      title: "Healthcare Management System",
      category: "Web Development",
      description: "Comprehensive patient management platform with real-time analytics and telemedicine capabilities.",
      image: "/healthcare-management-system.png",
      technologies: ["Next.js", "Node.js", "MongoDB", "Socket.io", "Stripe"],
      results: ["50% faster patient processing", "99.9% uptime", "HIPAA compliant"],
      client: "MedTech Solutions",
      timeline: "16 weeks",
      link: "#",
      github: "#",
    },
    {
      title: "FinTech Mobile App",
      category: "Mobile Development",
      description:
        "Secure mobile banking application with biometric authentication and real-time transaction monitoring.",
      image: "/fintech-mobile-app.png",
      technologies: ["React Native", "Firebase", "Plaid API", "Biometric SDK"],
      results: ["100K+ downloads", "4.8 App Store rating", "Zero security incidents"],
      client: "SecureBank",
      timeline: "14 weeks",
      link: "#",
      github: "#",
    },
    {
      title: "Smart City IoT Dashboard",
      category: "Data Engineering",
      description:
        "Real-time data visualization platform for city infrastructure monitoring and predictive maintenance.",
      image: "/smart-city-dashboard.png",
      technologies: ["Python", "Apache Kafka", "Elasticsearch", "D3.js", "Docker"],
      results: ["30% reduction in maintenance costs", "Real-time monitoring", "Predictive alerts"],
      client: "CityTech",
      timeline: "10 weeks",
      link: "#",
      github: "#",
    },
    {
      title: "Cloud Migration Project",
      category: "Cloud Solutions",
      description: "Complete infrastructure migration to AWS with 99.99% uptime and 50% cost reduction.",
      image: "/cloud-migration-project.png",
      technologies: ["AWS", "Terraform", "Kubernetes", "Jenkins", "Monitoring"],
      results: ["50% cost reduction", "99.99% uptime", "Auto-scaling implemented"],
      client: "TechStartup Inc",
      timeline: "8 weeks",
      link: "#",
      github: "#",
    },
    {
      title: "Cybersecurity Audit Platform",
      category: "Cybersecurity",
      description: "Automated security assessment tool with vulnerability scanning and compliance reporting.",
      image: "/cybersecurity-audit-platform.png",
      technologies: ["Python", "Nmap", "OWASP ZAP", "React", "PostgreSQL"],
      results: ["90% faster audits", "Automated reporting", "Compliance achieved"],
      client: "SecureCorp",
      timeline: "6 weeks",
      link: "#",
      github: "#",
    },
  ]

  const categories = [
    "All",
    "AI/ML",
    "Web Development",
    "Mobile Development",
    "Data Engineering",
    "Cloud Solutions",
    "Cybersecurity",
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Our Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our successful projects and see how we've helped businesses transform through technology.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category)}
                className={`${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent hover:bg-primary/10"
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg?height=300&width=600"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">{project.category}</Badge>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="p-2 h-auto">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2 h-auto">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result) => (
                        <li key={result} className="flex items-center text-sm text-muted-foreground">
                          <ArrowRight className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Details */}
                  <div className="flex items-center justify-between pt-4 border-t border-border text-sm text-muted-foreground">
                    <div>Client: {project.client}</div>
                    <div>Timeline: {project.timeline}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results. Get a free consultation and project estimate
              today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
