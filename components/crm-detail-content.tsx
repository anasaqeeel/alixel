"use client"

import { ArrowLeft, Check, Building2, Database, Globe, Zap, Shield, TrendingUp, Users, BarChart3, Lock, Cloud } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function CRMDetailContent() {
  const features = [
    {
      icon: Building2,
      title: "Centralized Admin Panel",
      description: "Operations command center with user management, real-time analytics, and workflow automation.",
      color: "text-blue-500",
    },
    {
      icon: Database,
      title: "Database-Driven Management",
      description: "Replace spreadsheets with structured, scalable databases for accurate, searchable data.",
      color: "text-emerald-500",
    },
    {
      icon: Globe,
      title: "Client-Facing Portals",
      description: "Modern, responsive frontends for clients with dashboards, forms, and real-time tracking.",
      color: "text-purple-500",
    },
  ]

  const industries = [
    { name: "Real Estate", icon: "🏢" },
    { name: "Motors & Automotive", icon: "🚗" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Retail", icon: "🛒" },
    { name: "Construction", icon: "🏗" },
    { name: "Education", icon: "🏫" },
    { name: "Corporate Services", icon: "💼" },
  ]

  const problems = [
    "Data duplication & human errors",
    "No real-time visibility",
    "Difficult scaling",
    "Security risks",
    "Time-consuming reporting",
    "Inefficient team coordination",
  ]

  const solutions = [
    "Automated data entry & validation",
    "Centralized information access",
    "Faster decision-making",
    "Reduced operational costs",
    "Improved customer experience",
    "Seamless scalability",
  ]

  const advantages = [
    "Custom-built for your business",
    "Enterprise-level security & performance",
    "Scalable from startup to enterprise",
    "Reduced operational costs",
    "Faster growth & better customer retention",
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
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Enterprise Solution
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Enterprise CRM & Full-Stack Business Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Built for Scale. Designed for Control. Powered by Alixel
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              In today's fast-moving digital economy, businesses can no longer rely on manual paperwork,
              spreadsheets, or disconnected tools. We deliver enterprise-grade solutions that centralize your
              data, automate workflows, and give you complete operational control.
            </p>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Build at <span className="gradient-text">Alixel</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We design and develop custom enterprise solutions that adapt to your business — not the other way around.
            </p>
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
                    <div className={`w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 ${feature.color}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Detailed Features */}
          <div className="grid md:grid-cols-2 gap-12 mt-20">
            <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Centralized Admin Panel</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  A powerful admin dashboard built for decision-makers and operations teams:
                </p>
                <ul className="space-y-3">
                  {[
                    "User & role-based access control (RBAC)",
                    "Staff, department, and workflow management",
                    "Real-time analytics & performance monitoring",
                    "Approval systems & escalation flows",
                    "Audit logs & activity tracking",
                    "Secure data access with enterprise-level permissions",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted-foreground italic">
                  This admin panel replaces manual registers, Excel sheets, and paper-based approvals with a fully
                  automated digital system.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Database-Driven Business Management</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  We replace error-prone spreadsheets with structured, scalable databases:
                </p>
                <ul className="space-y-3">
                  {[
                    "Centralized customer records",
                    "Lead, sales, inventory, and transaction tracking",
                    "Automated reports (daily, weekly, monthly)",
                    "Data integrity, backups, and security",
                    "Fast search, filters, and advanced querying",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted-foreground italic">
                  Your data becomes accurate, searchable, secure, and actionable — not scattered across files and
                  folders.
                </p>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 border-2 border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Full-Stack Client-Facing Portals</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  We build modern, responsive frontends for your clients:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    {["Client dashboards", "Online forms & onboarding flows", "Real-time status tracking"].map(
                      (item, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                  <ul className="space-y-3">
                    {["Invoices, documents, and notifications", "Secure login and account management"].map(
                      (item, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <p className="mt-6 text-sm text-muted-foreground italic">
                  This creates a professional digital experience for your customers while reducing manual
                  communication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Ready for <span className="gradient-text">Any Business Domain</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Alixel solutions are domain-agnostic and fully customizable
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-12">
            {industries.map((industry, index) => (
              <Card
                key={industry.name}
                className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-sm">{industry.name}</h3>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <Zap className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Custom Workflows</h3>
                <p className="text-muted-foreground text-sm">Per industry requirements</p>
              </div>
              <div>
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Compliance-Ready</h3>
                <p className="text-muted-foreground text-sm">Data handling & security</p>
              </div>
              <div>
                <TrendingUp className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Scalable Architecture</h3>
                <p className="text-muted-foreground text-sm">Grows with your business</p>
              </div>
            </div>
            <p className="text-center mt-8 text-lg font-semibold">
              One platform — <span className="gradient-text">multiple business models</span>
            </p>
          </div>
        </div>
      </section>

      {/* Problems vs Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Your Business Needs an <span className="gradient-text">Enterprise CRM Solution</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-destructive/20 bg-destructive/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="text-destructive mr-3">❌</span> Problems with Manual Systems
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
                  <span className="text-emerald-500 mr-3">✅</span> What Automation Fixes
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

      {/* How Alixel Automates Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Alixel <span className="gradient-text">Automates & Scales</span> Your Business
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Workflow Automation",
                items: [
                  "Automatic task assignments",
                  "Status-based triggers",
                  "Email, SMS, and in-app notifications",
                  "Approval & rejection flows",
                ],
              },
              {
                icon: Shield,
                title: "Role-Based Access Control",
                items: [
                  "Admins, managers, staff, and clients",
                  "See only what they need",
                  "Enhanced security & accountability",
                ],
              },
              {
                icon: BarChart3,
                title: "Data-Driven Decisions",
                items: [
                  "Dashboards & KPIs",
                  "Sales funnels & performance metrics",
                  "Forecasting & growth insights",
                ],
              },
              {
                icon: TrendingUp,
                title: "Seamless Expansion",
                items: [
                  "Add new departments without disruption",
                  "Support thousands of users",
                  "Cloud-ready architecture",
                  "API integrations",
                ],
              },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={feature.title}
                  className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <ul className="space-y-2">
                      {feature.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Check className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Full-Stack <span className="gradient-text">Technology Approach</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Globe, title: "Frontend", tech: "Modern, responsive UI (React-based)" },
              { icon: Database, title: "Backend", tech: "Secure, scalable APIs" },
              { icon: Cloud, title: "Database", tech: "Structured relational & NoSQL" },
              { icon: Lock, title: "Security", tech: "Authentication, authorization & auditing" },
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
              Built to handle <span className="gradient-text">real-world enterprise workloads</span>
            </p>
          </div>
        </div>
      </section>

      {/* Advantages CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The <span className="gradient-text">Alixel Advantage</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {advantages.map((advantage, index) => (
              <div
                key={advantage}
                className="flex items-start p-6 bg-background/50 backdrop-blur-sm rounded-lg border border-primary/20"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Check className="w-6 h-6 text-emerald-500 mr-4 mt-0.5 flex-shrink-0" />
                <span className="text-lg font-medium">{advantage}</span>
              </div>
            ))}
          </div>

          <div className="text-center bg-background/50 backdrop-blur-sm rounded-2xl p-12 border-2 border-primary/20">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Operations. Eliminate Manual Work. Scale Confidently.
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              With <span className="font-bold text-primary">Alixel</span>, you don't just get software — you get a{" "}
              <span className="font-bold gradient-text">digital operating system for your business</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Let's Build Your Enterprise Solution
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

