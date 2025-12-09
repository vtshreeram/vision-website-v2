// ** import core packages
import { useInView } from "framer-motion";
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
 */
export const useScrollAnimation = (
  options: UseScrollAnimationOptions = {}
): UseScrollAnimationReturn => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: options.once ?? true,
    amount: options.amount ?? 0.2,
  });

  return { ref, isInView };
};

export default useScrollAnimation;
