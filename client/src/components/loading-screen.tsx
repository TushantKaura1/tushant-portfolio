import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load GSAP
    const loadGSAP = async () => {
      if (typeof window !== "undefined") {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        const { TextPlugin } = await import("gsap/TextPlugin");
        
        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        // Create particles
        const createParticles = () => {
          const container = document.querySelector('.loading-particles');
          if (!container) return;
          
          for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
              position: absolute;
              width: 2px;
              height: 2px;
              background: rgba(168, 85, 247, 0.6);
              border-radius: 50%;
              top: ${Math.random() * 100}vh;
              left: ${Math.random() * 100}vw;
            `;
            container.appendChild(particle);
          }
        };

        createParticles();

        // Advanced loading animation sequence
        const tl = gsap.timeline();
        
        // Particle explosion
        tl.set(".particle", {
          scale: 0,
          opacity: 0
        })
        .to(".particle", {
          scale: 1,
          opacity: 1,
          duration: 0.1,
          stagger: {
            amount: 0.5,
            from: "random"
          },
          ease: "power2.out"
        })
        .to(".particle", {
          x: () => (Math.random() - 0.5) * 200,
          y: () => (Math.random() - 0.5) * 200,
          duration: 1,
          ease: "power2.out"
        }, "-=0.3")
        
        // Text morphing sequence
        .fromTo(".loading-text", {
          opacity: 0,
          scale: 0.5,
          rotationX: 90
        }, {
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1,
          ease: "back.out(1.7)"
        }, "-=0.5")
        
        // Letter-by-letter reveal
        .fromTo(".loading-letter", {
          opacity: 0,
          y: 100,
          rotationZ: 45,
          scale: 0
        }, {
          opacity: 1,
          y: 0,
          rotationZ: 0,
          scale: 1,
          duration: 0.1,
          stagger: 0.05,
          ease: "back.out(2)"
        }, "-=0.3")
        
        // Glitch effect
        .to(".loading-text", {
          x: 2,
          duration: 0.05,
          yoyo: true,
          repeat: 5
        }, "+=0.5")
        .to(".loading-text", {
          x: -2,
          duration: 0.05,
          yoyo: true,
          repeat: 3
        })
        .to(".loading-text", {
          x: 0,
          duration: 0.05
        })
        
        // Percentage counter
        .fromTo(".loading-counter", {
          opacity: 0,
          scale: 0
        }, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)"
        }, "-=0.5")
        .to(".loading-counter", {
          text: "100%",
          duration: 1.5,
          ease: "power2.out"
        }, "-=0.3")
        
        // Final transition
        .to(".loading-text, .loading-counter", {
          scale: 1.2,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in"
        }, "+=0.3")
        .to(".particle", {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          stagger: 0.01,
          ease: "power2.in"
        }, "-=0.3")
        .to(".loading-screen", {
          clipPath: "circle(0% at 50% 50%)",
          duration: 1.2,
          ease: "power4.inOut",
          onComplete: () => {
            setIsLoading(false);
          }
        });
      }
    };

    // Add small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      loadGSAP();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  const name = "TUSHANT KAURA";
  const letters = name.split("").map((letter, index) => (
    <span key={index} className="loading-letter inline-block">
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));

  return (
    <div className="loading-screen">
      <div className="loading-particles absolute inset-0"></div>
      <div className="relative z-10 flex flex-col items-center">
        <div className="loading-text text-4xl md:text-6xl font-bold mb-8" data-testid="loading-text">
          {letters}
        </div>
        <div className="loading-counter text-xl text-primary font-mono" data-testid="loading-counter">
          0%
        </div>
      </div>
    </div>
  );
}
