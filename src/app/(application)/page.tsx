"use client";

// ** import components
import {
  Count,
  OurServices,
  VizifleetApp,
  Hero,
} from "@/components/pages/home";
import { AboutUs, Banner, Benefits } from "@/components/shared";
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
      <Hero />
      <FadeIn>
        <WhyChoose
          title="Why Leading Companies Choose Visions"
          features={whyChooseFeatures}
        />
      </FadeIn>
      <FadeIn>
        <AboutUs />
      </FadeIn>
      <FadeIn>
        <VizifleetApp />
      </FadeIn>
      <FadeIn>
        <LinkedinPost />
      </FadeIn>
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
      <FadeIn>
        <PopularBrand />
      </FadeIn>
      <FadeIn>
        <Count />
      </FadeIn>
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
      <FadeIn>
        <Banner />
      </FadeIn>
    </main>
  );
};

export default Page;
