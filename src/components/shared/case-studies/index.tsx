"use client";

import { ReactNode } from "react";
import { Typography } from "@/components/ui/Typography";
import { SubLabel } from "@/components/shared/SubLabel";
import { ArrowRight, TrendingUp } from "lucide-react";

interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    unit?: string;
  }[];
  testimonial?: string;
  testimonialsAuthor?: string;
}

interface CaseStudiesProps {
  title?: ReactNode;
  description?: ReactNode;
  studies?: CaseStudy[];
}

const defaultCaseStudies: CaseStudy[] = [
  {
    id: "1",
    clientName: "TechFlow Solutions",
    industry: "E-Commerce & Tech",
    challenge:
      "Managing 500+ daily shipments across Malaysia and Singapore with manual tracking causing delays and customer complaints.",
    solution:
      "Implemented VizFleet platform with real-time GPS tracking, automated route optimization, and customer notifications.",
    results: [
      { metric: "Delivery Speed", value: "35%", unit: "faster" },
      { metric: "Cost Reduction", value: "28%", unit: "savings" },
      { metric: "Customer Satisfaction", value: "94%", unit: "CSAT" },
    ],
    testimonial:
      "Vision Transport transformed our logistics. Real-time tracking eliminated delays and our customers are happier than ever.",
    testimonialsAuthor: "CEO, TechFlow Solutions",
  },
  {
    id: "2",
    clientName: "AgroNest Exports",
    industry: "Agriculture & Export",
    challenge:
      "Perishable goods shipments required temperature control and strict timing, with high spoilage rates (15%) affecting margins.",
    solution:
      "Deployed temperature-monitored fleet with predictive routing and priority handling protocols for agricultural products.",
    results: [
      { metric: "Spoilage Rate", value: "2.1%", unit: "reduction" },
      { metric: "Delivery Compliance", value: "99.2%", unit: "on-time" },
      { metric: "Revenue Impact", value: "450K+", unit: "saved" },
    ],
    testimonial:
      "The specialized handling of our agricultural exports has been game-changing. We can now scale confidently.",
    testimonialsAuthor: "Operations Manager, AgroNest Exports",
  },
  {
    id: "3",
    clientName: "ManufacturePro Industries",
    industry: "Manufacturing & Supply Chain",
    challenge:
      "Supply chain visibility gaps causing production delays and excess inventory. Cross-border shipments taking 4-5 days.",
    solution:
      "Integrated supply chain platform with customs pre-clearance, warehouse integration, and supply chain analytics.",
    results: [
      { metric: "Lead Time", value: "48 hrs", unit: "avg cross-border" },
      { metric: "Inventory Holding", value: "22%", unit: "reduction" },
      { metric: "Operational Cost", value: "19%", unit: "savings" },
    ],
    testimonial:
      "Vision Transport's supply chain expertise reduced our lead times dramatically. That's a competitive advantage.",
    testimonialsAuthor: "Supply Chain Director, ManufacturePro",
  },
];

const CaseStudies = ({
  title = <>Success Stories: How We <span className="text-primary">Drive Results</span></>,
  description = "Real examples of how Vision Transport solved complex logistics challenges for businesses across diverse industries.",
  studies = defaultCaseStudies,
}: CaseStudiesProps) => {
  return (
    <section className="py-16 md:py-24 global-padding-container bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12">
          <SubLabel>Proven Results</SubLabel>
          <Typography variant="SemiBold_H3" className="text-secondary mt-4">
            {title}
          </Typography>
          <Typography variant="Regular_H5" className="text-gray mt-4 max-w-3xl">
            {description}
          </Typography>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {studies.map((study) => (
            <div
              key={study.id}
              className="bg-background rounded-lg border border-stroke/40 overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-stroke/40 bg-gradient-to-r from-primary/5 to-transparent">
                <Typography variant="caption" className="text-primary font-semibold">
                  {study.industry}
                </Typography>
                <Typography variant="Bold_H5" className="text-secondary mt-2">
                  {study.clientName}
                </Typography>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col gap-4">
                {/* Challenge */}
                <div>
                  <Typography variant="SemiBold_H6" className="text-secondary mb-2">
                    Challenge
                  </Typography>
                  <Typography variant="Regular_H6" className="text-gray">
                    {study.challenge}
                  </Typography>
                </div>

                {/* Solution */}
                <div>
                  <Typography variant="SemiBold_H6" className="text-secondary mb-2">
                    Solution
                  </Typography>
                  <Typography variant="Regular_H6" className="text-gray">
                    {study.solution}
                  </Typography>
                </div>

                {/* Results */}
                <div>
                  <Typography variant="SemiBold_H6" className="text-secondary mb-3">
                    Results
                  </Typography>
                  <div className="space-y-2">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                        <div>
                          <Typography variant="Medium_H6" className="text-secondary">
                            {result.value}{result.unit ? ` ${result.unit}` : ""}
                          </Typography>
                          <Typography variant="caption" className="text-gray">
                            {result.metric}
                          </Typography>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                {study.testimonial && (
                  <div className="mt-4 pt-4 border-t border-stroke/20">
                    <Typography variant="Regular_H6" className="text-gray italic mb-2">
                      "{study.testimonial}"
                    </Typography>
                    <Typography variant="caption" className="text-secondary font-semibold">
                      — {study.testimonialsAuthor}
                    </Typography>
                  </div>
                )}
              </div>

              {/* Footer CTA */}
              <div className="p-6 border-t border-stroke/20 bg-background">
                <a
                  href="#"
                  className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Read Full Story
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Typography variant="Regular_H5" className="text-gray mb-6">
            See how Vision Transport can solve your logistics challenges
          </Typography>
          <a
            href="/contact-us"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
