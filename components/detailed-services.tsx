"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Globe, Smartphone, Database, Cloud, Shield, ArrowRight, Check, Zap, Code, BarChart } from "lucide-react"

export function DetailedServices() {
  const services = [
    {
      icon: Brain,
      title: "Machine Learning & AI",
      description: "Advanced AI solutions that transform your data into actionable insights and automated processes.",
      features: [
        "Custom ML Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI Integration & Deployment",
        "Model Optimization & Monitoring",
      ],
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face"],
      pricing: "Starting from $15,000",
      timeline: "8-16 weeks",
      color: "text-primary",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      features: [
        "Full-Stack Web Applications",
        "Progressive Web Apps (PWA)",
        "E-commerce Platforms",
        "Content Management Systems",
        "API Development & Integration",
        "Performance Optimization",
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
      pricing: "Starting from $8,000",
      timeline: "4-12 weeks",
      color: "text-accent",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: [
        "iOS & Android Native Apps",
        "Cross-Platform Development",
        "Mobile UI/UX Design",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      pricing: "Starting from $12,000",
      timeline: "6-14 weeks",
      color: "text-primary",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Robust data pipelines and analytics solutions for data-driven decision making.",
      features: [
        "Data Pipeline Development",
        "ETL/ELT Processes",
        "Data Warehousing",
        "Real-time Analytics",
        "Data Visualization",
        "Business Intelligence",
      ],
      technologies: ["Apache Spark", "Airflow", "Snowflake", "Tableau", "Power BI"],
      pricing: "Starting from $10,000",
      timeline: "6-12 weeks",
      color: "text-accent",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and DevOps solutions for modern applications.",
      features: [
        "Cloud Migration",
        "Infrastructure as Code",
        "CI/CD Pipeline Setup",
        "Containerization",
        "Monitoring & Logging",
        "Auto-scaling Solutions",
      ],
      technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
      pricing: "Starting from $6,000",
      timeline: "3-8 weeks",
      color: "text-primary",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Assessment",
        "Threat Monitoring",
        "Incident Response",
        "Security Training",
      ],
      technologies: ["OWASP", "Nessus", "Metasploit", "Wireshark", "Splunk"],
      pricing: "Starting from $5,000",
      timeline: "2-6 weeks",
      color: "text-accent",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Our Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to meet your specific business needs and drive measurable
            results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Starting from</div>
                    <div className="text-lg font-bold text-primary">{service.pricing}</div>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Check className="w-4 h-4 text-primary mr-2" />
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <Zap className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Code className="w-4 h-4 text-accent mr-2" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BarChart className="w-4 h-4 mr-2" />
                    Timeline: {service.timeline}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 bg-transparent"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20 animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-foreground">Our Development Process</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs and requirements" },
              { step: "02", title: "Planning", desc: "Creating detailed project roadmap and timeline" },
              { step: "03", title: "Development", desc: "Building your solution with regular updates" },
              { step: "04", title: "Delivery", desc: "Testing, deployment, and ongoing support" },
            ].map((phase, index) => (
              <div key={phase.step} className="text-center" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                  {phase.step}
                </div>
                <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                <p className="text-muted-foreground text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
