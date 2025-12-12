"use client";

// ** import core packages
import React from "react";
import Image from "next/image";

// ** import components
import { Typography } from "@/components/ui/Typography";
import { AnimatedCounter, parseStatValue } from "@/components/ui/AnimatedCounter";

// ** import assets
import sectionBg from "@/assets/images/pages/about-us/certified-bg.png";

const StatsSection = () => {
  const stats = [
    {
      number: "120+",
      label: "Community Programs",
    },
    {
      number: "800+",
      label: "Employees Trained",
    },
    {
      number: "35%",
      label: "Safety Improvement",
    },
    {
      number: "50+",
      label: "Partner NGOs",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 lg:py-32 global-padding-container overflow-hidden bg-background">
      {/* second container */}
      <div className="relative  lg:py-24 overflow-hidden">
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
          <div className="text-center mb-14 ">
            <Typography variant="Bold_H2" className="mb-2 text-foreground">
              Our Impact in Numbers
            </Typography>
            <Typography
              variant="Regular_H5"
              className="text-gray "
            >
              We measure our progress through clear community, safety, and
              people-focused initiatives.
            </Typography>
          </div>

          {/* Stats Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center md:flex-row">
              {stats.map((stat, index) => {
                const { value, suffix, prefix } = parseStatValue(stat.number);
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
                      <Typography
                        variant="Regular_H5"
                        className="text-foreground/70"
                      >
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
