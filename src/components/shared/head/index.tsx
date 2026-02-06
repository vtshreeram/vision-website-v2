// ** import core packages
import Image, { StaticImageData } from "next/image";

// ** import components
import { Typography } from "@/components/ui/Typography";
import Header from "@/components/template/header";

// ** import utils
import { cn } from "@/lib/utils";

interface HeadProps {
  heading: string;
  subHeading?: string;
  link?: string;
  linkText?: string;
  bgImg: StaticImageData | string;
  className?: string;
}

const Head: React.FC<HeadProps> = ({
  heading,
  subHeading,
  link,
  linkText,
  bgImg,
  className,
}) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden  global-padding-container",
        className
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={bgImg}
          placeholder="blur"
          alt={`${heading} background image`}
          className=" h-full w-full !object-cover object-right  md:origin-top-left md:object-left"
          priority={true}
          quality={90}
          sizes="100vw"
          fill
        />
      </div>

      <div className="relative">
        <Header />
        <div className="py-12 md:py-16 mx-auto max-w-7xl">
          <Typography
            variant="Bold_H2"
            className="block text-white"
          >
            {heading}
          </Typography>
          <div className="mt-2 md:mt-6 flex items-center gap-2">
            <Typography variant="Regular_H5" link="/" className="text-white ">
              Home
            </Typography>
            {link && linkText && (
              <>
                <Typography variant="Regular_H5" className=" text-white ">
                  /
                </Typography>
                <Typography
                  variant="Regular_H5"
                  link={link}
                  className=" text-white "
                >
                  {linkText}
                </Typography>
              </>
            )}
            {subHeading && (
              <>
                <Typography variant="Regular_H5" className=" text-white ">
                  /
                </Typography>

                <Typography variant="Regular_H5" className=" text-white ">
                  {subHeading}
                </Typography>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
