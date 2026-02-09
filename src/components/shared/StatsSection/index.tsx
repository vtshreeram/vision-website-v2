"use client";

// ** import core packages
import React from "react";
import Image from "next/image";
import Link from "next/link";

// ** import components
import { Typography } from "@/components/ui/Typography";
import { AnimatedCounter, parseStatValue } from "@/components/ui/AnimatedCounter";
import Button from "@/components/ui/button";

// ** import assets
import sectionBg from "@/assets/images/pages/about-us/certified-bg.png";

interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats?: Stat[];
  title?: string;
  subtitle?: string;
  variant?: "default" | "primary";
  showCTA?: boolean;
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaButtonText?: string;
  ctaButtonLink?: string;
}

// Default stats for CSR page
const defaultStats: Stat[] = [
  { value: "120+", label: "Community Programs" },
  { value: "800+", label: "Employees Trained" },
  { value: "35%", label: "Safety Improvement" },
  { value: "50+", label: "Partner NGOs" },
];

// Homepage stats
const homepageStats: Stat[] = [
  { value: "10000+", label: "Shipments Delivered" },
  { value: "3500+", label: "Active Clients" },
  { value: "100+", label: "Logistics Experts" },
  { value: "100+", label: "Network Partners" },
];

const StatsSection = ({
  stats,
  title = "Proven Results",
  subtitle = "Scaling logistics operations across Southeast Asia.",
  variant = "default",
  showCTA = false,
  ctaTitle = "Ready to Move?",
  ctaSubtitle = "Let’s optimize your supply chain. Get a free consultation today.",
  ctaButtonText = "Get a Quote",
  ctaButtonLink = "/contact-us",
}: StatsSectionProps) => {
  // Use provided stats, or default based on variant
  const displayStats = stats || (variant === "primary" ? homepageStats : defaultStats);
  const isPrimary = variant === "primary";

  if (isPrimary) {
    // Primary variant - blue background with CTA (like homepage Count)
    return (
      <section className="py-12 md:py-16 global-padding-container bg-primary">
        <div className="mx-auto max-w-7xl">
          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {displayStats.map((stat, idx) => {
              const { value, suffix, prefix } = parseStatValue(stat.value);
              return (
                <div
                  key={idx}
                  className="bg-white text-center py-10 px-4 shadow-none"
                >
                  <Typography
                    variant="Bold_H2"
                    className="text-primary mb-2"
                  >
                    <AnimatedCounter
                      value={value}
                      suffix={suffix}
                      prefix={prefix}
                      duration={2.5}
                    />
                  </Typography>
                  <Typography
                    variant="Regular_H5"
                    className="text-foreground"
                  >
                    {stat.label}
                  </Typography>
                </div>
              );
            })}
          </div>
          {/* Bottom Text and Button */}
          {showCTA && (
            <div className="flex flex-col md:flex-row items-end md:items-start md:justify-between mt-12">
              <div className="mb-8 md:mb-0 space-y-4 md:max-w-[620px]">
                <Typography variant="Bold_H3" className="text-white">
                  {ctaTitle}
                </Typography>
                <Typography variant="Regular_H6" className="text-white">
                  {ctaSubtitle}
                </Typography>
              </div>
              <Link href={ctaButtonLink}>
                <Button
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  {ctaButtonText}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Default variant - white background with world map (like CSR page)
  return (
    <section className="relative py-16 md:py-24 global-padding-container overflow-hidden bg-background">
      {/* second container */}
      <div className="relative lg:py-24 overflow-hidden">
        {/* Background Image with World Map Overlay */}
        <div className="absolute inset-0 z-0 md:flex items-center justify-center hidden">
          <Image
            src={sectionBg}
            alt="Stats background"
            className="object-contain !object-center scale-80 opacity-80 grayscale-100"
            height={526}
            width={1251}
            quality={90}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Title and Subtitle */}
          <div className="text-center mb-14">
            <Typography variant="Bold_H2" className="mb-2 text-foreground">
              {title}
            </Typography>
            <Typography variant="Regular_H5" className="text-gray">
              {subtitle}
            </Typography>
          </div>

          {/* Stats Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center md:flex-row">
              {displayStats.map((stat, index) => {
                const { value, suffix, prefix } = parseStatValue(stat.value);
                return (
                  <React.Fragment key={index}>
                    {index !== 0 && (
                      <div className="w-px h-16 md:h-20 bg-foreground flex-shrink-0 hidden lg:block"></div>
                    )}
                    <div className="flex-1 text-center py-4 md:py-6 px-4 md:px-6">
                      <Typography variant="Bold_H2" className="mb-2 text-primary">
                        <AnimatedCounter
                          value={value}
                          suffix={suffix}
                          prefix={prefix}
                          duration={2}
                        />
                      </Typography>
                      <Typography variant="Regular_H5" className="text-foreground/70">
                        {stat.label}
                      </Typography>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

// Re-export as Count for backward compatibility
export const Count = () => (
  <StatsSection variant="primary" showCTA={true} />
);
