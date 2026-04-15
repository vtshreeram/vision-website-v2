"use client";

// ** import components
import { VisionMissionGoals } from "@/components/pages/about-us";
import { OurServices } from "@/components/pages/home";
import { AboutPage, Banner, Benefits } from "@/components/shared";
import Head from "@/components/shared/head";
import Certified from "@/components/pages/about-us/certified";
import PopularBrand from "@/components/shared/popular-brand";
import Testimonials from "@/components/shared/Testimonials";
import LeadershipTeam from "@/components/shared/leadership-team";
import OriginStory from "@/components/shared/origin-story";
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
      title: "Experienced Leaders",
      desc: "Strategic vision backed by decades of industry proof.",
    },
    {
      icon: <IcoLeadership />,
      title: "Regional Experts",
      desc: "Deep local knowledge with world-class standards.",
    },
    {
      icon: <IcoWorkforce />,
      title: "Dedicated Drivers",
      desc: "100+ trained professionals who care about your cargo.",
    },
    {
      icon: <IcoSupport />,
      title: "24/7 Support",
      desc: "Real humans ready to help, anytime.",
    },
    {
      icon: <IcoDevelopment />,
      title: "Always Improving",
      desc: "Continuous training to stay ahead of the curve.",
    },
  ];

  const cardsData = [
    {
      icon: <IcoVision />,
      title: "Our Vision",
      desc: "To be the digital backbone of Southeast Asian logistics.",
    },
    {
      icon: <IcoMission />,
      title: "Our Mission",
      desc: "To deliver certainty in an uncertain world through smart technology and relentless reliability.",
    },
    {
      icon: <IcoGoals />,
      title: "Our Goal",
      desc: "To make cross-border trade seamless, sustainable, and simple.",
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
              Building the Future <br /> of Logistics
            </>
          }
          description="Since 2008, we've been rewriting the rules of logistics. From a local fleet to a regional powerhouse, we're driven by one goal: moving your business forward."
        />
      </FadeIn>

      {/* 3. COMPANY STORY - Origin story & journey (NEW) */}
      <FadeIn>
        <OriginStory />
      </FadeIn>

      {/* 4. INSTANT TRUST - Show recognized brands */}
      <FadeIn>
        <PopularBrand />
      </FadeIn>

      {/* 5. INTEREST - Vision, Mission & Values */}
      <FadeIn>
        <VisionMissionGoals
          cardsData={cardsData}
          sectionTitle={
            <>
              Our <span className="text-primary">Purpose</span>
            </>
          }
          sectionDescription={
            <>
              What drives us to deliver every day.
            </>
          }
        />
      </FadeIn>

      {/* 6. CREDIBILITY - Certifications */}
      <FadeIn>
        <Certified />
      </FadeIn>

      {/* 7. PERSONAL TOUCH - Leadership Team (NEW) */}
      <FadeIn>
        <LeadershipTeam />
      </FadeIn>

      {/* 8. DESIRE - Team Excellence */}
      <FadeIn>
        <Benefits
          title={
            <>
              Powered by <span className="text-primary">People</span>
            </>
          }
          description={
            <>
              Technology guides us, but it's our people who deliver.
            </>
          }
          features={features}
          isBackgroundWhite={true}
        />
      </FadeIn>

      {/* 9. WHAT WE OFFER - Services overview */}
      <FadeIn>
        <OurServices
          title={
            <>
              End-to-End <span className="text-primary">Supply Chain Solutions</span>
            </>
          }
          description={
            <>Everything you need to streamline your operations.</>
          }
        />
      </FadeIn>

      {/* 10. SOCIAL PROOF - Testimonials */}
      <FadeIn>
        <Testimonials />
      </FadeIn>

      {/* 11. ACTION - Final CTA */}
      <FadeIn>
        <Banner />
      </FadeIn>
    </main>
  );
};

export default AboutUsPage;
