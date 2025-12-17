"use client";

import {
  OurServices,
  VizifleetApp,
  Hero,
} from "@/components/pages/home";
import { AboutPage, Banner, Benefits } from "@/components/shared";
import StatsSection from "@/components/shared/StatsSection";
import WhyChoose from "@/components/shared/why-choose";

// ** import icons
import {
  IcoOperations,
  IcoLicense,
  IcoApproval,
  IcoMember,
  IcoCertified,
} from "@/assets/icons";
import PopularBrand from "@/components/shared/popular-brand";
import LinkedinPost from "@/components/pages/home/linkedin-post";
import Testimonials from "@/components/shared/Testimonials";

import { FadeIn } from "@/components/shared/FadeIn";

const Page = () => {
  const features = [
    {
      icon: <IcoOperations />,
      title: "ISO Certified Operations",
      desc: "International certification for safe, quality logistics.",
    },
    {
      icon: <IcoLicense />,
      title: "Malaysia Transport License",
      desc: "Fully licensed ensuring national compliance.",
    },
    {
      icon: <IcoApproval />,
      title: "Singapore Cross-Border Approval",
      desc: "Certified for seamless cross-border movement.",
    },
    {
      icon: <IcoMember />,
      title: "Freight Association Member",
      desc: "Aligned with global logistics standards.",
    },
    {
      icon: <IcoCertified />,
      title: "Data Security Certified",
      desc: "Strict security controls for every shipment.",
    },
  ];

  const whyChooseFeatures = [
    {
      title: "Advanced Technology",
      description: "AI-driven visibility and optimization",
    },
    {
      title: "Comprehensive Coverage",
      description: "Seamless MY-SG logistics network",
    },
    {
      title: "Proven Track Record",
      description: "17+ years powering SEA supply chains",
    },
    {
      title: "Scalable Solutions",
      description: "Scaling from startups to enterprises",
    },
  ];

  return (
    <main>
      {/* 1. ATTENTION - Hero with strong first impression */}
      <Hero />

      {/* 2. INSTANT TRUST - Show recognized brands early */}
      <FadeIn>
        <PopularBrand />
      </FadeIn>

      {/* 3. WHO WE ARE - Company introduction */}
      <FadeIn>
        <AboutPage
          variant="simple"
          title={
            <>
              We Are Experts in <br /> Logistics Solutions
            </>
          }
          description="Founded in 2008, we have grown from Klang Valley to a nationwide leader. Today, we power seamless logistics across Malaysia and Singapore."
        />
      </FadeIn>

      {/* 4. INTEREST - What we offer (core services) */}
      <FadeIn>
        <OurServices
          title={
            <>
              Our <span className="text-primary">Services</span>
            </>
          }
          description={
            <>Complete logistics solutions across Malaysia and Singapore.</>
          }
          isViewMore={true}
        />
      </FadeIn>

      {/* 5. WHY CHOOSE US - Differentiators after seeing services */}
      <FadeIn>
        <WhyChoose
          title="Why Leading Companies Choose Visions"
          features={whyChooseFeatures}
        />
      </FadeIn>

      {/* 6. PROOF IN NUMBERS - Statistics reinforce claims */}
      <FadeIn>
        <StatsSection variant="primary" showCTA={true} />
      </FadeIn>

      {/* 7. DESIRE - How we deliver excellence (technology) */}
      <FadeIn>
        <VizifleetApp />
      </FadeIn>

      {/* 8. CUSTOMER PROOF - Real testimonials build trust */}
      <FadeIn>
        <Testimonials />
      </FadeIn>

      {/* 9. CERTIFICATIONS - Quality assurance */}
      <FadeIn>
        <Benefits
          title={
            <>
              Certified for{" "}
              <span className="text-primary">Quality & Compliance</span>
            </>
          }
          description={
            "Built on global standards, trusted for safe, sustainable cross-border logistics."
          }
          features={features}
        />
      </FadeIn>

      {/* 10. SOCIAL ENGAGEMENT - For interested visitors */}
      <FadeIn>
        <LinkedinPost />
      </FadeIn>

      {/* 11. ACTION - Final CTA to convert */}
      <FadeIn>
        <Banner />
      </FadeIn>
    </main>
  );
};

export default Page;
