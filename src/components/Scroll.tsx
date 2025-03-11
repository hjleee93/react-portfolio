import { useEffect, useRef, useState } from "react";
import '../styles/components/Scroll.scss'

interface ScrollAnimationProps {
  children: React.ReactNode;
}

export default function ScrollAnimation({children} : ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const thresholdValue = window.innerWidth < 768 ? 0 : 0.2; 
    const observer = new IntersectionObserver(
      ([entry]) =>{
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect(); 
        }
      },
      { threshold: thresholdValue }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`scroll-fade ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
}
