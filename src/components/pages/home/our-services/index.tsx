// ** import core package
import { ReactElement } from "react";

// ** import components
import { Services } from "@/components/shared";
import SectionHead from "@/components/shared/section-head";
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
    <section className="py-16 md:py-20 global-padding-container bg-background">
      <div className="mx-auto max-w-7xl">
        <SectionHead title={title} description={description} descriptionClassName="lg:max-w-2xl" />
        <div className="mt-14">
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
