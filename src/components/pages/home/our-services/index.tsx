
// ** import components
import { Services } from "@/components/shared";
import SectionHead from "@/components/shared/section-head";

export const OurServices = () => {
  return (
    <section className="py-16 md:py-20 global-padding-container bg-[#fcf8f6]">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          title={
            <>
              Our <span className="text-primary">Services</span>
            </>
          }
          description="Today, we have geared our services to all over Malaysia and Singapore."
        />
        <div className="mt-14">
          <Services />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
