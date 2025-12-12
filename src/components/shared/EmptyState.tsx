"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@/components/ui/Typography";
import Button from "@/components/ui/button";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
    title?: string;
    description?: string;
    actionLabel?: string;
    actionHref?: string;
    icon?: LucideIcon;
    imageSrc?: string; // Optional custom image
    className?: string;
}

export const EmptyState = ({
    title = "No data found",
    description = "We couldn't find anything here. Please check back later.",
    actionLabel,
    actionHref,
    icon: Icon,
    imageSrc,
    className,
}: EmptyStateProps) => {
    return (
        <div className={`flex flex-col items-center justify-center text-center py-16 px-4 ${className}`}>
            <div className="mb-6 flex items-center justify-center">
                {imageSrc ? (
                    <div className="relative w-40 h-40">
                        <Image
                            src={imageSrc}
                            alt="Empty state"
                            fill
                            className="object-contain"
                        />
                    </div>
                ) : Icon ? (
                    <div className="h-20 w-20 rounded-full bg-secondary-background flex items-center justify-center text-primary">
                        <Icon className="h-10 w-10" />
                    </div>
                ) : null}
            </div>

            <Typography variant="Bold_H3" className="mb-3 text-secondary">
                {title}
            </Typography>

            <Typography variant="Regular_H5" className="text-gray max-w-md mb-8">
                {description}
            </Typography>

            {actionLabel && actionHref && (
                <Link href={actionHref}>
                    <Button variant="primary">{actionLabel}</Button>
                </Link>
            )}
        </div>
    );
};
