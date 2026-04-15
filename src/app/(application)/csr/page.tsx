import React from "react";
import Head from "@/components/shared/head";
import { Banner } from "@/components/shared";
import headBg from "@/assets/images/pages/csr/head.webp";
import { FadeIn } from "@/components/shared/FadeIn";
import { AboutPage } from "@/components/shared/about-page";
import WhyChoose from "@/components/shared/why-choose";
import ImpactMetrics from "@/components/shared/impact-metrics";

const csrInitiatives = [
  {
    title: "Community Outreach",
    description:
      "Supporting local food banks and disaster relief efforts with logistics support and donations.",
  },
  {
    title: "Education Support",
    description:
      "Scholarships and internship programs for students pursuing careers in supply chain and logistics.",
  },
  {
    title: "Driver Wellness",
    description:
      "Comprehensive health programs and mental health support for our drivers and their families.",
  },
  {
    title: "Ethical Sourcing",
    description:
      "Ensuring all our partners and vendors adhere to strict ethical labor and safety standards.",
  },
];

const CsrPage = () => {
  return (
    <main>
      <Head
        heading="Corporate Responsibility"
        subHeading="Impact Beyond Logistics"
        bgImg={headBg}
      />
      <FadeIn>
        <AboutPage
          title="Committed to Our Communities"
          description="Visions Transport is more than a logistics provider; we are a community partner. We recognize our responsibility to give back to the communities where we operate and to foster a fair, safe, and inclusive environment for everyone."
        />
      </FadeIn>

      {/* Impact Metrics - Show our results (NEW) */}
      <FadeIn>
        <ImpactMetrics />
      </FadeIn>

      {/* CSR Pillars */}
      <FadeIn>
        <WhyChoose
          title="Our CSR Pillars"
          features={csrInitiatives}
        />
      </FadeIn>

      {/* Final CTA */}
      <FadeIn>
        <Banner />
      </FadeIn>
    </main>
  );
};

export default CsrPage;
