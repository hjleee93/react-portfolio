import { useEffect, useRef, useState } from "react";
import '../styles/components/Scroll.scss'

interface ScrollAnimationProps {
  children: React.ReactNode;
}

export default function ScrollAnimation({children} : ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`scroll-fade ${isVisible ? "show" : ""}`}>
      {children}
    </div>
  );
}
