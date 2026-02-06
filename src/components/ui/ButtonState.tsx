"use client";

import React from "react";
import Button from "@/components/ui/button"; // Removed ButtonProps from import
import { Loader2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

// Infer ButtonProps from the Button component itself
interface ButtonStateProps extends React.ComponentPropsWithoutRef<typeof Button> {
    isLoading?: boolean;
    isSuccess?: boolean;
}

export const ButtonState = React.forwardRef<HTMLButtonElement, ButtonStateProps>(
    ({ children, isLoading, isSuccess, className, disabled, ...props }, ref) => {
        return (
            <Button
                ref={ref}
                disabled={disabled || isLoading || isSuccess}
                aria-busy={isLoading}
                aria-live="polite"
                className={cn(
                    "relative overflow-hidden",
                    isSuccess && "bg-green-600 hover:bg-green-600 text-white border-green-600",
                    isLoading && "cursor-wait opacity-80",
                    className
                )}
                {...props}
            >
                <span
                    className={cn(
                        "flex items-center gap-2 transition-all duration-300",
                        (isLoading || isSuccess) && "opacity-0 translate-y-4"
                    )}
                >
                    {children}
                </span>

                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="h-5 w-5 animate-spin" />
                    </div>
                )}

                {isSuccess && (
                    <div className="absolute inset-0 flex items-center justify-center animate-in zoom-in slide-in-from-bottom-2 fade-in duration-300">
                        <Check className="h-5 w-5" />
                    </div>
                )}
            </Button>
        );
    }
);

ButtonState.displayName = "ButtonState";

export default ButtonState;
