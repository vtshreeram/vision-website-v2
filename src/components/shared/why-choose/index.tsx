"use client";

// ** import third party packages
import { ReactNode } from "react";

// ** import components
import { Typography } from "@/components/ui/Typography";

interface WhyChooseFeature {
  title: string;
  description: string;
}

interface WhyChooseProps {
  title: ReactNode;
  features: WhyChooseFeature[];
}

const WhyChoose = ({ title, features }: WhyChooseProps) => {
  return (
    <section className="py-12 md:py-16 global-padding-container bg-primary">
      <div className="mx-auto max-w-7xl">
        <Typography variant="SemiBold_H3" className={` text-white text-center`}>
          {title}
        </Typography>
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white px-6 py-8 shadow-none card-hover">
              <Typography
                variant="SemiBold_H4"
                className="text-primary max-w-[200px] mb-3"
              >
                {feature.title}
              </Typography>
              <Typography variant="Medium_H6" className="text-black/80 ">
                {feature.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
