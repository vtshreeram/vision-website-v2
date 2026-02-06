import { blogFontConfig } from "../__configs/font";
import { cn } from "../_libs/utils";
import React, { ButtonHTMLAttributes, FC } from "react";

// Define custom props separately
interface CustomButtonProps {
  content: React.ReactNode;
  className?: string;
  isActive?: boolean;
  isLoading?: boolean;
}

// combining custom props with the standard button attributes
type ButtonProps = CustomButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

// Example spinner component (you might use a different one or style it accordingly)
const Spinner: FC = () => (
  <div
    className="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full"
    role="status"
  >
    <span className="visually-hidden" />
  </div>
);

const ButtonPrimary: FC<ButtonProps> = ({
  content,
  className,
  isActive = false,
  isLoading,
  disabled,
  ...rest
}) => {
  return (
    <button
      {...rest}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      aria-disabled={disabled || isLoading}
      className={cn(
        // Base styles
        "text-[14px] px-6 md:px-8 py-3 md:text-base font-medium",
        "transition-all duration-200 ease-out",
        // Default state
        "bg-primary text-white border border-primary",
        // Hover state
        "hover:opacity-90 hover:shadow-lg",
        // Active state
        "active:scale-[0.98]",
        // Focus state
        "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary focus-visible:ring-offset-2",
        // Disabled state
        "disabled:bg-stroke disabled:text-gray/60 disabled:border-stroke disabled:opacity-60 disabled:cursor-not-allowed",
        // Loading state
        isLoading && "cursor-wait opacity-80",
        // Active variant override
        isActive && "bg-gray-800",
        blogFontConfig.subtitle,
        className
      )}
    >
      {isLoading ? <Spinner /> : content}
    </button>
  );
};

export default ButtonPrimary;
