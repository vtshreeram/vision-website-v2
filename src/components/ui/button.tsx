// import core package
import React, { ButtonHTMLAttributes, FC } from "react";

// import cn
import { cn } from "@/lib/utils";

interface CustomButtonProps {
  className?: string;
  isActive?: boolean;
  variant?: "primary" | "secondary";
}

// combining custom props with the standard button attributes
// combining custom props with the standard button attributes
export type ButtonProps = CustomButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  className,
  variant = "primary", // Default to 'primary' if no variant is passed
  disabled,
  ...rest
}, ref) => {
  return (
    <button
      ref={ref}
      disabled={disabled}
      aria-disabled={disabled}
      {...rest} // Spread the rest of the native button props here
      className={cn(
        // Base styles
        "h-10 px-4 py-2 text-sm md:text-base font-medium leading-none",
        "transition-all duration-200 ease-out",
        // Variant-specific default styles
        variant === "primary"
          ? "bg-primary text-white border border-primary"
          : "bg-transparent text-primary border border-primary",
        // Hover states
        variant === "primary"
          ? "hover:opacity-90"
          : "hover:bg-primary/10",
        // Active states
        variant === "primary"
          ? "active:scale-[0.98]"
          : "active:bg-primary/20 active:scale-[0.98]",
        // Focus states (keyboard navigation)
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary focus-visible:ring-offset-2",
        // Disabled states
        variant === "primary"
          ? "disabled:bg-stroke disabled:text-gray/60 disabled:border-stroke disabled:opacity-60 disabled:cursor-not-allowed"
          : "disabled:bg-transparent disabled:text-gray/60 disabled:border-stroke disabled:opacity-60 disabled:cursor-not-allowed",
        // Cursor
        "cursor-pointer disabled:cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
