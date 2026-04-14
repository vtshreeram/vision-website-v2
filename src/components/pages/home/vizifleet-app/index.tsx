"use client";

// ** import core packages
import React from "react";
import Image from "next/image";

// ** import components
import { SubLabel } from "@/components/shared/SubLabel";
import { Typography } from "@/components/ui/Typography";

// ** import assets
import centerImg from "@/assets/images/common/vizifleet-app/center-img.webp";

export const VizifleetApp = () => {
  const steps = [
    {
      number: 1,
      title: "Request a Quote",
      desc: "Tell us about your shipment, timeline, and specific requirements.",
    },
    {
      number: 2,
      title: "Fleet Assignment",
      desc: "We match your cargo with the perfect vehicle and route.",
    },
    {
      number: 3,
      title: "Route Optimization",
      desc: "Our AI plans the fastest, most efficient path across borders.",
    },
    {
      number: 4,
      title: "Real-Time Tracking",
      desc: "Monitor your shipment live with 24/7 GPS visibility.",
    },
  ];

  return (
    <section className="py-16 md:py-24 global-padding-container bg-background">
      <div className="mx-auto max-w-7xl">
        {/* SubLabel */}
        <div className="mb-8">
          <SubLabel>Our Process</SubLabel>
        </div>

        <Typography variant="SemiBold_H3" className="text-secondary mb-4">
          How We Deliver Excellence
        </Typography>
        <Typography variant="Regular_H6" className="text-gray mb-16 max-w-2xl">
          From quote to delivery, our streamlined process ensures your cargo arrives safely and on time.
        </Typography>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Process Steps */}
          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-6">
                {/* Number Block */}
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-sm flex items-center justify-center">
                  <Typography variant="Bold_H4" className="!text-white">
                    {step.number}
                  </Typography>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <Typography variant="Bold_H5" className="text-secondary mb-2">
                    {step.title}
                  </Typography>
                  <Typography variant="Regular_H6" className="text-gray">
                    {step.desc}
                  </Typography>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="flex items-center justify-center">
            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={centerImg}
                alt="Process flow visualization"
                width={530}
                height={530}
                className="object-contain w-full h-auto"
                placeholder="blur"
                quality={85}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
