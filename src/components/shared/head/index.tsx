// ** import core packages
import Image, { StaticImageData } from "next/image";

// ** import components
import { Typography } from "@/components/ui/Typography";
import Header from "@/components/template/header";

// ** import utils
import { cn } from "@/lib/utils";

interface HeadProps {
  heading: string;
  subHeading: string;
  bgImg: StaticImageData | string;
  className?: string;
}

const Head: React.FC<HeadProps> = ({
  heading,
  subHeading,
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
        <div className="py-16 lg:py-32 mx-auto max-w-7xl ">
          <Typography
            variant="Bold_H1"
            className={`block  text-white text-3xl md:text-4xl`}
          >
            {heading}
          </Typography>
          <div className="mt-2 md:mt-6 flex items-center gap-2">
            <Typography variant="Regular_H5" link="/" className="text-white ">
              Home
            </Typography>

            <Typography variant="Regular_H5" className=" text-white ">
              /
            </Typography>
            <Typography variant="Regular_H5" className=" text-white ">
              {subHeading}
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
