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
      desc: "World-class safety & quality protocols.",
    },
    {
      icon: <IcoLicense />,
      title: "Malaysia Transport License",
      desc: "100% compliant with local regulations.",
    },
    {
      icon: <IcoApproval />,
      title: "Singapore Cross-Border Approval",
      desc: "Approved for fast cross-border transit.",
    },
    {
      icon: <IcoMember />,
      title: "Freight Association Member",
      desc: "Recognized by global trade bodies.",
    },
    {
      icon: <IcoCertified />,
      title: "Data Security Certified",
      desc: "Top-tier cargo security measures.",
    },
  ];

  const whyChooseFeatures = [
    {
      title: "Real-Time Visibility",
      description: "Track every shipment 24/7 with our AI-powered platform.",
    },
    {
      title: "Cross-Border Experts",
      description: "Seamless customs clearance and transport between Malaysia & Singapore.",
    },
    {
      title: "17+ Years Experience",
      description: "Deep industry knowledge you can rely on.",
    },
    {
      title: "Enterprise Ready",
      description: "Flexible fleets that grow with your business demands.",
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
              Logistics That Moves <br /> Your Business Forward
            </>
          }
          description="From local deliveries to complex cross-border shipments, we ensure your goods arrive safely and on schedule. No excuses, just results."
        />
      </FadeIn>

      {/* 4. INTEREST - What we offer (core services) */}
      <FadeIn>
        <OurServices
          title={
            <>
              End-to-End <span className="text-primary">Supply Chain Solutions</span>
            </>
          }
          description={
            <>Everything you need to streamline your operations.</>
          }
          isViewMore={true}
        />
      </FadeIn>

      {/* 5. WHY CHOOSE US - Differentiators after seeing services */}
      <FadeIn>
        <WhyChoose
          title="Why Industry Leaders Trust Visions"
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
              <span className="text-primary">Excellence</span>
            </>
          }
          description={
            "We adhere to the strictest global standards for safety, security, and compliance."
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
