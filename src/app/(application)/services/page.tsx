"use client";

// ** import components
import { Banner, Services } from "@/components/shared";
import Head from "@/components/shared/head";
import { VizifleetApp } from "@/components/pages/home";
import PopularBrand from "@/components/shared/popular-brand";
import WhyChoose from "@/components/shared/why-choose";
import Testimonials from "@/components/shared/Testimonials";
import { FadeIn } from "@/components/shared/FadeIn";

// ** import images
import headBg from "@/assets/images/pages/services/head-bg.webp";

const whyChooseFeatures = [
  {
    title: "Cross-Border Network",
    description: "Seamless door-to-door coverage across Malaysia & Singapore.",
  },
  {
    title: "Real-Time Tracking",
    description: "Total visibility 24/7 with our proprietary VizFleet platform.",
  },
  {
    title: "Fully Certified",
    description: "ISO & TAPA compliant for maximum security and peace of mind.",
  },
  {
    title: "Scalable Growth",
    description: "Flexible logistics solutions that expand as your business grows.",
  },
];

const ServicesPage = () => {
  return (
    <main>
      {/* 1. ATTENTION - Page header */}
      <Head
        heading="Our Logistics Services"
        subHeading="End-to-end supply chain solutions designed for efficiency."
        bgImg={headBg}
      />

      {/* 2. INTEREST - Core service offerings */}
      <FadeIn>
        <section className="bg-background global-padding-container py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <Services />
          </div>
        </section>
      </FadeIn>

      {/* 3. TRUST - Client logos */}
      <FadeIn>
        <PopularBrand />
      </FadeIn>

      {/* 4. DESIRE - Technology advantage */}
      <FadeIn>
        <VizifleetApp />
      </FadeIn>

      {/* 5. WHY CHOOSE US - Differentiators */}
      <FadeIn>
        <WhyChoose
          title="The Visions Advantage"
          features={whyChooseFeatures}
        />
      </FadeIn>

      {/* 6. SOCIAL PROOF - Customer testimonials */}
      <FadeIn>
        <Testimonials />
      </FadeIn>

      {/* 7. ACTION - Final CTA */}
      <FadeIn>
        <Banner />
      </FadeIn>
    </main>
  );
};

export default ServicesPage;
