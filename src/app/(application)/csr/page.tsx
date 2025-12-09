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
import aboutLogo from "@/assets/images/pages/csr/about-logo.png"

const employeeWellbeingInitiatives = [
  "Safe and supportive working environments",
  "Equal opportunities for all employees",
  "Training and career development programs",
  "Health and safety compliance standards",
  "Employee recognition and engagement initiatives",
];

const csrDocuments = [
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="8"
          y="6"
          width="32"
          height="36"
          rx="2"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="14"
          y1="14"
          x2="34"
          y2="14"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="20"
          x2="34"
          y2="20"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="26"
          x2="30"
          y2="26"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="32"
          x2="28"
          y2="32"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "CSR Report",
    description:
      "Our annual statement highlighting key CSR achievements, progress, and long-term organisational goals.",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="24"
          cy="24"
          r="18"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M24 12V24L30 30"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="24" cy="20" r="3" fill="white" />
        <rect x="20" y="32" width="8" height="4" rx="1" fill="white" />
      </svg>
    ),
    title: "Safety & Wellbeing Policy",
    description:
      "Our framework for workplace safety, fair labour standards, and employee wellbeing compliance.",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="20" r="4" fill="white" />
        <circle cx="32" cy="20" r="4" fill="white" />
        <path
          d="M12 32C12 28 16 26 20 26H28C32 26 36 28 36 32"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="24" cy="12" r="3" fill="white" />
        <path
          d="M24 12V8M24 8L20 4M24 8L28 4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Community Impact Summary",
    description:
      "Key highlights showcasing our annual community impact achievements.",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="12"
          y="16"
          width="24"
          height="20"
          rx="2"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M16 16V12C16 10.8954 16.8954 10 18 10H30C31.1046 10 32 10.8954 32 12V16"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M20 24L24 28L28 24"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="30" r="1.5" fill="white" />
        <circle cx="24" cy="30" r="1.5" fill="white" />
        <circle cx="30" cy="30" r="1.5" fill="white" />
      </svg>
    ),
    title: "Environmental Responsibility",
    description:
      "Key highlights reflecting our annual environmental sustainability progress",
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
      <WhyChoose />
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
