"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Github, Mail } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      role: "CEO & Founder",
      expertise: "Strategic Leadership, AI/ML",
      bio: "Visionary leader with 15+ years in tech innovation and business strategy.",
      image: "/professional-ceo-headshot.png",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alex@alixel.xyz",
      },
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      expertise: "Full-Stack Development, Cloud Architecture",
      bio: "Technical expert specializing in scalable systems and emerging technologies.",
      image: "/cto-headshot.png",
      social: {
        linkedin: "#",
        github: "#",
        email: "sarah@alixel.xyz",
      },
    },
    {
      name: "Michael Johnson",
      role: "Head of AI/ML",
      expertise: "Machine Learning, Data Science",
      bio: "PhD in Computer Science with expertise in neural networks and predictive analytics.",
      image: "/ai-engineer-headshot.png",
      social: {
        linkedin: "#",
        github: "#",
        email: "michael@alixel.xyz",
      },
    },
    {
      name: "Emily Davis",
      role: "Lead Designer",
      expertise: "UX/UI Design, Product Strategy",
      bio: "Award-winning designer creating intuitive and beautiful user experiences.",
      image: "/professional-designer-headshot.png",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@alixel.xyz",
      },
    },
    {
      name: "David Kim",
      role: "DevOps Engineer",
      expertise: "Cloud Infrastructure, Security",
      bio: "Expert in building secure, scalable infrastructure for modern applications.",
      image: "/placeholder-gysc1.png",
      social: {
        linkedin: "#",
        github: "#",
        email: "david@alixel.xyz",
      },
    },
    {
      name: "Lisa Thompson",
      role: "Project Manager",
      expertise: "Agile Methodologies, Client Relations",
      bio: "Certified PMP with a track record of delivering complex projects on time.",
      image: "/professional-project-manager-headshot.png",
      social: {
        linkedin: "#",
        email: "lisa@alixel.xyz",
      },
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Meet Our Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience in technology, design, and business
            strategy to deliver exceptional results.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Profile Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Profile Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="text-primary font-medium mb-2">{member.role}</div>
                  <div className="text-sm text-muted-foreground mb-3">{member.expertise}</div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex items-center space-x-3">
                    {member.social.linkedin && (
                      <Button variant="ghost" size="sm" className="p-2 h-auto">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    )}
                    {member.social.twitter && (
                      <Button variant="ghost" size="sm" className="p-2 h-auto">
                        <Twitter className="w-4 h-4" />
                      </Button>
                    )}
                    {member.social.github && (
                      <Button variant="ghost" size="sm" className="p-2 h-auto">
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                    {member.social.email && (
                      <Button variant="ghost" size="sm" className="p-2 h-auto">
                        <Mail className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Growing Team</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and excellence. Explore
              career opportunities at Alixel.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                View Open Positions
              </Button>
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
