import { useEffect } from "react";

export default function ContactSection() {
  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window !== "undefined") {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);

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

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="contact-content text-4xl md:text-6xl font-bold mb-8" data-testid="contact-title">
          Enjoyed my work?
        </h2>
        <p className="contact-content text-xl text-muted-foreground mb-12" data-testid="contact-description">
          Let's work together! Drop a{" "}
          <a 
            href="https://linkedin.com/in/tushantkaura/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
            data-testid="contact-link-text"
          >
            text
          </a>, 
          schedule a quick{" "}
          <span className="text-primary hover:text-primary/80 cursor-pointer" data-testid="contact-link-call">
            call
          </span>{" "}
          or send an{" "}
          <a 
            href="mailto:tushantkaura@gmail.com" 
            className="text-primary hover:text-primary/80"
            data-testid="contact-link-email-text"
          >
            email
          </a>
          - whatever works best!
        </p>
        
        <div className="contact-content flex flex-wrap justify-center gap-6">
          <a 
            href="https://linkedin.com/in/tushantkaura/" 
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn bg-primary hover:bg-primary/90 px-8 py-4 rounded-lg font-medium text-lg flex items-center gap-2"
            data-testid="contact-linkedin"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
            </svg>
            LinkedIn
          </a>
          <a 
            href="https://github.com/TushantKaura1" 
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn bg-secondary hover:bg-secondary/90 px-8 py-4 rounded-lg font-medium text-lg flex items-center gap-2"
            data-testid="contact-github"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
          <a 
            href="mailto:tushantkaura@gmail.com" 
            className="magnetic-btn bg-secondary hover:bg-secondary/90 px-8 py-4 rounded-lg font-medium text-lg flex items-center gap-2"
            data-testid="contact-email"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
