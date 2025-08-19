"use client";
// ** import core packages
import React from "react";

// ** import third party packages
import { motion as m } from "framer-motion";

// ** import motion variants
import { fadeInDown } from "@/utils/motion-variant";

// ** import components
import SectionHead from "@/components/shared/section-head";
import { Typography } from "@/components/ui/Typography";

interface Feature {
  icon: React.ReactElement;
  title: string;
  desc: string;
}

interface BenefitsProps {
  title: React.ReactElement | string;
  description: React.ReactElement | string;
  features: Feature[];
}

export const Benefits = ({ title, description, features }: BenefitsProps) => {
  return (
    <section className="py-16 md:py-20 global-padding-container bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHead title={title} description={description} />

        <div className="mt-8 flex flex-wrap !justify-center max-w-6xl mx-auto  gap:8 lg:gap-12  md:mt-12">
          {features.map((feature, index) => (
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDown}
              key={index}
              className="text-center max-w-[281px]"
            >
              <div className="flex justify-center text-primary">
                {feature.icon}
              </div>
              <div className="mt-6">
                <Typography variant="Medium_H5" className="font-semibold">
                  {feature.title}
                </Typography>
                <Typography variant="Regular_H6" className="mt-4 text-gray">
                  {feature.desc}
                </Typography>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
