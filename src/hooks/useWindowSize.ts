import { useState, useEffect } from "react";

interface WindowSize {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

/**
 * Track window dimensions with responsive breakpoints.
 *
 * @example
 * const { width, isMobile } = useWindowSize();
 * if (isMobile) return <MobileLayout />;
 */
export function useWindowSize(): WindowSize {
  const [size, setSize] = useState<WindowSize>(() => getSize());

  function getSize(): WindowSize {
    const width = typeof window !== "undefined" ? window.innerWidth : 1024;
    const height = typeof window !== "undefined" ? window.innerHeight : 768;
    return {
      width,
      height,
      isMobile: width < 768,
      isTablet: width >= 768 && width < 1024,
      isDesktop: width >= 1024,
    };
  }

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    function handler() {
      clearTimeout(timeout);
      timeout = setTimeout(() => setSize(getSize()), 100);
    }
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
      clearTimeout(timeout);
    };
  }, []);

  return size;
}
