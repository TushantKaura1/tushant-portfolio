import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-custom border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold" data-testid="nav-logo">Tushant Kaura</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, "#about")}
              className="hover:text-primary transition-colors"
              data-testid="nav-about"
            >
              ABOUT
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, "#projects")}
              className="hover:text-primary transition-colors"
              data-testid="nav-projects"
            >
              PROJECTS
            </a>
            <a 
              href="#milestones" 
              onClick={(e) => handleNavClick(e, "#milestones")}
              className="hover:text-primary transition-colors"
              data-testid="nav-milestones"
            >
              MILESTONES
            </a>
            <a 
              href="#achievements" 
              onClick={(e) => handleNavClick(e, "#achievements")}
              className="hover:text-primary transition-colors"
              data-testid="nav-achievements"
            >
              ACHIEVEMENTS
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, "#about")}
                className="hover:text-primary transition-colors"
                data-testid="mobile-nav-about"
              >
                ABOUT
              </a>
              <a 
                href="#projects" 
                onClick={(e) => handleNavClick(e, "#projects")}
                className="hover:text-primary transition-colors"
                data-testid="mobile-nav-projects"
              >
                PROJECTS
              </a>
              <a 
                href="#milestones" 
                onClick={(e) => handleNavClick(e, "#milestones")}
                className="hover:text-primary transition-colors"
                data-testid="mobile-nav-milestones"
              >
                MILESTONES
              </a>
              <a 
                href="#achievements" 
                onClick={(e) => handleNavClick(e, "#achievements")}
                className="hover:text-primary transition-colors"
                data-testid="mobile-nav-achievements"
              >
                ACHIEVEMENTS
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
