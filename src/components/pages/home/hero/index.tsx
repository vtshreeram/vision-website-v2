"use client";

// ** import core package
import Image from "next/image";
import React from "react";
import Link from "next/link";

// ** import third party packages
import { motion as m } from "framer-motion";

// ** import motion variants
import { fadeInDown } from "@/utils/motion-variant";

// ** import component
import Header from "@/components/template/header";
import { Typography } from "@/components/ui/Typography";
import Button from "@/components/ui/button";

// ** import image
import img from "@/assets/images/pages/home/hero/hero.webp";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={img}
          alt="Visions Transport logistics fleet on the road"
          fill
          placeholder="blur"
          className="object-cover object-center w-full h-full"
          priority={true}
          quality={95}
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full global-padding-container ">
        <Header />
        <div className=" max-w-7xl mx-auto flex flex-col justify-center">
          <div className="max-w-3xl my-20 md:my-32 lg:my-40">
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDown}
            >
              <Typography
                variant="Bold_H1"
                className="!text-white mb-4 text-shadow text-4xl md:text-5xl leading-tight"
              >
                Malaysia & Singapore&apos;s
                <br />
                Most Trusted Cross-Border
                <br />
                Logistics Partner
              </Typography>
              <Typography
                variant="Regular_H5"
                className="text-white mb-6 lg:max-w-[85%]"
              >
                Accelerating smart, sustainable logistics with real-time
                visibility, intelligent routing, and carbon-aligned fleet
                performance across Malaysia & Singapore.
              </Typography>
            </m.div>
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDown}
              className="mt-8 md:mt-14 flex flex-wrap gap-4 md:gap-6"
            >
              <Link href={"/contact-us"}>
                <Button variant="primary">Contact us</Button>
              </Link>
              <Link href={"/about-us"}>
                <Button
                  variant="secondary"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  About us
                </Button>
              </Link>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
};
