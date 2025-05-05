import { VisionMissionGoals } from "@/components/pages/about-us";
import { OurServices } from "@/components/pages/home";
import { AboutUs, Banner, Partner } from "@/components/shared";

// ** import images
import headBg from "@/assets/images/pages/about-us/head-bg.webp";
import Head from "@/components/shared/head";

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
