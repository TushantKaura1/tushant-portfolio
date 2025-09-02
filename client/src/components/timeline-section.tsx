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

        // Advanced Vine Animation System
        const createVineAnimation = () => {
          const vineNodes = document.querySelectorAll('.vine-node');
          const vineStem = document.querySelector('.vine-stem');
          
          // Calculate total vine height
          const totalHeight = vineNodes.length * 140; // 20 * 7 (space-y-20 + node height)
          
          if (vineStem) {
            gsap.set(vineStem, { height: totalHeight });
          }

          // Create master vine timeline
          const vineTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: "#experience-vine",
              start: "top 60%",
              end: "bottom 40%",
              toggleActions: "play none none reverse"
            }
          });

          // Animate vine stem growth
          vineTimeline.to('.vine-stem', {
            opacity: 1,
            scaleY: 1,
            duration: 2,
            ease: "power2.out",
            transformOrigin: "top"
          });

          // Animate each vine node sequentially
          vineNodes.forEach((node, index) => {
            const vineNumber = node.getAttribute('data-vine');
            const branch = node.querySelector('.vine-branch');
            const leaf = node.querySelector('.vine-leaf');
            const card = node.querySelector('.experience-card');
            const logo = node.querySelector('.company-logo');

            // Create individual vine node timeline
            const nodeTimeline = gsap.timeline();

            // Branch grows out
            nodeTimeline.to(branch, {
              opacity: 1,
              scaleX: 1,
              duration: 0.5,
              ease: "power2.out",
              transformOrigin: "left"
            })
            
            // Leaf pops in with bounce
            .to(leaf, {
              opacity: 1,
              scale: 1,
              duration: 0.3,
              ease: "back.out(2.5)"
            }, "-=0.2")
            
            // Card scales in with pop effect
            .to(card, {
              scale: 1,
              duration: 0.6,
              ease: "back.out(1.7)"
            }, "-=0.1")
            
            // Logo pulse effect
            .to(logo, {
              scale: 1.2,
              duration: 0.2,
              ease: "power2.out"
            })
            .to(logo, {
              scale: 1,
              duration: 0.2,
              ease: "power2.out"
            });

            // Add node animation to master timeline with stagger
            vineTimeline.add(nodeTimeline, 0.3 + index * 0.4);

            // Add hover interactions for vine nodes
            node.addEventListener('mouseenter', () => {
              gsap.to(card, {
                scale: 1.05,
                y: -5,
                duration: 0.3,
                ease: "power2.out"
              });
              
              gsap.to(leaf, {
                scale: 1.3,
                rotation: 360,
                duration: 0.5,
                ease: "back.out(1.7)"
              });
              
              gsap.to(branch, {
                scaleX: 1.2,
                duration: 0.3,
                ease: "power2.out"
              });
            });

            node.addEventListener('mouseleave', () => {
              gsap.to(card, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out"
              });
              
              gsap.to(leaf, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
              });
              
              gsap.to(branch, {
                scaleX: 1,
                duration: 0.3,
                ease: "power2.out"
              });
            });

            // Continuous subtle vine movement
            gsap.to(leaf, {
              rotation: () => Math.random() * 20 - 10,
              y: () => Math.random() * 10 - 5,
              duration: () => Math.random() * 3 + 2,
              repeat: -1,
              yoyo: true,
              ease: "power1.inOut",
              delay: index * 0.2
            });
          });

          // Add floating vine particles
          const createVineParticles = () => {
            const vineContainer = document.querySelector('#experience-vine');
            if (!vineContainer) return;

            for (let i = 0; i < 15; i++) {
              const particle = document.createElement('div');
              particle.className = 'vine-particle';
              particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: rgba(34, 197, 94, 0.6);
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                pointer-events: none;
                opacity: 0;
              `;
              vineContainer.appendChild(particle);
            }
          };

          createVineParticles();

          // Animate vine particles
          gsap.to('.vine-particle', {
            opacity: 1,
            y: () => Math.random() * 100 - 50,
            x: () => Math.random() * 50 - 25,
            scale: () => Math.random() * 2 + 0.5,
            duration: () => Math.random() * 4 + 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            stagger: 0.2
          });
        };

        // Initialize vine animation
        createVineAnimation();
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

        {/* Experience Vine Animation Section */}
        <div className="mt-32 relative" id="experience-vine">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16" data-testid="experience-title">
            Professional Journey
          </h2>
          
          {/* Main Vine Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central Vine Stem */}
            <div className="vine-stem absolute left-1/2 top-0 w-1 bg-gradient-to-b from-green-500 to-green-700 transform -translate-x-1/2 opacity-0"></div>
            
            {/* Experience Nodes */}
            <div className="space-y-20">
              {/* Futura Holding Group */}
              <div className="vine-node relative flex items-center" data-vine="1" data-testid="experience-futura">
                <div className="vine-branch absolute left-1/2 w-20 h-0.5 bg-green-500 transform -translate-x-1/2 opacity-0"></div>
                <div className="vine-leaf absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-400 rounded-full opacity-0"></div>
                <div className="experience-card bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-xl transform scale-0 max-w-md mx-auto">
                  <div className="flex items-center mb-4">
                    <div className="company-logo w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">FH</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Web Developer Intern</h3>
                      <p className="text-sm text-muted-foreground">Futura Holding Group</p>
                      <p className="text-xs text-primary">Apr 2025 – Present</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Develops responsive web applications using React, HTML, CSS, and JavaScript. 
                    Implements interactive UI components and optimizes frontend performance.
                  </p>
                </div>
              </div>

              {/* CISE-Atlantic */}
              <div className="vine-node relative flex items-center" data-vine="2" data-testid="experience-cise">
                <div className="vine-branch absolute left-1/2 w-20 h-0.5 bg-green-500 transform -translate-x-1/2 opacity-0"></div>
                <div className="vine-leaf absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-400 rounded-full opacity-0"></div>
                <div className="experience-card bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-xl transform scale-0 max-w-md mx-auto">
                  <div className="flex items-center mb-4">
                    <div className="company-logo w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">CA</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Lead Research Mentor</h3>
                      <p className="text-sm text-muted-foreground">CISE-Atlantic</p>
                      <p className="text-xs text-primary">Apr 2025 – Present</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Mentors students from diverse backgrounds in conducting physics-based research, 
                    fostering equity and curiosity in STEM education.
                  </p>
                </div>
              </div>

              {/* VERTEX Labs */}
              <div className="vine-node relative flex items-center" data-vine="3" data-testid="experience-vertex">
                <div className="vine-branch absolute left-1/2 w-20 h-0.5 bg-green-500 transform -translate-x-1/2 opacity-0"></div>
                <div className="vine-leaf absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-400 rounded-full opacity-0"></div>
                <div className="experience-card bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-xl transform scale-0 max-w-md mx-auto">
                  <div className="flex items-center mb-4">
                    <div className="company-logo w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">VX</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Research Assistant</h3>
                      <p className="text-sm text-muted-foreground">VERTEX Labs, Dalhousie</p>
                      <p className="text-xs text-primary">Nov 2024 – Present</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Researching VR and HCI, focusing on cognitive processes and user 
                    perception in 3D environments.
                  </p>
                </div>
              </div>

              {/* Persuasive Computing Lab */}
              <div className="vine-node relative flex items-center" data-vine="4" data-testid="experience-persuasive">
                <div className="vine-branch absolute left-1/2 w-20 h-0.5 bg-green-500 transform -translate-x-1/2 opacity-0"></div>
                <div className="vine-leaf absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-400 rounded-full opacity-0"></div>
                <div className="experience-card bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-xl transform scale-0 max-w-md mx-auto">
                  <div className="flex items-center mb-4">
                    <div className="company-logo w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">PC</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Software Developer</h3>
                      <p className="text-sm text-muted-foreground">Persuasive Computing Lab</p>
                      <p className="text-xs text-primary">Jan 2025 – Present</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Designs persuasive and behavior change systems using user-centered approaches 
                    to empower underserved populations.
                  </p>
                </div>
              </div>

              {/* Data Analyst */}
              <div className="vine-node relative flex items-center" data-vine="5" data-testid="experience-analyst">
                <div className="vine-branch absolute left-1/2 w-20 h-0.5 bg-green-500 transform -translate-x-1/2 opacity-0"></div>
                <div className="vine-leaf absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-400 rounded-full opacity-0"></div>
                <div className="experience-card bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-xl transform scale-0 max-w-md mx-auto">
                  <div className="flex items-center mb-4">
                    <div className="company-logo w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">DU</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Data Analyst</h3>
                      <p className="text-sm text-muted-foreground">Dalhousie University</p>
                      <p className="text-xs text-primary">Dec 2024 – Apr 2025</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Streamlined data organization to enhance research efficiency and 
                    convert raw data into actionable insights.
                  </p>
                </div>
              </div>

              {/* Course Representative */}
              <div className="vine-node relative flex items-center" data-vine="6" data-testid="experience-representative">
                <div className="vine-branch absolute left-1/2 w-20 h-0.5 bg-green-500 transform -translate-x-1/2 opacity-0"></div>
                <div className="vine-leaf absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-400 rounded-full opacity-0"></div>
                <div className="experience-card bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-xl transform scale-0 max-w-md mx-auto">
                  <div className="flex items-center mb-4">
                    <div className="company-logo w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">CR</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Course Representative</h3>
                      <p className="text-sm text-muted-foreground">CSCI 1120, Dalhousie</p>
                      <p className="text-xs text-primary">Jan 2025 – Apr 2025</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Acted as liaison between students and faculty, organizing study sessions 
                    and peer support initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
