// import core package
import React, { ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";

// import cn
import { cn } from "@/lib/utils";

interface CustomButtonProps {
  className?: string;
  isActive?: boolean;
  variant?: "primary" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon" | "md"; // "md" for backward compatibility
  isLoading?: boolean;
}

export type ButtonProps = CustomButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  className,
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled,
  ...rest
}, ref) => {
  const isDisabled = disabled || isLoading;

  return (
    <button
      ref={ref}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...rest}
      className={cn(
        // Base styles
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm md:text-base font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        
        // Variants
        variant === "primary" && "bg-primary text-white shadow hover:bg-primary/90",
        variant === "secondary" && "bg-secondary text-white shadow-sm hover:bg-secondary/80",
        variant === "destructive" && "bg-red-500 text-white shadow-sm hover:bg-red-500/90",
        variant === "outline" && "border border-stroke bg-transparent hover:bg-stroke/10 text-foreground",
        variant === "ghost" && "hover:bg-stroke/10 text-foreground",
        variant === "link" && "text-primary underline-offset-4 hover:underline",

        // Sizes
        (size === "default" || size === "md") && "h-10 px-4 py-2",
        size === "sm" && "h-9 rounded-md px-3 text-xs md:text-sm",
        size === "lg" && "h-11 rounded-md px-8",
        size === "icon" && "h-10 w-10",
        
        className
      )}
    >
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
