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
import {
  IcoQrCode,
  IcoBooking,
  IcoGpsTracking,
  IcoCustomerOrder,
  IcoNotification,
  IcoPerformance,
} from "@/assets/icons";

export const VizifleetApp = () => {
  const featuresLeft = [
    {
      icon: <IcoGpsTracking />,
      title: "Real-Time GPS Tracking",
      desc: "Monitor exact cargo location with live updates every 30 seconds",
    },
    {
      icon: <IcoCustomerOrder />,
      title: "Custom Order Management",
      desc: "Tailored workflows that match your specific business requirements",
    },
  ];

  const featuresRight = [
    {
      icon: <IcoQrCode />,
      title: "QR Code scanning",
      desc: "Instant proof of pickup and delivery with digital documentation",
    },
    {
      icon: <IcoBooking />,
      title: "Quick and easy booking",
      desc: "Schedule shipments in under 2 minutes through our intuitive interface",
    },
  ];

  return (
    <section className="py-16 md:py-20 global-padding-container">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          title={
            <>
              Smarter Fleet Management at{" "}
              <span className="text-primary">Your Fingertips</span>
            </>
          }
          description={
            <>
              {" "}
              VizFleet is designed to simplify logistics with modern{" "}
              <span className="hidden md:inline">
                <br />
              </span>{" "}
              tools that keep your fleet running smoothly.
            </>
          }
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 !items-center">
          <div className=" space-y-12 md:space-y-20 ">
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
            className=" h-full  md:col-span-2 space-y-8 md:space-y-0"
          >
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDown}
              className="text-center max-w-[281px] mx-auto md:mb-20"
            >
              <div className="flex justify-center">
                <IcoNotification />
              </div>
              <div className="mt-6">
                <Typography variant="Medium_H5">
                  Automated Notifications
                </Typography>
                <Typography variant="Regular_H6" className="mt-4 text-gray">
                  Keep customers informed with automatic delivery updates
                </Typography>
              </div>
            </m.div>
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
                <IcoPerformance />
              </div>
              <div className="mt-6">
                <Typography variant="Medium_H5">
                  Performance Analytics
                </Typography>
                <Typography variant="Regular_H6" className="mt-4 text-gray">
                  Comprehensive reporting and insights for continuous
                  optimization
                </Typography>
              </div>
            </m.div>
          </m.div>
          <div className="space-y-12 md:space-y-20">
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
