/* eslint-disable react/no-unescaped-entities */
"use client";

// ** import core packages
import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

// ** import third party packages
import { motion as m } from "framer-motion";

// ** import motion variants
import { fadeInDown } from "@/utils/motion-variant";

// ** import components
import { Typography } from "@/components/ui/Typography";
import Button from "@/components/ui/button";

// ** import assets
import image from "@/assets/images/common/about/Logo.webp";

export const AboutUs = ({
  isAboutUs = true,
  title = (
    <>
      Speed Meets Innovation <br /> Powered by VIZFLEET
    </>
  ),
}: {
  isAboutUs?: boolean;
  title?: ReactElement | string;
}) => {
  return (
    <section
      id="aboutUs"
      className="py-16 md:py-20 bg-background global-padding-container"
    >
      <div className="mx-auto max-w-7xl  grid grid-cols-1 gap-10 md:gap-20 md:grid-cols-2 items-center">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDown}
          className="flex justify-center py-10 md:py-0"
        >
          <Image
            src={image}
            height={150}
            width={410}
            alt="about image"
            className="object-contain"
            placeholder="blur"
          />
        </m.div>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDown}
        >
          <Typography
            variant="SemiBold_H3"
            className="text-secondary mt-2 block"
          >
            {title}
          </Typography>
          <div className="mt-6 space-y-6">
            <div>
              <Typography
                variant="Regular_H6"
                className="block  text-foreground"
              >
                <span className="text-primary">
                  {" "}
                  Visions Transport Enterprise Sdn Bhd{" "}
                </span>{" "}
                delivers cutting-edge logistics solutions that revolutionize how
                businesses move cargo across Malaysia and Singapore. Since 2008,
                we've built an unmatched reputation for reliability, innovation,
                and results-driven service that powers the success of over 3,500
                satisfied clients including industry giants like Shopee Express,
                J&T Express, DHL, and GEODIS.
              </Typography>
            </div>
            <div>
              <Typography
                variant="Regular_H6"
                className="block  text-foreground"
              >
                Our proprietary VIZFLEET technology platform provides real-time
                GPS tracking, automated booking systems, and complete shipment
                visibility that traditional logistics companies simply cannot
                match. With 17+ years of proven excellence and 10,000+
                successfully completed projects, we're the trusted partner that
                growing businesses choose to scale their operations efficiently
                and cost-effectively.
              </Typography>
            </div>
          </div>

          <div className="mt-6 md:mt-8 flex flex-wrap gap-x-4 md:gap-x-6 ">
            {isAboutUs && (
              <Link href={"/about-us"}>
                <Button variant="primary">About us</Button>
              </Link>
            )}

            <Link href={"/contact-us"}>
              <Button variant="secondary"> Book Free Demo</Button>
            </Link>
          </div>
        </m.div>
      </div>
    </section>
  );
};
