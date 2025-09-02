import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Download } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // GSAP navigation animation
    const loadGSAP = async () => {
      if (typeof window !== "undefined") {
        const { gsap } = await import("gsap");
        
        gsap.fromTo("nav", {
          opacity: 0,
          y: -50
        }, {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 2.5,
          ease: "power3.out"
        });
      }
    };

    loadGSAP();

    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#timeline", label: "Journey" },
    { href: "#projects", label: "Projects" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-responsive py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-primary to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs sm:text-sm">TK</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative group text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://github.com/TushantKaura1" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/tushantkaura/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:tushantkaura@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="/resume/Tushant Resume (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/50 pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-card/30"
                  data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-3">
                  <a 
                    href="https://github.com/TushantKaura1" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300 bg-card/50 rounded-lg"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/tushantkaura/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300 bg-card/50 rounded-lg"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href="mailto:tushantkaura@gmail.com"
                    className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300 bg-card/50 rounded-lg"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
                <a 
                  href="/resume/Tushant Resume (1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-white px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 flex items-center gap-1"
                >
                  <Download className="w-3 h-3" />
                  Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
