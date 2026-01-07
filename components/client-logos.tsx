"use client"

export function ClientLogos() {
  const clients = [
    { name: "TechCorp", logo: "/logo-techcorp.png" },
    { name: "FinanceFlow", logo: "/logo-financeflow.png" },
    { name: "HealthTech", logo: "/logo-healthtech.png" },
    { name: "RetailMax", logo: "/logo-retailmax.png" },
    { name: "CloudFirst", logo: "/logo-cloudfirst.png" },
    { name: "SecureBank", logo: "/logo-securebank.png" },
    { name: "DataDriven", logo: "/logo-datadriven.png" },
    { name: "InnovateLab", logo: "/logo-innovatelab.png" },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-card/50 to-background/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-muted-foreground mb-8">Trusted by Industry Leaders Worldwide</h3>
        </div>

        {/* Scrolling Logo Animation */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center">
            {/* First set of logos */}
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                <img
                  src={client.logo || `/placeholder.svg?height=64&width=128&text=${client.name}`}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {clients.map((client) => (
              <div
                key={`${client.name}-duplicate`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                <img
                  src={client.logo || `/placeholder.svg?height=64&width=128&text=${client.name}`}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
