// ** import components
import { VisionMissionGoals } from "@/components/pages/about-us";
import { OurServices } from "@/components/pages/home";
import { AboutUs, Banner, Benefits } from "@/components/shared";
import Head from "@/components/shared/head";
import Certified from "@/components/pages/about-us/certified";
import PopularBrand from "@/components/shared/popular-brand";

// ** import images
import headBg from "@/assets/images/pages/about-us/head-bg.webp";

// ** import icons
import {
  IcoGoals,
  IcoMission,
  IcoVision,
  IcoManagement,
  IcoLeadership,
  IcoWorkforce,
  IcoSupport,
  IcoDevelopment,
} from "@/assets/icons";

const AboutUsPage = () => {
  const features = [
    {
      icon: <IcoManagement />,
      title: "Professional Management",
      desc: "Decades of strategic, data-driven leadership.",
    },
    {
      icon: <IcoLeadership />,
      title: "Regional Leadership",
      desc: "Local expertise with corporate-grade delivery.",
    },
    {
      icon: <IcoWorkforce />,
      title: "Dedicated Workforce",
      desc: "100+ skilled employees ensuring reliability.",
    },
    {
      icon: <IcoSupport />,
      title: "Customer Support Team",
      desc: "24/7 quick and dependable client support.",
    },
    {
      icon: <IcoDevelopment />,
      title: "Continuous Development",
      desc: "Continuous training for industry readiness.",
    },
  ];

  const cardsData = [
    {
      icon: <IcoVision />,
      title: "Our Vision",
      desc: "A tech-powered platform delivering visibility, reliability, and scalable growth for enterprises.",
    },
    {
      icon: <IcoMission />,
      title: "Our Mission",
      desc: "Enabling real-time tracking, smarter routing, and data-driven decisions.",
    },
    {
      icon: <IcoGoals />,
      title: "Our Goal",
      desc: "Integrated supply chain solutions providing transparency, efficiency, sustainability, and trust.",
    },
  ];

  return (
    <main>
      <Head heading="About Us" subHeading="About Us" bgImg={headBg} />
      <AboutUs
        isAboutUs={false}
        title={
          <>
            Experience Excellence in <br /> Malaysian Transport Tech
          </>
        }
      />

      <Certified />
      <VisionMissionGoals
        cardsData={cardsData}
        sectionTitle={
          <>
            Our Vision, Mission &
            <span className="text-primary"> Core Values</span>
          </>
        }
        sectionDescription={
          <>
            Discover the Essence of Excellence with Visions Transport Enterprise
          </>
        }
      />
      {/* <Partner /> */}
      <OurServices
        title={
          <>
            Our <span className="text-primary">Services</span>
          </>
        }
        description={
          <>Complete logistics solutions across Malaysia and Singapore.</>
        }
      />
      <Benefits
        title={
          <>
            Leadership & <span className="text-primary">Team Excellence</span>
          </>
        }
        description={
          <>
            Expert management and a dedicated <br />
            team driving logistics innovation.
          </>
        }
        features={features}
        isBackgroundWhite={true}
      />
      <PopularBrand />
      <Banner />
    </main>
  );
};

export default AboutUsPage;
