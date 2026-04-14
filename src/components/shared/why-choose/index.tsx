"use client";

// ** import third party packages
import { ReactNode } from "react";

// ** import components
import { Typography } from "@/components/ui/Typography";
import { SubLabel } from "@/components/shared/SubLabel";
import { Truck, Globe, Shield, Zap } from "lucide-react";

interface WhyChooseFeature {
  title: string;
  description: string;
}

interface WhyChooseProps {
  title: ReactNode;
  features: WhyChooseFeature[];
}

const icons = [Truck, Globe, Shield, Zap];

const WhyChoose = ({ title, features }: WhyChooseProps) => {
  return (
    <section className="py-16 md:py-24 global-padding-container bg-background">
      <div className="mx-auto max-w-7xl">
        {/* SubLabel */}
        <div className="mb-8">
          <SubLabel>Industries We Serve</SubLabel>
        </div>

        <Typography variant="SemiBold_H3" className="text-secondary mb-16">
          {title}
        </Typography>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const IconComponent = icons[idx] || icons[0];

            return (
              <div
                key={idx}
                className="group relative h-[320px] p-6 border border-stroke/60 rounded-sm bg-white overflow-hidden hover:shadow-lg transition-shadow flex flex-col justify-between"
              >
                {/* Top: Number */}
                <div>
                  <Typography variant="caption" className="text-gray font-semibold">
                    {String(idx + 1).padStart(2, '0')}.
                  </Typography>
                </div>

                {/* Middle: Icon */}
                <div className="flex justify-center">
                  <IconComponent
                    size={64}
                    className="text-gray opacity-30 transition-opacity group-hover:opacity-40"
                  />
                </div>

                {/* Bottom: Title and Description */}
                <div>
                  <Typography
                    variant="Bold_H5"
                    className="text-secondary mb-2"
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="Regular_H6"
                    className="text-gray"
                  >
                    {feature.description}
                  </Typography>
                </div>

                {/* Hover accent - orange corner reveal */}
                <div className="absolute bottom-0 right-0 w-0 h-0 bg-primary transition-all duration-300 group-hover:w-16 group-hover:h-16" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
