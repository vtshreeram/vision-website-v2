"use client";

// ** import core packages
import React from "react";

// ** import third party packages
import { motion as m } from "framer-motion";

// ** import motion variants
import { fadeInDown } from "@/utils/motion-variant";

// ** import components
import { Typography } from "@/components/ui/Typography";

const savings = [
  { percentage: "28%", label: "Fuel Savings" },
  { percentage: "20%", label: "CO2 Reduction" },
  { percentage: "65%", label: "Energy Efficient" },
  { percentage: "40%", label: "Paper Reduction" },
];

const KeySavings = () => {
  return (
    <section className="py-0 global-padding-container bg-primary">
      <div className="max-w-7xl mx-auto">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDown}
          className="py-8 md:py-12"
        >
          <div className="flex items-center">
            {savings.map((saving, index) => (
              <React.Fragment key={index}>
                {index !== 0 && (
                  <div className="w-px h-16 md:h-20 bg-white flex-shrink-0"></div>
                )}
                <div className="flex-1 text-center py-4 md:py-6 px-4 md:px-6">
                  <Typography variant="Bold_H2" className="text-white  mb-2 ">
                    {saving.percentage}
                  </Typography>
                  <Typography variant="Regular_H5" className="text-white">
                    {saving.label}
                  </Typography>
                </div>
              </React.Fragment>
            ))}
          </div>
        </m.div>
        {/* Inner white border */}
      </div>
    </section>
  );
};

export default KeySavings;
