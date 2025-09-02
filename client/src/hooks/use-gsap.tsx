import { useEffect, useRef } from "react";

export function useGSAP(animationFn: (ctx: any) => void, deps: any[] = []) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      if (typeof window !== "undefined") {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          animationFn({ gsap, ScrollTrigger });
        }, containerRef);

        return () => ctx.revert();
      }
    };

    loadGSAP();
  }, deps);

  return containerRef;
}
