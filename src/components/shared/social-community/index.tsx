"use client";

// ** import core packages
import React from "react";

// ** import third party packages
import { motion as m } from "framer-motion";

// ** import motion variants
import { fadeInDown } from "@/utils/motion-variant";

// ** import components
import { Typography } from "@/components/ui/Typography";
import { IcoCommunity, IcoEducation, IcoSocialSafety } from "@/assets/icons";

interface CardData {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const cardsData: CardData[] = [
  {
    icon: <IcoCommunity />,
    title: "Community Outreach",
    description:
      "Supporting local groups through donations, volunteering, and community programs.",
  },
  {
    icon: <IcoEducation />,
    title: "Education & Training",
    description:
      "Delivering learning opportunities and support for youth and local communities.",
  },
  {
    icon: <IcoSocialSafety />,
    title: "Safety Awareness Programs",
    description:
      "Advancing road safety and operational safety across surrounding communities.",
  },
];

const SocialCommunity = () => {
  return (
    <section className="py-16 md:py-24 global-padding-container bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-2">
          <Typography variant="Bold_H2" className="text-black">
            Social & <span className="text-primary">Community Impact</span>
          </Typography>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-14">
          <Typography
            variant="Regular_H5"
            className="text-gray max-w-lg mx-auto"
          >
            Empowering the communities we serve through impactful engagement
            now.
          </Typography>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16 mt-12 lg:max-w-5xl lg:mx-auto">
          {cardsData.map((card, index) => (
            <m.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDown}
              className="text-center"
            >
              <div className="flex justify-center mb-6">{card.icon}</div>
              <Typography variant="Medium_H5" className="text-black mb-4">
                {card.title}
              </Typography>
              <Typography variant="Regular_H6" className="text-gray">
                {card.description}
              </Typography>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialCommunity;
