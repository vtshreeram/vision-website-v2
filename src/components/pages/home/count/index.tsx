// ** import core package
import Link from "next/link";

// ** import components
import { Typography } from "@/components/ui/Typography";
import Button from "@/components/ui/button";

const stats = [
  { value: "10000+", label: "Project Done" },
  { value: "3500+", label: "Satisfied Clients" },
  { value: "100+", label: "Active Employee" },
  { value: "100+", label: "Total Support" },
];

export const Count = () => {
  return (
    <section className="py-16 md:py-20 global-padding-container bg-primary">
      <div className="mx-auto max-w-7xl">
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
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
        </div>
        {/* Bottom Text and Button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-12">
          <Typography
            variant="Bold_H2"
            className="text-white mb-8 md:mb-0 md:text-4xl"
          >
            Lorem ipsum dolor <br /> sit viverra ac.
          </Typography>
          <Link href="/contact-us">
            <Button
              variant="secondary"
              className="!bg-white !text-primary !font-bold  px-8 py-3"
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
