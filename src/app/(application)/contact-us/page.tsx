"use client";

// ** import components
import ContactUs from "@/components/pages/contact-us";
import { Banner } from "@/components/shared";
import Head from "@/components/shared/head";
import Faq from "@/components/shared/Faq";
import PopularBrand from "@/components/shared/popular-brand";
import { FadeIn } from "@/components/shared/FadeIn";

// ** import images
import headBg from "@/assets/images/pages/contact-us/head-bg.png";

const ContactUsPage = () => {
  return (
    <main>
      {/* 1. ATTENTION - Page header */}
      <Head heading="Contact us" subHeading="Contact us" bgImg={headBg} />

      {/* 2. TRUST - Show trusted brands before asking for contact */}
      <FadeIn>
        <PopularBrand />
      </FadeIn>

      {/* 3. INTEREST - Contact form (main action) */}
      <FadeIn>
        <ContactUs />
      </FadeIn>

      {/* 4. ADDRESS OBJECTIONS - FAQ section */}
      <FadeIn>
        <Faq />
      </FadeIn>

      {/* 5. ACTION - Final CTA */}
      <FadeIn>
        <Banner />
      </FadeIn>
    </main>
  );
};

export default ContactUsPage;
