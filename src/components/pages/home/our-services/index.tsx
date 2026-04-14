// ** import core package
import { ReactElement } from "react";

// ** import components
import { Services } from "@/components/shared";
import { SubLabel } from "@/components/shared/SubLabel";
import { Typography } from "@/components/ui/Typography";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface OurServicesProps {
  title: ReactElement | string;
  description: ReactElement | string;
  isViewMore?: boolean;
}

export const OurServices = ({
  title,
  description,
  isViewMore = false,
}: OurServicesProps) => {
  return (
    <section className="py-16 md:py-24 global-padding-container bg-secondary">
      <div className="mx-auto max-w-7xl">
        {/* SubLabel */}
        <div className="mb-8">
          <SubLabel>Our Services</SubLabel>
        </div>

        {/* Title and Description */}
        <div className="mb-14">
          <Typography variant="SemiBold_H3" className="!text-white mb-4">
            {title}
          </Typography>
          <Typography variant="Regular_H6" className="!text-white/70 max-w-2xl">
            {description}
          </Typography>
        </div>

        <div>
          <Services isViewMore={isViewMore} />
        </div>

        {isViewMore && (
          <div className="mt-14 flex justify-center">
            <Link
              href={"/services"}
              className="flex items-center gap-2 group text-primary hover:text-primary/90 transition-colors duration-300 font-medium"
            >
              View More{" "}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurServices;
