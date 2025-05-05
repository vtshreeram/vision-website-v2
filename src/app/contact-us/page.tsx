import ContactUs from "@/components/pages/contact-us";
import { Banner } from "@/components/shared";

// ** import images
import headBg from "@/assets/images/pages/contact-us/head-bg.png";
import Head from "@/components/shared/head";

const ContactUsPage = () => {
  return (
    <main>
      <Head heading="Contact us" subHeading="Contact us" bgImg={headBg} />
      <ContactUs />
      <Banner />
    </main>
  );
};

export default ContactUsPage;
