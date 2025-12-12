"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    className?: string;
}

/**
 * AnimatedCounter - A rolling number animation component
 * Animates from 0 to the target value when the element comes into view
 */
export const AnimatedCounter = ({
    value,
    suffix = "",
    prefix = "",
    duration = 2,
    className = "",
}: AnimatedCounterProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(0);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 60,
        stiffness: 100,
        duration: duration * 1000,
    });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            setDisplayValue(Math.round(latest));
        });
        return unsubscribe;
    }, [springValue]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {displayValue.toLocaleString()}
            {suffix}
        </span>
    );
};

/**
 * Helper function to parse stat strings like "120+", "35%", "10000+"
 */
export const parseStatValue = (
    statString: string
): { value: number; suffix: string; prefix: string } => {
    // Extract number and suffix/prefix
    const match = statString.match(/^([^\d]*)(\d+)(.*)$/);
    if (match) {
        return {
            prefix: match[1] || "",
            value: parseInt(match[2], 10),
            suffix: match[3] || "",
        };
    }
    return { prefix: "", value: 0, suffix: "" };
};

export default AnimatedCounter;
