"use client";

import { ReactNode } from "react";
import { Typography } from "@/components/ui/Typography";
import { SubLabel } from "@/components/shared/SubLabel";
import SectionHead from "@/components/shared/section-head";
import {
  ShoppingCart,
  Factory,
  Package,
  Building2,
  Leaf,
  Zap
} from "lucide-react";

interface IndustryItem {
  title: string;
  description: string;
  icon: ReactNode;
}

interface IndustryCoverageProps {
  title?: ReactNode;
  description?: ReactNode;
  industries?: IndustryItem[];
}

const defaultIndustries: IndustryItem[] = [
  {
    title: "E-Commerce & Retail",
    description: "Fast, reliable fulfillment and last-mile delivery for online retailers and marketplaces.",
    icon: <ShoppingCart className="w-12 h-12" />,
  },
  {
    title: "Manufacturing",
    description: "Supply chain solutions for raw materials, components, and finished goods distribution.",
    icon: <Factory className="w-12 h-12" />,
  },
  {
    title: "FMCG & Consumer Goods",
    description: "Temperature-controlled and secure transport for fast-moving consumer products.",
    icon: <Package className="w-12 h-12" />,
  },
  {
    title: "Real Estate & Construction",
    description: "Heavy equipment and materials logistics for construction sites and property development.",
    icon: <Building2 className="w-12 h-12" />,
  },
  {
    title: "Agriculture & Agribusiness",
    description: "Specialized handling for agricultural products with proper storage and temperature control.",
    icon: <Leaf className="w-12 h-12" />,
  },
  {
    title: "Technology & Electronics",
    description: "Secure, tracked delivery of high-value tech components and electronic equipment.",
    icon: <Zap className="w-12 h-12" />,
  },
];

const IndustryCoverage = ({
  title = <>Industries We <span className="text-primary">Serve</span></>,
  description = "From retail to manufacturing, we deliver across diverse sectors with specialized expertise.",
  industries = defaultIndustries,
}: IndustryCoverageProps) => {
  return (
    <section className="py-16 md:py-24 global-padding-container bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12">
          <SubLabel>Our Expertise</SubLabel>
          <Typography variant="SemiBold_H3" className="text-secondary mt-4">
            {title}
          </Typography>
          <Typography variant="Regular_H5" className="text-gray mt-4 max-w-2xl">
            {description}
          </Typography>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className="group relative p-6 bg-background rounded-lg border border-stroke/40 hover:border-primary/20 hover:shadow-md transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4 text-primary/80 group-hover:text-primary transition-colors">
                {industry.icon}
              </div>

              {/* Content */}
              <Typography
                variant="Bold_H5"
                className="text-secondary mb-3"
              >
                {industry.title}
              </Typography>
              <Typography
                variant="Regular_H6"
                className="text-gray leading-relaxed"
              >
                {industry.description}
              </Typography>

              {/* Accent on hover */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-transparent w-0 group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCoverage;
