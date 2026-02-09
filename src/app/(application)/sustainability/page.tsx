import React from "react";
import Head from "@/components/shared/head";
import headBg from "@/assets/images/pages/sustainability/head.webp";
import { FadeIn } from "@/components/shared/FadeIn";
import { AboutPage } from "@/components/shared/about-page";

const environmentalActions = [
  {
    title: "Green Fleet Modernization",
    description:
      "We continuously upgrade our fleet with fuel-efficient vehicles and explore electric truck integration to significantly lower carbon emissions per mile.",
  },
  {
    title: "Smart Route Optimization",
    description:
      "Leveraging our VizFleet AI technology, we optimize delivery routes to reduce idle time, mileage, and fuel consumption, ensuring the most eco-friendly path.",
  },
  {
    title: "Paperless Operations",
    description:
      "Our digital-first approach digitizes documentation, billing, and tracking, drastically reducing paper waste and streamlining administrative processes.",
  },
  {
    title: "Sustainable Partnerships",
    description:
      "We collaborate with like-minded carriers and suppliers who share our commitment to environmental stewardship and sustainable supply chain practices.",
  },
];

const SustainabilityPage = () => {
  return (
    <main>
      <Head
        heading="Our Green Commitment"
        subHeading="Sustainable Logistics for a Better Future"
        bgImg={headBg}
      />
      <FadeIn>
        <AboutPage
          title="Driving Towards Zero Emissions"
          description="At Visions Transport, we believe that efficient logistics shouldn't come at the cost of our planet. We are dedicated to reducing our environmental impact through technology, innovation, and responsible operational practices. Our goal is to lead the industry in sustainable transportation solutions."
          listItems={environmentalActions}
        />
      </FadeIn>
    </main>
  );
};

export default SustainabilityPage;
