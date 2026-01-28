import { ArrowUpRight, Github, Smartphone, Globe, Server, Settings, Database } from "lucide-react";

const repositories = [
  {
    name: "erf",
    icon: "{ }",
    description: "A design-first Erlang REST Framework.",
  },
  {
    name: "nimagefetch-ios",
    icon: "📦",
    description: "NMAImageFetch is library for downloading and caching images efficiently using UIKit or SwiftUI.",
  },
  {
    name: "nclient",
    icon: "⚡",
    description: "Minimal Swift API client based on async/await.",
  },
];

const tools = [
  {
    title: "Mobile Development",
    icons: [Smartphone],
    description: "We tend to write iOS apps in Swift and Android with Kotlin.",
  },
  {
    title: "Front-end development",
    icons: [Globe],
    description: "Create tailored software solutions designed to meet your unique business needs and drive innovation.",
  },
  {
    title: "Backend development",
    icons: [Server],
    description: "Create tailored software solutions designed to meet your unique business needs and drive innovation.",
  },
  {
    title: "Development & Operations",
    icons: [Settings],
    description: "Create tailored software solutions designed to meet your unique business needs and drive innovation.",
  },
  {
    title: "Database management",
    icons: [Database],
    description: "Create tailored software solutions designed to meet your unique business needs and drive innovation.",
  },
];

const OpenSourceSection = () => {
  return (
    <section id="open-source" className="relative py-24 md:py-32 bg-card">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-16">
          <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center">
            <Github className="w-8 h-8 text-primary-foreground" />
          </div>
          <div>
            <h2 className="section-title mb-2">Open Source Advocates</h2>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Visit Our Open Source Repository
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Repositories */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {repositories.map((repo) => (
            <div key={repo.name} className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xl">{repo.icon}</span>
                <h3 className="font-semibold text-navy group-hover:text-accent transition-colors">
                  {repo.name}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {repo.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tools & Language Selection */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-navy text-center mb-12">
            Tools & language selection
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {tools.slice(0, 3).map((tool) => (
              <div
                key={tool.title}
                className="bg-background p-6 rounded-xl border border-border card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-navy">{tool.title}</h4>
                  <div className="flex gap-2">
                    {tool.icons.map((Icon, i) => (
                      <Icon key={i} className="w-5 h-5 text-muted-foreground" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {tool.description}
                </p>
                <a href="#" className="text-sm font-medium text-accent hover:underline">
                  Learn More
                </a>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {tools.slice(3).map((tool) => (
              <div
                key={tool.title}
                className="bg-background p-6 rounded-xl border border-border card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-navy">{tool.title}</h4>
                  <div className="flex gap-2">
                    {tool.icons.map((Icon, i) => (
                      <Icon key={i} className="w-5 h-5 text-muted-foreground" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {tool.description}
                </p>
                <a href="#" className="text-sm font-medium text-accent hover:underline">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
