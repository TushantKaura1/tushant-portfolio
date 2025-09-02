import { useEffect, useRef, useState } from "react";
import { GraduationCap, Award, Code, Brain, Users, Lightbulb, ArrowRight, MapPin, Calendar, Star, Trophy, BookOpen, Zap, ExternalLink, ChevronRight } from "lucide-react";

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
      description: "Develops responsive web applications using React, HTML, CSS, and JavaScript. Implements interactive UI components and optimizes frontend performance. Collaborates on full-stack development, integrating REST APIs and backend services.",
      achievements: ["Responsive Web Apps", "Frontend Optimization", "Full-Stack Development", "API Integration"],
      skills: ["React", "JavaScript", "HTML/CSS", "REST APIs", "Full-Stack Development"],
      logo: "💻",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      id: 2,
      year: "2025",
      month: "Apr",
      endMonth: "Present",
      title: "Lead Research Mentor",
      organization: "CISE-Atlantic",
      location: "Halifax, NS",
      type: "leadership",
      icon: Award,
      description: "Mentors students from diverse backgrounds in conducting physics-based research, fostering equity and curiosity in STEM education. Leads collaborative research teams in designing and analyzing experiments, promoting inclusive participation in scientific inquiry.",
      achievements: ["STEM Mentoring", "Diversity & Inclusion", "Research Leadership", "Educational Resources"],
      skills: ["Mentoring", "STEM Education", "Research Leadership", "Web Development"],
      logo: "🎓",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20"
    },
    {
      id: 3,
      year: "2025",
      month: "Jan",
      endMonth: "Apr",
      title: "Course Representative",
      organization: "Dalhousie University - CSCI 1120",
      location: "Halifax, NS",
      type: "leadership",
      icon: Users,
      description: "Acted as a liaison between students and faculty, addressing concerns and ensuring effective communication. Organized study sessions and peer support initiatives to enhance student learning outcomes.",
      achievements: ["Student Leadership", "Faculty Communication", "Study Sessions", "Peer Support"],
      skills: ["Leadership", "Communication", "Mentoring", "Academic Support"],
      logo: "👥",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      id: 4,
      year: "2025",
      month: "Jan",
      endMonth: "Present",
      title: "Research Assistant and Software Developer",
      organization: "Persuasive Computing Lab, Dalhousie University",
      location: "Halifax, NS",
      type: "research",
      icon: Users,
      description: "Specializes in designing persuasive and behavior change systems using user-centered approaches. Develops interactive technologies to empower underserved populations, promoting mental health, safety, environmental sustainability, and community well-being.",
      achievements: ["Behavior Change Systems", "User-Centered Design", "Community Impact", "Interactive Technologies"],
      skills: ["Persuasive Computing", "Behavioral Psychology", "Software Development", "Social Impact"],
      logo: "🧠",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      id: 5,
      year: "2024",
      month: "Nov",
      endMonth: "Present",
      title: "Undergraduate Research Assistant",
      organization: "VERTEX Labs, Dalhousie University",
      location: "Halifax, NS",
      type: "research",
      icon: Brain,
      description: "Researching VR and HCI at Dalhousie University's VERTEX Lab, focusing on cognitive processes and user perception in 3D environments. Developing intuitive, performance-enhancing interfaces to improve user interaction and experience.",
      achievements: ["VR Research", "HCI Development", "Cognitive Processes", "3D Environments"],
      skills: ["Virtual Reality", "Human-Computer Interaction", "User Experience", "3D Design"],
      logo: "🥽",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
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
      icon: Lightbulb,
      description: "Focused on streamlining data organization to enhance research efficiency and standardize data collection methods. Utilizing advanced analytical tools to convert raw data into actionable insights for in-depth analysis.",
      achievements: ["Data Organization", "Research Efficiency", "Analytical Tools", "Standardized Methods"],
      skills: ["Data Analysis", "Research Methods", "Analytics", "Data Organization"],
      logo: "📊",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    }
  ];

  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window !== "undefined") {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

        // Create floating background elements
        const createFloatingElements = () => {
          const section = sectionRef.current;
          if (!section) return;

          for (let i = 0; i < 30; i++) {
            const element = document.createElement('div');
            element.className = 'floating-journey-element';
            const size = Math.random() * 8 + 4;
            const colors = [
              'rgba(168, 85, 247, 0.1)',
              'rgba(59, 130, 246, 0.1)',
              'rgba(34, 197, 94, 0.1)',
              'rgba(251, 191, 36, 0.1)',
              'rgba(236, 72, 153, 0.1)'
            ];
            element.style.cssText = `
              position: absolute;
              width: ${size}px;
              height: ${size}px;
              background: ${colors[Math.floor(Math.random() * colors.length)]};
              border-radius: 50%;
              top: ${Math.random() * 100}%;
              left: ${Math.random() * 100}%;
              pointer-events: none;
              box-shadow: 0 0 20px rgba(168, 85, 247, 0.1);
            `;
            section.appendChild(element);
          }
        };

        createFloatingElements();

        // Floating elements animation
        gsap.to('.floating-journey-element', {
          y: () => Math.random() * 100 - 50,
          x: () => Math.random() * 100 - 50,
          rotation: () => Math.random() * 360,
          duration: () => Math.random() * 8 + 6,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          stagger: 0.1
        });

        // Timeline items animation
        gsap.fromTo('.timeline-item', {
          opacity: 0,
          y: 50,
          scale: 0.9
        }, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#timeline",
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        });

        // Timeline line animation
        gsap.fromTo('.timeline-line', {
          scaleY: 0
        }, {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#timeline",
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        });

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

        // Content cards animation
        gsap.fromTo('.content-card', {
          opacity: 0,
          y: 30,
          rotateX: 15
        }, {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#timeline",
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        });

        // Parallax effect for background elements
        gsap.to('.floating-journey-element', {
          y: () => gsap.utils.random(-100, 100),
          x: () => gsap.utils.random(-50, 50),
          rotation: () => gsap.utils.random(-180, 180),
          duration: () => gsap.utils.random(8, 12),
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: "#timeline",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
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
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-background`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">{item.logo}</div>
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

        {/* Statistics Section */}
        <div className="mt-32 grid md:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">3 Labs</h3>
            <p className="text-muted-foreground">Research Experience</p>
          </div>

          <div className="text-center p-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">Lead Mentor</h3>
            <p className="text-muted-foreground">STEM Education</p>
          </div>

          <div className="text-center p-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">6 Roles</h3>
            <p className="text-muted-foreground">Professional Experience</p>
          </div>

          <div className="text-center p-8 bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">Full-Stack</h3>
            <p className="text-muted-foreground">Web Development</p>
          </div>
        </div>
      </div>
    </section>
  );
}