// ** import core packages
import React from "react";

// ** import components
import Head from "@/components/shared/head";
import { AboutPage, Banner, Partner } from "@/components/shared";
import SocialCommunity from "@/components/shared/social-community";
import KeySavings from "@/components/shared/key-savings";
import BannerImage from "@/components/shared/banner-image";
import PageService from "@/components/shared/page-service";

// ** import images
import headBg from "@/assets/images/pages/sustainability/head.webp";
import aboutImage from "@/assets/images/pages/sustainability/about.png";
import pageServiceImage from "@/assets/images/pages/sustainability/page-service.png";
import SustainableOperations from "@/components/shared/sustainable-operations";
import sliderImage from "@/assets/images/pages/csr/slider-1.png";

const environmentalActions = [
  "Reduce carbon footprint through optimized routing",
  "Improve energy efficiency across all facilities",
  "Promote responsible and compliant waste management",
  "Accelerate adoption of advanced greener technologies",
  "Support customers' long-term environmental and ESG goals",
];

const SustainabilityPage = () => {
  const packagingDocuments = [
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
            y="20"
            width="24"
            height="18"
            rx="2"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M16 20V14C16 12.8954 16.8954 12 18 12H30C31.1046 12 32 12.8954 32 14V20"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M12 20H36"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M22 28L24 24L26 28"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 24V32"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="20" cy="34" r="1.5" fill="white" />
          <circle cx="24" cy="34" r="1.5" fill="white" />
          <circle cx="28" cy="34" r="1.5" fill="white" />
        </svg>
      ),
      title: "Recyclable Packaging",
      description:
        "Promoting the use of eco-friendly, reusable packaging materials.",
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
            r="14"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M24 18L28 22L24 26L20 22L24 18Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 18V12M24 26V36"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="18" cy="18" r="2" stroke="white" strokeWidth="1.5" />
          <circle cx="30" cy="18" r="2" stroke="white" strokeWidth="1.5" />
          <circle cx="18" cy="30" r="2" stroke="white" strokeWidth="1.5" />
          <circle cx="30" cy="30" r="2" stroke="white" strokeWidth="1.5" />
        </svg>
      ),
      title: "Optimized Cargo Loading",
      description:
        "Reducing unnecessary trips and lowering overall transport emissions.",
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
          <path
            d="M16 22C16 20.8954 16.8954 20 18 20C19.1046 20 20 20.8954 20 22V26C20 27.1046 19.1046 28 18 28C16.8954 28 16 27.1046 16 26V22Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M28 22C28 20.8954 28.8954 20 30 20C31.1046 20 32 20.8954 32 22V26C32 27.1046 31.1046 28 30 28C28.8954 28 28 27.1046 28 26V22Z"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M18 28L20 30L22 28M26 28L28 30L30 28"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 30L24 34L28 30"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Partner Collaboration",
      description:
        "Working with clients to implement greener packaging initiatives.",
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
            x="14"
            y="14"
            width="20"
            height="22"
            rx="2"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M18 14V12C18 10.8954 18.8954 10 20 10H28C29.1046 10 30 10.8954 30 12V14"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M20 20L24 16L28 20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 26L24 22L28 26"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 32L24 28L28 32"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Waste Reduction Efforts",
      description:
        "Minimizing material waste across every stage of the handling process.",
    },
  ];

  const warehousingInitiatives = [
    {
      title: "Solar-Powered Energy",
      description:
        "We use solar power systems to significantly reduce carbon emissions.",
    },
    {
      title: "LED-Efficient Lighting",
      description:
        "LED lighting lowers energy use and enhances operational efficiency.",
    },
    {
      title: "Smart Cooling Systems",
      description:
        "Cooling systems reduce energy use through advanced efficiency controls.",
    },
    {
      title: "Responsible Water Usage",
      description:
        "Water systems reduce waste and support more efficient operations.",
    },
    {
      title: "Waste & Recycling",
      description:
        "Recycling efforts reduce waste and support cleaner, greener facilities.",
    },
  ];

  const sliderImages = [
    {
      image: sliderImage,
      alt: "Eco-Friendly Warehousing Operations 1",
    },
    {
      image: sliderImage,
      alt: "Eco-Friendly Warehousing Operations 2",
    },
    {
      image: sliderImage,
      alt: "Eco-Friendly Warehousing Operations 3",
    },
    {
      image: sliderImage,
      alt: "Eco-Friendly Warehousing Operations 4",
    },
  ];

  return (
    <main>
      <Head
        heading="Sustainability"
        subHeading="Sustainability"
        bgImg={headBg}
      />
      <AboutPage
        image={aboutImage}
        imageAlt="Visions Transport electric vehicle and sustainability initiatives"
        title="Our Environmental Promise"
        description="We are taking clear, measurable actions to reduce emissions, conserve resources, and operate responsibly. Our sustainability commitment is anchored in smarter planning, cleaner fleet operations, and ongoing improvements aligned with global environmental standards to support a greener supply chain and stronger ESG performance for our partners."
        listItems={environmentalActions}
        isAboutUs={true}
      />
      <KeySavings />

      <BannerImage />
      <SocialCommunity />
      <Partner />
      <PageService
        title={
          <>
            Sustainable Packaging & <span className="text-primary">Cargo</span>{" "}
            Handling
          </>
        }
        subtitle="Greener packaging and handling practices for sustainable logistics."
        image={pageServiceImage}
        imageAlt="Sustainable Packaging & Cargo Handling"
        documents={packagingDocuments}
      />

      <SustainableOperations
        title={
          <>
            Eco-Friendly{" "}
            <span className="text-primary">Warehousing Operations</span>
          </>
        }
        description="Building cleaner, energy-efficient warehouses that minimise impact and advance sustainability."
        initiatives={warehousingInitiatives}
        sliderImages={sliderImages}
      />
      <Banner />
    </main>
  );
};

export default SustainabilityPage;
