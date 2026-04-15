"use client";

import { useState } from "react";
import { Typography } from "@/components/ui/Typography";
import { ChevronDown, CheckCircle } from "lucide-react";

interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  icon?: React.ReactNode;
  details: {
    description: string;
    features: string[];
    benefits: string[];
    useCases: string[];
  };
}

interface ServiceDetailsProps {
  services?: ServiceDetail[];
}

const defaultServices: ServiceDetail[] = [
  {
    id: "1",
    title: "Last-Mile Delivery",
    shortDesc: "Door-to-door delivery with real-time tracking",
    details: {
      description:
        "Our last-mile delivery service ensures your packages reach customers quickly and safely. With real-time GPS tracking, customers know exactly when to expect their delivery.",
      features: [
        "Real-time GPS tracking",
        "Proof of delivery with photo",
        "Flexible delivery windows",
        "Safe packaging protocols",
        "Weather-protected transport",
        "24/7 support",
      ],
      benefits: [
        "Improved customer satisfaction",
        "Reduced delivery failures",
        "Lower operational costs",
        "Scalable solutions for growth",
        "Professional driver training",
      ],
      useCases: [
        "E-commerce order fulfillment",
        "Retail store deliveries",
        "B2B document delivery",
        "Time-sensitive shipments",
      ],
    },
  },
  {
    id: "2",
    title: "Cross-Border Logistics",
    shortDesc: "Seamless Malaysia-Singapore freight movement",
    details: {
      description:
        "Expert cross-border solutions handling all customs, documentation, and regulatory requirements. Move goods between Malaysia and Singapore with zero hassles.",
      features: [
        "Customs pre-clearance",
        "Duty calculation assistance",
        "Documentation handling",
        "Express border processing",
        "Consolidated shipments",
        "Compliance expertise",
      ],
      benefits: [
        "Faster cross-border delivery",
        "Reduced customs delays",
        "Clear cost visibility",
        "Regulatory compliance",
        "Expert guidance",
      ],
      useCases: [
        "Manufacturing supply chain",
        "Import/export operations",
        "Regional distribution",
        "Emergency shipments",
      ],
    },
  },
  {
    id: "3",
    title: "Temperature-Controlled Transport",
    shortDesc: "Specialized cold chain for perishables & pharmaceuticals",
    details: {
      description:
        "Maintain perfect temperature control for sensitive goods. FMCG products, pharmaceuticals, and perishables arrive in pristine condition.",
      features: [
        "24/7 temperature monitoring",
        "Insulated vehicle fleet",
        "Real-time alerts",
        "Compliance documentation",
        "Emergency response protocols",
        "Backup power systems",
      ],
      benefits: [
        "Product quality assurance",
        "Regulatory compliance",
        "Reduced spoilage",
        "Consumer safety",
        "Audit trail documentation",
      ],
      useCases: [
        "Food & beverage distribution",
        "Pharmaceutical shipments",
        "Dairy products",
        "Frozen goods transport",
      ],
    },
  },
  {
    id: "4",
    title: "Warehouse & Storage",
    shortDesc: "Secure storage with inventory management",
    details: {
      description:
        "Modern warehouse facilities with advanced inventory management. Store, manage, and distribute your goods efficiently across our network.",
      features: [
        "Climate-controlled storage",
        "Real-time inventory tracking",
        "Barcode system integration",
        "Security 24/7",
        "CCTV surveillance",
        "Insurance coverage",
      ],
      benefits: [
        "Reduced inventory costs",
        "Better stock visibility",
        "Fast order fulfillment",
        "Scalable capacity",
        "Risk mitigation",
      ],
      useCases: [
        "Seasonal inventory storage",
        "Consolidation centers",
        "Returns management",
        "Fulfillment centers",
      ],
    },
  },
];

const ServiceDetails = ({ services = defaultServices }: ServiceDetailsProps) => {
  const [expandedId, setExpandedId] = useState<string | null>("1");

  const toggleService = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {services.map((service) => {
        const isExpanded = expandedId === service.id;

        return (
          <div
            key={service.id}
            className="border border-stroke/40 rounded-lg overflow-hidden bg-white hover:border-primary/20 transition-all"
          >
            {/* Header - Always Visible */}
            <button
              onClick={() => toggleService(service.id)}
              className="w-full flex items-center justify-between p-6 hover:bg-background/50 transition-colors text-left"
              aria-expanded={isExpanded}
            >
              <div className="flex-1">
                <Typography variant="Bold_H5" className="text-secondary">
                  {service.title}
                </Typography>
                <Typography variant="Regular_H6" className="text-gray mt-1">
                  {service.shortDesc}
                </Typography>
              </div>
              <div
                className={`flex-shrink-0 ml-4 text-primary transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>

            {/* Details - Expandable */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isExpanded ? "max-h-[800px]" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-6 border-t border-stroke/20 space-y-6">
                {/* Description */}
                <div>
                  <Typography variant="Regular_H6" className="text-gray leading-relaxed">
                    {service.details.description}
                  </Typography>
                </div>

                {/* Features Grid */}
                <div>
                  <Typography variant="SemiBold_H6" className="text-secondary mb-3">
                    Key Features
                  </Typography>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.details.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <Typography variant="Regular_H6" className="text-gray">
                          {feature}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <Typography variant="SemiBold_H6" className="text-secondary mb-3">
                    Benefits
                  </Typography>
                  <ul className="space-y-2">
                    {service.details.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <Typography variant="Regular_H6" className="text-gray">
                          {benefit}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Cases */}
                <div>
                  <Typography variant="SemiBold_H6" className="text-secondary mb-3">
                    Ideal For
                  </Typography>
                  <div className="flex flex-wrap gap-2">
                    {service.details.useCases.map((useCase, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <a
                    href="/contact-us"
                    className="inline-block px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm"
                  >
                    Get More Info
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceDetails;
