"use client";

import { useState, ReactNode } from "react";
import { Typography } from "@/components/ui/Typography";
import { SubLabel } from "@/components/shared/SubLabel";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: ReactNode;
  description?: ReactNode;
  subLabel?: string;
  items?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: "How quickly can you deliver my shipment?",
    answer:
      "Standard delivery between Malaysia and Singapore typically takes 1-2 business days. We offer express options for same-day or next-day delivery depending on pickup location and time.",
  },
  {
    question: "Can I track my shipment in real-time?",
    answer:
      "Yes! Our VizFleet platform provides 24/7 real-time tracking with GPS location updates, temperature monitoring (for temperature-controlled shipments), and live notifications.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We provide comprehensive coverage across Malaysia and Singapore, with specialized expertise in cross-border logistics. We serve major cities and industrial areas with express routes.",
  },
  {
    question: "Are my shipments insured?",
    answer:
      "Yes, we offer cargo insurance coverage. Basic coverage is included in our standard service, with premium coverage options available for high-value items.",
  },
  {
    question: "How do you ensure cargo safety?",
    answer:
      "We maintain ISO-certified security protocols, GPS-tracked vehicles, strict driver vetting, temperature control for sensitive goods, and secure documentation handling.",
  },
  {
    question: "Can you handle special or hazardous materials?",
    answer:
      "We can transport many specialized items. Please contact our team directly with specific requirements for hazardous materials, perishables, or oversized shipments.",
  },
];

const FAQSection = ({
  title = <>Frequently Asked <span className="text-primary">Questions</span></>,
  description = "Find quick answers to common questions about our services and delivery.",
  subLabel = "Got Questions?",
  items = defaultFAQs,
}: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 global-padding-container bg-background">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <SubLabel>{subLabel}</SubLabel>
          <Typography variant="SemiBold_H3" className="text-secondary mt-4">
            {title}
          </Typography>
          <Typography variant="Regular_H5" className="text-gray mt-4">
            {description}
          </Typography>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-stroke/40 rounded-lg overflow-hidden bg-white hover:border-primary/20 transition-all duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-background/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <Typography
                  variant="Bold_H5"
                  className="text-secondary pr-4 flex-1"
                >
                  {item.question}
                </Typography>
                <div
                  className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {/* Answer - Expandable */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0 border-t border-stroke/20">
                  <Typography variant="Regular_H6" className="text-gray leading-relaxed">
                    {item.answer}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Typography variant="Regular_H5" className="text-gray mb-6">
            Didn't find your answer?
          </Typography>
          <a
            href="/contact-us"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
