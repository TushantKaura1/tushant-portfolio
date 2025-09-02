import { useEffect, useRef } from "react";
import { Award, GraduationCap, Code, Brain, Users, Cpu } from "lucide-react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window !== "undefined") {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

        // Create tech-focused floating elements
        const createFloatingElements = () => {
          const section = sectionRef.current;
          if (!section) return;

          // Add tech grid background
          const techGrid = document.createElement('div');
          techGrid.className = 'absolute inset-0 tech-grid opacity-15 pointer-events-none';
          section.appendChild(techGrid);

          // Add matrix-style background
          const matrixBg = document.createElement('div');
          matrixBg.className = 'absolute inset-0 matrix-bg pointer-events-none';
          section.appendChild(matrixBg);

          // Add data stream lines
          for (let i = 0; i < 2; i++) {
            const streamLine = document.createElement('div');
            streamLine.className = 'absolute left-0 w-full h-0.5 data-stream-line opacity-15 pointer-events-none';
            streamLine.style.top = `${33 + i * 33}%`;
            streamLine.style.animationDelay = `${i * 3}s`;
            section.appendChild(streamLine);
          }

          // Create floating tech elements
          for (let i = 0; i < 30; i++) {
            const element = document.createElement('div');
            element.className = 'floating-about-element';
            const size = Math.random() * 10 + 5;
            const colors = [
              'rgba(168, 85, 247, 0.3)',
              'rgba(59, 130, 246, 0.3)',
              'rgba(34, 197, 94, 0.3)',
              'rgba(251, 191, 36, 0.3)'
            ];
            const color = colors[Math.floor(Math.random() * colors.length)];
            element.style.cssText = `
              position: absolute;
              width: ${size}px;
              height: ${size}px;
              background: ${color};
              border-radius: 50%;
              top: ${Math.random() * 100}%;
              left: ${Math.random() * 100}%;
              pointer-events: none;
              box-shadow: 0 0 20px ${color};
              filter: blur(0.5px);
            `;
            section.appendChild(element);
          }
        };

        createFloatingElements();

        // Ensure animations trigger with a small delay
        setTimeout(() => {
          // Advanced text reveal animation
        const splitTextIntoWords = (selector: string) => {
          const element = document.querySelector(selector);
          if (!element) return;
          
          const text = element.textContent || '';
          const words = text.split(' ');
          element.innerHTML = words.map(word => 
            `<span class="word-reveal">${word}</span>`
          ).join(' ');
        };

        splitTextIntoWords('#about h2');

        // Enhanced floating elements animation
        gsap.to('.floating-about-element', {
          y: () => Math.random() * 200 - 100,
          x: () => Math.random() * 200 - 100,
          rotation: () => Math.random() * 720,
          scale: () => Math.random() * 0.5 + 0.75,
          duration: () => Math.random() * 8 + 6,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          stagger: 0.05
        });

        // Tech grid animation
        gsap.to('.tech-grid', {
          backgroundPosition: '50px 50px',
          duration: 25,
          repeat: -1,
          ease: "none"
        });

        // Progressive reveal timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#about",
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
            scrub: false
          }
        });

        // Word-by-word title reveal
        tl.fromTo('.word-reveal', {
          opacity: 0,
          y: 50,
          rotationX: 45,
          transformOrigin: "center bottom"
        }, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.3,
          stagger: 0.05,
          ease: "back.out(1.4)"
        })

        // Text content with wave effect
        .fromTo('.about-text', {
          opacity: 0,
          y: 40,
          scale: 0.9
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out"
        }, "-=0.2")

        // Image with mask reveal
        .fromTo('.about-image', {
          opacity: 0,
          scale: 0.8,
          y: 30
        }, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.2")

        // Stats cards animation
        .fromTo('.stat-card', {
          opacity: 0,
          y: 30,
          scale: 0.9
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.4)"
        }, "-=0.2");

        // Parallax scroll effects
        ScrollTrigger.create({
          trigger: "#about",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to('.floating-about-element', {
              y: progress * 150,
              rotation: progress * 180,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        });

        // Image hover animation
        const imageContainer = imageRef.current;
        if (imageContainer) {
          imageContainer.addEventListener('mouseenter', () => {
            gsap.to(imageContainer, {
              scale: 1.05,
              rotationY: 5,
              duration: 0.5,
              ease: "power2.out"
            });
          });

          imageContainer.addEventListener('mouseleave', () => {
            gsap.to(imageContainer, {
              scale: 1,
              rotationY: 0,
              duration: 0.5,
              ease: "power2.out"
            });
          });
        }
        }, 100); // Close the setTimeout
      }
    };

    const timer = setTimeout(() => {
      loadGSAP();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: GraduationCap, label: "Education", value: "Dalhousie University", subtext: "Computer Science" },
    { icon: Award, label: "Scholarship", value: "$25,000", subtext: "Entrance Award" },
    { icon: Code, label: "Projects", value: "15+", subtext: "Completed" },
    { icon: Brain, label: "Research", value: "2 Labs", subtext: "VERTEX & Persuasive Computing" },
  ];

  const interests = [
    { icon: Users, title: "Human-Computer Interaction", description: "Designing intuitive interfaces for better user experiences" },
    { icon: Brain, title: "Virtual Reality", description: "Exploring immersive technologies and spatial computing" },
    { icon: Cpu, title: "AI and ML", description: "Developing intelligent systems and machine learning solutions" },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="section-padding relative overflow-hidden"
    >
      <div className="container-responsive relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            About Me
          </span>
          <h2 className="text-responsive-lg font-bold mb-6 sm:mb-8" data-testid="about-title">
            <span className="word-reveal">Passionate</span> <span className="word-reveal text-primary">Developer</span> <span className="word-reveal">&</span> <span className="word-reveal">Researcher</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building the future through innovative technology and cutting-edge research
          </p>
        </div>

        {/* Main Content */}
        <div className="grid-responsive-2 items-center mb-12 sm:mb-16 md:mb-20">
          <div ref={textRef} className="about-content">
            <div className="space-y-8">
              <div className="about-text">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
                <p className="text-lg leading-relaxed text-muted-foreground" data-testid="about-text-1">
                  I'm a Computer Science student at Dalhousie University with a passion for innovative technology. 
                  Currently pursuing my Bachelor's degree while actively engaging in multiple research projects at 
                  VERTEX Labs and the Persuasive Computing Lab.
                </p>
              </div>
              
              <div className="about-text">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Work</h3>
                <p className="text-lg leading-relaxed text-muted-foreground" data-testid="about-text-2">
                  My work spans across VR/HCI research, web development, and creating persuasive systems that 
                  empower underserved populations. I've been recognized with a $25,000 entrance scholarship 
                  and the Most Innovative Award at Global Game Jam.
                </p>
              </div>
            </div>
          </div>
          
          <div ref={imageRef} className="about-content relative">
            <div className="relative group">
              <img 
                src="/images/tushant-portrait.jpg" 
                alt="Tushant Kaura - Computer Science Student and Developer" 
                className="about-image rounded-2xl shadow-2xl w-full h-auto transform-gpu object-cover opacity-100"
                data-testid="about-image"
                style={{ opacity: 1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl pointer-events-none"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Tech overlay effects */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
              <div className="absolute top-1/2 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card card-mobile text-center hover:bg-card/80 transition-all duration-300">
              <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-muted-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-primary">{stat.subtext}</div>
            </div>
          ))}
        </div>

        {/* Interests Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Areas of Interest</h3>
          <p className="text-muted-foreground">The technologies and fields that drive my passion</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {interests.map((interest, index) => (
            <div key={index} className="group card-mobile hover:bg-card/50 transition-all duration-300 hover:scale-105">
              <interest.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">{interest.title}</h4>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
