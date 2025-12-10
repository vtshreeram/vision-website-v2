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
import sliderImage from "@/assets/images/pages/sustainability/slider.webp";
import {
  IcoSustainability5,
  IcoSustainability6,
  IcoSustainability7,
  IcoSustainability8,
} from "@/assets/icons";

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
      icon: <IcoSustainability5 />,
      title: "Recyclable Packaging",
      description:
        "Promoting the use of eco-friendly, reusable packaging materials.",
    },
    {
      icon: <IcoSustainability6 />,
      title: "Optimized Cargo Loading",
      description:
        "Reducing unnecessary trips and lowering overall transport emissions.",
    },
    {
      icon: <IcoSustainability7 />,
      title: "Partner Collaboration",
      description:
        "Working with clients to implement greener packaging initiatives.",
    },
    {
      icon: <IcoSustainability8 />,
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
