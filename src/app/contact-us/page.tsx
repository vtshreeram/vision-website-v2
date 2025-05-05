
// ** import components
import ContactUs from "@/components/pages/contact-us";
import { Banner } from "@/components/shared";
import Head from "@/components/shared/head";

// ** import images
import headBg from "@/assets/images/pages/contact-us/head-bg.png";

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
