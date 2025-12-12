"use client";

import React from "react";

// ** import components
import Career from "./career";
import Head from "@/components/shared/head";
import { Banner } from "@/components/shared";
import WhyChoose from "@/components/shared/why-choose";
import PopularBrand from "@/components/shared/popular-brand";
import { FadeIn } from "@/components/shared/FadeIn";

// ** import images
import headBg from "@/assets/images/pages/careers/head-img.png";

const cultureFeatures = [
  {
    title: "Growth Opportunities",
    description: "Continuous learning and career advancement",
  },
  {
    title: "Work-Life Balance",
    description: "Flexible schedules and supportive environment",
  },
  {
    title: "Team Excellence",
    description: "Collaborate with industry professionals",
  },
  {
    title: "Meaningful Impact",
    description: "Drive innovation in logistics technology",
  },
];

const CareersPage = () => {
  return (
    <main>
      {/* 1. ATTENTION - Page header */}
      <Head heading="Careers" subHeading="Careers" bgImg={headBg} />

      {/* 2. INTEREST - Why work with us */}
      <FadeIn>
        <WhyChoose
          title="Why Join Visions Transport"
          features={cultureFeatures}
        />
      </FadeIn>

      {/* 3. DESIRE - Available positions */}
      <FadeIn>
        <Career />
      </FadeIn>

      {/* 4. TRUST - Companies we work with */}
      <FadeIn>
        <PopularBrand />
      </FadeIn>

      {/* 5. ACTION - Final CTA */}
      <FadeIn>
        <Banner />
      </FadeIn>
    </main>
  );
};

export default CareersPage;
