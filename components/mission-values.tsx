"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Target, Users, Zap, Shield, Globe } from "lucide-react"

export function MissionValues() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push boundaries and embrace emerging technologies to deliver cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description:
        "Your success is our priority. We build lasting partnerships through exceptional service and results.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We maintain the highest standards in code quality, security, and performance across all projects.",
    },
    {
      icon: Zap,
      title: "Agile Excellence",
      description: "Fast, flexible, and efficient delivery through proven agile methodologies and best practices.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating solutions that scale globally while maintaining local market understanding and support.",
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Every decision and action is guided by measurable outcomes and tangible business value.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Our Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To empower businesses worldwide with innovative technology solutions that drive growth, efficiency, and
            competitive advantage. We believe in transforming complex challenges into simple, elegant solutions that
            create lasting value.
          </p>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            <span className="text-foreground">Our Core Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="animate-fade-in-up">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            <span className="text-foreground">Our Journey</span>
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-accent"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                <div className="relative flex items-center">
                  <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
                      <div className="text-primary font-semibold mb-2">2020</div>
                      <h4 className="text-lg font-bold mb-2">Company Founded</h4>
                      <p className="text-muted-foreground">
                        Alixel was established with a vision to bridge the gap between innovative technology and
                        practical business solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center md:justify-end">
                  <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
                      <div className="text-accent font-semibold mb-2">2021</div>
                      <h4 className="text-lg font-bold mb-2">First Major Milestone</h4>
                      <p className="text-muted-foreground">
                        Delivered 50+ successful projects and established partnerships with leading technology
                        companies.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
                      <div className="text-primary font-semibold mb-2">2022</div>
                      <h4 className="text-lg font-bold mb-2">AI & ML Specialization</h4>
                      <p className="text-muted-foreground">
                        Expanded our expertise into artificial intelligence and machine learning, becoming industry
                        leaders in AI-powered solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center md:justify-end">
                  <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
                      <div className="text-accent font-semibold mb-2">2023</div>
                      <h4 className="text-lg font-bold mb-2">Global Expansion</h4>
                      <p className="text-muted-foreground">
                        Opened international offices and expanded our team to 50+ talented professionals across multiple
                        continents.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
                      <div className="text-primary font-semibold mb-2">2024</div>
                      <h4 className="text-lg font-bold mb-2">Innovation Hub</h4>
                      <p className="text-muted-foreground">
                        Launched our innovation lab and achieved 500+ successful project deliveries with 98% client
                        satisfaction rate.
                      </p>
                    </div>
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
