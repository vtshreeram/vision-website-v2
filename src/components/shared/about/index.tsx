// ** import core packages
import Image from "next/image";
import Link from "next/link";

// ** import components
import { Typography } from "@/components/ui/Typography";
import Button from "@/components/ui/button";

// ** import assets
import image from "@/assets/images/common/about/Logo.webp";

export const AboutUs = ({ isAboutUs = false }: { isAboutUs?: boolean }) => {
  return (
    <section
      id="aboutUs"
      className="py-16 md:py-20 bg-background global-padding-container"
    >
      <div className="mx-auto max-w-7xl  grid grid-cols-1 gap-10 md:gap-20 md:grid-cols-2 items-center">
        <div className="flex justify-center py-10 md:py-0">
          <Image
            src={image}
            height={150}
            width={410}
            alt="about image"
            className="object-contain"
            placeholder="blur"
          />
        </div>
        <div>
          <Typography
            variant="SemiBold_H3"
            className="text-secondary mt-2 block"
          >
            We Are Expert For <br /> Logistics Solutions
          </Typography>
          <div className="mt-6 space-y-6">
            {[
              "VISIONS TRANSPORT ENTERPRISE SDN BHD was established in 2008 as a transport company in Shah Alam. At that time, we were well represented in Klang valley areas. As time goes by, our company has grown and expanded its operation to North, South and East Coast. Since then, we have developed an outstanding reputation in the inland transportation. Today, we have geared our services to all over Malaysia and Singapore. ",
              "Now, with prudent management as well as professional, experienced and dedicated employees, we are proud to announce that we are able to arrange movement of cargoes anywhere, anytime around Peninsular Malaysia and Singapore.",
            ].map((item, idx) => (
              <div key={idx}>
                <Typography
                  variant="Regular_H6"
                  className="block  text-foreground"
                >
                  {item}
                </Typography>
              </div>
            ))}
          </div>

          <div className="mt-6 md:mt-8 flex gap-x-6 md:gap-x-8 ">
            {!isAboutUs && (
              <Link href={"/about-us"}>
                <Button variant="primary" className="w-[180px]">
                  Explore
                </Button>
              </Link>
            )}
            <Link href={"/contact-us"}>
              <Button variant="secondary" className="w-[180px]">
                Talk to us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
