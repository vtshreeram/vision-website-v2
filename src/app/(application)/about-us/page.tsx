// ** import components
import { VisionMissionGoals } from "@/components/pages/about-us";
import { OurServices } from "@/components/pages/home";
import { AboutUs, Banner, Partner, Benefits } from "@/components/shared";
import Head from "@/components/shared/head";

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
      desc: "Decades of experience guiding growth with strategic, data-driven leadership.",
    },
    {
      icon: <IcoLeadership />,
      title: "Regional Leadership",
      desc: "Local expertise combined with corporate systems for consistent delivery.",
    },
    {
      icon: <IcoWorkforce />,
      title: "Dedicated Workforce",
      desc: "100+ skilled employees ensuring reliable, efficient daily operations.",
    },
    {
      icon: <IcoSupport />,
      title: "Customer Support Team",
      desc: "24/7 assistance across channels delivering quick, dependable client support.",
    },
    {
      icon: <IcoDevelopment />,
      title: "Continuous Development",
      desc: "Ongoing training and innovation keep our teams industry-ready.",
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
      <Head heading="About Us" subHeading="About Us" bgImg={headBg} />
      <AboutUs
      isAboutUs={false}
        title={
          <>
            Experience Excellence in <br /> Malaysian Transport Tech
          </>
        }
      />
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
            Discover the Essence of Excellence <br />
            with Visions Transport Enterprise
          </>
        }
      />
      <Partner />
      <OurServices
        title={
          <>
            Our Services{" "}
            <span className="text-primary">
              Trusted Across{" "}
              <span className="hidden md:inline">
                <br />
              </span>
              Malaysia & Singapore
            </span>
          </>
        }
        description={
          <>
            Reliable logistics for every need from bonded <br />
            trucking to warehousing and cross-border deliveries.
          </>
        }
      />
      <Benefits
        title={
          <>
            Leadership &<span className="text-primary">Team Excellence</span>
          </>
        }
        description={
          <>
            Expert management and a dedicated <br />
            team driving logistics innovation.
          </>
        }
        features={features}
      />
      <Banner />
    </main>
  );
};

export default AboutUsPage;
