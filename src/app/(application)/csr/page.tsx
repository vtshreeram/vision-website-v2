// ** import core packages
import React from "react";

// ** import components
import Head from "@/components/shared/head";
import { AboutPage, Banner } from "@/components/shared";
import PageService from "@/components/shared/page-service";
import SustainableOperations from "@/components/shared/sustainable-operations";
import StatsSection from "@/components/shared/StatsSection";
import WhyChoose from "@/components/shared/why-choose";
import SocialCommunity from "@/components/shared/social-community";

// ** import images
import headBg from "@/assets/images/pages/csr/head.webp";
import aboutImage from "@/assets/images/pages/csr/about.png";
import pageServiceImage from "@/assets/images/pages/csr/page-service.png";
import sliderImage from "@/assets/images/pages/csr/slider-1.png";
import aboutLogo from "@/assets/images/pages/csr/about-logo.png";
import { IcoCsr1, IcoCsr2, IcoCsr3, IcoCsr4 } from "@/assets/icons";

const employeeWellbeingInitiatives = [
  "Safe and supportive working environments",
  "Equal opportunities for all employees",
  "Training and career development programs",
  "Health and safety compliance standards",
  "Employee recognition and engagement initiatives",
];

const csrDocuments = [
  {
    icon: <IcoCsr1 />,

    title: "CSR Report",
    description:
      "Our annual statement highlighting key CSR achievements, progress, and long-term organisational goals.",
    downloadLink: "#",
  },
  {
    icon: <IcoCsr2 />,
    title: "Safety & Wellbeing Policy",
    description:
      "Our framework for workplace safety, fair labour standards, and employee wellbeing compliance.",
    downloadLink: "#",
  },
  {
    icon: <IcoCsr3 />,
    title: "Community Impact Summary",
    description:
      "Key highlights showcasing our annual community impact achievements.",
    downloadLink: "#",
  },
  {
    icon: <IcoCsr4 />,
    title: "Environmental Responsibility",
    description:
      "Key highlights reflecting our annual environmental sustainability progress",
    downloadLink: "#",
  },
];

const sustainableInitiatives = [
  {
    title: "Energy Efficiency Initiatives",
    description:
      "Reducing energy use across warehouses through advanced sustainability-driven systems.",
  },
  {
    title: "Responsible Waste Practices",
    description:
      "Segregation, recycling, and reduction of all waste generated across every operating facility.",
  },
  {
    title: "Cleaner Transport Strategies",
    description:
      "Lower-emission vehicles with smarter and more efficient driving practices enabled.",
  },
  {
    title: "Water Conservation Efforts",
    description:
      "Efficient water usage supported through consistently sustainable operational practices.",
  },
  {
    title: "Environmental Awareness Training",
    description:
      "Educating teams on sustainability and more responsible operational practices consistently.",
  },
];

const sliderImages = [
  {
    image: sliderImage,
    alt: "Environmental Stewardship 1",
  },
  {
    image: sliderImage,
    alt: "Environmental Stewardship 2",
  },
  {
    image: sliderImage,
    alt: "Environmental Stewardship 3",
  },
  {
    image: sliderImage,
    alt: "Environmental Stewardship 4",
  },
];

const whyChooseFeatures = [
  {
    title: "Environmental Responsibility",
    description:
      "Greener operations through waste reduction and energy-efficient practices.",
  },
  {
    title: "Community Impact",
    description: "Supporting local communities with outreach, education",
  },
  {
    title: "Employee Wellbeing",
    description:
      "Safe workplaces through training, development, and expanded opportunities.",
  },
  {
    title: "Ethical Practices",
    description:
      "Transparent operations grounded in fairness, integrity, and compliance.",
  },
];

const CsrPage = () => {
  return (
    <main>
      <Head heading="CSR" subHeading="CSR" bgImg={headBg} />
      <AboutPage
        image={aboutImage}
        imageAlt="Visions Transport employee wellbeing and fair labour practices"
        title={
          <>
            Employee Wellbeing &<br />
            Fair Labour
          </>
        }
        description="We invest in our people by building a safe, fair, and growth-focused workplace that empowers every team member."
        listItems={employeeWellbeingInitiatives}
        isAboutUs={true}
      />
      <AboutPage
        image={aboutLogo}
        imageAlt="CSR Partnerships & Recognition"
        title={
          <>
            CSR Partnerships &<br />
            Recognition
          </>
        }
        description="Our CSR approach is strengthened through certified safety systems, ethical governance, and long-term commitments to responsible business practices that support people, planet, and performance across our entire organisation."
        listItems={[
          "Recognized for meeting global occupational health and safety benchmarks.",
          "Strengthened by partnerships that advance ethical, transparent operations.",
          "Committed to continuous improvement across workforce safety and community impact.",
        ]}
        isAboutUs={true}
        variant="secondary"
      />
      <WhyChoose
        title="Why CSR Matters at Visions"
        features={whyChooseFeatures}
      />
      <StatsSection />
      <PageService
        title={
          <>
            CSR <span className="text-primary">Documentation</span>
          </>
        }
        subtitle="Access key CSR reports, policies, and initiatives that demonstrate our commitment to responsible, transparent, and community-driven sustainability performance."
        image={pageServiceImage}
        imageAlt="CSR Documentation"
        documents={csrDocuments}
        subtitleClassName="max-w-4xl"
      />
      <SustainableOperations
        title={
          <>
            Environmental <span className="text-primary">Stewardship</span>
          </>
        }
        description="Driving positive environmental impact through responsible operational choices."
        initiatives={sustainableInitiatives}
        sliderImages={sliderImages}
      />
      <SocialCommunity />
      <Banner />
    </main>
  );
};

export default CsrPage;
