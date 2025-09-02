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
  const puzzleLetters = ["T", "U", "S", "H", "A", "N", "T", "K", "A", "U", "R", "A"];
  
  // State for puzzle
  const [isPuzzleSolved, setIsPuzzleSolved] = useState(false);
  const [revealedLetters, setRevealedLetters] = useState<string[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Memoized binary cells to prevent unnecessary re-renders
  const binaryCells = useMemo(() => {
    return Array.from({ length: 16 }).map((_, index) => ({
      id: index,
      value: Math.random() > 0.5 ? '1' : '0'
    }));
  }, [isPuzzleSolved]); // Only regenerate when puzzle is solved

  // Memoized placeholder values for puzzle boxes
  const placeholderValues = useMemo(() => {
    return Array.from({ length: 12 }).map(() => Math.random() > 0.5 ? '1' : '0');
  }, [isPuzzleSolved]);

  // Text variations for typewriter effect
  const textVariations = [
    {
      greeting: "Hello, I'm",
      title: "Creative Developer",
      description: "Computer Science student at Dalhousie University passionate about VR, HCI, and persuasive computing. I develop innovative applications and conduct cutting-edge research that drives positive change."
    },
    {
      greeting: "Hello, I'm",
      title: "VR Researcher",
      description: "Computer Science student at Dalhousie University passionate about VR, HCI, and persuasive computing. I develop innovative applications and conduct cutting-edge research that drives positive change."
    },
    {
      greeting: "Hello, I'm",
      title: "AI & ML Developer",
      description: "Computer Science student at Dalhousie University passionate about VR, HCI, and persuasive computing. I develop innovative applications and conduct cutting-edge research that drives positive change."
    },
    {
      greeting: "Hello, I'm",
      title: "Software Engineer",
      description: "Computer Science student at Dalhousie University passionate about VR, HCI, and persuasive computing. I develop innovative applications and conduct cutting-edge research that drives positive change."
    }
  ];

  // Computer Science themed puzzle solver
  const solvePuzzle = () => {
    if (isAnimating || isPuzzleSolved) return;
    
    setIsAnimating(true);
    setRevealedLetters([]);
    
    console.log("🔊 SYSTEM INITIALIZING...");
    console.log("💻 COMPILING PUZZLE SOLVER...");
    
    // Use GSAP for smooth, glitch-free animations
    const tl = gsap.timeline();
    
    // Animate each letter with computer science themed effects
    puzzleLetters.forEach((letter, index) => {
      tl.to({}, {
        duration: 0.1,
        onComplete: () => {
          setRevealedLetters(prev => {
            const newLetters = [...prev, letter];
            return newLetters;
          });
          
          // Add terminal-like logging
          console.log(`⚡ DECRYPTING BYTE ${index + 1}: ${letter}`);
          
          if (index === puzzleLetters.length - 1) {
            console.log("🎉 DECRYPTION COMPLETE! NAME REVEALED!");
          }
        }
      }, index * 0.3);
    });
    
    // Mark as solved after animation completes
    tl.call(() => {
      setIsPuzzleSolved(true);
      setIsAnimating(false);
      console.log("✅ MISSION ACCOMPLISHED!");
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

  // Typewriter effect
  const createTypewriterEffect = () => {
    const titleElement = document.querySelector('.typewriter-title');
    if (!titleElement) return;

    let currentIndex = 0;
    let isDeleting = false;
    let currentText = '';

    const type = () => {
      const current = textVariations[currentTextIndex];
      const targetText = current.title;

      if (isDeleting) {
        currentText = targetText.substring(0, currentText.length - 1);
      } else {
        currentText = targetText.substring(0, currentText.length + 1);
      }

      titleElement.textContent = currentText;

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && currentText === targetText) {
        typeSpeed = 2000; // Pause at end
        setTimeout(() => {
          isDeleting = true;
          type();
        }, typeSpeed);
        return;
      }

      if (isDeleting && currentText === '') {
        isDeleting = false;
        setCurrentTextIndex((prev) => (prev + 1) % textVariations.length);
        setTimeout(type, 500);
        return;
      }

      setTimeout(type, typeSpeed);
    };

    type();
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
      // Hero animations
      gsap.fromTo('.split-char', {
        opacity: 0,
        y: 50,
        scale: 0.8
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.04,
        stagger: 0.8,
        ease: "power2.out"
      });

      gsap.fromTo('.hero-bg-layer', {
        opacity: 0,
        scale: 1.1
      }, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out"
      });

      gsap.fromTo('.hero-description', {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out"
      });

      gsap.fromTo('.magnetic-btn', {
        opacity: 0,
        y: 20,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.8,
        ease: "power2.out"
      });

      // Floating elements animation
      gsap.to('.floating-element', {
        y: -20,
        x: 10,
        rotation: 360,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: Math.random() * 0.5
      });

      // Tech grid animation
      gsap.to('.tech-grid', {
        x: 50,
        y: 50,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "none"
      });

      // Start typewriter effect
      setTimeout(() => {
        createTypewriterEffect();
      }, 2000);
    }
  }, [isLoaded, currentTextIndex]);

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

      <div className="container-responsive relative z-10">
        <div className="grid grid-responsive-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left">
            <div className="mb-4 sm:mb-6">
              <span className="text-lg md:text-xl text-primary font-medium tracking-wider uppercase">
                Hello, I'm
              </span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-responsive-xl font-bold mb-6 sm:mb-8 leading-tight" data-testid="hero-title">
              <div className="hero-main-text block mb-3 sm:mb-4">
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center relative cs-puzzle-box"
                    >
                      {revealedLetters[index] ? (
                        // Show revealed letter with CS theme
                        <div className="cs-puzzle-letter-revealed">
                          {revealedLetters[index]}
                        </div>
                      ) : (
                        // Show binary placeholder
                        <span className="cs-puzzle-placeholder">
                          {placeholderValues[index]}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <span className="typewriter-title hero-sub-text block text-responsive-md bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-hologram-flicker min-h-[1.5rem] sm:min-h-[2rem] md:min-h-[3rem] lg:min-h-[4rem]">
                <span className="typewriter-cursor"></span>
              </span>
            </h1>
            
            {/* Description */}
            <p className="hero-description text-base sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-12 text-muted-foreground leading-relaxed font-light" data-testid="hero-description">
              Computer Science student at Dalhousie University passionate about 
              <span className="text-primary font-medium"> VR, HCI, and persuasive computing</span>. 
              I develop innovative applications and conduct cutting-edge research that drives positive change.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="https://linkedin.com/in/tushantkaura"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn group bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 justify-center cyber-card neon-border"
                data-testid="hero-linkedin"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/TushantKaura1"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn group bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 justify-center cyber-card neon-border"
                data-testid="hero-github"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="mailto:tushantkaura@gmail.com"
                className="magnetic-btn group bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 justify-center cyber-card neon-border"
                data-testid="hero-email"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>

          {/* Right Column - Interactive Puzzle */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* CS Themed Puzzle Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-black/90 rounded-3xl backdrop-blur-sm border border-green-500/30 cs-terminal-window">
                <div className="absolute inset-4 bg-gradient-to-br from-gray-800/50 to-transparent rounded-2xl p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-green-400 mb-2 font-mono">
                      {!isPuzzleSolved ? "&gt; DECRYPT_NAME.EXE" : "&gt; DECRYPTION_COMPLETE"}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4 font-mono">
                      {!isPuzzleSolved ? "Execute decryption algorithm to reveal identity" : "Identity successfully decrypted"}
                    </p>
                    {!isPuzzleSolved && (
                      <button
                        onClick={solvePuzzle}
                        disabled={isAnimating}
                        className="bg-green-600 hover:bg-green-500 text-black px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 mx-auto disabled:opacity-50 font-mono border border-green-400"
                      >
                        <span>💻</span>
                        {isAnimating ? "EXECUTING..." : "EXECUTE"}
                      </button>
                    )}
                  </div>
                  
                  {/* CS Themed Puzzle Display */}
                  <div className="puzzle-container mb-6 relative w-96 h-96 mx-auto">
                    {!isPuzzleSolved ? (
                      /* Binary Code Matrix */
                      <div className="absolute inset-0 cs-binary-matrix">
                        <div className="grid grid-cols-4 gap-2 h-full p-4">
                          {binaryCells.map((cell) => (
                            <div
                              key={cell.id}
                              className="cs-binary-cell bg-gray-800 border border-green-500/30 rounded flex items-center justify-center text-green-400 font-mono text-sm"
                            >
                              {cell.value}
                            </div>
                          ))}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-green-400 font-mono text-sm opacity-50 mb-2">
                              [ ENCRYPTED DATA ]
                            </div>
                            <div className="text-green-500 font-mono text-xs opacity-30">
                              DECRYPTION REQUIRED
                            </div>
                          </div>
                        </div>
                        {/* Terminal cursor effect */}
                        <div className="absolute bottom-4 right-4 text-green-400 font-mono text-sm animate-pulse">
                          _
                        </div>
                      </div>
                    ) : (
                      /* Success message after puzzle is solved */
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl mb-4 text-green-400">✓</div>
                          <div className="text-lg font-bold text-green-400 mb-2 font-mono">DECRYPTION SUCCESSFUL</div>
                          <div className="text-sm text-gray-400 font-mono">Identity verified and displayed above</div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Complete Name Display */}
                  {isPuzzleSolved && (
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-green-400 font-mono animate-pulse">
                        &gt; TUSHANTKAURA
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