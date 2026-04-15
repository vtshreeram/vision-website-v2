"use client";

// ** import components
import ContactUs from "@/components/pages/contact-us";
import { Banner } from "@/components/shared";
import Head from "@/components/shared/head";
import Faq from "@/components/shared/Faq";
import PopularBrand from "@/components/shared/popular-brand";
import ContactChannels from "@/components/shared/contact-channels";
import { FadeIn } from "@/components/shared/FadeIn";

// ** import images
import headBg from "@/assets/images/pages/contact-us/head-bg.png";

const ContactUsPage = () => {
  return (
    <main>
      {/* 1. ATTENTION - Page header */}
      <Head heading="Contact us" subHeading="Contact us" bgImg={headBg} />

      {/* 2. INSTANT TRUST - Show trusted brands early */}
      <FadeIn>
        <PopularBrand />
      </FadeIn>

      {/* 3. MULTI-CHANNEL CONTACT - Multiple ways to reach us (NEW) */}
      <FadeIn>
        <ContactChannels />
      </FadeIn>

      {/* 4. PRIMARY ACTION - Contact form */}
      <FadeIn>
        <ContactUs />
      </FadeIn>

      {/* 5. ADDRESS OBJECTIONS - FAQ section */}
      <FadeIn>
        <Faq />
      </FadeIn>

      {/* 6. FINAL ACTION - CTA */}
      <FadeIn>
        <Banner />
      </FadeIn>
    </main>
  );
};

export default ContactUsPage;
