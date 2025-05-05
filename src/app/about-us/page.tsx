// ** import components
import { VisionMissionGoals } from "@/components/pages/about-us";
import { OurServices } from "@/components/pages/home";
import { AboutUs, Banner, Partner } from "@/components/shared";
import Head from "@/components/shared/head";

// ** import images
import headBg from "@/assets/images/pages/about-us/head-bg.webp";

const AboutUsPage = () => {
  return (
    <main>
      <Head heading="About Us" subHeading="About Us" bgImg={headBg} />
      <AboutUs isAboutUs={true} />
      <VisionMissionGoals />
      <Partner />
      <OurServices />
      <Banner />
    </main>
  );
};

export default AboutUsPage;
