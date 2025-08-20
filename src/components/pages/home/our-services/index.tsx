// ** import core package
import { ReactElement } from "react";

// ** import components
import { Services } from "@/components/shared";
import SectionHead from "@/components/shared/section-head";

interface OurServicesProps {
  title: ReactElement | string;
  description: ReactElement | string;
}

export const OurServices = ({ title, description }: OurServicesProps) => {
  return (
    <section className="py-16 md:py-20 global-padding-container bg-[#fcf8f6]">
      <div className="mx-auto max-w-7xl">
        <SectionHead title={title} description={description} />
        <div className="mt-14">
          <Services />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
