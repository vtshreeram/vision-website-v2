// ** import component
import {
  Count,
  Hero,
  OurServices,
  VizifleetApp,
} from "@/components/pages/home";
import { AboutUs, Banner, Partner } from "@/components/shared";

const Page = () => {
  return (
    <main>
      <Hero />
      <Partner />
      <AboutUs />
      <VizifleetApp />
      <Count />
      <OurServices />
      <Banner />
    </main>
  );
};

export default Page;
