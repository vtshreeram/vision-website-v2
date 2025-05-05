import { CompanyLogo } from "@/components/pages/clientele";
import { Banner } from "@/components/shared";

// ** import images
import headBg from "@/assets/images/pages/clientele/head/head-bg.webp";
import Head from "@/components/shared/head";

const ClientelePage = () => {
  return (
    <main>
      <Head heading="Clientele" subHeading="Clients" bgImg={headBg} />
      <CompanyLogo />
      <Banner />
    </main>
  );
};

export default ClientelePage;
