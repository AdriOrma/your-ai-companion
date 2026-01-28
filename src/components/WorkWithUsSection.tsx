import { ArrowUpRight, Briefcase, Users, Rocket } from "lucide-react";

const positions = [
  {
    title: "Work with us 01",
    icon: Briefcase,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu...",
  },
  {
    title: "Work with us 02",
    icon: Users,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu...",
  },
  {
    title: "Work with us 03",
    icon: Rocket,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu...",
  },
];

const WorkWithUsSection = () => {
  return (
    <section id="work-with-us" className="relative py-24 md:py-32">
      <div className="absolute inset-0 diagonal-lines opacity-10" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16">
          <h2 className="section-title">Work with us</h2>
          <div className="flex flex-col justify-center">
            <p className="section-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
          </div>
        </div>

        {/* Featured Images */}
        <div className="grid md:grid-cols-5 gap-6 mb-16">
          <div className="md:col-span-3 aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
              <p className="text-muted-foreground">Team collaboration</p>
            </div>
          </div>
          <div className="md:col-span-2 aspect-[4/3] bg-muted rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <Rocket className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
              <p className="text-muted-foreground">Innovation hub</p>
            </div>
          </div>
        </div>

        {/* Positions */}
        <div className="grid md:grid-cols-3 gap-8">
          {positions.map((position, index) => (
            <div key={position.title} className="group cursor-pointer">
              <div className="relative mb-6">
                <div
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === 0 ? "bg-navy" : "bg-border group-hover:bg-navy"
                  }`}
                />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-3 group-hover:text-accent transition-colors">
                {position.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {position.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsSection;
