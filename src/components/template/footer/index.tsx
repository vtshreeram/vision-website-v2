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
import { config } from "@/config";

// ** define validation schema using zod **
const contactSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

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
          <div className="order-2 lg:order-1 shrink-0 max-w-sm mt-10 lg:mt-0">
            <LogoFooter />

            <Typography variant="Regular_H6" className={`mt-4 text-gray`}>
            Driving logistics excellence with VizFleet’s advanced technology, delivering smart, scalable, and reliable solutions for every business.
            </Typography>
            <div className="mt-4">
              <Typography
                variant="Regular_H6"
                className={`block text-gray`}
                link={config.PHONE}
              >
                <span className="text-foreground">Ph. No:</span> +91 95959 95959
              </Typography>
              <Typography
                variant="Regular_H6"
                className={`block text-gray`}
                link={config.EMAIL}
              >
                <span className="text-foreground ">Email:</span>{" "}
                sales@visionstransport.com.my
              </Typography>
            </div>
            <div className="flex gap-4 mt-6">
              <Link href={config.TWITTER_URL}>
                <IcoTwitter />
              </Link>
              <Link href={config.FACEBOOK_URL}>
                <IcoFacebook />
              </Link>
              <Link href={config.INSTAGRAM_URL}>
                <IcoInstagram />
              </Link>
              <Link href={config.LINKEDIN_URL}>
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
                <li>
                  <Link
                    href="/"
                    className="block text-base  transition-all duration-200 hover:translate-x-1 "
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="block text-base transition-all duration-200 hover:translate-x-1 "
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/features"
                    className="block text-base transition-all duration-200 hover:translate-x-1 "
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonials"
                    className="block text-base transition-all duration-200 hover:translate-x-1 "
                  >
                    Testimonials
                  </Link>
                </li>
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
                <li>
                  <Link
                    href="/contact-us"
                    target="_blank"
                    className="block text-base  transition-all duration-200 hover:translate-x-1 "
                  >
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help-support"
                    target="_blank"
                    className="block text-base  transition-all duration-200 hover:translate-x-1 "
                  >
                    Help & Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-conditions"
                    target="_blank"
                    className="block text-base  transition-all duration-200 hover:translate-x-1 "
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    target="_blank"
                    className="block text-base  transition-all duration-200 hover:translate-x-1 "
                  >
                    Privacy Policy
                  </Link>
                </li>
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
                Subscribe to our newsletter for the latest industry updates, insights, and exclusive offers.
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
            <Typography variant="Medium_H6" className="text-stock block">
              © {currentYear} Vizfleet. All rights reserved.
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
