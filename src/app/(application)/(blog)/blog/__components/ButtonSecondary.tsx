// import core package
import React, { ButtonHTMLAttributes, FC } from "react";

// import cn
import { cn } from "../_libs/utils";
import { blogFontConfig } from "../__configs/font";

// Define custom props separately
interface CustomButtonProps {
  content: React.ReactNode;
  className?: string;
  isActive?: boolean;
}

// combining custom props with the standard button attributes
type ButtonProps = CustomButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonSecondary: FC<ButtonProps> = ({
  content,
  className,
  isActive = false,
  disabled,
  ...rest // Capture the rest of the button native props
}) => {
  return (
    <button
      {...rest} // Spread the rest of the native button props here
      disabled={disabled}
      aria-disabled={disabled}
      className={cn(
        // Base styles
        "text-[14px] px-6 md:px-8 py-3 md:text-base font-medium",
        "transition-all duration-200 ease-out",
        // Default state (fixed typo: text-secondaryduration-500 → text-secondary duration-200)
        "bg-transparent text-secondary border border-secondary",
        // Hover state (improved from bg-primary/5 to hover:bg-primary/10 and full bg on hover)
        "hover:bg-primary hover:text-white",
        // Active state
        "active:bg-primary/20 active:scale-[0.98]",
        // Focus state
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary focus-visible:ring-offset-2",
        // Disabled state
        "disabled:bg-transparent disabled:text-gray/60 disabled:border-stroke disabled:opacity-60 disabled:cursor-not-allowed",
        // Active variant override
        isActive && "bg-primary text-white",
        blogFontConfig.subtitle,
        className
      )}
    >
      {content}
    </button>
  );
};

export default ButtonSecondary;
