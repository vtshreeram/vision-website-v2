"use client"
// ** import third party packages
import { motion as m } from "framer-motion";

// ** import motion variants
import { fadeInDown } from "@/utils/motion-variant";

// ** import components
import { Typography } from "@/components/ui/Typography";

const features = [
  {
    title: "Advanced Technology",
    description: "Real-time tracking and automated management",
  },
  {
    title: "Comprehensive Coverage",
    description: "Complete Malaysia and Singapore network",
  },
  {
    title: "Proven Track Record",
    description: "17+ years serving Southeast Asia's logistics needs",
  },
  {
    title: "Advanced Scalable Solutions",
    description: "From startups to enterprise-level operations",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-10 lg:pt-16 lg:pb-20  global-padding-container bg-primary">
      <div className="mx-auto max-w-7xl">
        <Typography variant="SemiBold_H3" className={` text-white text-center`}>
          Why Leading Companies Choose Visions
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
            <div
              key={idx}
              className="bg-white p-6  shadow-none"
            >
              <Typography
                variant="Bold_H4"
                className="text-foreground mb-3"
              >
                {feature.title}
              </Typography>
              <Typography
                variant="Regular_H6"
                className="text-gray "
              >
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
