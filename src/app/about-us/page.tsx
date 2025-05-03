import { VisionMissionGoals } from "@/components/pages/about-us";
import { OurServices } from "@/components/pages/home";
import { AboutUs, Banner, Partner } from "@/components/shared";

const AboutUsPage = () => {
  return (
    <main>
      <AboutUs />
      <VisionMissionGoals />
      <Partner />
      <OurServices />
      <Banner />
    </main>
  );
};

export default AboutUsPage;
