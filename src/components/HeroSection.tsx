import { useState, useEffect } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [displayText, setDisplayText] = useState("");
  
  const placeholderTexts = [
    "How can AI help my business grow?",
    "Build me a mobile app for...",
    "What technologies do you use?",
  ];
  
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    if (inputValue) return;
    
    const text = placeholderTexts[placeholderIndex];
    let charIndex = 0;
    setDisplayText("");
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (charIndex <= text.length) {
        setDisplayText(text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        setTimeout(() => {
          setPlaceholderIndex((prev) => (prev + 1) % placeholderTexts.length);
        }, 2000);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [placeholderIndex, inputValue]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Gradient blob background */}
      <div className="absolute inset-0 gradient-blob animate-pulse-glow" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="section-container relative z-10 w-full">
        <div className="max-w-4xl mx-auto">
          {/* AI Input Field */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative bg-card/90 backdrop-blur-sm rounded-2xl shadow-xl border border-border/50 p-2">
              <div className="flex items-center gap-3 px-4 py-3">
                <Sparkles className="w-5 h-5 text-accent flex-shrink-0" />
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder=""
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base"
                />
                {!inputValue && (
                  <span className="absolute left-14 text-muted-foreground pointer-events-none">
                    {displayText}
                    {isTyping && <span className="animate-pulse">|</span>}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left - Headline */}
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
                Complex software problems? That's our thing.
              </h1>
            </div>

            {/* Right - Description */}
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <p className="section-subtitle mb-8">
                We build, launch, and maintain cutting-edge mobile products, 
                covering everything from front-end experiences to robust backend 
                architectures. Our team delivers excellence at scale.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href="#open-source" className="btn-primary">
                  Explore Our Open Source
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="#work-with-us" className="btn-secondary">
                  Job Offers
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
