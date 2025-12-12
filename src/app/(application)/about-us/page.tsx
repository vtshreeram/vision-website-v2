"use client";

// ** import components
import { VisionMissionGoals } from "@/components/pages/about-us";
import { OurServices } from "@/components/pages/home";
import { AboutPage, Banner, Benefits } from "@/components/shared";
import Head from "@/components/shared/head";
import Certified from "@/components/pages/about-us/certified";
import PopularBrand from "@/components/shared/popular-brand";
import Testimonials from "@/components/shared/Testimonials";
import { FadeIn } from "@/components/shared/FadeIn";

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
      {/* 1. ATTENTION - Page header */}
      <Head heading="About Us" subHeading="About Us" bgImg={headBg} />

      {/* 2. WHO WE ARE - Company introduction */}
      <FadeIn>
        <AboutPage
          variant="simple"
          isAboutUs={false}
          title={
            <>
              Experience Excellence in <br /> Malaysian Transport Tech
            </>
          }
          description="Founded in 2008, we have grown from Klang Valley to a nationwide leader. Today, we power seamless logistics across Malaysia and Singapore."
        />
      </FadeIn>

      {/* 3. INSTANT TRUST - Show recognized brands early */}
      <FadeIn>
        <PopularBrand />
      </FadeIn>

      {/* 4. INTEREST - Vision, Mission & Values */}
      <FadeIn>
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
      </FadeIn>

      {/* 5. CREDIBILITY - Certifications */}
      <FadeIn>
        <Certified />
      </FadeIn>

      {/* 6. DESIRE - Team Excellence */}
      <FadeIn>
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
      </FadeIn>

      {/* 7. WHAT WE OFFER - Services overview */}
      <FadeIn>
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
      </FadeIn>

      {/* 8. SOCIAL PROOF - Testimonials */}
      <FadeIn>
        <Testimonials />
      </FadeIn>

      {/* 9. ACTION - Final CTA */}
      <FadeIn>
        <Banner />
      </FadeIn>
    </main>
  );
};

export default AboutUsPage;
