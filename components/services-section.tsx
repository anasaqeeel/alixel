"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Globe, Smartphone, Database, Shield, Zap, ArrowRight, Code, Cloud } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning & AI",
      description:
        "Advanced ML models, neural networks, and AI-powered solutions to automate and optimize your business processes.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Deep Learning"],
      color: "text-primary",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      features: ["React/Next.js", "Full-Stack Development", "Progressive Web Apps", "E-commerce Solutions"],
      color: "text-accent",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
      color: "text-primary",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Robust data pipelines, warehouses, and analytics solutions for data-driven decision making.",
      features: ["Data Pipelines", "ETL Processes", "Data Warehousing", "Real-time Analytics"],
      color: "text-accent",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps solutions for modern applications.",
      features: ["AWS/Azure/GCP", "Kubernetes", "CI/CD Pipelines", "Microservices"],
      color: "text-primary",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Threat Monitoring"],
      color: "text-accent",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Code className="w-4 h-4 mr-2" />
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Comprehensive IT Solutions</span>
            <br />
            <span className="text-foreground">Tailored for Your Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI-powered applications to scalable web platforms, we deliver end-to-end solutions that drive
            innovation and business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className={`w-6 h-6 ${service.color}`} />
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 bg-transparent"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your goals. Get a free consultation and project
              estimate today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
