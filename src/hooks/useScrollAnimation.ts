// ** import core packages
import { useRef, RefObject } from "react";

interface UseScrollAnimationOptions {
  once?: boolean;
  amount?: number | "some" | "all";
  margin?: string;
}

interface UseScrollAnimationReturn {
  ref: RefObject<HTMLElement | null>;
  isInView: boolean;
}

/**
 * Custom hook for scroll-triggered animations
 * Returns a ref to attach to the element and an isInView boolean
 * 
 * MODIFIED: Animation logic removed. Always returns isInView: true.
 */
export const useScrollAnimation = (
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn => {
  const ref = useRef<HTMLElement>(null);
  // Always return true so content is visible immediately
  const isInView = true;

  return { ref, isInView };
};

export default useScrollAnimation;
