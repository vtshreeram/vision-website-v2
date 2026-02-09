// ** import components
import Gallery from "@/components/pages/gallery";
import { Banner } from "@/components/shared";
import Head from "@/components/shared/head";

// ** import images
import headBg from "@/assets/images/pages/gallery/head/head-bg.webp";

const GalleryPage = () => {
  return (
    <main>
      <Head heading="Fleet Gallery" subHeading="Our Modern Fleet" bgImg={headBg} />
      <Gallery />
      <Banner />
    </main>
  );
};

export default GalleryPage;
