import { useEffect, useRef } from "react";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window !== "undefined") {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

        // Infinite scrolling marquee animation
        const marqueeText = marqueeRef.current;
        if (marqueeText) {
          gsap.to(marqueeText, {
            x: -1000,
            duration: 20,
            repeat: -1,
            ease: "none"
          });
        }

        // Create floating project elements
        const createFloatingProjectElements = () => {
          const section = sectionRef.current;
          if (!section) return;

          for (let i = 0; i < 25; i++) {
            const element = document.createElement('div');
            element.className = 'floating-project-element';
            element.style.cssText = `
              position: absolute;
              width: ${Math.random() * 8 + 4}px;
              height: ${Math.random() * 8 + 4}px;
              background: linear-gradient(45deg, rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.2));
              border-radius: 50%;
              top: ${Math.random() * 100}%;
              left: ${Math.random() * 100}%;
              pointer-events: none;
              filter: blur(1px);
            `;
            section.appendChild(element);
          }
        };

        createFloatingProjectElements();

        // Floating elements animation
        gsap.to('.floating-project-element', {
          y: () => Math.random() * 150 - 75,
          x: () => Math.random() * 100 - 50,
          rotation: () => Math.random() * 360,
          scale: () => Math.random() * 0.5 + 0.75,
          duration: () => Math.random() * 5 + 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          stagger: 0.1
        });

        // Advanced project cards animation
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
          // Entrance animation
          gsap.fromTo(card, {
            opacity: 0,
            y: 100,
            rotationX: 45,
            scale: 0.8
          }, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          });

          // Advanced hover interactions
          const image = card.querySelector('.project-image');
          const content = card.querySelector('.project-content');
          const techTags = card.querySelectorAll('.tech-tag');

          card.addEventListener('mouseenter', (e) => {
            const rect = card.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            gsap.to(card, {
              scale: 1.05,
              rotationY: 10,
              z: 100,
              duration: 0.5,
              ease: "power2.out"
            });

            if (image) {
              gsap.to(image, {
                scale: 1.1,
                duration: 0.5,
                ease: "power2.out"
              });
            }

            if (content) {
              gsap.to(content, {
                y: -5,
                duration: 0.3,
                ease: "power2.out"
              });
            }

            gsap.to(techTags, {
              scale: 1.1,
              y: -3,
              duration: 0.3,
              stagger: 0.05,
              ease: "power2.out"
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              rotationY: 0,
              z: 0,
              duration: 0.5,
              ease: "power2.out"
            });

            if (image) {
              gsap.to(image, {
                scale: 1,
                duration: 0.5,
                ease: "power2.out"
              });
            }

            if (content) {
              gsap.to(content, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
              });
            }

            gsap.to(techTags, {
              scale: 1,
              y: 0,
              duration: 0.3,
              stagger: 0.05,
              ease: "power2.out"
            });
          });

          card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(card, {
              rotationX: -y * 0.05,
              rotationY: x * 0.05,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        });

        // Project reveal animation on scroll
        ScrollTrigger.create({
          trigger: "#projects",
          start: "top 80%",
          end: "bottom 20%",
          onEnter: () => {
            gsap.to('.projects-grid', {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              duration: 1.5,
              ease: "power3.out"
            });
          }
        });

        // Technology tags wave animation
        const techTags = document.querySelectorAll('.tech-tag');
        ScrollTrigger.create({
          trigger: "#projects",
          start: "top 60%",
          onEnter: () => {
            gsap.fromTo(techTags, {
              opacity: 0,
              scale: 0,
              rotation: 180
            }, {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "back.out(1.7)"
            });
          }
        });

        // Parallax scroll effect for floating elements
        ScrollTrigger.create({
          trigger: "#projects",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to('.floating-project-element', {
              y: progress * 200,
              rotation: progress * 180,
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
      id="projects" 
      className="py-24 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Scrolling text header */}
        <div className="overflow-hidden mb-16">
          <div 
            ref={marqueeRef}
            className="whitespace-nowrap" 
            data-testid="projects-header"
          >
            <span className="text-4xl font-bold text-muted-foreground">
              Recent Work · Recent Work · Recent Work · Recent Work · Recent Work · Recent Work · Recent Work · Recent Work · Recent Work ·
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 gap-8 mb-16">
          {/* AR Adventure Game */}
          <div className="project-card bg-card rounded-xl overflow-hidden border border-border transform-gpu" data-testid="project-ar-game">
            <img 
              src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Game development workspace with code and 3D models" 
              className="project-image w-full h-48 object-cover"
              data-testid="project-ar-image"
            />
            <div className="project-content p-6">
              <h3 className="text-xl font-bold mb-3" data-testid="project-ar-title">AR Adventure Game</h3>
              <p className="text-muted-foreground mb-4" data-testid="project-ar-description">
                Cross-Platform AR Development using Unity 3D with AR Foundation. Integrated ARKit and ARCore 
                for accurate spatial tracking and Vuforia for advanced image recognition.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tech-tag px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Python</span>
                <span className="tech-tag px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Unity 3D</span>
                <span className="tech-tag px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">AR Foundation</span>
                <span className="tech-tag px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">PostgreSQL</span>
              </div>
              <div className="text-primary hover:text-primary/80 font-medium cursor-pointer" data-testid="project-ar-link">
                View Project →
              </div>
            </div>
          </div>

          {/* Weather App */}
          <div className="project-card bg-card rounded-xl overflow-hidden border border-border transform-gpu" data-testid="project-weather">
            <img 
              src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Weather dashboard showing forecast data and analytics" 
              className="project-image w-full h-48 object-cover"
              data-testid="project-weather-image"
            />
            <div className="project-content p-6">
              <h3 className="text-xl font-bold mb-3" data-testid="project-weather-title">Weather App</h3>
              <p className="text-muted-foreground mb-4" data-testid="project-weather-description">
                Comprehensive weather app providing real-time updates, 5-day forecast, air quality index, 
                and hourly forecasts using OpenWeather API and modern web technologies.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tech-tag px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">JavaScript</span>
                <span className="tech-tag px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Weather API</span>
                <span className="tech-tag px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">HTML/CSS</span>
                <span className="tech-tag px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Java</span>
              </div>
              <div className="text-primary hover:text-primary/80 font-medium cursor-pointer" data-testid="project-weather-link">
                View Project →
              </div>
            </div>
          </div>

          {/* Research Projects */}
          <div className="project-card bg-card rounded-xl overflow-hidden border border-border transform-gpu" data-testid="project-research">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Data analytics dashboard with charts and graphs" 
              className="project-image w-full h-48 object-cover"
              data-testid="project-research-image"
            />
            <div className="project-content p-6">
              <h3 className="text-xl font-bold mb-3" data-testid="project-research-title">Research Data Analysis</h3>
              <p className="text-muted-foreground mb-4" data-testid="project-research-description">
                Streamlined data organization for research efficiency using advanced analytical tools 
                to convert raw data into actionable insights for decision-making.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tech-tag px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Python</span>
                <span className="tech-tag px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Pandas</span>
                <span className="tech-tag px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">NumPy</span>
                <span className="tech-tag px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">R</span>
              </div>
              <div className="text-primary hover:text-primary/80 font-medium cursor-pointer" data-testid="project-research-link">
                View Project →
              </div>
            </div>
          </div>

          {/* VR Research */}
          <div className="project-card bg-card rounded-xl overflow-hidden border border-border transform-gpu" data-testid="project-vr">
            <img 
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="VR research setup with headsets and motion tracking equipment" 
              className="project-image w-full h-48 object-cover"
              data-testid="project-vr-image"
            />
            <div className="project-content p-6">
              <h3 className="text-xl font-bold mb-3" data-testid="project-vr-title">VR & HCI Research</h3>
              <p className="text-muted-foreground mb-4" data-testid="project-vr-description">
                Researching cognitive processes and user perception in 3D environments at VERTEX Lab, 
                developing intuitive interfaces to improve user interaction and experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tech-tag px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">VR</span>
                <span className="tech-tag px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">HCI</span>
                <span className="tech-tag px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Research</span>
                <span className="tech-tag px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">C/C++</span>
              </div>
              <div className="text-primary hover:text-primary/80 font-medium cursor-pointer" data-testid="project-vr-link">
                View Project →
              </div>
            </div>
          </div>
        </div>

        <div className="text-center" data-testid="projects-footer">
          <p className="text-lg text-muted-foreground mb-6">
            I've been working on projects for over <span className="text-primary font-semibold">2 years</span>. 
            You can view my project archive with the following link.
          </p>
          <div className="magnetic-btn border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium cursor-pointer" data-testid="link-archives">
            View Archives
          </div>
        </div>
      </div>
    </section>
  );
}
