import { useEffect, useRef } from "react";
import { Mail, Github, Linkedin, Phone, MapPin, Send, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window !== "undefined") {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

        // Create floating contact elements
        const createFloatingElements = () => {
          const section = sectionRef.current;
          if (!section) return;

          for (let i = 0; i < 15; i++) {
            const element = document.createElement('div');
            element.className = 'floating-contact-element';
            const size = Math.random() * 6 + 3;
            element.style.cssText = `
              position: absolute;
              width: ${size}px;
              height: ${size}px;
              background: linear-gradient(45deg, rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3));
              border-radius: 50%;
              top: ${Math.random() * 100}%;
              left: ${Math.random() * 100}%;
              pointer-events: none;
              box-shadow: 0 0 15px rgba(168, 85, 247, 0.2);
            `;
            section.appendChild(element);
          }
        };

        createFloatingElements();

        // Floating elements animation
        gsap.to('.floating-contact-element', {
          y: () => Math.random() * 100 - 50,
          x: () => Math.random() * 100 - 50,
          rotation: () => Math.random() * 360,
          duration: () => Math.random() * 4 + 3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          stagger: 0.1
        });

        // Contact content animation
        gsap.fromTo('#contact .contact-content', {
          opacity: 0,
          y: 50
        }, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#contact",
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        });

        // Magnetic button effects
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
          btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        });
      }
    };

    loadGSAP();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tushantkaura@gmail.com",
      href: "mailto:tushantkaura@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (437) 799-3699",
      href: "tel:+14377993699"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Halifax, NS, Canada",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/tushantkaura/",
      color: "hover:text-blue-500"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/TushantKaura1",
      color: "hover:text-gray-400"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:tushantkaura@gmail.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-32 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            Get In Touch
          </span>
          <h2 className="contact-content text-5xl md:text-7xl font-bold mb-8" data-testid="contact-title">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="contact-content text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="contact-description">
            Ready to collaborate on something amazing? I'm always excited to discuss new opportunities, 
            innovative projects, or just have a great conversation about technology and research.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="contact-content">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="text-foreground font-medium">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-content">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`magnetic-btn p-4 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover:bg-card/50 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-content">
            <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="magnetic-btn w-full bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-primary/25"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="contact-content text-center mt-20">
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl p-12 border border-primary/20">
            <h3 className="text-3xl font-bold mb-4">Ready to Start a Project?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're looking for a developer, researcher, or just want to chat about technology, 
              I'd love to hear from you. Let's create something amazing together!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:tushantkaura@gmail.com"
                className="magnetic-btn bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-primary/25"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
              <a 
                href="https://linkedin.com/in/tushantkaura/"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-3"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
