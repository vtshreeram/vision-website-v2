"use client";

// ** import core packages
import Image from "next/image";

// ** import third party packages
import { motion as m } from "framer-motion";

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
  { img: img1, label: "Bonded Truck Services" },
  { img: img2, label: "Non- Bonded Truck Services" },
  { img: img3, label: "Warehouse" },
  { img: img4, label: "Distribution & Cargo Handling" },
  { img: img5, label: "Tail Lift Truck Services" },
  { img: img6, label: "Crane Truck Services" },
  { img: img7, label: "Linehaul & Shuttle Services" },
  { img: img8, label: "First & Last Mile Delivery Services" },
  { img: img9, label: "Leasing Vehicle" },
];

export const Services = () => {
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  md:gap-y-14 md:gap-x-8">
      {services.map((service, idx) => (
        <m.div
          initial="hidden"
          animate="visible"
          variants={fadeInDown}
          key={idx}
          className="flex flex-col items-center bg-white  shadow-none overflow-hidden"
        >
          <div className="overflow-hidden w-full">
            <Image
              src={service.img}
              alt={service.label}
              className="w-full h-full object-cover scale-105"
              width={386}
              height={386}
              quality={85}
              loading="lazy"
              placeholder="blur"
            />
          </div>
          <div className="w-full bg-primary py-2 flex justify-center">
            <Typography
              variant="Bold_H6"
              className="text-white text-center text-base"
            >
              {service.label}
            </Typography>
          </div>
        </m.div>
      ))}
    </div>
  );
};
