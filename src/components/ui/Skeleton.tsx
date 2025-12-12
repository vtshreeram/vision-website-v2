"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";

function Skeleton({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-stroke/20", className)}
            {...props}
        />
    );
}

export { Skeleton };
