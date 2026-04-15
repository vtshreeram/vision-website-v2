"use client";

import { ReactNode } from "react";
import { Typography } from "@/components/ui/Typography";
import { SubLabel } from "@/components/shared/SubLabel";
import { Heart, Users, Award } from "lucide-react";

interface ImpactMetric {
  icon: ReactNode;
  value: string;
  label: string;
  description: string;
}

interface ImpactMetricsProps {
  title?: ReactNode;
  description?: ReactNode;
  metrics?: ImpactMetric[];
}

const defaultMetrics: ImpactMetric[] = [
  {
    icon: <Heart className="w-10 h-10" />,
    value: "10,000+",
    label: "Lives Impacted",
    description: "Through community programs and charitable initiatives",
  },
  {
    icon: <Award className="w-10 h-10" />,
    value: "500K+",
    label: "Funds Donated",
    description: "Annual contributions to education and community development",
  },
  {
    icon: <Users className="w-10 h-10" />,
    value: "2,000+",
    label: "Volunteer Hours",
    description: "Employee volunteer time dedicated to community service",
  },
  {
    icon: <Heart className="w-10 h-10" />,
    value: "15+",
    label: "NGO Partners",
    description: "Collaborative relationships with trusted organizations",
  },
];

const ImpactMetrics = ({
  title = <>Our <span className="text-primary">CSR Impact</span></>,
  description = "Real numbers showing our commitment to the communities we serve",
  metrics = defaultMetrics,
}: ImpactMetricsProps) => {
  return (
    <section className="py-16 md:py-24 global-padding-container bg-gradient-to-b from-primary/5 to-transparent">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <SubLabel>Our Contribution</SubLabel>
          <Typography variant="SemiBold_H3" className="text-secondary mt-4">
            {title}
          </Typography>
          <Typography variant="Regular_H5" className="text-gray mt-4 max-w-3xl mx-auto">
            {description}
          </Typography>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-stroke/40 hover:border-primary/30 hover:shadow-lg transition-all text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 text-primary">
                {metric.icon}
              </div>

              {/* Value */}
              <Typography
                variant="Bold_H2"
                className="text-primary mb-2"
              >
                {metric.value}
              </Typography>

              {/* Label */}
              <Typography
                variant="Bold_H6"
                className="text-secondary mb-2"
              >
                {metric.label}
              </Typography>

              {/* Description */}
              <Typography
                variant="Regular_H6"
                className="text-gray text-sm"
              >
                {metric.description}
              </Typography>
            </div>
          ))}
        </div>

        {/* Yearly Breakdown */}
        <div className="mt-12 bg-white rounded-lg p-8 border border-stroke/40">
          <Typography variant="Bold_H5" className="text-secondary mb-6 text-center">
            Our CSR Investment by Year
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Typography variant="Regular_H6" className="text-gray mb-2">
                2021
              </Typography>
              <Typography variant="Bold_H4" className="text-primary">
                150K
              </Typography>
              <Typography variant="caption" className="text-gray">
                Community initiatives
              </Typography>
            </div>
            <div className="text-center">
              <Typography variant="Regular_H6" className="text-gray mb-2">
                2022
              </Typography>
              <Typography variant="Bold_H4" className="text-primary">
                300K
              </Typography>
              <Typography variant="caption" className="text-gray">
                Education programs
              </Typography>
            </div>
            <div className="text-center">
              <Typography variant="Regular_H6" className="text-gray mb-2">
                2023
              </Typography>
              <Typography variant="Bold_H4" className="text-primary">
                450K
              </Typography>
              <Typography variant="caption" className="text-gray">
                Disaster relief
              </Typography>
            </div>
            <div className="text-center">
              <Typography variant="Regular_H6" className="text-gray mb-2">
                2024
              </Typography>
              <Typography variant="Bold_H4" className="text-primary">
                500K+
              </Typography>
              <Typography variant="caption" className="text-gray">
                Expanded programs
              </Typography>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Typography variant="Regular_H5" className="text-gray mb-6">
            Want to join our mission? We welcome volunteers and partners.
          </Typography>
          <a
            href="/contact-us"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Involved Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
