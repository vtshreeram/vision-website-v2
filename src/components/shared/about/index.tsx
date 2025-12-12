"use client";

// ** import core packages
import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";

// ** import components
import { Typography } from "@/components/ui/Typography";
import Button from "@/components/ui/button";

// ** import assets
import image from "@/assets/images/common/about/Logo.webp";
import { cn } from "@/lib/utils";

export const AboutUs = ({
  isAboutUs = true,
  title = (
    <>
      We Are Experts in <br /> Logistics Solutions
    </>
  ),
}: {
  isAboutUs?: boolean;
  title?: ReactElement | string;
}) => {
  return (
    <section
      id="aboutUs"
      className="py-16 md:py-20 bg-background global-padding-container"
    >
      <div className={cn("mx-auto max-w-7xl  grid grid-cols-1 gap-10  lg:grid-cols-2 items-center", isAboutUs ? "lg:gap-48" : " lg:gap-10")}>
        <div className="flex justify-center">
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
            variant="Bold_H3"
            className="text-secondary mt-2 block "
          >
            {title}
          </Typography>
          <div className="mt-6 space-y-6">
            <div>
              <Typography
                variant="Regular_H6"
                className="block  text-foreground"
              >
                Founded in 2008, we have grown from Klang Valley to a nationwide
                leader. Today, we power seamless logistics across Malaysia and
                Singapore.
              </Typography>
            </div>
          </div>

          <div className="mt-6 md:mt-8 flex flex-wrap gap-x-4 md:gap-x-6 ">
            <Link href={"/contact-us"}>
              <Button variant="primary">Contact us</Button>
            </Link>
            {isAboutUs && (
              <Link href={"/about-us"}>
                <Button variant="secondary">About us</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
