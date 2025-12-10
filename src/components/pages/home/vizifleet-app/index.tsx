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
  IcoApp1,
  IcoApp2,
  IcoApp3,
  IcoApp4,
  IcoApp5,
  IcoApp6,
} from "@/assets/icons";

export const VizifleetApp = () => {
  const featuresLeft = [
    {
      icon: <IcoApp1 />,
      title: "AI & GPS-Driven Safety",
      desc: "Boost driver safety through AI systems and precise GPS tracking.",
    },
    {
      icon: <IcoApp2 />,
      title: "Security & Compliance",
      desc: "Ensure cargo safety through strict compliance checks.",
    },
  ];

  const featuresRight = [
    {
      icon: <IcoApp5 />,
      title: "Live Location & Map Tracking",
      desc: "Track all vehicles live on maps for instant route updates.",
    },
    {
      icon: <IcoApp6 />,
      title: "Performance & Safety Analytic",
      desc: "Use advanced reports to refine trips, cut delays, and boost safety.",
    },
  ];

  return (
    <section className="py-16 md:py-20 global-padding-container bg-background ">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          title={
            <>
              Smart Transport{" "}
              <span className="text-primary">Management System</span>
            </>
          }
          description={
            <>
              Our advanced TMS delivers smarter, safer, and more efficient fleet
              operations powered by real-time data and automation.
            </>
          }
          descriptionClassName="lg:max-w-[636px]"
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
                <IcoApp3 />
              </div>
              <div className="mt-6">
                <Typography variant="Medium_H5">
                  Fleet Visibility & Automation
                </Typography>
                <Typography variant="Regular_H6" className="mt-4 text-gray">
                  Get complete fleet insights with tools that drive smarter
                  decisions.
                </Typography>
              </div>
            </m.div>

            <div>
              <Image
                src={centerImg}
                alt="center"
                height={530}
                width={538}
                className="object-contain w-full !object-right  hidden md:block"
              />
            </div>
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInDown}
              className="text-center max-w-[400px] mx-auto md:mt-20"
            >
              <div className="flex justify-center">
                <IcoApp4 />
              </div>
              <div className="mt-6">
                <Typography variant="Medium_H5">
                  Sustainability Insights (CO₂ & EV Data)
                </Typography>
                <Typography
                  variant="Regular_H6"
                  className="mt-4 text-gray max-w-[300px] mx-auto"
                >
                  View CO₂ metrics to measure impact and plan greener fleets.
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
