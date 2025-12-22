"use client";
// ** import core packages
import Link from "next/link";

// ** import third party packages
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

// ** import components
import { Typography } from "@/components/ui/Typography";
import Button from "@/components/ui/button";

// ** import assets
import LogoFooter from "@/assets/logo-footer";
import {
  IcoFacebook,
  IcoInstagram,
  IcoLinkedin,
  IcoTwitter,
} from "@/assets/icons";

// ** import config
import { siteConfig } from "@/config";

// ** define validation schema using zod **
const contactSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface FooterLink {
  href: string;
  label: string;
  target?: string;
}

const links: FooterLink[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about-us",
    label: "About us",
  },
  {
    href: "/sustainability",
    label: "Sustainability",
  },
  {
    href: "/csr",
    label: "CSR",
  },
  {
    href: "https://track.visionstransport.com.my",
    label: "Tracking",
    target: "_blank",
  },
  {
    href: "/blog",
    label: "Blogs",
  },
  {
    href: "/careers",
    label: "Careers",
  },
];

const otherLinks: FooterLink[] = [
  {
    href: "/contact-us",
    label: "Contact us",
    target: "_blank",
  },
  {
    href: "/help-support",
    label: "Help & Support",
    target: "_blank",
  },
  {
    href: "/terms-conditions",
    label: "Terms & Conditions",
    target: "_blank",
  },
  {
    href: "/privacy-policy",
    label: "Privacy Policy",
    target: "_blank",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log(data);
    toast.success("From is successfully submit....");
    reset();
  };

  return (
    <footer className="global-padding-container py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col  justify-center lg:flex-row lg:items-start lg:justify-between lg:space-y-0">
          <div className="order-2 lg:order-1 shrink-0 md:max-w-[306px] mt-10 lg:mt-0">
            <LogoFooter />

            <Typography variant="Regular_H6" className={`mt-4 text-gray`}>
              Driving logistics excellence with VizFleet’s advanced technology,
              delivering smart, scalable, and reliable solutions for every
              business.
            </Typography>
            <div className="mt-4">
              <Typography
                variant="Regular_H6"
                className={`block text-gray whitespace-nowrap`}
                link={siteConfig.PHONE}
              >
                Ph. No:{" "}
                <span className="text-foreground font-medium">
                  +91 95959 95959
                </span>
              </Typography>
              <Typography
                variant="Regular_H6"
                className={`block text-gray whitespace-nowrap`}
                link={`${siteConfig.EMAIL}`}
              >
                Email:{" "}
                <span className="text-foreground font-medium">
                  sales@visionstransport.com.my
                </span>{" "}
              </Typography>
            </div>
            <div className="flex gap-4 mt-6">
              <Link href={siteConfig.TWITTER_URL}>
                <IcoTwitter />
              </Link>
              <Link
                href={siteConfig.WEBSITE_HOST_URL}>
                <IcoFacebook />
              </Link>
              <Link href={siteConfig.INSTAGRAM_URL}>
                <IcoInstagram />
              </Link>
              <Link href={siteConfig.LINKEDIN_URL}>
                <IcoLinkedin />
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-row-reverse md:flex-row justify-between md:justify-start gap-10 md:gap-32">
            {/* Links */}
            <nav>
              <Typography
                variant="SemiBold_H5"
                className=" mb-6 block text-primary "
              >
                Links
              </Typography>
              <ul className="space-y-4 text-foreground">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      target={link.target}
                      className="block text-base  transition-all duration-200 hover:translate-x-1 "
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Other Links */}
            <nav>
              <Typography
                variant="SemiBold_H5"
                className=" mb-6 block text-primary"
              >
                Others
              </Typography>
              <ul className="space-y-4 text-foreground">
                {otherLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      target={link.target}
                      className="block text-base  transition-all duration-200 hover:translate-x-1 "
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="shrink-0 order-3 mt-10 lg:mt-0">
            <div className="max-w-xs">
              <div>
                <Typography
                  variant="SemiBold_H5"
                  className={`block text-primary`}
                >
                  Newsletter
                </Typography>
              </div>

              <div className="mt-6 md:max-w-xs">
                <Typography variant="Regular_H6" className="mb-4 text-gray">
                  Subscribe to our newsletter for the latest industry updates,
                  insights, and exclusive offers.
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <input
                      {...register("email")}
                      type="text"
                      className="input-field"
                      placeholder="Enter your email address "
                    />
                    {errors.email && (
                      <p className="text-red-600 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <Button
                    variant="primary"
                    className="w-full mt-4"
                    type="submit"
                  >
                    Subscribe Now
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-stroke pt-8 sm:mt-16 lg:mt-20">
          <div className="text-center">
            <Typography variant="Medium_H6" className="text-gray block">
              © {currentYear} Vizfleet. All rights reserved.
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
