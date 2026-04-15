// ** import components
import Gallery from "@/components/pages/gallery";
import { Banner } from "@/components/shared";
import Head from "@/components/shared/head";
import FleetOverview from "@/components/shared/fleet-overview";
import { FadeIn } from "@/components/shared/FadeIn";

// ** import images
import headBg from "@/assets/images/pages/gallery/head/head-bg.webp";

const GalleryPage = () => {
  return (
    <main>
      <Head heading="Fleet Gallery" subHeading="Our Modern Fleet" bgImg={headBg} />

      {/* Fleet Overview - Context for gallery (NEW) */}
      <FadeIn>
        <FleetOverview />
      </FadeIn>

      {/* Gallery Images */}
      <FadeIn>
        <Gallery />
      </FadeIn>

      {/* Final CTA */}
      <FadeIn>
        <Banner />
      </FadeIn>
    </main>
  );
};

export default GalleryPage;
