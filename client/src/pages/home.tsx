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
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    // Add custom cursor styles
    const style = document.createElement('style');
    style.textContent = `
      * {
        cursor: none;
      }
      
      a, button, input, textarea, select {
        cursor: none;
      }
      
      .cursor-dot {
        width: 8px;
        height: 8px;
        background-color: #a855f7;
        border-radius: 50%;
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        will-change: transform;
      }
      
      .cursor-outline {
        width: 40px;
        height: 40px;
        border: 2px solid rgba(168, 85, 247, 0.3);
        border-radius: 50%;
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 9998;
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        will-change: transform;
      }
      
      .cursor-dot.hover {
        transform: scale(1.5);
        background-color: #3b82f6;
      }
      
      .cursor-outline.hover {
        transform: scale(1.5);
        border-color: rgba(59, 130, 246, 0.5);
      }
    `;
    document.head.appendChild(style);
    
    // Custom cursor functionality
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    const cursorOutline = document.createElement('div');
    cursorOutline.className = 'cursor-outline';
    document.body.appendChild(cursorOutline);
    
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;
    let dotX = 0, dotY = 0;
    let isAnimating = false;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    function smoothAnimate() {
      // Smooth dot movement
      dotX += (mouseX - dotX) * 0.3;
      dotY += (mouseY - dotY) * 0.3;
      
      // Smooth outline movement with more lag
      outlineX += (mouseX - outlineX) * 0.08;
      outlineY += (mouseY - outlineY) * 0.08;
      
      // Apply positions
      cursorDot.style.left = dotX + 'px';
      cursorDot.style.top = dotY + 'px';
      cursorOutline.style.left = outlineX + 'px';
      cursorOutline.style.top = outlineY + 'px';
      
      if (isAnimating) {
        requestAnimationFrame(smoothAnimate);
      }
    }
    
    // Start animation
    isAnimating = true;
    smoothAnimate();
    
    // Hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorDot.classList.add('hover');
        cursorOutline.classList.add('hover');
      });
      
      el.addEventListener('mouseleave', () => {
        cursorDot.classList.remove('hover');
        cursorOutline.classList.remove('hover');
      });
    });
    
    return () => {
      isAnimating = false;
      document.head.removeChild(style);
      document.body.removeChild(cursorDot);
      document.body.removeChild(cursorOutline);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <LoadingScreen />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      
      {/* Modern Footer */}
      <footer className="py-16 border-t border-border/50 bg-gradient-to-t from-background to-background/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Tushant Kaura</h3>
              <p className="text-muted-foreground leading-relaxed">
                Computer Science student passionate about VR, HCI, and persuasive computing. 
                Building the future through innovative technology.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#timeline" className="hover:text-primary transition-colors">Experience</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/tushantkaura/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/TushantKaura1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  GitHub
                </a>
                <a href="mailto:tushantkaura@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  Email
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border/50 text-center text-muted-foreground">
            <p>&copy; 2025 Tushant Kaura. All rights reserved. Built with React, TypeScript, and GSAP.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
