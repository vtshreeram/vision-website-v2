// ** Animation variants and easing functions for Framer Motion

import { Variants } from "framer-motion";

// ** Easing curves
export const easings = {
  easeOut: [0.4, 0.0, 0.2, 1] as const,
  easeInOut: [0.87, 0, 0.13, 1] as const,
  bounce: [0.34, 1.56, 0.64, 1] as const,
};

// ** Animation durations (in seconds)
export const durations = {
  fast: 0.2,
  medium: 0.4,
  slow: 0.6,
  verySlow: 0.8,
};

// ** Fade up animation
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.easeOut,
    },
  },
};

// ** Fade in animation
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: durations.medium,
      ease: easings.easeOut,
    },
  },
};

// ** Fade up with scale
export const fadeUpScale: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: easings.easeOut,
    },
  },
};

// ** Slide from left
export const slideFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.slow,
      ease: easings.easeOut,
    },
  },
};

// ** Slide from right
export const slideFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.slow,
      ease: easings.easeOut,
    },
  },
};

// ** Scale in animation
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.medium,
      ease: easings.easeOut,
    },
  },
};

// ** Scale in with bounce
export const scaleInBounce: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: easings.bounce,
    },
  },
};

// ** Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// ** Fast stagger container
export const fastStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0,
    },
  },
};

// ** Slow stagger container
export const slowStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// ** Page transition variants
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easings.easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: easings.easeOut,
    },
  },
};

// ** Button tap animation
export const buttonTap = {
  scale: 0.98,
  transition: {
    duration: durations.fast,
    ease: easings.easeOut,
  },
};

// ** Button hover animation
export const buttonHover = {
  scale: 1.02,
  transition: {
    duration: durations.fast,
    ease: easings.easeOut,
  },
};

// ** Viewport animation options
export const viewportOptions = {
  once: true,
  amount: 0.2 as const,
};

export const viewportOptionsLarge = {
  once: true,
  amount: 0.1 as const,
};

export const viewportOptionsSmall = {
  once: true,
  amount: 0.3 as const,
};
