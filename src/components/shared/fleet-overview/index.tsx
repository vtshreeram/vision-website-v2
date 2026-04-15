"use client";

import { ReactNode } from "react";
import { Typography } from "@/components/ui/Typography";
import { SubLabel } from "@/components/shared/SubLabel";
import { Truck, MapPin, Zap, Users } from "lucide-react";

interface FleetStat {
  icon: ReactNode;
  label: string;
  value: string;
  description: string;
}

interface FleetOverviewProps {
  title?: ReactNode;
  description?: ReactNode;
  stats?: FleetStat[];
}

const defaultStats: FleetStat[] = [
  {
    icon: <Truck className="w-8 h-8" />,
    label: "Modern Fleet",
    value: "200+",
    description: "Well-maintained vehicles for reliable service",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    label: "Coverage Area",
    value: "Malaysia & Singapore",
    description: "Seamless cross-border delivery capability",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    label: "Capacity",
    value: "50,000+ kg/day",
    description: "Daily shipment capacity across all routes",
  },
  {
    icon: <Users className="w-8 h-8" />,
    label: "Professionals",
    value: "300+",
    description: "Trained drivers and logistics experts",
  },
];

const FleetOverview = ({
  title = <>Our <span className="text-primary">Modern Fleet</span></>,
  description = "State-of-the-art vehicles and experienced professionals ensuring reliable, safe deliveries every single day.",
  stats = defaultStats,
}: FleetOverviewProps) => {
  return (
    <section className="py-16 md:py-24 global-padding-container bg-background">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12">
          <SubLabel>Our Strength</SubLabel>
          <Typography variant="SemiBold_H3" className="text-secondary mt-4">
            {title}
          </Typography>
          <Typography variant="Regular_H5" className="text-gray mt-4 max-w-3xl">
            {description}
          </Typography>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-stroke/40 hover:border-primary/30 hover:shadow-lg transition-all text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 text-primary">
                {stat.icon}
              </div>

              {/* Value */}
              <Typography
                variant="Bold_H3"
                className="text-primary mb-2"
              >
                {stat.value}
              </Typography>

              {/* Label */}
              <Typography
                variant="Bold_H6"
                className="text-secondary mb-3"
              >
                {stat.label}
              </Typography>

              {/* Description */}
              <Typography
                variant="Regular_H6"
                className="text-gray text-sm"
              >
                {stat.description}
              </Typography>
            </div>
          ))}
        </div>

        {/* Fleet Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div>
              <Typography variant="Bold_H5" className="text-secondary mb-2">
                ✓ Temperature Controlled
              </Typography>
              <Typography variant="Regular_H6" className="text-gray">
                Advanced cold chain vehicles for perishables and pharmaceuticals
              </Typography>
            </div>
            <div>
              <Typography variant="Bold_H5" className="text-secondary mb-2">
                ✓ GPS Tracked
              </Typography>
              <Typography variant="Regular_H6" className="text-gray">
                Real-time tracking on every vehicle via VizFleet platform
              </Typography>
            </div>
            <div>
              <Typography variant="Bold_H5" className="text-secondary mb-2">
                ✓ Safety Certified
              </Typography>
              <Typography variant="Regular_H6" className="text-gray">
                ISO certified operations with strict safety protocols
              </Typography>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <Typography variant="Bold_H5" className="text-secondary mb-2">
                ✓ Eco-Friendly
              </Typography>
              <Typography variant="Regular_H6" className="text-gray">
                Modern vehicles with optimized fuel efficiency and emissions control
              </Typography>
            </div>
            <div>
              <Typography variant="Bold_H5" className="text-secondary mb-2">
                ✓ Fully Insured
              </Typography>
              <Typography variant="Regular_H6" className="text-gray">
                Comprehensive cargo insurance and liability coverage
              </Typography>
            </div>
            <div>
              <Typography variant="Bold_H5" className="text-secondary mb-2">
                ✓ Regular Maintenance
              </Typography>
              <Typography variant="Regular_H6" className="text-gray">
                Preventative maintenance ensures reliability and safety
              </Typography>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Typography variant="Regular_H5" className="text-gray mb-6">
            Ready to experience our world-class logistics service?
          </Typography>
          <a
            href="/contact-us"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default FleetOverview;
