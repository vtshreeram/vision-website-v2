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
    title: "End-to-End Coverage",
    description: "Comprehensive MY-SG logistics network",
  },
  {
    title: "Technology-Driven",
    description: "Real-time tracking with VizFleet",
  },
  {
    title: "Certified & Compliant",
    description: "ISO & TAPA certified operations",
  },
  {
    title: "Flexible Solutions",
    description: "Scalable for any business size",
  },
];

const ServicesPage = () => {
  return (
    <main>
      {/* 1. ATTENTION - Page header */}
      <Head heading="Services" subHeading="Services" bgImg={headBg} />

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
          title="Why Choose Our Services"
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
