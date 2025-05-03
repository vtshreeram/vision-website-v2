"use client";

// ** import core package
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createElement, FC, ReactNode, HTMLAttributes } from "react";

// ** import utils
import { cn } from "@/lib/utils";

type TypographyVariant =
  | "Bold_H1"
  | "Bold_H2"
  | "Bold_H3"
  | "Bold_H4"
  | "Bold_H5"
  | "Bold_H6"
  | "Bold_H7"
  | "SemiBold_H1"
  | "SemiBold_H2"
  | "SemiBold_H3"
  | "SemiBold_H4"
  | "SemiBold_H5"
  | "SemiBold_H6"
  | "SemiBold_H7"
  | "Medium_H1"
  | "Medium_H2"
  | "Medium_H3"
  | "Medium_H4"
  | "Medium_H5"
  | "Medium_H6"
  | "Medium_H7"
  | "Regular_H1"
  | "Regular_H2"
  | "Regular_H3"
  | "Regular_H4"
  | "Regular_H5"
  | "Regular_H6"
  | "Regular_H7";

type TypographyAnimation = "move" | "underline";

type LinkDirection = "forward" | "back";

type HTMLHeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "p";

interface TypographyProps {
  variant: TypographyVariant;
  children: ReactNode;
  className?: string;
  maxLines?: number;
  navigate?: LinkDirection;
  link?: string;
  target?: string;
  animate?: TypographyAnimation;
  disableSelect?: boolean;
  onClick?: () => void;
  labelColor?: string;
}

export const Typography: FC<TypographyProps> = ({
  variant,
  children,
  className = "",
  navigate,
  link = "",
  target = "",
  disableSelect = false,
  labelColor,
  onClick,
  ...props
}) => {
  const getFontWeight = (variant: TypographyVariant): string => {
    if (variant.startsWith("Bold")) {
      return "font-bold";
    } else if (variant.startsWith("SemiBold")) {
      return "font-semibold";
    } else if (variant.startsWith("Medium")) {
      return "font-medium";
    } else if (variant.startsWith("Regular")) {
      return "font-normal";
    } else {
      return "font-normal"; // Default font weight
    }
  };

  const getStyleClasses = (variant: TypographyVariant): string => {
    let fontSizeClass = "";
    let lineHeightClass = "";
    let letterSpacingClass = "";
    const fontWeightClass = getFontWeight(variant);

    switch (variant) {
      case "Bold_H1":
      case "SemiBold_H1":
      case "Medium_H1":
      case "Regular_H1":
        fontSizeClass = "text-4xl md:text-5xl";
        lineHeightClass = "leading-tight md:leading-tighter";
        letterSpacingClass = "tracking-normal";
        break;
      case "Bold_H2":
      case "SemiBold_H2":
      case "Medium_H2":
      case "Regular_H2":
        fontSizeClass = "text-3xl md:text-4xl";
        lineHeightClass = "leading-tight md:leading-snug";
        letterSpacingClass = "tracking-normal";
        break;
      case "Bold_H3":
      case "SemiBold_H3":
      case "Medium_H3":
      case "Regular_H3":
        fontSizeClass = "text-[24px] md:text-[39px]";
        lineHeightClass = "leading-7 md:leading-[47px]";
        letterSpacingClass = "tracking-tight";
        break;
      case "Bold_H4":
      case "SemiBold_H4":
      case "Medium_H4":
      case "Regular_H4":
        fontSizeClass = "text-[20px] md:text-[25px]";
        lineHeightClass = "leading-relaxed md:leading-snug";
        letterSpacingClass = "tracking-normal";
        break;
      case "Bold_H5":
      case "SemiBold_H5":
      case "Medium_H5":
      case "Regular_H5":
        fontSizeClass = "text-[16px] md:text-[20px]";
        lineHeightClass = "leading-snug md:leading-snug";
        letterSpacingClass = "tracking-normal";
        break;
      case "Bold_H6":
      case "SemiBold_H6":
      case "Medium_H6":
      case "Regular_H6":
        fontSizeClass = "text-base";
        lineHeightClass = "leading-snug md:leading-relaxed";
        letterSpacingClass = "tracking-normal";
        break;
      case "Bold_H7":
      case "SemiBold_H7":
      case "Medium_H7":
      case "Regular_H7":
        fontSizeClass = "text-sm";
        lineHeightClass = "leading-tight md:leading-snug";
        letterSpacingClass = "tracking-normal";
        break;
      default:
        fontSizeClass = "text-base";
        lineHeightClass = "leading-snug";
        letterSpacingClass = "tracking-normal";
    }

    return `${fontSizeClass} ${lineHeightClass} ${letterSpacingClass} ${fontWeightClass}`;
  };

  // Map variant to HTML tag
  const getTag = (variant: TypographyVariant): HTMLHeadingTag => {
    if (variant.endsWith("H1")) return "h1";
    if (variant.endsWith("H2")) return "h2";
    if (variant.endsWith("H3")) return "h3";
    if (variant.endsWith("H4")) return "h4";
    if (variant.endsWith("H5")) return "h5";
    if (variant.endsWith("H6")) return "p";
    if (variant.endsWith("H7")) return "p"; // Use <p> for H7
    return "p"; // Default to <p>
  };

  const tag = getTag(variant);
  const styleClasses = getStyleClasses(variant);
  const router = useRouter();

  const handleNavigate = (): void => {
    if (navigate === "back") {
      router.back();
    } else {
      router.forward();
    }
  };

  const elementProps: HTMLAttributes<HTMLElement> = {
    className: cn(
      "text-light_dark_ dark:text-text_dark",
      styleClasses,
      className
    ),
    style: { userSelect: disableSelect ? "none" : "auto", color: labelColor },
    onClick: () => {
      if (onClick) {
        onClick();
      }
      if (navigate) {
        handleNavigate();
      }
    },
    ...props,
  };

  return link ? (
    <Link href={link} target={target}>
      {createElement(tag, elementProps, children)}
    </Link>
  ) : (
    createElement(tag, elementProps, children)
  );
};
