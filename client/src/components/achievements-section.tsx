import { useEffect, useRef } from "react";
import { GraduationCap, Trophy, Microscope, Users, Code, Award } from "lucide-react";

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window !== "undefined") {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

        // Create floating achievement elements
        const createFloatingAchievementElements = () => {
          const section = sectionRef.current;
          if (!section) return;

          for (let i = 0; i < 20; i++) {
            const element = document.createElement('div');
            element.className = 'floating-achievement-element';
            element.style.cssText = `
              position: absolute;
              width: ${Math.random() * 6 + 3}px;
              height: ${Math.random() * 6 + 3}px;
              background: linear-gradient(45deg, rgba(255, 215, 0, 0.3), rgba(168, 85, 247, 0.3));
              border-radius: 50%;
              top: ${Math.random() * 100}%;
              left: ${Math.random() * 100}%;
              pointer-events: none;
              filter: blur(1px);
            `;
            section.appendChild(element);
          }
        };

        createFloatingAchievementElements();

        // Animate floating elements
        gsap.to('.floating-achievement-element', {
          y: () => Math.random() * 80 - 40,
          x: () => Math.random() * 60 - 30,
          rotation: () => Math.random() * 360,
          scale: () => Math.random() * 0.5 + 0.75,
          duration: () => Math.random() * 6 + 4,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          stagger: 0.1
        });

        // Advanced achievement card animations
        const achievementCards = document.querySelectorAll('.achievement-card');
        achievementCards.forEach((card, index) => {
          // Entrance animation with staggered 3D reveal
          gsap.fromTo(card, {
            opacity: 0,
            y: 100,
            rotationX: 90,
            scale: 0.7,
            transformOrigin: "center bottom"
          }, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          });

          // Achievement icon animations
          const icon = card.querySelector('.achievement-icon');
          const iconContainer = card.querySelector('.achievement-icon-container');

          // Advanced hover interactions
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.05,
              rotationY: 5,
              z: 50,
              duration: 0.4,
              ease: "power2.out"
            });

            if (iconContainer) {
              gsap.to(iconContainer, {
                scale: 1.2,
                rotation: 360,
                duration: 0.6,
                ease: "back.out(1.7)"
              });
            }

            if (icon) {
              gsap.to(icon, {
                scale: 1.3,
                rotation: -360,
                duration: 0.6,
                ease: "power2.out"
              });
            }
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              rotationY: 0,
              z: 0,
              duration: 0.4,
              ease: "power2.out"
            });

            if (iconContainer) {
              gsap.to(iconContainer, {
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: "power2.out"
              });
            }

            if (icon) {
              gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: "power2.out"
              });
            }
          });
        });

        // Title text animation
        const titleElement = document.querySelector('#achievements h2');
        if (titleElement) {
          const text = titleElement.textContent || '';
          const words = text.split(' ');
          titleElement.innerHTML = words.map(word => 
            `<span class="achievement-word">${word}</span>`
          ).join(' ');

          gsap.fromTo('.achievement-word', {
            opacity: 0,
            y: 50,
            rotationX: 90
          }, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: "#achievements",
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          });
        }

        // Parallax effect for floating elements
        ScrollTrigger.create({
          trigger: "#achievements",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to('.floating-achievement-element', {
              y: progress * 100,
              rotation: progress * 90,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        });
      }
    };

    const timer = setTimeout(() => {
      loadGSAP();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="achievements" 
      className="py-24 px-6 bg-black/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16" data-testid="achievements-title">
          Some things I like to flaunt
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Scholarship */}
          <div className="achievement-card bg-card rounded-xl p-8 border border-border text-center transform-gpu" data-testid="achievement-scholarship">
            <div className="achievement-icon-container w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="achievement-icon text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2" data-testid="achievement-scholarship-title">$25,000 Entrance Scholarship</h3>
            <p className="text-muted-foreground" data-testid="achievement-scholarship-description">
              Awarded for Academic and Extracurricular Excellence at Dalhousie University
            </p>
          </div>

          {/* Web Developer Intern */}
          <div className="achievement-card bg-card rounded-xl p-8 border border-border text-center transform-gpu" data-testid="achievement-developer">
            <div className="achievement-icon-container w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="achievement-icon text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2" data-testid="achievement-developer-title">Web Developer Intern</h3>
            <p className="text-muted-foreground" data-testid="achievement-developer-description">
              Currently developing responsive web applications at Futura Holding Group
            </p>
          </div>

          {/* Multi-Lab Research */}
          <div className="achievement-card bg-card rounded-xl p-8 border border-border text-center transform-gpu" data-testid="achievement-research">
            <div className="achievement-icon-container w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Microscope className="achievement-icon text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2" data-testid="achievement-research-title">Multi-Lab Research Assistant</h3>
            <p className="text-muted-foreground" data-testid="achievement-research-description">
              Active researcher at VERTEX Labs and Persuasive Computing Lab
            </p>
          </div>

          {/* Lead STEM Mentor */}
          <div className="achievement-card bg-card rounded-xl p-8 border border-border text-center transform-gpu" data-testid="achievement-mentor">
            <div className="achievement-icon-container w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="achievement-icon text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2" data-testid="achievement-mentor-title">Lead Research Mentor</h3>
            <p className="text-muted-foreground" data-testid="achievement-mentor-description">
              Fostering equity and inclusion in STEM education at CISE-Atlantic
            </p>
          </div>

          {/* VR & HCI Research */}
          <div className="achievement-card bg-card rounded-xl p-8 border border-border text-center transform-gpu" data-testid="achievement-vr">
            <div className="achievement-icon-container w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="achievement-icon text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2" data-testid="achievement-vr-title">VR & HCI Researcher</h3>
            <p className="text-muted-foreground" data-testid="achievement-vr-description">
              Researching cognitive processes and user perception in 3D environments
            </p>
          </div>

          {/* Course Representative */}
          <div className="achievement-card bg-card rounded-xl p-8 border border-border text-center transform-gpu" data-testid="achievement-representative">
            <div className="achievement-icon-container w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="achievement-icon text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2" data-testid="achievement-representative-title">Course Representative</h3>
            <p className="text-muted-foreground" data-testid="achievement-representative-description">
              Student liaison enhancing communication between faculty and students
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
