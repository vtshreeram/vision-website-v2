// ** import components
import { Banner, Services } from "@/components/shared";
import Head from "@/components/shared/head";

// ** import images
import headBg from "@/assets/images/pages/services/head-bg.webp";
import { VizifleetApp } from "@/components/pages/home";

const ServicesPage = () => {
  return (
    <main>
      <Head heading="Services" subHeading="Services" bgImg={headBg} />
      <section className=" global-padding-container py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <Services />
        </div>
      </section>
      <VizifleetApp />
      <Banner />
    </main>
  );
};

export default ServicesPage;
