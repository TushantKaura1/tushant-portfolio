import { useEffect, useRef } from 'react';

interface MatrixRainProps {
  intensity?: 'low' | 'medium' | 'high';
  color?: string;
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
}

export default function MatrixRain({ 
  intensity = 'medium', 
  color = '#10b981', 
  speed = 'medium',
  className = ''
}: MatrixRainProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Remove existing matrix rain
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

    // Configure based on intensity
    const columnCount = intensity === 'low' ? 15 : intensity === 'medium' ? 25 : 35;
    const fallSpeed = speed === 'slow' ? 3 : speed === 'medium' ? 5 : 7;
    const characterCount = intensity === 'low' ? 8 : intensity === 'medium' ? 12 : 16;

    // Create falling binary characters
    for (let i = 0; i < columnCount; i++) {
      const column = document.createElement('div');
      column.style.cssText = `
        position: absolute;
        top: -100px;
        left: ${Math.random() * 100}%;
        width: 2px;
        height: ${characterCount * 20}px;
        background: linear-gradient(to bottom, transparent, ${color}, transparent);
        animation: matrix-fall ${fallSpeed + Math.random() * 2}s linear infinite;
        animation-delay: ${Math.random() * 2}s;
      `;

      // Add binary characters
      for (let j = 0; j < characterCount; j++) {
        const char = document.createElement('div');
        char.textContent = Math.random() > 0.5 ? '1' : '0';
        char.style.cssText = `
          position: absolute;
          top: ${j * 20}px;
          left: 0;
          width: 100%;
          height: 20px;
          color: ${color};
          font-family: 'Courier New', monospace;
          font-size: 12px;
          text-align: center;
          opacity: ${1 - (j / characterCount) * 0.7};
          text-shadow: 0 0 5px ${color};
        `;
        column.appendChild(char);
      }

      rain.appendChild(column);
    }

    container.appendChild(rain);

    // Add CSS animation if not already present
    if (!document.querySelector('#matrix-rain-styles')) {
      const style = document.createElement('style');
      style.id = 'matrix-rain-styles';
      style.textContent = `
        @keyframes matrix-fall {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    return () => {
      if (container.contains(rain)) {
        container.removeChild(rain);
      }
    };
  }, [intensity, color, speed]);

  return (
    <div 
      ref={containerRef} 
      className={`matrix-rain-container ${className}`}
      style={{ position: 'relative', overflow: 'hidden' }}
    />
  );
}
