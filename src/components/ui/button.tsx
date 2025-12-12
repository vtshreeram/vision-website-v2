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
  ...rest
}, ref) => {
  return (
    <button
      ref={ref}
      {...rest} // Spread the rest of the native button props here
      className={cn(
        // Conditionally apply styles based on the variant
        variant === "primary"
          ? "border border-primary hover:bg-primary/80 bg-primary text-white "
          : " border border-primary hover:bg-primary/5 bg-transparent text-primary ",
        "h-10 px-4 py-2 active:scale-95 duration-300 cursor-pointer text-sm md:text-base font-medium",

        className
      )}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
