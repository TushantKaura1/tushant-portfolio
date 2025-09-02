import { useEffect, useRef } from "react";

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

        // Create morphing background elements
        const createMorphingElements = () => {
          const section = sectionRef.current;
          if (!section) return;

          for (let i = 0; i < 15; i++) {
            const element = document.createElement('div');
            element.className = 'morph-element';
            element.style.cssText = `
              position: absolute;
              width: ${Math.random() * 100 + 50}px;
              height: ${Math.random() * 100 + 50}px;
              background: linear-gradient(45deg, rgba(168, 85, 247, 0.1), rgba(59, 130, 246, 0.1));
              border-radius: ${Math.random() * 50 + 25}%;
              top: ${Math.random() * 100}%;
              left: ${Math.random() * 100}%;
              pointer-events: none;
              filter: blur(2px);
            `;
            section.appendChild(element);
          }
        };

        createMorphingElements();

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

        // Morphing elements animation
        gsap.to('.morph-element', {
          scale: () => Math.random() * 0.5 + 0.75,
          rotation: () => Math.random() * 360,
          x: () => Math.random() * 200 - 100,
          y: () => Math.random() * 200 - 100,
          duration: () => Math.random() * 4 + 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          stagger: 0.2
        });

        // Progressive reveal timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            scrub: 1
          }
        });

        // Word-by-word title reveal
        tl.fromTo('.word-reveal', {
          opacity: 0,
          y: 100,
          rotationX: 90,
          transformOrigin: "center bottom"
        }, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)"
        })

        // Text content with wave effect
        .fromTo('.about-text', {
          opacity: 0,
          y: 80,
          scale: 0.8
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out"
        }, "-=0.3")

        // Image with mask reveal
        .fromTo('.about-image', {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          scale: 1.2
        }, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          scale: 1,
          duration: 1.5,
          ease: "power4.out"
        }, "-=0.5");

        // Parallax scroll effects
        ScrollTrigger.create({
          trigger: "#about",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to('.morph-element', {
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
      id="about" 
      className="py-24 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center" data-testid="about-title">
          Hi! I'm <span className="text-primary">Tushant Kaura</span>, a creative developer and research enthusiast.
        </h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={textRef} className="about-content">
            <p className="about-text text-lg leading-relaxed mb-6 text-muted-foreground" data-testid="about-text-1">
              I'm a Computer Science student at Dalhousie University with a passion for innovative technology. 
              Currently pursuing my Bachelor's degree while actively engaging in multiple research projects at 
              VERTEX Labs and the Persuasive Computing Lab.
            </p>
            <p className="about-text text-lg leading-relaxed text-muted-foreground" data-testid="about-text-2">
              My work spans across VR/HCI research, web development, and creating persuasive systems that 
              empower underserved populations. I've been recognized with a $25,000 entrance scholarship 
              and the Most Innovative Award at Global Game Jam.
            </p>
          </div>
          <div ref={imageRef} className="about-content relative">
            <img 
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern tech workspace with multiple monitors" 
              className="about-image rounded-xl shadow-2xl w-full h-auto transform-gpu"
              data-testid="about-image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
