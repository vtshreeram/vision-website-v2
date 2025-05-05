// ** import component
import {
  Count,
  VisionForm,
  OurServices,
  VizifleetApp,
  Hero,
} from "@/components/pages/home";
import { AboutUs, Banner, Partner } from "@/components/shared";

const Page = () => {
  return (
    <main>
      <Hero />
      <VisionForm />
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
