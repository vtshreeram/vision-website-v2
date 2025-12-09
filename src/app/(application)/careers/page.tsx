import React from "react";

// ** import components
import Career from "./career";
import Head from "@/components/shared/head";
import { Banner } from "@/components/shared";

// ** import images
import headBg from "@/assets/images/pages/careers/head-img.png";

const CareersPage = () => {
  return (
    <div>
      <Head heading="Careers" subHeading="Careers" bgImg={headBg} />
      <Career />
      <Banner />
    </div>
  );
};

export default CareersPage;
