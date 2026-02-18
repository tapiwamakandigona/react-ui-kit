import { useState, useEffect, useRef } from "react";

interface Options {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Observe when an element enters the viewport.
 * Useful for lazy loading, animations, and infinite scroll.
 *
 * @example
 * const { ref, isIntersecting } = useIntersectionObserver({ triggerOnce: true });
 * return <div ref={ref} className={isIntersecting ? "visible" : "hidden"}>...</div>;
 */
export function useIntersectionObserver<T extends HTMLElement>(options: Options = {}) {
  const { threshold = 0, rootMargin = "0px", triggerOnce = false } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const ref = useRef<T>(null);
  const frozen = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || frozen.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        setEntry(entry);
        if (entry.isIntersecting && triggerOnce) {
          frozen.current = true;
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isIntersecting, entry };
}
