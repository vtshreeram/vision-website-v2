import React from "react";
import Head from "@/components/shared/head";
import headBg from "@/assets/images/pages/careers/head-img.png";
import { FadeIn } from "@/components/shared/FadeIn";
import WhyChoose from "@/components/shared/why-choose";
import Career from "./career";

// Data for "Why Join Visions Transport"
const cultureFeatures = [
  {
    title: "Innovation First",
    description:
      "Work with VizFleet, our proprietary technology that is redefining logistics efficiency and transparency.",
  },
  {
    title: "Career Growth",
    description:
      "We invest in our people with mentorship programs, certifications, and clear paths for advancement.",
  },
  {
    title: "Safety & Wellbeing",
    description:
      "A culture that prioritizes the safety of our drivers and the wellbeing of every team member.",
  },
  {
    title: "Global Impact",
    description:
      "Be part of a supply chain network that moves the economy and connects businesses worldwide.",
  },
];

const CareersPage = () => {
  return (
    <main>
      <Head
        heading="Join Our Team"
        subHeading="Build the Future of Logistics"
        bgImg={headBg}
      />
      <FadeIn>
        <WhyChoose
          title="Why Build Your Career at Visions?"
          features={cultureFeatures}
        />
      </FadeIn>
      <FadeIn>
        <Career />
      </FadeIn>
    </main>
  );
};

export default CareersPage;
