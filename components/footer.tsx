import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight } from "lucide-react"

export function Footer() {
  const services = [
    "Machine Learning",
    "Web Development",
    "Mobile Apps",
    "Cloud Solutions",
    "Data Engineering",
    "Cybersecurity",
  ]

  const company = ["About Us", "Our Team", "Careers", "Blog", "Case Studies", "Contact"]

  const resources = ["Documentation", "API Reference", "Support Center", "Community", "Tutorials", "Webinars"]

  return (
    <footer className="bg-gradient-to-b from-card to-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with <span className="gradient-text">Alixel</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest insights on technology trends, best practices, and exclusive updates.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold gradient-text">Alixel</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming businesses through innovative IT solutions. We specialize in machine learning, web
              development, and custom software that drives growth and efficiency.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                hello@alixel.xyz
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                San Francisco, CA
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource}>
                  <Link
                    href="/resources"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {resource}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Alixel. All rights reserved. | Privacy Policy | Terms of Service
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
