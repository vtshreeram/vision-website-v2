"use client";

// ** import core packages
import React from "react";
import Image from "next/image";

// ** import third party packages
import { motion as m } from "framer-motion";

// ** import motion variants
import { fadeInDown } from "@/utils/motion-variant";

// ** import components
import SectionHead from "@/components/shared/section-head";
import { Typography } from "@/components/ui/Typography";

// ** import assets
import centerImg from "@/assets/images/common/vizifleet-app/center-img.webp";
import { IcoQuickRide, IcoSafety, IcoQrCode, IcoBooking } from "@/assets/icons";

const featuresLeft = [
  {
    icon: <IcoQuickRide />,
    title: "Quick ride",
    desc: "Lorem ipsum dolor sit amet consectetur. Tristique lacus nec in id quis in sed. Venenatis proin",
  },
  {
    icon: <IcoSafety />,
    title: "Safety",
    desc: "Lorem ipsum dolor sit amet consectetur. Tristique lacus nec in id quis in sed. Venenatis proin",
  },
];

const featuresRight = [
  {
    icon: <IcoQrCode />,
    title: "QR Code scanning",
    desc: "Lorem ipsum dolor sit amet consectetur. Tristique lacus nec in id quis in sed. Venenatis proin",
  },
  {
    icon: <IcoBooking />,
    title: "Quick and easy booking",
    desc: "Lorem ipsum dolor sit amet consectetur. Tristique lacus nec in id quis in sed. Venenatis proin",
  },
];

export const VizifleetApp = () => {
  return (
    <section className="py-16 md:py-20 global-padding-container">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          title={
            <>
              Our <span className="text-primary uppercase">VIZFLEET APP</span>
            </>
          }
          description="Lorem ipsum dolor sit amet consectetur. Dictum adipiscing orci in tincidunt. Sagittis pulvinar mattis."
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 items-center">
          <div className="h-full space-y-12 md:space-y-20 ">
            {featuresLeft.map((feature, index) => (
              <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInDown}
                key={index}
                className="text-center max-w-[281px] mx-auto"
              >
                <div className="flex justify-center">{feature.icon}</div>
                <div className="mt-6">
                  <Typography variant="Medium_H5">{feature.title}</Typography>
                  <Typography variant="Regular_H6" className="mt-4 text-gray">
                    {feature.desc}
                  </Typography>
                </div>
              </m.div>
            ))}
          </div>
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDown}
            className=" h-full  md:col-span-2 "
          >
            <Image
              src={centerImg}
              alt="center"
              height={530}
              width={538}
              className="object-contain hidden md:block"
            />
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDown}
              className="text-center max-w-[281px] mx-auto md:mt-20"
            >
              <div className="flex justify-center">
                <IcoSafety />
              </div>
              <div className="mt-6">
                <Typography variant="Medium_H5">Safety</Typography>
                <Typography variant="Regular_H6" className="mt-4 text-gray">
                  Lorem ipsum dolor sit amet consectetur. Tristique lacus nec in
                  id quis in sed. Venenatis proin
                </Typography>
              </div>
            </m.div>
          </m.div>
          <div className="h-full  space-y-12 md:space-y-20">
            {featuresRight.map((feature, index) => (
              <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInDown}
                key={index}
                className="text-center max-w-[281px] mx-auto"
              >
                <div className="flex justify-center">{feature.icon}</div>
                <div className="mt-6">
                  <Typography variant="Medium_H5">{feature.title}</Typography>
                  <Typography variant="Regular_H6" className="mt-4 text-gray">
                    {feature.desc}
                  </Typography>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
