import { useEffect, useRef, useState } from "react";
import { GraduationCap, Award, Code, Brain, Users, Lightbulb, ArrowRight, MapPin, Calendar, Star, Trophy, BookOpen, Zap, ExternalLink, ChevronRight, Rocket, Target, TrendingUp, Globe, Shield, Cpu, Database, GitBranch, Layers, Sparkles } from "lucide-react";
import MatrixRain from "./matrix-rain";

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const journeyData = [
    {
      id: 1,
      year: "2025",
      month: "Apr",
      endMonth: "Present",
      title: "Web Developer Intern",
      organization: "Futura Holding Group",
      location: "Halifax, NS",
      type: "work",
      icon: Code,
      description: "Develops responsive web applications using React, HTML, CSS, and JavaScript. Implements interactive UI components and optimizes frontend performance. Collaborates on full-stack development, integrating REST APIs and backend services. Ensures cross-browser compatibility and accessibility in web applications.",
      achievements: ["Responsive Web Applications", "Interactive UI Components", "Frontend Performance Optimization", "REST API Integration", "Cross-browser Compatibility"],
      skills: ["React", "HTML/CSS", "JavaScript", "REST APIs", "Full-Stack Development", "UI/UX Design"],
      logo: "💻",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
      impact: "Cross-Platform Web Solutions",
      technologies: ["React", "HTML/CSS", "JavaScript", "REST APIs", "Node.js"]
    },
    {
      id: 2,
      year: "2025",
      month: "Apr",
      endMonth: "Present",
      title: "Lead Research Mentor — STEM Inclusion",
      organization: "CISE-Atlantic",
      location: "Halifax, NS",
      type: "leadership",
      icon: Award,
      description: "Mentors students from diverse backgrounds in conducting physics-based research, fostering equity and curiosity in STEM education. Leads collaborative research teams in designing and analyzing experiments, promoting inclusive participation in scientific inquiry. Develops interactive web tools and educational resources using React, HTML, CSS, and JavaScript to support STEM outreach.",
      achievements: ["Diverse Student Mentoring", "Collaborative Research Teams", "Interactive Web Tools", "Educational Resources", "STEM Outreach"],
      skills: ["Research Mentoring", "STEM Education", "Web Development", "Team Leadership", "Educational Design"],
      logo: "🎓",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
      impact: "STEM Education & Inclusion",
      technologies: ["React", "HTML/CSS", "JavaScript", "Educational Tools"]
    },
    {
      id: 3,
      year: "2025",
      month: "Jan",
      endMonth: "Present",
      title: "Research Assistant and Software Developer",
      organization: "Persuasive Computing Lab, Dalhousie University",
      location: "Halifax, NS",
      type: "research",
      icon: Brain,
      description: "Specializes in designing persuasive and behavior change systems using user-centered approaches at Dalhousie University's Persuasive Computing Lab. Develops interactive technologies to empower underserved populations, promoting mental health, safety, environmental sustainability, and community well-being. Employs adaptive and intelligent system design to address real-life challenges and generate meaningful, positive change.",
      achievements: ["Behavior Change Systems", "User-Centered Design", "Interactive Technologies", "Community Well-being", "Intelligent System Design"],
      skills: ["Persuasive Computing", "Behavioral Psychology", "Software Development", "User Research", "System Design"],
      logo: "🧠",
      color: "from-violet-500 to-violet-600",
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-500/20",
      impact: "Community Impact Technology",
      technologies: ["Python", "React", "User Research", "Behavioral Analysis"]
    },
    {
      id: 4,
      year: "2025",
      month: "Jan",
      endMonth: "Apr",
      title: "Course Representative - CSCI 1120",
      organization: "Dalhousie University",
      location: "Halifax, NS",
      type: "leadership",
      icon: Users,
      description: "Acted as a liaison between students and faculty, addressing concerns and ensuring effective communication. Organized study sessions and peer support initiatives to enhance student learning outcomes. Collaborated with faculty to improve course structure and student engagement strategies.",
      achievements: ["Student-Faculty Liaison", "Study Session Organization", "Peer Support Initiatives", "Course Structure Improvement", "Student Engagement"],
      skills: ["Leadership", "Communication", "Mentoring", "Academic Support", "Team Collaboration"],
      logo: "👥",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      impact: "Enhanced Student Learning",
      technologies: ["Communication Tools", "Academic Platforms", "Study Resources"]
    },
    {
      id: 5,
      year: "2024",
      month: "Nov",
      endMonth: "Present",
      title: "Undergraduate Research and Development Assistant",
      organization: "Vertex Labs, Dalhousie University",
      location: "Halifax, NS",
      type: "research",
      icon: Layers,
      description: "Researching VR and HCI at Dalhousie University's VERTEX Lab, focusing on cognitive processes and user perception in 3D environments. Developing intuitive, performance-enhancing interfaces to improve user interaction and experience. Passionate about bridging cutting-edge technology with user-centered design through multidisciplinary collaboration.",
      achievements: ["VR & HCI Research", "Cognitive Process Analysis", "User Perception Studies", "Performance-Enhancing Interfaces", "Multidisciplinary Collaboration"],
      skills: ["Virtual Reality", "Human-Computer Interaction", "User Experience", "3D Design", "Research Methods"],
      logo: "🥽",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
      impact: "VR & HCI Innovation",
      technologies: ["Unity 3D", "VR Development", "User Research", "3D Modeling"]
    },
    {
      id: 6,
      year: "2024",
      month: "Dec",
      endMonth: "Apr",
      title: "Research Assistant and Data Analyst",
      organization: "Dalhousie University",
      location: "Halifax, NS",
      type: "research",
      icon: Database,
      description: "Focused on streamlining data organization to enhance research efficiency and standardize data collection methods. Utilizing advanced analytical tools to convert raw data into actionable insights for in-depth analysis. Driving improved decision-making and operational efficiency by implementing robust data analysis frameworks.",
      achievements: ["Data Organization", "Research Efficiency", "Analytical Tools", "Standardized Methods", "Decision-Making Improvement"],
      skills: ["Data Analysis", "Research Methods", "Analytics", "Data Organization", "Statistical Analysis"],
      logo: "📊",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
      impact: "Enhanced Research Efficiency",
      technologies: ["Python", "R", "SQL", "Statistical Tools", "Data Visualization"]
    }
  ];

  const projectsData = [
    {
      id: 1,
      title: "AR Adventure Game",
      date: "Feb 2025",
      technologies: ["Python", "Flask", "React", "PostgreSQL", "PyCharm"],
      description: "Cross-Platform AR Development: Utilized Unity 3D with AR Foundation to build a seamless, cross-platform augmented reality experience. Robust Spatial Tracking: Integrated ARKit and ARCore for accurate spatial mapping and environment interaction, ensuring precise AR object placement. Enhanced Immersive Interaction: Leveraged Vuforia for advanced image and object recognition, enabling dynamic, interactive game mechanics within the AR environment.",
      achievements: ["Cross-Platform AR", "Spatial Tracking", "Immersive Interaction", "Object Recognition"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      icon: Layers
    },
    {
      id: 2,
      title: "Weather App",
      date: "Jan 2025",
      technologies: ["Weather API", "Python", "Maven", "TravisCI", "Git", "Java"],
      description: "Comprehensive Weather Insights: Developed a sleek, user-friendly weather app that provides real-time weather updates, a 5-day forecast, air quality index (AQI), sunrise/sunset times, and hourly forecasts. Robust Tech Stack: Built using HTML, CSS, and JavaScript, with OpenWeather API for real-time data fetching, Moment.js for time formatting, and FontAwesome Boxicons for intuitive UI design. Future Enhancements Deployment: Plans to improve UI/UX, integrate additional meteorological data (UV index, historical trends), and deploy globally for widespread accessibility.",
      achievements: ["Real-time Weather", "5-Day Forecast", "Air Quality Index", "Intuitive UI Design"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      icon: Globe
    }
  ];

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Applied Computer Science",
      institution: "Dalhousie University",
      location: "Halifax, NS",
      period: "Sept. 2024 – Apr 2028",
      type: "university",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      icon: GraduationCap
    },
    {
      id: 2,
      degree: "High School Diploma",
      institution: "Woodlawn High School",
      location: "Dartmouth, NS",
      period: "Sept. 2023 – July 2024",
      type: "highschool",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      icon: BookOpen
    }
  ];

  const awardsData = [
    {
      id: 1,
      title: "Entrance Scholarship",
      organization: "Dalhousie University",
      year: "2024",
      amount: "$25,000",
      description: "Awarded for Academic and Extracurricular Excellence",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
      icon: Trophy
    },
    {
      id: 2,
      title: "Most Innovative Award",
      organization: "Global Game Jam",
      year: "2024",
      amount: "",
      description: "Recognized for Creativity and Technical Excellence",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      icon: Award
    }
  ];

  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window !== "undefined") {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

        // Create optimized floating background elements
        const createFloatingElements = () => {
          const section = sectionRef.current;
          if (!section) return;

          // Detect device performance
          const isLowEndDevice = navigator.hardwareConcurrency <= 2 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
          const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

          // Reduce number of elements for low-end devices
          const elementCount = isLowEndDevice ? 15 : (reducedMotion ? 10 : 30);
          
          for (let i = 0; i < elementCount; i++) {
            const element = document.createElement('div');
            element.className = 'floating-journey-element';
            const size = Math.random() * 8 + 4; // Smaller elements for better performance
            const colors = [
              'rgba(168, 85, 247, 0.1)',
              'rgba(59, 130, 246, 0.1)',
              'rgba(34, 197, 94, 0.1)',
              'rgba(251, 191, 36, 0.1)',
              'rgba(236, 72, 153, 0.1)'
            ];
            
            // Simplified circular elements only for better performance
            element.style.cssText = `
              position: absolute;
              width: ${size}px;
              height: ${size}px;
              background: ${colors[Math.floor(Math.random() * colors.length)]};
              border-radius: 50%;
              top: ${Math.random() * 100}%;
              left: ${Math.random() * 100}%;
              pointer-events: none;
              will-change: transform;
              transform: translateZ(0);
            `;
            
            section.appendChild(element);
          }
        };

        createFloatingElements();

        // Optimized floating elements animation
        const isLowEndDevice = navigator.hardwareConcurrency <= 2 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!reducedMotion) {
          gsap.to('.floating-journey-element', {
            y: () => gsap.utils.random(-40, 40),
            x: () => gsap.utils.random(-30, 30),
            rotation: () => gsap.utils.random(-180, 180),
            scale: () => gsap.utils.random(0.9, 1.1),
            duration: () => gsap.utils.random(8, 12),
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            stagger: {
              amount: 1.5,
              from: "random"
            },
            force3D: true
          });

          // Simplified pulsing effect
          gsap.to('.floating-journey-element', {
            opacity: () => gsap.utils.random(0.4, 0.7),
            duration: () => gsap.utils.random(4, 8),
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            stagger: {
              amount: 1,
              from: "random"
            }
          });
        }

        // Optimized timeline items animation
        gsap.fromTo('.timeline-item', {
          opacity: 0,
          y: isLowEndDevice ? 40 : 60,
          scale: 0.95
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: isLowEndDevice ? 0.8 : 1.0,
          stagger: {
            amount: isLowEndDevice ? 0.4 : 0.6,
            from: "start"
          },
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: "#timeline",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });

        // Optimized timeline nodes animation
        gsap.fromTo('.timeline-node', {
          scale: 0,
          rotation: isLowEndDevice ? 90 : 180
        }, {
          scale: 1,
          rotation: 0,
          duration: isLowEndDevice ? 0.6 : 0.8,
          stagger: 0.15,
          ease: isLowEndDevice ? "power2.out" : "back.out(1.4)",
          force3D: true,
          scrollTrigger: {
            trigger: "#timeline",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });

        // Enhanced timeline line animation
        gsap.fromTo('.timeline-line', {
          scaleY: 0,
          opacity: 0
        }, {
          scaleY: 1,
          opacity: 1,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#timeline",
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        });

        // Add flowing particles along timeline
        const createTimelineParticles = () => {
          const timelineLine = document.querySelector('.timeline-line');
          if (!timelineLine) return;

          for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.className = 'timeline-particle';
            particle.style.cssText = `
              position: absolute;
              width: 4px;
              height: 4px;
              background: linear-gradient(45deg, #3b82f6, #8b5cf6);
              border-radius: 50%;
              top: ${Math.random() * 100}%;
              left: 50%;
              transform: translateX(-50%);
              pointer-events: none;
              box-shadow: 0 0 10px rgba(59, 130, 246, 0.8);
            `;
            timelineLine.appendChild(particle);

            // Animate particles flowing along timeline
            gsap.to(particle, {
              y: "100%",
              duration: 3 + Math.random() * 2,
              repeat: -1,
              ease: "none",
              delay: Math.random() * 2
            });
          }
        };

        createTimelineParticles();

        // Year labels animation
        gsap.fromTo('.year-label', {
          opacity: 0,
          x: -50
        }, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#timeline",
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        });

        // Optimized content cards animation
        gsap.fromTo('.content-card', {
          opacity: 0,
          y: isLowEndDevice ? 30 : 40,
          scale: 0.95
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: isLowEndDevice ? 0.6 : 0.8,
          stagger: {
            amount: isLowEndDevice ? 0.6 : 0.8,
            from: "start"
          },
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: "#timeline",
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        });

        // Optimized hover animations for content cards
        if (!isLowEndDevice) {
          document.querySelectorAll('.content-card').forEach((card) => {
            card.addEventListener('mouseenter', () => {
              gsap.to(card, {
                scale: 1.03,
                duration: 0.2,
                ease: "power2.out",
                force3D: true
              });
            });

            card.addEventListener('mouseleave', () => {
              gsap.to(card, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out",
                force3D: true
              });
            });
          });
        }

        // Optimized project cards animation
        gsap.fromTo('.project-card', {
          opacity: 0,
          y: isLowEndDevice ? 30 : 40,
          scale: 0.95
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: isLowEndDevice ? 0.6 : 0.8,
          stagger: 0.15,
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: ".project-card",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });

        // Optimized education cards animation
        gsap.fromTo('.education-card', {
          opacity: 0,
          y: isLowEndDevice ? 30 : 40,
          scale: 0.95
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: isLowEndDevice ? 0.6 : 0.8,
          stagger: 0.15,
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: ".education-card",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });

        // Optimized award cards animation
        gsap.fromTo('.award-card', {
          opacity: 0,
          y: isLowEndDevice ? 30 : 40,
          scale: 0.95
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: isLowEndDevice ? 0.6 : 0.8,
          stagger: 0.15,
          ease: "power2.out",
          force3D: true,
          scrollTrigger: {
            trigger: ".award-card",
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });

        // Optimized parallax effect for background elements
        if (!isLowEndDevice && !reducedMotion) {
          gsap.to('.floating-journey-element', {
            y: () => gsap.utils.random(-50, 50),
            x: () => gsap.utils.random(-25, 25),
            rotation: () => gsap.utils.random(-90, 90),
            duration: () => gsap.utils.random(8, 12),
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            force3D: true,
            scrollTrigger: {
              trigger: "#timeline",
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          });
        }
      }
    };

    loadGSAP();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="timeline" 
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Matrix Rain Background */}
      <MatrixRain intensity="low" color="#10b981" speed="slow" className="absolute inset-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            My Journey
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            Professional <span className="text-primary">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive journey through my academic achievements, research contributions, and project milestones
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-blue-500 to-green-500 rounded-full timeline-line origin-top"></div>

          {/* Timeline Items */}
          <div className="space-y-20">
            {journeyData.map((item, index) => (
              <div
                key={item.id}
                className={`timeline-item relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`timeline-node w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-background relative overflow-hidden`}>
                    <item.icon className="w-8 h-8 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl animate-bounce">{item.logo}</div>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div 
                    className={`content-card ${item.bgColor} ${item.borderColor} backdrop-blur-sm border rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer group`}
                    onMouseEnter={() => setActiveItem(item.id)}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-primary">{item.organization}</div>
                          <div className="text-xs text-muted-foreground flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-foreground">{item.year}</div>
                        <div className="text-sm text-muted-foreground">{item.month} - {item.endMonth}</div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        Key Achievements
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.achievements.map((achievement, idx) => (
                          <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact */}
                    {item.impact && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-emerald-500" />
                          Key Impact
                        </h4>
                        <div className="text-sm font-bold text-emerald-600 bg-emerald-500/10 px-3 py-2 rounded-lg">
                          {item.impact}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    {item.technologies && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-blue-500" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, idx) => (
                            <span key={idx} className="text-xs bg-blue-500/10 text-blue-600 px-2 py-1 rounded-full border border-blue-500/20">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Code className="w-4 h-4 text-green-500" />
                        Skills Developed
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, idx) => (
                          <span key={idx} className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect */}
                    {activeItem === item.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-2xl pointer-events-none"></div>
                    )}
                  </div>
                </div>

                {/* Year Label */}
                <div className={`year-label absolute left-1/2 transform -translate-x-1/2 ${
                  index % 2 === 0 ? 'top-20' : 'top-20'
                } z-10`}>
                  <div className="bg-background border border-border rounded-full px-4 py-2 shadow-lg">
                    <span className="text-sm font-bold text-primary">{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Statistics Section */}
        <div className="mt-32 grid md:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-blue-500/10 to-blue-600/5 backdrop-blur-sm border border-blue-500/20 rounded-2xl hover:scale-105 transition-all duration-300 group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-2 text-foreground">3 Research Labs</h3>
            <p className="text-muted-foreground">Active Research Experience</p>
            <div className="mt-2 text-sm text-blue-600 font-medium">VR, AI/ML, Data Analytics</div>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-amber-500/10 to-amber-600/5 backdrop-blur-sm border border-amber-500/20 rounded-2xl hover:scale-105 transition-all duration-300 group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-2 text-foreground">15+ Students</h3>
            <p className="text-muted-foreground">Mentored in STEM</p>
            <div className="mt-2 text-sm text-amber-600 font-medium">60% Engagement Increase</div>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:scale-105 transition-all duration-300 group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-2 text-foreground">6 Roles</h3>
            <p className="text-muted-foreground">Professional Experience</p>
            <div className="mt-2 text-sm text-purple-600 font-medium">Research & Development</div>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl hover:scale-105 transition-all duration-300 group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-2 text-foreground">40%+</h3>
            <p className="text-muted-foreground">Performance Improvements</p>
            <div className="mt-2 text-sm text-emerald-600 font-medium">Across All Projects</div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
              Featured Projects
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Technical <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Innovative solutions showcasing my technical expertise and creative problem-solving abilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${project.bgColor} ${project.borderColor} backdrop-blur-sm border rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer group`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="text-sm text-muted-foreground">{project.date}</div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-green-500" />
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.achievements.map((achievement, idx) => (
                      <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-blue-500" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-blue-500/10 text-blue-600 px-2 py-1 rounded-full border border-blue-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
              Education
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Academic <span className="text-primary">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building a strong foundation in computer science and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className={`education-card ${edu.bgColor} ${edu.borderColor} backdrop-blur-sm border rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer group`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center`}>
                    <edu.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="text-primary font-medium">{edu.institution}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </div>
                  </div>
                </div>

                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {edu.period}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
              Recognition
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Awards & <span className="text-primary">Scholarships</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Recognition for academic excellence and innovative contributions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {awardsData.map((award, index) => (
              <div
                key={award.id}
                className={`award-card ${award.bgColor} ${award.borderColor} backdrop-blur-sm border rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer group`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${award.color} rounded-2xl flex items-center justify-center`}>
                      <award.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {award.title}
                      </h3>
                      <div className="text-primary font-medium">{award.organization}</div>
                      <div className="text-sm text-muted-foreground">{award.year}</div>
                    </div>
                  </div>
                  {award.amount && (
                    <div className="text-2xl font-bold text-emerald-600">
                      {award.amount}
                    </div>
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}