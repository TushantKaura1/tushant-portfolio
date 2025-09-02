import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Eye, Calendar, ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Tushant Kaura Portfolio",
      description: "Modern, responsive portfolio website showcasing my work and skills. Built with React, TypeScript, GSAP animations, and Tailwind CSS. Features smooth scrolling, interactive elements, and a cyberpunk aesthetic.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "TypeScript", "GSAP", "Tailwind CSS", "Vite"],
      category: "Web App",
      date: "2024",
      github: "https://github.com/TushantKaura1/TushantPortfolio",
      live: "https://tushantkaura.com",
      featured: true
    },
    {
      id: 2,
      title: "VR Research Platform",
      description: "Researching cognitive processes and user perception in 3D environments at VERTEX Lab, Dalhousie University. Developing intuitive interfaces to improve user interaction and experience in virtual reality.",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Unity", "C#", "VR SDK", "HCI Research", "Oculus"],
      category: "Research",
      date: "2024",
      github: "https://github.com/TushantKaura1",
      live: "https://vertex.dal.ca",
      featured: true
    },
    {
      id: 3,
      title: "Persuasive Computing Lab",
      description: "Developing systems that drive positive behavioral change through persuasive technology. Focus on underserved populations, mental health, and community well-being at Dalhousie University.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "Psychology APIs", "User Research", "Analytics"],
      category: "Research",
      date: "2024",
      github: "https://github.com/TushantKaura1",
      live: "https://persuasive.dal.ca",
      featured: true
    },
    {
      id: 4,
      title: "Web Development Projects",
      description: "Collection of web applications including weather dashboards, data visualization tools, and interactive user interfaces. Built with modern web technologies and responsive design principles.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "JavaScript", "HTML/CSS", "APIs", "Responsive Design"],
      category: "Web App",
      date: "2024",
      github: "https://github.com/TushantKaura1",
      live: "https://github.com/TushantKaura1",
      featured: false
    },
    {
      id: 5,
      title: "Data Analysis & Research",
      description: "Streamlined data organization and analysis for research efficiency. Converting raw data into actionable insights using advanced analytical tools and statistical methods.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "Pandas", "NumPy", "Jupyter", "Matplotlib"],
      category: "Data Science",
      date: "2024",
      github: "https://github.com/TushantKaura1",
      live: "https://github.com/TushantKaura1",
      featured: false
    },
    {
      id: 6,
      title: "STEM Mentorship Program",
      description: "Leading research mentorship program at CISE-Atlantic, fostering equity and curiosity in STEM education. Developing interactive tools and educational resources for diverse student populations.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Educational Tech", "STEM Outreach", "Mentorship", "Community Impact"],
      category: "Education",
      date: "2024",
      github: "https://github.com/TushantKaura1",
      live: "https://cise-atlantic.ca",
      featured: false
    }
  ];

  const categories = ["all", "Web App", "Research", "Data Science", "Education"];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window !== "undefined") {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

        // Infinite scrolling marquee animation
        const marqueeText = marqueeRef.current;
        if (marqueeText) {
          gsap.to(marqueeText, {
            x: -1000,
            duration: 20,
            repeat: -1,
            ease: "none"
          });
        }

        // Create floating project elements
        const createFloatingProjectElements = () => {
          const section = sectionRef.current;
          if (!section) return;

          for (let i = 0; i < 25; i++) {
            const element = document.createElement('div');
            element.className = 'floating-project-element';
            element.style.cssText = `
              position: absolute;
              width: ${Math.random() * 8 + 4}px;
              height: ${Math.random() * 8 + 4}px;
              background: linear-gradient(45deg, rgba(168, 85, 247, 0.2), rgba(59, 130, 246, 0.2));
              border-radius: 50%;
              top: ${Math.random() * 100}%;
              left: ${Math.random() * 100}%;
              pointer-events: none;
              filter: blur(1px);
            `;
            section.appendChild(element);
          }
        };

        createFloatingProjectElements();

        // Floating elements animation
        gsap.to('.floating-project-element', {
          y: () => Math.random() * 150 - 75,
          x: () => Math.random() * 100 - 50,
          rotation: () => Math.random() * 360,
          scale: () => Math.random() * 0.5 + 0.75,
          duration: () => Math.random() * 5 + 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          stagger: 0.1
        });

        // Advanced project cards animation
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
          // Entrance animation
          gsap.fromTo(card, {
            opacity: 0,
            y: 100,
            rotationX: 45,
            scale: 0.8
          }, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          });

          // Advanced hover interactions
          const image = card.querySelector('.project-image');
          const content = card.querySelector('.project-content');
          const techTags = card.querySelectorAll('.tech-tag');

          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.02,
              y: -10,
              duration: 0.3,
              ease: "power2.out"
            });

            if (image) {
              gsap.to(image, {
                scale: 1.1,
                duration: 0.3,
                ease: "power2.out"
              });
            }

            if (content) {
              gsap.to(content, {
                y: -5,
                duration: 0.3,
                ease: "power2.out"
              });
            }

            gsap.to(techTags, {
              scale: 1.05,
              y: -2,
              duration: 0.3,
              stagger: 0.05,
              ease: "power2.out"
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            });

            if (image) {
              gsap.to(image, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
              });
            }

            if (content) {
              gsap.to(content, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
              });
            }

            gsap.to(techTags, {
              scale: 1,
              y: 0,
              duration: 0.3,
              stagger: 0.05,
              ease: "power2.out"
            });
          });
        });

        // Parallax scroll effect for floating elements
        ScrollTrigger.create({
          trigger: "#projects",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to('.floating-project-element', {
              y: progress * 200,
              rotation: progress * 180,
              duration: 0.3,
              ease: "power2.out"
            });
          }
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
      id="projects" 
      className="py-32 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my work spanning web development, research projects, and educational initiatives
          </p>
        </div>

        {/* Scrolling text header */}
        <div className="overflow-hidden mb-16">
          <div 
            ref={marqueeRef}
            className="whitespace-nowrap" 
            data-testid="projects-header"
          >
            <span className="text-4xl font-bold text-muted-foreground/30">
              Web Development · Research · Data Science · Education · Innovation · Web Development · Research · Data Science · Education · Innovation ·
            </span>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-card/50 text-muted-foreground hover:bg-card/80 hover:text-foreground'
              }`}
            >
              {category === "all" ? "All Projects" : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card group bg-card/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 transform-gpu hover:border-primary/50 transition-all duration-300 ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              data-testid={`project-${project.id}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-48 object-cover transition-transform duration-500"
                  data-testid={`project-${project.id}-image`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.github}
                    className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                    data-testid={`project-${project.id}-github`}
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                  <a 
                    href={project.live}
                    className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                    data-testid={`project-${project.id}-live`}
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="project-content p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                  <span className="text-muted-foreground">•</span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {project.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground" data-testid={`project-${project.id}-title`}>
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`project-${project.id}-description`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="tech-tag px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={project.live}
                    className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 group/link transition-colors"
                    data-testid={`project-${project.id}-link`}
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                  <div className="flex gap-2">
                    <a 
                      href={project.github}
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a 
                      href={project.live}
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center" data-testid="projects-footer">
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-12 border border-primary/20">
            <h3 className="text-3xl font-bold mb-4">Interested in collaborating?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new projects and explore innovative solutions. 
              Let's create something amazing together!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:tushantkaura@gmail.com"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-primary/25"
              >
                <ExternalLink className="w-5 h-5" />
                Get In Touch
              </a>
              <a 
                href="https://github.com/TushantKaura1"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-3"
              >
                <Github className="w-5 h-5" />
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
