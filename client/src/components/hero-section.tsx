import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Mail, Download, RotateCcw } from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin, ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  // Simple puzzle pieces array - TUSHANT KAURA (12 letters)
  // Puzzle letters for the CS-themed puzzle - arranged in 2 rows
  const puzzleLetters = [
    ["T", "U", "S", "H", "A", "N", "T"], // TUSHANT (top row)
    ["K", "A", "U", "R", "A"] // KAURA (bottom row)
  ];
  
  // State for puzzle
  const [isPuzzleSolved, setIsPuzzleSolved] = useState(false);
  const [revealedLetters, setRevealedLetters] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Memoized binary cells to prevent unnecessary re-renders - 2 rows to match name layout
  const binaryCells = useMemo(() => {
    return [
      // Top row (7 cells for TUSHANT) - Binary representation of 7: 0000111
      [
        { id: 'top-0', value: '0' },
        { id: 'top-1', value: '0' },
        { id: 'top-2', value: '0' },
        { id: 'top-3', value: '0' },
        { id: 'top-4', value: '1' },
        { id: 'top-5', value: '1' },
        { id: 'top-6', value: '1' }
      ],
      // Bottom row (5 cells for KAURA) - Binary representation of 5: 00101
      [
        { id: 'bottom-0', value: '0' },
        { id: 'bottom-1', value: '0' },
        { id: 'bottom-2', value: '1' },
        { id: 'bottom-3', value: '0' },
        { id: 'bottom-4', value: '1' }
      ]
    ];
  }, []); // Only generate once, no regeneration

  // Memoized placeholder values for puzzle boxes - static to prevent regeneration
  const placeholderValues = useMemo(() => {
    return [
      ['0', '0', '0', '0', '1', '1', '1'], // Top row (7 values for TUSHANT) - Binary 7: 0000111
      ['0', '0', '1', '0', '1'] // Bottom row (5 values for KAURA) - Binary 5: 00101
    ];
  }, []); // Never regenerate

  // Text variations for typewriter effect
  const textVariations = [
    {
      greeting: "Hello, I'm",
      title: "Creative Developer",
      description: "Computer Science student at Dalhousie University specializing in VR, HCI, Artificial Intelligence, and Machine Learning. My work explores computational methods to build innovative systems and advance research that creates real-world impact."
    },
    {
      greeting: "Hello, I'm",
      title: "VR Researcher",
      description: "Computer Science student at Dalhousie University specializing in VR, HCI, Artificial Intelligence, and Machine Learning. My work explores computational methods to build innovative systems and advance research that creates real-world impact."
    },
    {
      greeting: "Hello, I'm",
      title: "AI & ML Researcher",
      description: "Computer Science student at Dalhousie University specializing in VR, HCI, Artificial Intelligence, and Machine Learning. My work explores computational methods to build innovative systems and advance research that creates real-world impact."
    },
    {
      greeting: "Hello, I'm",
      title: "Software Developer",
      description: "Computer Science student at Dalhousie University specializing in VR, HCI, Artificial Intelligence, and Machine Learning. My work explores computational methods to build innovative systems and advance research that creates real-world impact."
    },
    {
      greeting: "Hello, I'm",
      title: "Web Developer",
      description: "Computer Science student at Dalhousie University specializing in VR, HCI, Artificial Intelligence, and Machine Learning. My work explores computational methods to build innovative systems and advance research that creates real-world impact."
    }
  ];

  // Enhanced Computer Science themed puzzle solver with better animations
  const solvePuzzle = () => {
    if (isAnimating || isPuzzleSolved) return;
    
    setIsAnimating(true);
    setRevealedLetters([]);
    
    console.log("🔊 SYSTEM INITIALIZING...");
    console.log("💻 COMPILING PUZZLE SOLVER...");
    console.log("🔐 LOADING DECRYPTION ALGORITHMS...");
    console.log("⚡ INITIALIZING NEURAL NETWORK...");
    
    // Flatten the 2D array for sequential reveal - ensure correct order
    const allLetters = [...puzzleLetters[0], ...puzzleLetters[1]];
    console.log("📊 TARGET SEQUENCE:", allLetters.join(''));
    
    // Enhanced animation with varying delays for more interesting effect
    allLetters.forEach((letter, index) => {
      const delay = index * 150 + Math.random() * 100; // Vary timing slightly
      
      setTimeout(() => {
        setRevealedLetters(prev => {
          const newLetters = [...prev, letter];
          console.log(`⚡ DECRYPTING BYTE ${index + 1}/${allLetters.length}: ${letter}`);
          console.log(`📈 PROGRESS: ${((index + 1) / allLetters.length * 100).toFixed(1)}%`);
          return newLetters;
        });
        
        // Add some system messages for more interesting experience
        if (index === 0) {
          console.log("🎯 TARGET ACQUIRED: TUSHANT KAURA");
        } else if (index === 6) {
          console.log("🔄 SWITCHING TO SECONDARY TARGET...");
        } else if (index === allLetters.length - 1) {
          console.log("✅ DECRYPTION COMPLETE!");
          console.log("🎉 IDENTITY VERIFIED: TUSHANT KAURA");
        }
        
        // Check if all letters are revealed
        if (index === allLetters.length - 1) {
          setTimeout(() => {
            setIsPuzzleSolved(true);
            setIsAnimating(false);
            console.log("🚀 SYSTEM READY FOR INTERACTION");
          }, 800);
        }
      }, delay);
    });
  };

  // Create floating elements
  const createFloatingElements = () => {
    const container = heroRef.current;
    if (!container) return;

    // Clear existing elements
    const existingElements = container.querySelectorAll('.floating-element');
    existingElements.forEach(el => el.remove());

    // Create 50 tech particles
    for (let i = 0; i < 50; i++) {
      const element = document.createElement('div');
      element.className = 'floating-element';
      element.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: linear-gradient(45deg, #3b82f6, #8b5cf6);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.6 + 0.2};
        filter: blur(${Math.random() * 2 + 1}px);
        pointer-events: none;
        z-index: 1;
      `;
      container.appendChild(element);
    }
  };

  // Create tech grid background
  const createTechGrid = () => {
    const container = heroRef.current;
    if (!container) return;

    const existingGrid = container.querySelector('.tech-grid');
    if (existingGrid) existingGrid.remove();

    const grid = document.createElement('div');
    grid.className = 'tech-grid';
    grid.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
      background-size: 50px 50px;
      opacity: 0.3;
      pointer-events: none;
      z-index: 0;
    `;
    container.appendChild(grid);
  };

  // Create matrix background
  const createMatrixBg = () => {
    const container = heroRef.current;
    if (!container) return;

    const existingMatrix = container.querySelector('.matrix-bg');
    if (existingMatrix) existingMatrix.remove();

    const matrix = document.createElement('div');
    matrix.className = 'matrix-bg';
    matrix.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%);
      pointer-events: none;
      z-index: 0;
    `;
    container.appendChild(matrix);
  };

  // Create data stream
  const createDataStream = () => {
    const container = heroRef.current;
    if (!container) return;

    const existingStream = container.querySelector('.data-stream');
    if (existingStream) existingStream.remove();

    const stream = document.createElement('div');
    stream.className = 'data-stream';
    stream.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent 0%, rgba(34, 197, 94, 0.1) 50%, transparent 100%);
      animation: data-stream 3s linear infinite;
      pointer-events: none;
      z-index: 1;
    `;
    container.appendChild(stream);
  };

  // Create matrix code rain effect
  const createMatrixRain = () => {
    const container = heroRef.current;
    if (!container) return;

    const existingRain = container.querySelector('.matrix-rain');
    if (existingRain) existingRain.remove();

    const rain = document.createElement('div');
    rain.className = 'matrix-rain';
    rain.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
      overflow: hidden;
    `;

    // Create falling binary characters
    for (let i = 0; i < 20; i++) {
      const column = document.createElement('div');
      column.style.cssText = `
        position: absolute;
        top: -100px;
        left: ${Math.random() * 100}%;
        width: 2px;
        height: 100px;
        background: linear-gradient(to bottom, transparent, #10b981, transparent);
        animation: matrix-fall ${3 + Math.random() * 2}s linear infinite;
        animation-delay: ${Math.random() * 2}s;
      `;
      rain.appendChild(column);
    }

    container.appendChild(rain);
  };

  // Typewriter effect - simplified to prevent glitches
  const createTypewriterEffect = () => {
    const titleElement = document.querySelector('.typewriter-title');
    if (!titleElement) return;

    // Clear any existing typewriter
    titleElement.textContent = '';
    
    let currentIndex = 0;
    let isDeleting = false;
    let currentText = '';
    let typeTimeout: NodeJS.Timeout;
    let animationFrame: number;

    // Detect device performance
    const isLowEndDevice = navigator.hardwareConcurrency <= 2 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const type = () => {
      const current = textVariations[currentIndex];
      const targetText = current.title;

      if (isDeleting) {
        currentText = targetText.substring(0, currentText.length - 1);
      } else {
        currentText = targetText.substring(0, currentText.length + 1);
      }

      titleElement.textContent = currentText;

      // Optimize typing speed based on device
      let typeSpeed = isDeleting ? (isLowEndDevice ? 30 : 50) : (isLowEndDevice ? 80 : 100);

      if (!isDeleting && currentText === targetText) {
        typeSpeed = isLowEndDevice ? 1500 : 2000; // Pause at end
        typeTimeout = setTimeout(() => {
          isDeleting = true;
          type();
        }, typeSpeed);
        return;
      }

      if (isDeleting && currentText === '') {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % textVariations.length;
        typeTimeout = setTimeout(type, isLowEndDevice ? 300 : 500);
        return;
      }

      // Use requestAnimationFrame for smoother performance
      if (reducedMotion) {
        typeTimeout = setTimeout(type, typeSpeed * 2);
      } else {
        animationFrame = requestAnimationFrame(() => {
          typeTimeout = setTimeout(type, typeSpeed);
        });
      }
    };

    // Clear any existing timeout before starting
    if (typeTimeout) clearTimeout(typeTimeout);
    if (animationFrame) cancelAnimationFrame(animationFrame);
    
    // Start with a small delay for better performance
    typeTimeout = setTimeout(type, 100);
  };

  useEffect(() => {
    setIsLoaded(true);
    createFloatingElements();
    createTechGrid();
    createMatrixBg();
    createDataStream();
    createMatrixRain();

    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      // Kill any existing animations to prevent conflicts
      gsap.killTweensOf(['.hero-bg-layer', '.hero-greeting', '.cs-puzzle-box', '.typewriter-title', '.hero-description', '.magnetic-btn', '.floating-element', '.tech-grid']);

      // Detect device performance capabilities
      const isLowEndDevice = navigator.hardwareConcurrency <= 2 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Create optimized timeline based on device capabilities
      const masterTL = gsap.timeline({ 
        defaults: { 
          ease: isLowEndDevice ? "power2.out" : "power3.out",
          force3D: true,
          transformOrigin: "center center"
        } 
      });

      // Background layer animation - optimized
      masterTL.fromTo('.hero-bg-layer', {
        opacity: 0,
        scale: isLowEndDevice ? 1.02 : 1.05
      }, {
        opacity: 1,
        scale: 1,
        duration: isLowEndDevice ? 1.0 : 1.5,
        ease: isLowEndDevice ? "power2.out" : "power4.out"
      });

      // "Hello, I'm" text animation - optimized
      masterTL.fromTo('.hero-greeting', {
        opacity: 0,
        y: isLowEndDevice ? 20 : 40,
        scale: 0.98
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: isLowEndDevice ? 0.8 : 1.0,
        ease: "power2.out"
      }, "-=1.0");

      // Puzzle boxes entrance animation - optimized
      masterTL.fromTo('.cs-puzzle-box', {
        opacity: 0,
        y: isLowEndDevice ? 30 : 60,
        scale: 0.9,
        rotation: isLowEndDevice ? 5 : 15
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: isLowEndDevice ? 0.6 : 0.8,
        stagger: {
          amount: isLowEndDevice ? 0.3 : 0.6,
          from: "center"
        },
        ease: isLowEndDevice ? "power2.out" : "back.out(1.2)"
      }, "-=0.8");

      // Typewriter title animation - optimized
      masterTL.fromTo('.typewriter-title', {
        opacity: 0,
        y: isLowEndDevice ? 15 : 30,
        scale: 0.98
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: isLowEndDevice ? 0.8 : 1.0,
        ease: "power2.out"
      }, "-=0.5");

      // Description animation - optimized
      masterTL.fromTo('.hero-description', {
        opacity: 0,
        y: isLowEndDevice ? 20 : 40
      }, {
        opacity: 1,
        y: 0,
        duration: isLowEndDevice ? 0.8 : 1.0,
        ease: "power2.out"
      }, "-=0.3");

      // Buttons animation - optimized
      masterTL.fromTo('.magnetic-btn', {
        opacity: 0,
        y: isLowEndDevice ? 15 : 30,
        scale: 0.95
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: isLowEndDevice ? 0.6 : 0.8,
        stagger: {
          amount: isLowEndDevice ? 0.2 : 0.3,
          from: "start"
        },
        ease: "power2.out"
      }, "-=0.2");

      // Optimized floating elements animation
      if (!reducedMotion && !isLowEndDevice) {
        gsap.to('.floating-element', {
          y: -20,
          x: 10,
          rotation: 180,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: {
            amount: 0.8,
            from: "random"
          },
          force3D: true
        });
      }

      // Optimized tech grid animation
      if (!reducedMotion && !isLowEndDevice) {
        gsap.to('.tech-grid', {
          x: 30,
          y: 30,
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          force3D: true
        });
      }

      // Start typewriter effect after main animations
      masterTL.call(() => {
        createTypewriterEffect();
      }, null, "+=0.5");

      // Cleanup function
      return () => {
        gsap.killTweensOf(['.hero-bg-layer', '.hero-greeting', '.cs-puzzle-box', '.typewriter-title', '.hero-description', '.magnetic-btn', '.floating-element', '.tech-grid']);
        masterTL.kill();
      };
    }
  }, [isLoaded]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg-layer"
      data-testid="hero-section"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 tech-grid"></div>
      <div className="absolute inset-0 matrix-bg"></div>
      <div className="absolute inset-0 data-stream"></div>
      
      {/* Matrix Code Rain */}
      <div className="matrix-code-rain absolute inset-0 pointer-events-none"></div>

      <div className="container-responsive relative z-10 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-responsive-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Greeting Section */}
            <div className="space-y-2">
              <span className="hero-greeting text-xl md:text-2xl text-primary font-medium tracking-wider uppercase block">
                Hello, I'm
              </span>
            </div>
            
            {/* Main Title Section */}
            <div className="space-y-6">
              <h1 className="text-responsive-xl font-bold leading-tight" data-testid="hero-title">
                <div className="hero-main-text block mb-4">
                  <div className="flex flex-col items-center lg:items-start justify-center gap-3">
                    {/* TUSHANT Row (7 letters) */}
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      {Array.from({ length: 7 }).map((_, index) => (
                        <div
                          key={`top-${index}`}
                          className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 flex items-center justify-center relative cs-puzzle-box"
                        >
                          {revealedLetters[index] ? (
                            // Show revealed letter with CS theme
                            <div className="cs-puzzle-letter-revealed">
                              {revealedLetters[index]}
                            </div>
                          ) : (
                            // Show binary placeholder
                            <span className="cs-puzzle-placeholder">
                              {placeholderValues[0][index]}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    {/* KAURA Row (5 letters) */}
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div
                          key={`bottom-${index}`}
                          className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 flex items-center justify-center relative cs-puzzle-box"
                        >
                          {revealedLetters[index + 7] ? (
                            // Show revealed letter with CS theme
                            <div className="cs-puzzle-letter-revealed">
                              {revealedLetters[index + 7]}
                            </div>
                          ) : (
                            // Show binary placeholder
                            <span className="cs-puzzle-placeholder">
                              {placeholderValues[1][index]}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <span className="typewriter-title hero-sub-text block text-responsive-lg bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-hologram-flicker min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] lg:min-h-[4rem]">
                </span>
              </h1>
            </div>
            
            {/* Description Section */}
            <div className="max-w-2xl mx-auto lg:mx-0">
              <p className="hero-description text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-light" data-testid="hero-description">
                Computer Science student at Dalhousie University specializing in 
                <span className="text-primary font-medium"> VR, HCI, Artificial Intelligence, and Machine Learning</span>. 
                My work explores computational methods to build innovative systems and advance research that creates real-world impact.
              </p>
            </div>

            {/* Action Buttons Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://linkedin.com/in/tushantkaura"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn group bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 flex items-center gap-3 justify-center cyber-card neon-border shadow-lg hover:shadow-xl"
                data-testid="hero-linkedin"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/TushantKaura1"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn group bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-full text-base font-medium transition-all duration-300 flex items-center gap-3 justify-center cyber-card neon-border shadow-lg hover:shadow-xl"
                data-testid="hero-github"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="mailto:tushantkaura@gmail.com"
                className="magnetic-btn group bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-full text-base font-medium transition-all duration-300 flex items-center gap-3 justify-center cyber-card neon-border shadow-lg hover:shadow-xl"
                data-testid="hero-email"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>
          </div>

          {/* Right Column - Interactive Puzzle */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-96 lg:h-[500px]">
              {/* CS Themed Puzzle Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/90 rounded-3xl backdrop-blur-sm border border-green-500/30 cs-terminal-window">
                {/* Scattered Letters of TUSHANT KAURA */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {/* TUSHANT Letters */}
                  <div className="absolute top-4 left-8 text-green-400 font-mono text-sm scattered-letter" style={{animationDelay: '0s'}}>T</div>
                  <div className="absolute top-12 right-12 text-blue-400 font-mono text-sm scattered-letter" style={{animationDelay: '0.5s'}}>U</div>
                  <div className="absolute top-20 left-16 text-purple-400 font-mono text-sm scattered-letter" style={{animationDelay: '1s'}}>S</div>
                  <div className="absolute top-8 right-8 text-green-400 font-mono text-sm scattered-letter" style={{animationDelay: '1.5s'}}>H</div>
                  <div className="absolute top-16 left-12 text-blue-400 font-mono text-sm scattered-letter" style={{animationDelay: '2s'}}>A</div>
                  <div className="absolute top-24 right-16 text-purple-400 font-mono text-sm scattered-letter" style={{animationDelay: '2.5s'}}>N</div>
                  <div className="absolute top-6 left-20 text-green-400 font-mono text-sm scattered-letter" style={{animationDelay: '3s'}}>T</div>
                  
                  {/* KAURA Letters */}
                  <div className="absolute bottom-16 left-8 text-blue-400 font-mono text-sm scattered-letter" style={{animationDelay: '0.2s'}}>K</div>
                  <div className="absolute bottom-12 right-12 text-green-400 font-mono text-sm scattered-letter" style={{animationDelay: '0.7s'}}>A</div>
                  <div className="absolute bottom-20 left-16 text-purple-400 font-mono text-sm scattered-letter" style={{animationDelay: '1.2s'}}>U</div>
                  <div className="absolute bottom-8 right-8 text-blue-400 font-mono text-sm scattered-letter" style={{animationDelay: '1.7s'}}>R</div>
                  <div className="absolute bottom-24 left-12 text-green-400 font-mono text-sm scattered-letter" style={{animationDelay: '2.2s'}}>A</div>
                </div>
                
                <div className="absolute inset-6 bg-gradient-to-br from-gray-800/50 to-transparent rounded-2xl p-6">
                  <div className="text-center space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-green-400 font-mono">
                        {!isPuzzleSolved ? "&gt; DECRYPT_NAME.EXE" : "&gt; DECRYPTION_COMPLETE"}
                      </h3>
                      <p className="text-sm text-gray-400 font-mono">
                        {!isPuzzleSolved ? "Execute decryption algorithm to reveal identity" : "Identity successfully decrypted"}
                      </p>
                    </div>
                    
                    {!isPuzzleSolved && (
                      <div className="space-y-4">
                        <button
                          onClick={solvePuzzle}
                          disabled={isAnimating}
                          className="decrypt-button flex items-center gap-3 mx-auto text-sm font-medium px-6 py-3"
                        >
                          <span>💻</span>
                          {isAnimating ? "EXECUTING..." : "EXECUTE DECRYPTION"}
                        </button>
                        <div className="space-y-2 text-xs font-mono">
                          <div className="text-gray-400">
                            &gt; WARNING: This will initiate advanced decryption protocols
                          </div>
                          <div className="text-yellow-400">
                            &gt; SYSTEM STATUS: {isAnimating ? "PROCESSING" : "READY"}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* CS Themed Puzzle Display */}
                  <div className="puzzle-container mt-6">
                    {!isPuzzleSolved ? (
                      /* Binary Code Matrix */
                      <div className="absolute inset-0 cs-binary-matrix">
                        <div className="binary-grid">
                          {/* Top row for TUSHANT */}
                          <div className="binary-row binary-row-top">
                            {puzzleLetters[0].map((letter, index) => (
                              <div
                                key={`top-${index}`}
                                className="binary-cell"
                              >
                                {letter}
                              </div>
                            ))}
                          </div>
                          {/* Bottom row for KAURA */}
                          <div className="binary-row binary-row-bottom">
                            {puzzleLetters[1].map((letter, index) => (
                              <div
                                key={`bottom-${index}`}
                                className="binary-cell"
                              >
                                {letter}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-green-400 font-mono text-sm opacity-50 mb-2">
                              [ ENCRYPTED DATA STREAM ]
                            </div>
                            <div className="text-green-500 font-mono text-xs opacity-30 mb-1">
                              DECRYPTION REQUIRED
                            </div>
                            <div className="text-blue-400 font-mono text-xs opacity-40">
                              [ NEURAL NETWORK: STANDBY ]
                            </div>
                            <div className="text-purple-400 font-mono text-xs opacity-30">
                              [ ALGORITHM: LOADED ]
                            </div>
                          </div>
                        </div>

                      </div>
                    ) : (
                      /* Success message after puzzle is solved */
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl mb-3 text-green-400">✓</div>
                          <div className="text-sm font-bold text-green-400 mb-1 font-mono">DECRYPTION SUCCESSFUL</div>
                          <div className="text-xs text-gray-400 font-mono mb-1">Identity verified and displayed above</div>
                          <div className="text-xs text-blue-400 font-mono opacity-70">[ NEURAL NETWORK: COMPLETE ]</div>
                          <div className="text-xs text-purple-400 font-mono opacity-60">[ SYSTEM: READY FOR INTERACTION ]</div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Decryption Progress Display */}
                  {isAnimating && (
                    <div className="text-center mb-4">
                      <div className="text-sm text-green-400 font-mono mb-2 decrypt-progress">
                        &gt; DECRYPTING ENCRYPTED IDENTITY...
                      </div>
                      <div className="text-xs text-blue-400 font-mono mb-2">
                        &gt; NEURAL NETWORK: ACTIVE
                      </div>
                      <div className="name-display-container">
                        {revealedLetters.length > 0 ? (
                          <div className="space-y-1">
                            <div className="name-row name-row-top text-green-400">
                              &gt; {revealedLetters.slice(0, 7).map((letter, index) => (
                                <span key={index} className="decrypt-letter">{letter}</span>
                              ))}
                              {revealedLetters.length <= 7 && <span className="text-gray-500">_</span>}
                            </div>
                            {revealedLetters.length > 7 && (
                              <div className="name-row name-row-bottom text-green-400">
                                &gt; {revealedLetters.slice(7).map((letter, index) => (
                                  <span key={index + 7} className="decrypt-letter">{letter}</span>
                                ))}
                                {revealedLetters.length < 12 && <span className="text-gray-500">_</span>}
                              </div>
                            )}
                            {revealedLetters.length <= 7 && (
                              <div className="name-row name-row-bottom text-gray-500">
                                &gt; _____
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="space-y-1">
                            <div className="name-row name-row-top text-gray-500">
                              &gt; ________
                            </div>
                            <div className="name-row name-row-bottom text-gray-500">
                              &gt; _____
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 font-mono mt-2">
                        Progress: {revealedLetters.length}/12 bytes ({((revealedLetters.length / 12) * 100).toFixed(1)}%)
                      </div>
                      <div className="text-xs text-purple-400 font-mono mt-1">
                        &gt; ALGORITHM: ADVANCED DECRYPTION PROTOCOL
                      </div>
                    </div>
                  )}
                  
                  {/* Complete Name Display - 2 rows */}
                  {isPuzzleSolved && (
                    <div className="text-center mb-2">
                      <div className="name-display-container">
                        <div className="name-row name-row-top animate-pulse">
                          &gt; TUSHANT
                        </div>
                        <div className="name-row name-row-bottom animate-pulse">
                          &gt; KAURA
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 font-mono mt-1">
                        [ DECRYPTED IDENTITY ]
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}