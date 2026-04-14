"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// ** import components
import Head from "@/components/shared/head";
import { Typography } from "@/components/ui/Typography";
import Button from "@/components/ui/button";
import { Banner } from "@/components/shared";
import { FadeIn } from "@/components/shared/FadeIn";
import WhyChoose from "@/components/shared/why-choose";
import Breadcrumb from "@/components/shared/Breadcrumb";

// ** import data
import { servicesData } from "@/data/services";

// ** import icons
import { Check } from "lucide-react";

const whyChooseFeatures = [
  {
    title: "Certified Operations",
    description: "ISO & TAPA certified for quality",
  },
  {
    title: "Technology-Driven",
    description: "Real-time tracking with VizFleet",
  },
  {
    title: "Experienced Team",
    description: "17+ years of logistics expertise",
  },
  {
    title: "24/7 Support",
    description: "Always available for your needs",
  },
];

const ServiceDetailPage = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      {/* Page Header */}
      <Head heading={service.label} subHeading="Services" bgImg={service.img} />

      {/* Breadcrumb Navigation */}
      <div className="bg-white global-padding-container">
        <div className="max-w-7xl mx-auto py-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.label },
            ]}
          />
        </div>
      </div>

      {/* Service Details */}
      <FadeIn>
        <section className="py-16 md:py-24 bg-white global-padding-container">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.label}
                  fill
                  className="object-cover"
                  quality={90}
                  placeholder="blur"
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <Typography variant="SemiBold_H3" className="text-foreground">
                  {service.label}
                </Typography>
                <Typography variant="Regular_H5" className="text-gray">
                  {service.fullDescription}
                </Typography>

                <div className="pt-4">
                  <Link href="/contact-us">
                    <Button variant="primary">Request a Quote</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Key Features */}
      <FadeIn>
        <section className="py-16 md:py-24 bg-background global-padding-container">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Features */}
              <div>
                <Typography variant="SemiBold_H3" className="text-foreground mb-6">
                  Key Features
                </Typography>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <Typography variant="Regular_H6" className="text-gray">
                        {feature}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <Typography variant="SemiBold_H3" className="text-foreground mb-6">
                  Benefits
                </Typography>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <Typography variant="Regular_H6" className="text-gray">
                        {benefit}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Why Choose Us */}
      <FadeIn>
        <WhyChoose
          title="Why Choose Visions Transport"
          features={whyChooseFeatures}
        />
      </FadeIn>

      {/* CTA */}
      <FadeIn>
        <Banner
          title="Ready to Get Started?"
          subTitle="Contact us today to discuss your logistics needs and discover how our specialized services can optimize your supply chain operations."
          primaryButtonText="Contact Us"
          primaryButtonLink="/contact-us"
          secondaryButtonText="View All Services"
          secondaryButtonLink="/services"
        />
      </FadeIn>
    </main>
  );
};

export default ServiceDetailPage;
