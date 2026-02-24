import { useEffect, useRef } from 'react';

interface ObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = (options: ObserverOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('visible');
        observer.unobserve(element);
      }
    }, { 
      threshold: 0.1, 
      rootMargin: "0px 0px -50px 0px",
      ...options 
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return elementRef;
};