import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import AchievementsSection from "@/components/AchievementsSection";
import WorkWithUsSection from "@/components/WorkWithUsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <OpenSourceSection />
        <AchievementsSection />
        <WorkWithUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
