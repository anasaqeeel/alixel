"use client"

import {
  ArrowLeft,
  Check,
  MessageSquare,
  Zap,
  Globe,
  Shield,
  TrendingUp,
  Bot,
  Users,
  BarChart3,
  Database,
  Smartphone,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ChatbotDetailContent() {
  const features = [
    {
      icon: MessageSquare,
      title: "AI-Powered Conversational Automation",
      description: "Smart chatbots that understand intent, handle natural conversations, and learn from interactions.",
      color: "text-blue-500",
    },
    {
      icon: Zap,
      title: "Full-System Integration",
      description: "Deep integrations with CRM, ERP, databases, payment gateways, and workflow systems.",
      color: "text-emerald-500",
    },
    {
      icon: Globe,
      title: "Multi-Channel Deployment",
      description: "Deploy across website, WhatsApp, Facebook, Instagram, Slack, and custom apps.",
      color: "text-purple-500",
    },
  ]

  const useCases = [
    {
      icon: "🧑‍💼",
      title: "Sales & Lead Generation Bots",
      items: [
        "Capture and qualify leads automatically",
        "Ask intelligent follow-up questions",
        "Assign leads to sales teams in CRM",
        "Increase conversion without increasing staff",
      ],
    },
    {
      icon: "🎧",
      title: "Customer Support Bots",
      items: [
        "Handle FAQs and repetitive queries",
        "Create and track support tickets",
        "Escalate complex issues to humans",
        "Reduce support costs significantly",
      ],
    },
    {
      icon: "🏢",
      title: "Internal Business Bots",
      items: [
        "HR queries (leave balance, policies)",
        "Operations & workflow status",
        "Internal approvals & notifications",
        "Employee onboarding assistance",
      ],
    },
    {
      icon: "🏘",
      title: "Real Estate Chatbots",
      items: [
        "Property recommendations",
        "Booking site visits",
        "Lead qualification",
        "Agent assignment & follow-ups",
      ],
    },
    {
      icon: "🚗",
      title: "Motors & Automotive Chatbots",
      items: [
        "Vehicle availability queries",
        "Price & installment details",
        "Service booking",
        "Dealership lead management",
      ],
    },
  ]

  const channels = [
    { name: "Website Chat Widgets", icon: Globe },
    { name: "WhatsApp Business", icon: MessageSquare },
    { name: "Facebook Messenger", icon: MessageSquare },
    { name: "Instagram DM", icon: Smartphone },
    { name: "Slack / Teams", icon: Users },
    { name: "Custom Apps", icon: Bot },
  ]

  const problems = [
    "Delayed responses",
    "Missed leads",
    "Overloaded support teams",
    "Inconsistent answers",
    "No centralized conversation history",
  ]

  const solutions = [
    "Instant replies to customers",
    "Automated lead capture & qualification",
    "Unified conversation history",
    "Reduced operational costs",
    "Higher conversion rates",
  ]

  const advantages = [
    "Custom-built (not generic bot builders)",
    "Deep system integrations",
    "Industry-specific chatbot logic",
    "Secure & scalable architecture",
    "Designed for real business ROI",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card/30 to-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/portfolio">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Button>
          </Link>

          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">AI & Automation</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">AI Chatbots & Intelligent Automation Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Smart Conversations. Automated Operations. Real Business Impact — by Alixel
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              In a world where customers expect instant responses, 24/7 availability, and personalized experiences,
              traditional support teams are no longer enough. We build enterprise-grade AI chatbots that transform how
              businesses communicate, sell, and operate.
            </p>
          </div>
        </div>
      </section>

      {/* What Chatbots Do Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Alixel Chatbots Do for <span className="gradient-text">Your Business</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.title}
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 ${feature.color}`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {feature.title === "AI-Powered Conversational Automation" && (
                        <>
                          <li className="flex items-start">
                            <Check className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                            Understand user intent (not just keywords)
                          </li>
                          <li className="flex items-start">
                            <Check className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                            Handle real conversations naturally
                          </li>
                          <li className="flex items-start">
                            <Check className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                            Respond instantly, 24/7
                          </li>
                          <li className="flex items-start">
                            <Check className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                            Learn from interactions
                          </li>
                          <li className="flex items-start">
                            <Check className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                            Escalate to human agents when required
                          </li>
                        </>
                      )}
                      {feature.title === "Full-System Integration" && (
                        <>
                          <li className="flex items-start">
                            <Check className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                            CRM & ERP platforms
                          </li>
                          <li className="flex items-start">
                            <Check className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                            Databases
                          </li>
                          <li className="flex items-start">
                            <Check className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                            Payment gateways
                          </li>
                          <li className="flex items-start">
                            <Check className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                            Booking & scheduling systems
                          </li>
                          <li className="flex items-start">
                            <Check className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                            Inventory & order management
                          </li>
                        </>
                      )}
                    </ul>
                    {feature.title === "AI-Powered Conversational Automation" && (
                      <p className="mt-4 text-sm text-muted-foreground italic">
                        This reduces workload on teams while improving customer satisfaction and response time.
                      </p>
                    )}
                    {feature.title === "Full-System Integration" && (
                      <p className="mt-4 text-sm text-muted-foreground italic">
                        Your chatbot doesn't just talk — it acts.
                      </p>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Problems vs Solutions */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Replace Manual Communication with <span className="gradient-text">Smart Automation</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-destructive/20 bg-destructive/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="text-destructive mr-3">❌</span> Traditional Communication Problems
                </h3>
                <ul className="space-y-3">
                  {problems.map((problem, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-destructive mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">{problem}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="text-emerald-500 mr-3">✅</span> Chatbot-Driven Automation Fixes This
                </h3>
                <ul className="space-y-3">
                  {solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{solution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise-Ready <span className="gradient-text">Chatbot Use Cases</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card
                key={useCase.title}
                className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
                  <ul className="space-y-2">
                    {useCase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Channel Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Multi-Channel <span className="gradient-text">Chatbot Deployment</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Alixel builds chatbots for all major platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {channels.map((channel, index) => {
              const Icon = channel.icon
              return (
                <Card
                  key={channel.name}
                  className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-sm">{channel.name}</h3>
                </Card>
              )
            })}
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20 text-center">
            <p className="text-lg font-semibold">
              One brain — <span className="gradient-text">multiple channels</span>
            </p>
          </div>
        </div>
      </section>

      {/* How Chatbots Help Scale */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Chatbots Help You <span className="gradient-text">Scale Faster</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                title: "24/7 Business Availability",
                description: "Never miss a lead or customer again.",
              },
              {
                icon: TrendingUp,
                title: "Reduced Operational Costs",
                description: "Automate thousands of conversations without hiring more staff.",
              },
              {
                icon: Zap,
                title: "Faster Sales Cycles",
                description: "Instant responses increase trust and conversion.",
              },
              {
                icon: BarChart3,
                title: "Data-Driven Insights",
                description: "Analyze conversations to improve products and services.",
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card
                  key={benefit.title}
                  className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Full-Stack Chatbot <span className="gradient-text">Architecture by Alixel</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Globe, title: "Frontend", tech: "Web & app chat interfaces" },
              { icon: Bot, title: "Backend", tech: "AI-powered conversational engines" },
              { icon: Database, title: "Database", tech: "Conversation history & analytics" },
              { icon: Zap, title: "Integrations", tech: "CRM, ERP, payment & workflow systems" },
              { icon: Shield, title: "Admin Panel", tech: "Bot training, monitoring & controls" },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={item.title}
                  className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.tech}</p>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 border border-primary/20 text-center">
            <p className="text-lg font-semibold">
              This ensures <span className="gradient-text">complete control and transparency</span>
            </p>
          </div>
        </div>
      </section>

      {/* Security & Advantages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold">Secure, Scalable & Enterprise-Grade</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Role-based access control",
                    "Secure APIs & authentication",
                    "Conversation logging & audit trails",
                    "GDPR & data privacy ready",
                    "High-availability & cloud deployment",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-8 h-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold">Why Choose Alixel</h3>
                </div>
                <ul className="space-y-3">
                  {advantages.map((advantage, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-background/50 backdrop-blur-sm rounded-2xl p-12 border-2 border-primary/20">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Turn Conversations into Conversions</h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              With <span className="font-bold text-primary">Alixel AI Chatbots</span>, your business communicates
              smarter, works faster, and scales effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Let Alixel Build Your Chatbot Ecosystem
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

