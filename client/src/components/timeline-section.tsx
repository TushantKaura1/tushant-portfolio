import { useEffect, useRef } from "react";

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window !== "undefined") {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

        // Create timeline progress indicators
        const createProgressIndicators = () => {
          const section = sectionRef.current;
          if (!section) return;

          for (let i = 0; i < 10; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'progress-indicator';
            indicator.style.cssText = `
              position: absolute;
              width: 8px;
              height: 8px;
              background: rgba(168, 85, 247, 0.5);
              border-radius: 50%;
              top: ${20 + i * 10}%;
              right: 5%;
              transform: scale(0);
            `;
            section.appendChild(indicator);
          }
        };

        createProgressIndicators();

        // Progressive timeline line animation
        ScrollTrigger.create({
          trigger: "#milestones",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to('.timeline-line', {
              scaleY: progress,
              duration: 0.1,
              ease: "none"
            });
            
            // Animate progress indicators
            gsap.to('.progress-indicator', {
              scale: progress > 0.5 ? 1 : 0,
              opacity: progress,
              duration: 0.3,
              stagger: 0.1,
              ease: "power2.out"
            });
          }
        });

        // Enhanced timeline items animation
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
          gsap.fromTo(item, {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            rotationY: index % 2 === 0 ? -30 : 30,
            scale: 0.8
          }, {
            opacity: 1,
            x: 0,
            rotationY: 0,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          });

          // Timeline item hover effects
          item.addEventListener('mouseenter', () => {
            gsap.to(item, {
              scale: 1.05,
              rotationY: 5,
              z: 50,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          item.addEventListener('mouseleave', () => {
            gsap.to(item, {
              scale: 1,
              rotationY: 0,
              z: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        });

        // Animated year numbers
        const yearElements = document.querySelectorAll('.timeline-year');
        yearElements.forEach((yearEl, index) => {
          const targetYear = yearEl.textContent || '2024';
          const startYear = parseInt(targetYear) - 5;
          
          gsap.fromTo(yearEl, {
            textContent: startYear,
            scale: 0.5,
            opacity: 0
          }, {
            textContent: targetYear,
            scale: 1,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: yearEl,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          });
        });

        // Timeline image reveal animations
        const timelineImages = document.querySelectorAll('.timeline-image');
        timelineImages.forEach((img, index) => {
          gsap.fromTo(img, {
            clipPath: "circle(0% at 50% 50%)",
            rotation: 180,
            scale: 0.5
          }, {
            clipPath: "circle(100% at 50% 50%)",
            rotation: 0,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: img,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          });
        });

        // Floating timeline decorations
        const createFloatingDecorations = () => {
          const section = sectionRef.current;
          if (!section) return;

          for (let i = 0; i < 20; i++) {
            const decoration = document.createElement('div');
            decoration.className = 'floating-decoration';
            decoration.style.cssText = `
              position: absolute;
              width: ${Math.random() * 6 + 3}px;
              height: ${Math.random() * 6 + 3}px;
              background: rgba(168, 85, 247, 0.3);
              border-radius: 50%;
              top: ${Math.random() * 100}%;
              left: ${Math.random() * 100}%;
              pointer-events: none;
            `;
            section.appendChild(decoration);
          }
        };

        createFloatingDecorations();

        // Animate floating decorations
        gsap.to('.floating-decoration', {
          y: () => Math.random() * 100 - 50,
          x: () => Math.random() * 50 - 25,
          rotation: () => Math.random() * 360,
          duration: () => Math.random() * 4 + 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          stagger: 0.1
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
      id="milestones" 
      className="py-24 px-6 bg-black/20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="sticky top-32">
              <div className="text-6xl md:text-8xl font-bold flex items-center space-x-8 mb-8" data-testid="timeline-years">
                <span className="timeline-year">2024</span>
                <span className="timeline-year">2025</span>
              </div>
              <div 
                ref={timelineLineRef}
                className="w-2 h-64 timeline-line rounded-full transform-origin-top"
              ></div>
            </div>
          </div>
          <div className="space-y-16">
            {/* 2024 */}
            <div className="timeline-item transform-gpu" data-testid="timeline-2024">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&h=128" 
                  alt="University campus with students walking" 
                  className="timeline-image w-16 h-16 rounded-full mr-6 object-cover"
                  data-testid="timeline-image-2024"
                />
                <span className="timeline-year text-2xl font-bold text-primary">2024</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" data-testid="timeline-title-2024">Started at Dalhousie University</h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="timeline-description-2024">
                Began my Bachelor of Applied Computer Science journey at Dalhousie University. 
                Awarded a $25,000 entrance scholarship for academic and extracurricular excellence. 
                Won the Most Innovative Award at Global Game Jam for creativity and technical excellence.
              </p>
            </div>

            {/* 2025 */}
            <div className="timeline-item transform-gpu" data-testid="timeline-2025">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&h=128" 
                  alt="Modern research laboratory with advanced equipment" 
                  className="timeline-image w-16 h-16 rounded-full mr-6 object-cover"
                  data-testid="timeline-image-2025"
                />
                <span className="timeline-year text-2xl font-bold text-primary">2025</span>
              </div>
              <h3 className="text-xl font-semibold mb-3" data-testid="timeline-title-2025">Research & Development Focus</h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="timeline-description-2025">
                Currently working across multiple roles: Web Developer Intern at Futura Holding Group, 
                Research Assistant at VERTEX Labs focusing on VR/HCI, and Software Developer at 
                Persuasive Computing Lab creating behavior change systems. Also mentoring STEM inclusion initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
