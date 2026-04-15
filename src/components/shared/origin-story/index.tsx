"use client";

import { ReactNode } from "react";
import { Typography } from "@/components/ui/Typography";
import { SubLabel } from "@/components/shared/SubLabel";

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  milestone: string;
}

interface OriginStoryProps {
  title?: ReactNode;
  description?: ReactNode;
  events?: TimelineEvent[];
}

const defaultEvents: TimelineEvent[] = [
  {
    year: 2008,
    title: "The Beginning",
    description:
      "Founded with a single truck and big vision to revolutionize logistics in Malaysia. Started with local deliveries in Kuala Lumpur.",
    milestone: "1 Vehicle Fleet",
  },
  {
    year: 2012,
    title: "Regional Expansion",
    description:
      "Expanded operations to Selangor and Johor. Grew fleet to 50+ vehicles and hired dedicated logistics team.",
    milestone: "50+ Fleet",
  },
  {
    year: 2016,
    title: "Cross-Border Launch",
    description:
      "Launched cross-border services to Singapore. Became certified for Malaysia-Singapore freight movement. First major corporate clients.",
    milestone: "Singapore Entry",
  },
  {
    year: 2019,
    title: "Technology Revolution",
    description:
      "Developed proprietary VizFleet platform with AI-powered routing and real-time tracking. Achieved ISO 27001 certification.",
    milestone: "VizFleet Platform",
  },
  {
    year: 2023,
    title: "Industry Leadership",
    description:
      "Recognized as top logistics provider in Southeast Asia. Expanded services to temperature-controlled and specialized cargo.",
    milestone: "Market Recognition",
  },
  {
    year: 2024,
    title: "Present Day",
    description:
      "Serving 500+ active clients across manufacturing, retail, F&B, and pharmaceutical sectors. Building the future of Southeast Asian logistics.",
    milestone: "500+ Clients",
  },
];

const OriginStory = ({
  title = <>Our Journey: From <span className="text-primary">One Truck to Market Leader</span></>,
  description = "Sixteen years of growth, innovation, and commitment to logistics excellence.",
  events = defaultEvents,
}: OriginStoryProps) => {
  return (
    <section className="py-16 md:py-24 global-padding-container bg-white">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <SubLabel>Our History</SubLabel>
          <Typography variant="SemiBold_H3" className="text-secondary mt-4">
            {title}
          </Typography>
          <Typography variant="Regular_H5" className="text-gray mt-4">
            {description}
          </Typography>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 via-primary/60 to-primary/30 -translate-x-1/2" />

          {/* Timeline Events */}
          <div className="space-y-12">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={event.year} className="relative">
                  {/* Desktop Layout */}
                  <div className="hidden md:grid md:grid-cols-2 gap-8 items-start">
                    {/* Left side */}
                    {isEven ? (
                      <div className="text-right pr-8">
                        <Typography
                          variant="SemiBold_H4"
                          className="text-primary mb-2"
                        >
                          {event.year}
                        </Typography>
                        <Typography variant="Bold_H5" className="text-secondary mb-2">
                          {event.title}
                        </Typography>
                        <Typography variant="Regular_H6" className="text-gray">
                          {event.description}
                        </Typography>
                        <div className="mt-4 inline-block px-4 py-2 bg-primary/10 rounded-lg">
                          <Typography variant="caption" className="text-primary font-semibold">
                            {event.milestone}
                          </Typography>
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}

                    {/* Center - Dot */}
                    <div className="flex justify-center md:col-start-1 md:col-end-3">
                      <div className="w-5 h-5 rounded-full bg-primary absolute -translate-x-1/2 left-1/2" />
                    </div>

                    {/* Right side */}
                    {!isEven ? (
                      <div className="pl-8">
                        <Typography
                          variant="SemiBold_H4"
                          className="text-primary mb-2"
                        >
                          {event.year}
                        </Typography>
                        <Typography variant="Bold_H5" className="text-secondary mb-2">
                          {event.title}
                        </Typography>
                        <Typography variant="Regular_H6" className="text-gray">
                          {event.description}
                        </Typography>
                        <div className="mt-4 inline-block px-4 py-2 bg-primary/10 rounded-lg">
                          <Typography variant="caption" className="text-primary font-semibold">
                            {event.milestone}
                          </Typography>
                        </div>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden pl-8 border-l-2 border-primary/40">
                    <div className="absolute -left-3 top-0 w-4 h-4 rounded-full bg-primary" />
                    <Typography
                      variant="SemiBold_H5"
                      className="text-primary mb-2"
                    >
                      {event.year}
                    </Typography>
                    <Typography variant="Bold_H5" className="text-secondary mb-2">
                      {event.title}
                    </Typography>
                    <Typography variant="Regular_H6" className="text-gray mb-3">
                      {event.description}
                    </Typography>
                    <div className="inline-block px-4 py-2 bg-primary/10 rounded-lg">
                      <Typography variant="caption" className="text-primary font-semibold">
                        {event.milestone}
                      </Typography>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center bg-primary/5 rounded-lg p-8">
          <Typography variant="Regular_H5" className="text-gray italic">
            "From a single truck to a regional logistics leader—our journey is driven by unwavering commitment to excellence and innovation."
          </Typography>
          <Typography variant="Medium_H6" className="text-secondary mt-4 font-semibold">
            — Vision Transport Leadership Team
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
