"use client";

import { ReactNode } from "react";
import { Typography } from "@/components/ui/Typography";
import { SubLabel } from "@/components/shared/SubLabel";
import { CheckCircle, Truck, MapPin, Package } from "lucide-react";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: ReactNode;
}

interface ProcessFlowProps {
  title?: ReactNode;
  description?: ReactNode;
  steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Booking & Planning",
    description: "Submit your shipment details through our portal or call our team. We verify compliance and plan optimal routes using AI technology.",
    icon: <Package className="w-10 h-10" />,
  },
  {
    step: 2,
    title: "Pickup & Transit",
    description: "Our fleet picks up from your location and transports your goods with real-time tracking via VizFleet. Every movement is monitored.",
    icon: <Truck className="w-10 h-10" />,
  },
  {
    step: 3,
    title: "Track & Monitor",
    description: "Track your shipment 24/7 with GPS, temperature monitoring, and live updates. Full visibility from origin to destination.",
    icon: <MapPin className="w-10 h-10" />,
  },
  {
    step: 4,
    title: "Delivery & Confirmation",
    description: "Safe delivery at your doorstep with proof of delivery. Follow-up support and performance metrics provided.",
    icon: <CheckCircle className="w-10 h-10" />,
  },
];

const ProcessFlow = ({
  title = <>How We <span className="text-primary">Deliver</span></>,
  description = "Our proven process ensures your shipments arrive safely, on time, and with complete transparency.",
  steps = defaultSteps,
}: ProcessFlowProps) => {
  return (
    <section className="py-16 md:py-24 global-padding-container bg-background">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12">
          <SubLabel>Our Process</SubLabel>
          <Typography variant="SemiBold_H3" className="text-secondary mt-4">
            {title}
          </Typography>
          <Typography variant="Regular_H5" className="text-gray mt-4 max-w-2xl">
            {description}
          </Typography>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary/60 to-primary/30" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-lg border border-stroke/40 p-6 h-full relative z-10">
                  {/* Step Number & Icon Container */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      {/* Circle Background */}
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <div className="text-primary">
                          {step.icon}
                        </div>
                      </div>
                      {/* Step Number */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                        <Typography variant="caption" className="font-bold">
                          {step.step}
                        </Typography>
                      </div>
                    </div>
                  </div>

                  {/* Step Title */}
                  <Typography
                    variant="Bold_H5"
                    className="text-secondary mb-3"
                  >
                    {step.title}
                  </Typography>

                  {/* Step Description */}
                  <Typography
                    variant="Regular_H6"
                    className="text-gray leading-relaxed"
                  >
                    {step.description}
                  </Typography>

                  {/* Mobile Connector - vertical line */}
                  {idx < steps.length - 1 && (
                    <div className="md:hidden absolute -bottom-6 left-7 w-1 h-6 bg-gradient-to-b from-primary/60 to-primary/30" />
                  )}
                </div>

                {/* Desktop Arrow/Connector */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 -right-6 w-4 h-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary/40 w-full h-full"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Typography variant="Regular_H5" className="text-gray max-w-2xl mx-auto">
            Questions about our process? <span className="text-primary font-semibold">Contact us</span> or check our <span className="text-primary font-semibold">FAQ</span> section.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
