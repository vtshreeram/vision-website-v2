// ** import components
import { CompanyLogo } from "@/components/pages/clientele";
import { Banner, Benefits } from "@/components/shared";
import Head from "@/components/shared/head";
import Faq from "@/components/shared/Faq";
import WhyChoose from "@/components/shared/why-choose";
import CaseStudies from "@/components/shared/case-studies";
import { FadeIn } from "@/components/shared/FadeIn";

// ** import images
import headBg from "@/assets/images/pages/clientele/head/head-bg.webp";

// ** import icons
import {
  IcoOperations,
  IcoLicense,
  IcoApproval,
  IcoMember,
  IcoCertified,
} from "@/assets/icons";

const ClientelePage = () => {
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
      <Head heading="Our Clientele" subHeading="Trusted Partners" bgImg={headBg} />
      <FadeIn>
        <CompanyLogo />
      </FadeIn>

      {/* Case Studies showing our success with clients (NEW) */}
      <FadeIn>
        <CaseStudies />
      </FadeIn>

      <FadeIn>
        <Benefits
          title={
            <>
              Why Industry Leaders Choose <span className="text-primary">Visions Transport</span>
            </>
          }
          description={"Built on global standards, trusted across borders for reliability and compliance."}
          features={features}
        />
      </FadeIn>

      <FadeIn>
        <Faq />
      </FadeIn>

      <FadeIn>
        <Banner />
      </FadeIn>
    </main>
  );
};

export default ClientelePage;
