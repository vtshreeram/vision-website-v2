"use client";

// ** import components
import { Typography } from "@/components/ui/Typography";
import { AnimatedCounter, parseStatValue } from "@/components/ui/AnimatedCounter";
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, idx) => {
            const { value, suffix, prefix } = parseStatValue(stat.value);
            return (
              <div
                key={idx}
                className="bg-white text-center py-10 px-4 shadow-none"
              >
                <Typography
                  variant="Bold_H2"
                  className="text-primary text-4xl md:text-5xl mb-2"
                >
                  <AnimatedCounter
                    value={value}
                    suffix={suffix}
                    prefix={prefix}
                    duration={2.5}
                  />
                </Typography>
                <Typography
                  variant="Regular_H6"
                  className="text-foreground text-lg md:text-xl"
                >
                  {stat.label}
                </Typography>
              </div>
            );
          })}
        </div>
        {/* Bottom Text and Button */}
        <div className="flex flex-col md:flex-row items-end md:items-start md:justify-between mt-12">
          <div className="mb-8 md:mb-0 space-y-4 md:max-w-[620px]">
            <Typography variant="Bold_H2" className="text-white  md:text-4xl">
              Scale Your Logistics Today
            </Typography>
            <Typography variant="Regular_H6" className="text-white  ">
              We uncover opportunities to enhance efficiency, reduce costs, and
              strengthen operational performance across your business.
            </Typography>
          </div>
          <Link href={"/contact-us"}>
            <Button
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 "
            >
              Contact us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Count;
