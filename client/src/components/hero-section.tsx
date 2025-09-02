import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window !== "undefined") {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        const { TextPlugin } = await import("gsap/TextPlugin");
        
        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        // Magnetic cursor
        const createMagneticCursor = () => {
          const cursor = cursorRef.current;
          if (!cursor) return;

          const handleMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, {
              x: e.clientX - 10,
              y: e.clientY - 10,
              duration: 0.3,
              ease: "power2.out"
            });
          };

          document.addEventListener('mousemove', handleMouseMove);
          return () => document.removeEventListener('mousemove', handleMouseMove);
        };

        createMagneticCursor();

        // Create floating particles
        const createFloatingElements = () => {
          const hero = heroRef.current;
          if (!hero) return;

          for (let i = 0; i < 20; i++) {
            const element = document.createElement('div');
            element.className = 'floating-element';
            element.style.cssText = `
              position: absolute;
              width: ${Math.random() * 4 + 2}px;
              height: ${Math.random() * 4 + 2}px;
              background: rgba(168, 85, 247, 0.3);
              border-radius: 50%;
              top: ${Math.random() * 100}%;
              left: ${Math.random() * 100}%;
              pointer-events: none;
            `;
            hero.appendChild(element);
          }
        };

        createFloatingElements();

        // Main animation timeline
        const tl = gsap.timeline({ delay: 4 });

        // Split text animation
        const splitText = (selector: string) => {
          const element = document.querySelector(selector);
          if (!element) return;
          
          const text = element.textContent || '';
          element.innerHTML = text.split('').map(char => 
            char === ' ' ? ' ' : `<span class="split-char">${char}</span>`
          ).join('');
        };

        splitText('.hero-main-text');
        splitText('.hero-sub-text');

        // Floating elements animation
        gsap.to('.floating-element', {
          y: () => Math.random() * 100 - 50,
          x: () => Math.random() * 100 - 50,
          duration: () => Math.random() * 3 + 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          stagger: 0.1
        });

        // Hero entrance animations
        tl.fromTo('.split-char', {
          opacity: 0,
          y: 100,
          rotationX: 90,
          transformOrigin: "center bottom"
        }, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.1,
          stagger: {
            amount: 1,
            from: "start"
          },
          ease: "back.out(1.7)"
        })
        
        // Parallax background animation
        .fromTo('.hero-bg-layer', {
          scale: 1.1,
          opacity: 0
        }, {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power2.out"
        }, "-=1")

        // Description with typewriter effect
        .fromTo('.hero-description', {
          opacity: 0,
          y: 50
        }, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.5")

        // Buttons with magnetic hover effects
        .fromTo('.magnetic-btn', {
          opacity: 0,
          scale: 0,
          rotationY: 180
        }, {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)"
        }, "-=0.3")

        .fromTo('.scroll-indicator', {
          opacity: 0,
          y: 20
        }, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out"
        }, "-=0.2");

        // Parallax scroll effect
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to('.hero-main-text', {
              y: progress * 100,
              duration: 0.3,
              ease: "power2.out"
            });
            gsap.to('.floating-element', {
              y: progress * 200,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        });

        // Magnetic button effects
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
          const handleMouseEnter = (e: Event) => {
            const target = e.target as HTMLElement;
            gsap.to(target, {
              scale: 1.1,
              duration: 0.3,
              ease: "power2.out"
            });
          };

          const handleMouseLeave = (e: Event) => {
            const target = e.target as HTMLElement;
            gsap.to(target, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          };

          const handleMouseMove = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const rect = target.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(target, {
              x: x * 0.1,
              y: y * 0.1,
              duration: 0.3,
              ease: "power2.out"
            });
          };

          btn.addEventListener('mouseenter', handleMouseEnter);
          btn.addEventListener('mouseleave', handleMouseLeave);
          btn.addEventListener('mousemove', handleMouseMove);
        });
      }
    };

    const timer = setTimeout(() => {
      loadGSAP();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleScrollClick = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Magnetic Cursor */}
      <div 
        ref={cursorRef}
        className="fixed w-5 h-5 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      
      <section 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden" 
        id="hero"
      >
        {/* Background Layer */}
        <div className="hero-bg-layer absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black/40" />
        
        <div className="max-w-7xl w-full relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-shadow" data-testid="hero-title">
              <span className="hero-main-text block mb-4">HI I'M TUSHANT,</span>
              <span className="hero-sub-text block hero-text">A CREATIVE DEVELOPER</span>
            </h1>
            <p className="hero-description text-lg md:text-xl max-w-4xl mx-auto mb-12 text-muted-foreground leading-relaxed" data-testid="hero-description">
              I'm a Computer Science student at Dalhousie University passionate about VR, HCI, and persuasive computing. 
              I develop innovative web applications, conduct cutting-edge research, and create technologies that drive positive change.
            </p>
            <div className="hero-buttons flex flex-wrap justify-center gap-6 mb-16">
              <a 
                href="https://linkedin.com/in/tushantkaura/" 
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn bg-primary hover:bg-primary/90 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                data-testid="link-linkedin"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/TushantKaura1" 
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn bg-secondary hover:bg-secondary/90 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                data-testid="link-github"
              >
                GitHub
              </a>
              <a 
                href="mailto:tushantkaura@gmail.com" 
                className="magnetic-btn bg-secondary hover:bg-secondary/90 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                data-testid="link-email"
              >
                Mail
              </a>
              <a 
                href="#" 
                className="magnetic-btn bg-secondary hover:bg-secondary/90 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                data-testid="link-resume"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
        
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator cursor-pointer z-20"
          onClick={handleScrollClick}
          data-testid="scroll-indicator"
        >
          <div className="flex flex-col items-center text-muted-foreground">
            <span className="text-sm mb-2">SCROLL TO KNOW ABOUT ME</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </section>
    </>
  );
}
