"use client";

// ** import core packages
import React from "react";
import Image from "next/image";

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
      title: "Proactive Safety",
      desc: "AI monitoring that prevents accidents before they happen.",
    },
    {
      icon: <IcoApp2 />,
      title: "Cargo Security",
      desc: "Real-time alerts and strict compliance checks to protect your goods.",
    },
  ];

  const featuresRight = [
    {
      icon: <IcoApp5 />,
      title: "Live Tracking",
      desc: "Know exactly where your shipment is on the map, instantly.",
    },
    {
      icon: <IcoApp6 />,
      title: "Smart Analytics",
      desc: "Data-driven insights to cut costs and improve delivery times.",
    },
  ];

  return (
    <section className="py-16 md:py-20 global-padding-container bg-background ">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          title={
            <>
              Total Control{" "}
              <span className="text-primary">Over Your Cargo</span>
            </>
          }
          description={
            <>
              VizFleet gives you 24/7 visibility. Track shipments, monitor driver safety, and optimize routes automatically.
            </>
          }
          descriptionClassName="lg:max-w-[636px]"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 !items-center">
          <div className=" space-y-12 md:space-y-20 ">
            {featuresLeft.map((feature, index) => (
              <div
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
              </div>
            ))}
          </div>
          <div className=" h-full  md:col-span-2 space-y-8 md:space-y-0">
            <div className="text-center max-w-[281px] mx-auto md:mb-20">
              <div className="flex justify-center">
                <IcoApp3 />
              </div>
              <div className="mt-6">
                <Typography variant="Medium_H5">
                  Full Fleet Visibility
                </Typography>
                <Typography variant="Regular_H6" className="mt-4 text-gray">
                  See your entire operation at a glance.
                </Typography>
              </div>
            </div>

            <div>
              <Image
                src={centerImg}
                alt="center"
                height={530}
                width={538}
                className="object-contain w-full !object-right  hidden md:block"
              />
            </div>
            <div className="text-center max-w-[400px] mx-auto md:mt-20">
              <div className="flex justify-center">
                <IcoApp4 />
              </div>
              <div className="mt-6">
                <Typography variant="Medium_H5">
                  Sustainability Tracking
                </Typography>
                <Typography
                  variant="Regular_H6"
                  className="mt-4 text-gray max-w-[300px] mx-auto"
                >
                  Measure your carbon footprint and optimize for green logistics.
                </Typography>
              </div>
            </div>
          </div>
          <div className="space-y-12 md:space-y-20">
            {featuresRight.map((feature, index) => (
              <div
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
