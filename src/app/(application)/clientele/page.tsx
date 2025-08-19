// ** import components
import { CompanyLogo } from "@/components/pages/clientele";
import { Banner, Benefits } from "@/components/shared";
import Head from "@/components/shared/head";
import Faq from "@/components/shared/Faq";
import WhyChoose from "@/components/shared/why-choose";

// ** import images
import headBg from "@/assets/images/pages/clientele/head/head-bg.webp";

// ** import icons
import {  IcoQuickRide, IcoSafety, IcoQrCode, IcoBooking } from "@/assets/icons";

const ClientelePage = () => {
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
  return (
    <main>
      <Head heading="Clientele" subHeading="Clients" bgImg={headBg} />
      <CompanyLogo />
      <WhyChoose />
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
       
      <Faq />
      <Banner />
    </main>
  );
};

export default ClientelePage;
