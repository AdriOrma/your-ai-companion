import { ArrowUpRight, Smartphone, Server, Palette } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile development",
    description: "We build, launch, and maintain products, covering everything from front-ends (iOS and Android) to backends.",
  },
  {
    icon: Server,
    title: "APIs & Micro-services",
    description: "Using Elixir & Erlang, we build secure and scalable backends relying on micro-services and APIs.",
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    description: "Through product design, user interviews and user testing, we design user experiences and interfaces that work.",
  },
];

const WhatWeDoSection = () => {
  return (
    <section id="what-we-do" className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-navy rounded-full" />
      <div className="absolute inset-0 diagonal-lines opacity-20" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16">
          <h2 className="section-title">What we do?</h2>
          <div className="flex flex-col justify-center">
            <p className="section-subtitle mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:underline">
              See More
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Feature Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="relative aspect-[4/3] bg-navy rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-navy-light to-navy flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <Smartphone className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <p className="text-xl font-semibold">Mobile App Mockups</p>
                <p className="text-sm opacity-70">Great design, faster</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          <div className="relative aspect-[4/3] bg-navy rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-navy flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <Server className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <p className="text-xl font-semibold">Clean Code</p>
                <p className="text-sm opacity-70">Scalable architecture</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="group">
              <div className="h-px bg-border mb-6" />
              <div className="flex items-start gap-4">
                <h3 className="text-lg font-semibold text-navy">{service.title}</h3>
              </div>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
