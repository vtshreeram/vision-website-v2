"use client";

// ** import third party packages
import { motion as m } from "framer-motion";

// ** import motion variants
import { fadeInDown } from "@/utils/motion-variant";

// ** import components
import { Typography } from "@/components/ui/Typography";
import Button from "@/components/ui/button";
import Link from "next/link";

const stats = [
  { value: "10000+", label: "Projects Delivered" },
  { value: "3500+", label: "Happy Clients" },
  { value: "100+", label: "Active Employee" },
  { value: "100+", label: "Support Partners" },
];

export const Count = () => {
  return (
    <section className="py-16 md:py-20 global-padding-container bg-primary">
      <div className="mx-auto max-w-7xl">
        {/* Stats Row */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDown}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white text-center py-10 px-4  shadow-none"
            >
              <Typography
                variant="Bold_H2"
                className="text-primary text-4xl md:text-5xl mb-2"
              >
                {stat.value}
              </Typography>
              <Typography
                variant="Regular_H6"
                className="text-foreground text-lg md:text-xl"
              >
                {stat.label}
              </Typography>
            </div>
          ))}
        </m.div>
        {/* Bottom Text and Button */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDown}
          className="flex flex-col md:flex-row items-end md:items-center md:justify-between mt-12"
        >
          <Typography
            variant="Bold_H2"
            className="text-white mb-8 md:mb-0 md:text-4xl"
          >
            Scale Your Logistics Today
          </Typography>
          <Link href={"/contact-us"}>
            <Button
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 "
            >
              Book Free Demo
            </Button>
          </Link>
        </m.div>
      </div>
    </section>
  );
};

export default Count;
