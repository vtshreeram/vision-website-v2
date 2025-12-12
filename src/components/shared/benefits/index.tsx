"use client";
// ** import core packages
import React from "react";

// ** import components
import SectionHead from "@/components/shared/section-head";
import { Typography } from "@/components/ui/Typography";

// ** import utils
import { cn } from "@/lib/utils";

interface Feature {
  icon: React.ReactElement;
  title: string;
  desc: string;
}

interface BenefitsProps {
  title: React.ReactElement | string;
  description: React.ReactElement | string;
  features: Feature[];
  isBackgroundWhite?: boolean;
}

export const Benefits = ({ title, description, features, isBackgroundWhite = false }: BenefitsProps) => {
  return (
    <section className={cn("py-16 md:py-20 global-padding-container", isBackgroundWhite ? "bg-background" : "bg-white")}>
      <div className="mx-auto max-w-7xl">
        <SectionHead title={title} description={description} />

        <div className="mt-12 lg:mt-16 flex flex-wrap !justify-center max-w-6xl mx-auto  gap-8 lg:gap-14  ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center max-w-[300px]"
            >
              <div className="flex justify-center text-primary">
                {feature.icon}
              </div>
              <div className="mt-6">
                <Typography variant="Medium_H5" className="font-semibold whitespace-nowrap">
                  {feature.title}
                </Typography>
                <Typography variant="Regular_H6" className="mt-4 text-gray">
                  {feature.desc}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
