"use client";

// ** import core package
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createElement, FC, ReactNode, HTMLAttributes } from "react";

// ** import utils
import { cn } from "@/lib/utils";

type TypographyVariantOld =
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

export type TypographyVariantNew =
  | "display"
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "heading-4"
  | "body-large"
  | "body"
  | "caption";

export type TypographyWeightNew = "regular" | "medium" | "semibold" | "bold";

type TypographyVariant = TypographyVariantOld | TypographyVariantNew;

type TypographyAnimation = "move" | "underline";

type LinkDirection = "forward" | "back";

type HTMLHeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "span";

interface TypographyProps {
  variant: TypographyVariant;
  weight?: TypographyWeightNew;
  as?: HTMLHeadingTag;
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
  weight,
  as,
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
  const getFontWeight = (variant: TypographyVariant, customWeight?: TypographyWeightNew): string => {
    if (customWeight) {
      switch (customWeight) {
        case "bold": return "font-bold";
        case "semibold": return "font-semibold";
        case "medium": return "font-medium";
        case "regular": return "font-normal";
      }
    }
    
    if (variant.startsWith("Bold")) return "font-bold";
    if (variant.startsWith("SemiBold")) return "font-semibold";
    if (variant.startsWith("Medium")) return "font-medium";
    if (variant.startsWith("Regular")) return "font-normal";
    
    return "font-normal"; // Default font weight
  };

  const getStyleClasses = (variant: TypographyVariant, customWeight?: TypographyWeightNew): string => {
    let fontSizeClass = "";
    let lineHeightClass = "";
    let letterSpacingClass = "";
    const fontWeightClass = getFontWeight(variant, customWeight);

    switch (variant) {
      // New Variants
      case "display":
        fontSizeClass = "text-[2.4375rem] md:text-[3.8125rem]";
        lineHeightClass = "leading-[1.15] md:leading-[1.1]";
        letterSpacingClass = "tracking-[-0.03em]";
        break;
      case "heading-1":
        fontSizeClass = "text-[1.9375rem] md:text-[3.0625rem]";
        lineHeightClass = "leading-[1.2] md:leading-[1.15]";
        letterSpacingClass = "tracking-[-0.02em]";
        break;
      case "heading-2":
        fontSizeClass = "text-[1.5625rem] md:text-[2.4375rem]";
        lineHeightClass = "leading-[1.3] md:leading-[1.25]";
        letterSpacingClass = "tracking-[-0.01em]";
        break;
      case "heading-3":
        fontSizeClass = "text-[1.25rem] md:text-[1.5625rem]";
        lineHeightClass = "leading-[1.4] md:leading-[1.35]";
        letterSpacingClass = "tracking-normal";
        break;
      case "heading-4":
        fontSizeClass = "text-[1.125rem] md:text-[1.25rem]";
        lineHeightClass = "leading-[1.4] md:leading-[1.35]";
        letterSpacingClass = "tracking-normal";
        break;
      case "body-large":
        fontSizeClass = "text-base md:text-[1.25rem]";
        lineHeightClass = "leading-[1.5]";
        letterSpacingClass = "tracking-normal";
        break;
      case "body":
        fontSizeClass = "text-base";
        lineHeightClass = "leading-[1.625]";
        letterSpacingClass = "tracking-[0.005em]";
        break;
      case "caption":
        fontSizeClass = "text-[0.8125rem]";
        lineHeightClass = "leading-[1.5]";
        letterSpacingClass = "tracking-[0.01em]";
        break;

      // H1: Display / Hero — 39px mobile → 61px desktop
      case "Bold_H1":
      case "SemiBold_H1":
      case "Medium_H1":
      case "Regular_H1":
        fontSizeClass = "text-[2.4375rem] md:text-[3.8125rem]";
        lineHeightClass = "leading-[1.15] md:leading-[1.1]";
        letterSpacingClass = "tracking-[-0.03em]";
        break;
      // H2: Page heading — 31px mobile → 49px desktop
      case "Bold_H2":
      case "SemiBold_H2":
      case "Medium_H2":
      case "Regular_H2":
        fontSizeClass = "text-[1.9375rem] md:text-[3.0625rem]";
        lineHeightClass = "leading-[1.2] md:leading-[1.15]";
        letterSpacingClass = "tracking-[-0.02em]";
        break;
      // H3: Section heading — 25px mobile → 39px desktop
      case "Bold_H3":
      case "SemiBold_H3":
      case "Medium_H3":
      case "Regular_H3":
        fontSizeClass = "text-[1.5625rem] md:text-[2.4375rem]";
        lineHeightClass = "leading-[1.3] md:leading-[1.25]";
        letterSpacingClass = "tracking-[-0.01em]";
        break;
      // H4: Subheading — 20px mobile → 25px desktop
      case "Bold_H4":
      case "SemiBold_H4":
      case "Medium_H4":
      case "Regular_H4":
        fontSizeClass = "text-[1.25rem] md:text-[1.5625rem]";
        lineHeightClass = "leading-[1.4] md:leading-[1.35]";
        letterSpacingClass = "tracking-normal";
        break;
      // H5: Lead text / large body — 16px mobile → 20px desktop
      case "Bold_H5":
      case "SemiBold_H5":
      case "Medium_H5":
      case "Regular_H5":
        fontSizeClass = "text-base md:text-[1.25rem]";
        lineHeightClass = "leading-[1.5]";
        letterSpacingClass = "tracking-normal";
        break;
      // H6: Body text — 16px (both)
      case "Bold_H6":
      case "SemiBold_H6":
      case "Medium_H6":
      case "Regular_H6":
        fontSizeClass = "text-base";
        lineHeightClass = "leading-[1.625]";
        letterSpacingClass = "tracking-[0.005em]";
        break;
      // H7: Caption / meta — 13px (both)
      case "Bold_H7":
      case "SemiBold_H7":
      case "Medium_H7":
      case "Regular_H7":
        fontSizeClass = "text-[0.8125rem]";
        lineHeightClass = "leading-[1.5]";
        letterSpacingClass = "tracking-[0.01em]";
        break;
      default:
        fontSizeClass = "text-base";
        lineHeightClass = "leading-[1.625]";
        letterSpacingClass = "tracking-normal";
    }

    return `${fontSizeClass} ${lineHeightClass} ${letterSpacingClass} ${fontWeightClass}`;
  };

  // Map variant to HTML tag
  const getTag = (variant: TypographyVariant, customTag?: HTMLHeadingTag): HTMLHeadingTag => {
    if (customTag) return customTag;
    
    // New mappings
    if (variant === "display") return "h1";
    if (variant === "heading-1") return "h1";
    if (variant === "heading-2") return "h2";
    if (variant === "heading-3") return "h3";
    if (variant === "heading-4") return "h4";
    if (variant === "body-large") return "p";
    if (variant === "body") return "p";
    if (variant === "caption") return "small";

    // Old mappings
    if (variant.endsWith("H1")) return "h1";
    if (variant.endsWith("H2")) return "h2";
    if (variant.endsWith("H3")) return "h3";
    if (variant.endsWith("H4")) return "h4";
    if (variant.endsWith("H5")) return "h5";
    if (variant.endsWith("H6")) return "p";
    if (variant.endsWith("H7")) return "small";
    return "p";
  };

  const tag = getTag(variant, as);
  const styleClasses = getStyleClasses(variant, weight);
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
      "text-secondary",
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
