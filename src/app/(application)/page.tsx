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

const Page = () => {
  const features = [
    {
      icon: <IcoOperations />,
      title: "ISO Certified Operations",
      desc: "International certification ensuring safe, reliable, and quality-driven logistics.",
    },
    {
      icon: <IcoLicense />,
      title: "Malaysia Transport License",
      desc: "Fully licensed operations guaranteeing national transport compliance and safety.",
    },
    {
      icon: <IcoApproval />,
      title: "Singapore Cross-Border Approval",
      desc: "Certified for seamless, compliant Malaysia-Singapore cross-border movement.",
    },
    {
      icon: <IcoMember />,
      title: "Freight Association Member",
      desc: "Aligned with globally recognized freight and logistics industry standards.",
    },
    {
      icon: <IcoCertified />,
      title: "Data Security Certified",
      desc: "Protecting every shipment with strict, audit-ready data and security controls.",
    },
  ];

  const whyChooseFeatures = [
    {
      title: "Advanced Technology",
      description: "AI-driven visibility and automated optimization",
    },
    {
      title: "Comprehensive Coverage",
      description: "Seamless Malaysia and Singapore logistics network",
    },
    {
      title: "Proven Track Record",
      description: "17+ years powering Southeast Asia's supply chains",
    },
    {
      title: "Scalable Solutions",
      description: "From startups through regional enterprise growth",
    },
  ];

  return (
    <main>
      <Hero />
      <WhyChoose
        title="Why Leading Companies Choose Visions"
        features={whyChooseFeatures}
      />
      <AboutUs />
      <VizifleetApp />
      <LinkedinPost />
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
      <PopularBrand />
      <Count />
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
      <Banner />
    </main>
  );
};

export default Page;
