import { ArrowUpRight } from "lucide-react";

const achievements = [
  {
    text: "We develop mobile apps with",
    highlight: "more than 100 million active users",
    suffix: "combined.",
  },
  {
    text: "Founding team working",
    highlight: "on mobile since 2002",
    suffix: ".",
  },
  {
    text: "",
    highlight: "Apple requested us demo apps",
    suffix: "for their retail Apple Stores on two occasions.",
  },
  {
    text: "Developing carrier-grade systems for operators with more than",
    highlight: "50 million subscribers",
    suffix: ".",
  },
  {
    text: "We developed",
    highlight: "the first native banking app in Spain",
    suffix: "in 2005.",
  },
  {
    text: "Scale chat infrastructure from 200.000 concurrent users to more than",
    highlight: "1 million",
    suffix: ".",
  },
  {
    text: "Our iOS apps have been featured",
    highlight: "in the App Store more than 20 times",
    suffix: ".",
  },
  {
    text: "One of our apps appeared in an official",
    highlight: "iPhone TV ad",
    suffix: ".",
  },
  {
    text: "We are",
    highlight: "growing +25%",
    suffix: "every year for the last five years.",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="relative py-24 md:py-32 bg-navy-dark">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
            Achivments
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            See More About Us
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-x-12 gap-y-10">
          {achievements.map((achievement, index) => (
            <div key={index} className="group">
              <p className="text-primary-foreground/80 leading-relaxed">
                {achievement.text}{" "}
                <span className="font-semibold text-primary-foreground">
                  {achievement.highlight}
                </span>
                {achievement.suffix}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
