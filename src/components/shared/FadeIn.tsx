"use client";

import { createContext, useContext, Suspense } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useSearchParams } from "next/navigation";

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: "0px 0px -200px" };

function FadeInInner(props: React.ComponentPropsWithoutRef<typeof motion.div>) {
    const shouldReduceMotion = useReducedMotion();
    const isInStaggerGroup = useContext(FadeInStaggerContext);
    const searchParams = useSearchParams();
    
    const disableAnimations = 
      shouldReduceMotion ||
      searchParams?.get("no-animations") === "true" ||
      process.env.NODE_ENV === "test";

    if (disableAnimations) {
        return <div className={props.className} style={props.style as any}>{props.children as React.ReactNode}</div>;
    }

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            {...(isInStaggerGroup
                ? {}
                : {
                    initial: "hidden",
                    whileInView: "visible",
                    viewport,
                })}
            {...props}
        />
    );
}

export function FadeIn(props: React.ComponentPropsWithoutRef<typeof motion.div>) {
    return (
        <Suspense fallback={<div className={props.className}>{props.children as React.ReactNode}</div>}>
            <FadeInInner {...props} />
        </Suspense>
    );
}

function FadeInStaggerInner({
    faster = false,
    ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
    const shouldReduceMotion = useReducedMotion();
    const searchParams = useSearchParams();
    
    const disableAnimations = 
      shouldReduceMotion ||
      searchParams?.get("no-animations") === "true" ||
      process.env.NODE_ENV === "test";

    if (disableAnimations) {
        return <div className={props.className} style={props.style as any}>{props.children as React.ReactNode}</div>;
    }

    return (
        <FadeInStaggerContext.Provider value={true}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
                {...props}
            />
        </FadeInStaggerContext.Provider>
    );
}

export function FadeInStagger(props: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
    return (
        <Suspense fallback={<div className={props.className}>{props.children as React.ReactNode}</div>}>
            <FadeInStaggerInner {...props} />
        </Suspense>
    );
}
