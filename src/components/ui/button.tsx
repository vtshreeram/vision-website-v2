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
type ButtonProps = CustomButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = "primary", // Default to 'primary' if no variant is passed
  ...rest
}) => {
  return (
    <button
      {...rest} // Spread the rest of the native button props here
      className={cn(
        // Conditionally apply styles based on the variant
        variant === "primary"
          ? "border border-primary md:text-lg lg:text-xl duration-500 hover:bg-primary/80 bg-primary text-white font-semibold"
          : " border border-primary  md:text-lg lg:text-xl duration-500 hover:bg-primary/20 bg-transparent text-primary font-semibold",
        "px-5 py-2 md:px-7 md:py-3 text-base active:scale-95 duration-300 cursor-pointer",

        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
