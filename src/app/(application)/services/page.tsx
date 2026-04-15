"use client";

// ** import components
import { Banner, Services } from "@/components/shared";
import Head from "@/components/shared/head";
import { VizifleetApp } from "@/components/pages/home";
import PopularBrand from "@/components/shared/popular-brand";
import WhyChoose from "@/components/shared/why-choose";
import Testimonials from "@/components/shared/Testimonials";
import CaseStudies from "@/components/shared/case-studies";
import ServiceDetails from "@/components/shared/service-details";
import { FadeIn } from "@/components/shared/FadeIn";
import { Typography } from "@/components/ui/Typography";

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

      {/* 2.5. DEEPER DIVE - Service details & features (NEW) */}
      <FadeIn>
        <section className="bg-white global-padding-container py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Typography variant="SemiBold_H3" className="text-secondary">
                Explore Each Service in <span className="text-primary">Detail</span>
              </Typography>
              <Typography variant="Regular_H5" className="text-gray mt-4">
                Click on any service to learn about features, benefits, and use cases
              </Typography>
            </div>
            <ServiceDetails />
          </div>
        </section>
      </FadeIn>

      {/* 3. TRUST - Client logos */}
      <FadeIn>
        <PopularBrand />
      </FadeIn>

      {/* 4. PROOF OF RESULTS - Case studies (NEW) */}
      <FadeIn>
        <CaseStudies />
      </FadeIn>

      {/* 5. DESIRE - Technology advantage */}
      <FadeIn>
        <VizifleetApp />
      </FadeIn>

      {/* 6. WHY CHOOSE US - Differentiators */}
      <FadeIn>
        <WhyChoose
          title="The Visions Advantage"
          features={whyChooseFeatures}
        />
      </FadeIn>

      {/* 7. SOCIAL PROOF - Customer testimonials */}
      <FadeIn>
        <Testimonials />
      </FadeIn>

      {/* 8. ACTION - Final CTA */}
      <FadeIn>
        <Banner />
      </FadeIn>
    </main>
  );
};

export default ServicesPage;
