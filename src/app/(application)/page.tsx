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
      desc: "International quality benchmarks for safe, reliable logistics.",
    },
    {
      icon: <IcoLicense />,
      title: "Malaysia Transport License",
      desc: "Licensed operations ensuring full national transport compliance.",
    },
    {
      icon: <IcoApproval />,
      title: "Singapore Cross-Border Approval",
      desc: "Seamless deliveries enabled with certified cross-border licensing.",
    },
    {
      icon: <IcoMember />,
      title: "Freight Association Member",
      desc: "Adhering to recognized global freight and logistics standards.",
    },
    {
      icon: <IcoCertified />,
      title: "Data Security Certified",
      desc: "Protecting every shipment with strict audit-ready compliance.",
    },
  ];

  return (
    <main>
      <Hero />
      <WhyChoose />
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
          <>
            We provide a full spectrum of logistics <br /> solutions across
            Malaysia & Singapore:
          </>
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
        description={"Built on global standards, trusted across borders."}
        features={features}
      />
      <Banner />
    </main>
  );
};

export default Page;
