"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "text" | "circular" | "rectangular" | "card";
    width?: string | number;
    height?: string | number;
}

function Skeleton({
    className,
    variant = "rectangular",
    width,
    height,
    style,
    ...props
}: SkeletonProps) {
    return (
        <div
            className={cn(
                "skeleton-shimmer bg-stroke/20",
                {
                    "rounded-md": variant === "rectangular" || variant === "card",
                    "rounded-full": variant === "circular",
                    "rounded": variant === "text",
                    "w-full h-4": variant === "text" && !width && !height,
                },
                className
            )}
            style={{
                width: width,
                height: height,
                ...style,
            }}
            {...props}
        />
    );
}

export { Skeleton };
