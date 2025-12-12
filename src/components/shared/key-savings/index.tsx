"use client";

// ** import core packages
import React from "react";

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
        <div className="py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {savings.map((saving, index) => (
              <div
                key={index}
                className={`text-center py-4 md:py-6 px-4 md:px-6 ${index % 2 === 0 && index < savings.length - 1
                    ? "border-r border-white"
                    : ""
                  } ${index < 3 ? "md:border-r border-white" : ""}`}
              >
                <Typography variant="Bold_H2" className="text-white mb-2">
                  {saving.percentage}
                </Typography>
                <Typography variant="Regular_H5" className="text-white">
                  {saving.label}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        {/* Inner white border */}
      </div>
    </section>
  );
};

export default KeySavings;
