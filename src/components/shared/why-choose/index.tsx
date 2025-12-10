"use client";

// ** import third party packages
import { motion as m } from "framer-motion";
import { ReactNode } from "react";

// ** import motion variants
import { fadeInDown } from "@/utils/motion-variant";

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
    <section className="py-10 lg:pt-16 lg:pb-20  global-padding-container bg-primary">
      <div className="mx-auto max-w-7xl">
        <Typography variant="SemiBold_H3" className={` text-white text-center`}>
          {title}
        </Typography>
        {/* Stats Row */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDown}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white px-6 py-8  shadow-none">
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
        </m.div>
      </div>
    </section>
  );
};

export default WhyChoose;
