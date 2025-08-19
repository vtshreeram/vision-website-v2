"use client";
import { VisionMissionGoals } from "@/components/pages/about-us";
// ** import component
import {
  Count,
  VisionForm,
  OurServices,
  VizifleetApp,
  Hero,
} from "@/components/pages/home";
import { AboutUs, Banner, Benefits, Partner } from "@/components/shared";
import WhyChoose from "@/components/shared/why-choose";

// ** import icons
import {
  IcoGoals,
  IcoMission,
  IcoVision,
  IcoQuickRide,
  IcoSafety,
  IcoQrCode,
  IcoBooking,
} from "@/assets/icons";

const Page = () => {
  const features = [
    {
      icon: <IcoQuickRide />,
      title: "ISO Certified Operations",
      desc: "International quality benchmarks for safe, reliable logistics.",
    },
    {
      icon: <IcoSafety />,
      title: "Malaysia Transport License",
      desc: "Licensed operations ensuring full national transport compliance.",
    },
    {
      icon: <IcoQrCode />,
      title: "Singapore Cross-Border Approval",
      desc: "Seamless deliveries enabled with certified cross-border licensing.",
    },
    {
      icon: <IcoBooking />,
      title: "Freight Association Member",
      desc: "Adhering to recognized global freight and logistics standards.",
    },
    {
      icon: <IcoQrCode />,
      title: "Data Security Certified",
      desc: "Protecting every shipment with strict audit-ready compliance.",
    },
  ];
  
  const cardsData = [
    {
      icon: <IcoVision />,
      title: "Complimentary Assessment",
      desc: "Contact our logistics experts for a comprehensive analysis of your current operations. We’ll identify opportunities for improvement, cost savings, and efficiency gains specific to your business requirements.",
    },
    {
      icon: <IcoMission />,
      title: "VIZFLEET Platform Setup",
      desc: "Our technical team provides complete setup and integration support, including staff training, system configuration, and testing to ensure seamless operation from day one.",
    },
    {
      icon: <IcoGoals />,
      title: "Launch and Scale",
      desc: "Begin with pilot routes to demonstrate value and gradually expand coverage based on proven performance. Our dedicated account management team ensures continuous optimization and support.",
    },
  ];
  return (
    <main>
      <Hero />
      <Partner />
      <WhyChoose />
      <AboutUs />
      <VizifleetApp />
      <VisionMissionGoals
        cardsData={cardsData}
        sectionTitle={
          <>
            Get Started with{" "}
            <span className="text-primary">
              {" "}
              Malaysia’s #1 Logistics Platform{" "}
            </span>
          </>
        }
        sectionDescription={
          "Trusted by 3,500+ Businesses Across Malaysia & Singapore"
        }
      />
      <VisionForm />
      <Count />
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
      />
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
