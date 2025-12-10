"use client";

// ** import core packages
import Image from "next/image";

// ** import third party packages
import { motion as m } from "framer-motion";
import { ArrowRight } from "lucide-react";

// ** import motion variants
import { fadeInDown } from "@/utils/motion-variant";

// ** import components
import { Typography } from "@/components/ui/Typography";

// ** import assets
import img1 from "@/assets/images/common/services/img-1.webp";
import img2 from "@/assets/images/common/services/img-2.webp";
import img3 from "@/assets/images/common/services/img-3.webp";
import img4 from "@/assets/images/common/services/img-4.webp";
import img5 from "@/assets/images/common/services/img-5.webp";
import img6 from "@/assets/images/common/services/img-6.webp";
import img7 from "@/assets/images/common/services/img-7.webp";
import img8 from "@/assets/images/common/services/img-8.webp";
import img9 from "@/assets/images/common/services/img-9.webp";

const services = [
  {
    img: img2,
    label: "Bonded Truck",
    description:
      "For customs-controlled shipments requiring secure, compliant bonded handling.",
  },
  {
    img: img1,
    label: "Non-Bonded Truck",
    description:
      "Reliable nationwide transport for flexible, fast, and cost-efficient cargo movement.",
  },
  {
    img: img3,
    label: "Warehousing & Storage Solutions",
    description:
      "Integrated warehousing for safe storage, efficient handling, and real-time visibility.",
  },
  {
    img: img4,
    label: "Distribution & Cargo Handling",
    description:
      "End-to-end distribution services designed for accuracy, speed, and controlled movement.",
  },
  {
    img: img5,
    label: "Tail Lift Truck",
    description:
      "Safe, efficient loading and unloading support for heavy or sensitive cargo.",
  },
  {
    img: img6,
    label: "Crane Truck",
    description:
      "Specialized lifting solutions for oversized, heavy, or high-reach cargo requirements.",
  },
  {
    img: img7,
    label: "Linehaul & Shuttle",
    description:
      "Consistent long-distance and shuttle movements ensuring timely, reliable transfers.",
  },
  {
    img: img8,
    label: "First & Last Mile Delivery",
    description:
      "Seamless pickup and final-mile delivery tailored for retail, e-commerce, and B2B needs.",
  },
  {
    img: img9,
    label: "Fleet Leasing Services",
    description:
      "Flexible fleet leasing options for scalable operations backed by maintenance.",
  },
];

export const Services = ({ isViewMore = false }: { isViewMore?: boolean }) => {
  const displayedServices = isViewMore ? services.slice(0, 3) : services;

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  md:gap-y-14 md:gap-x-8">
      {displayedServices.map((service, idx) => (
        <m.div
          initial="hidden"
          animate="visible"
          variants={fadeInDown}
          key={idx}
          className="group relative h-[400px] overflow-hidden cursor-pointer"
        >
          {/* Background Image */}
          <Image
            src={service.img}
            alt={service.label}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            quality={85}
            loading="lazy"
            placeholder="blur"
          />

          {/* Default Bottom Bar */}
          <div className="absolute inset-x-0 bottom-0 bg-primary px-6 py-4 transition-all duration-500 group-hover:translate-y-3 group-hover:opacity-0">
            <Typography
              variant="Bold_H6"
              className="text-white text-center text-base"
            >
              {service.label}
            </Typography>
          </div>

          {/* Hover Content */}
          <div className="absolute inset-0 flex translate-y-4 flex-col justify-center p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:p-8 bg-primary">
            <Typography variant="Bold_H5" className="mb-3 text-white">
              {service.label}
            </Typography>
            <Typography
              variant="Regular_H6"
              className="mb-4 text-white opacity-90"
            >
              {service.description}
            </Typography>
            <div className="flex items-center gap-2">
              <Typography variant="Medium_H6" className="text-white">
                Know more
              </Typography>
              <ArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </m.div>
      ))}
    </div>
  );
};
