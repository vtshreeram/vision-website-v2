"use client";

// ** import core packages
import React from "react";

// ** import third party packages
import { motion as m } from "framer-motion";

// ** import motion variants
import { fadeInDown } from "@/utils/motion-variant";

// ** import components
import { Typography } from "@/components/ui/Typography";

interface CardData {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const cardsData: CardData[] = [
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="4" width="18" height="18" rx="2" fill="#ED2224" />
        <rect x="26" y="4" width="18" height="18" rx="2" fill="#ED2224" />
        <rect x="4" y="26" width="18" height="18" rx="2" fill="#ED2224" />
        <rect x="26" y="26" width="18" height="18" rx="2" fill="#ED2224" />
      </svg>
    ),
    title: "Community Outreach",
    description:
      "Supporting local groups through donations, volunteering, and community programs.",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 12C8 10.8954 8.89543 10 10 10H38C39.1046 10 40 10.8954 40 12V36C40 37.1046 39.1046 38 38 38H10C8.89543 38 8 37.1046 8 36V12Z"
          fill="#ED2224"
        />
        <path
          d="M8 12C8 10.8954 8.89543 10 10 10H24V38H10C8.89543 38 8 37.1046 8 36V12Z"
          fill="#ED2224"
          fillOpacity="0.8"
        />
        <line
          x1="18"
          y1="20"
          x2="30"
          y2="20"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="18"
          y1="24"
          x2="30"
          y2="24"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="18"
          y1="28"
          x2="26"
          y2="28"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Education & Training",
    description:
      "Delivering learning opportunities and support for youth and local communities.",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 6L8 14V22C8 30.8366 12.4772 38.9875 19.5 43.5C21.5 44.5 22.5 44.5 24 44.5C25.5 44.5 26.5 44.5 28.5 43.5C35.5228 38.9875 40 30.8366 40 22V14L24 6Z"
          fill="#ED2224"
        />
        <path
          d="M20 26L24 30L32 22"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
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
        <div className="text-center mb-12">
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
              <div className="flex justify-center mb-4">{card.icon}</div>
              <Typography variant="Medium_H5" className="text-black mb-3">
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
