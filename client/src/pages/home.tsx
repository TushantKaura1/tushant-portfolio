import { useEffect } from "react";
import Navigation from "@/components/navigation";
import LoadingScreen from "@/components/loading-screen";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import TimelineSection from "@/components/timeline-section";
import ProjectsSection from "@/components/projects-section";
import AchievementsSection from "@/components/achievements-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border text-center text-muted-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <p>&copy; 2025 Tushant Kaura. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
