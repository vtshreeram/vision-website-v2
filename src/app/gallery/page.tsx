import Gallery from "@/components/pages/gallery";
import { Banner } from "@/components/shared";
import headBg from "@/assets/images/pages/gallery/head/head-bg.webp";
import Head from "@/components/shared/head";

const GalleryPage = () => {
  return (
    <main>
      <Head heading="Gallery" subHeading="Our Gallery" bgImg={headBg} />
      <Gallery />
      <Banner />
    </main>
  );
};

export default GalleryPage;
