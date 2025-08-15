import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          transform: `translateY(${parallaxOffset}px)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80 z-10" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 float parallax-element z-20">
        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Calendar className="text-accent" size={24} />
        </div>
      </div>
      
      <div className="absolute top-32 right-16 float-delayed parallax-element z-20">
        <div className="w-20 h-20 bg-accent-warm/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Users className="text-accent-warm" size={28} />
        </div>
      </div>

      <div className="absolute bottom-32 left-20 float parallax-element z-20">
        <div className="w-12 h-12 bg-primary-glow/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Sparkles className="text-primary-glow" size={20} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 text-center px-4 max-w-6xl mx-auto">
        <div className="space-y-8">
          {/* Main Title */}
          <h1 className="hero-title leading-tight">
            University
            <br />
            <span className="text-accent">Event Club</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle max-w-2xl mx-auto text-primary-foreground/90">
            Discover, create, and join amazing events on campus. 
            Connect with fellow students and make your university experience unforgettable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-gradient-accent text-accent-foreground glow-hover text-lg px-8 py-6 group"
            >
              Explore Events
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={20} />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 text-lg px-8 py-6"
            >
              Create Event
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-primary-foreground/80">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-warm mb-2">50+</div>
              <div className="text-primary-foreground/80">Monthly Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-glow mb-2">25+</div>
              <div className="text-primary-foreground/80">Student Clubs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;