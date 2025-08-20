"use client";
// ** import core packages
import Link from "next/link";

// ** import third party packages
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// ** import components
import { Typography } from "@/components/ui/Typography";
import Button from "@/components/ui/button";

// ** import icons
import {
  IcoFacebook,
  IcoInstagram,
  IcoLinkedin,
  IcoTwitter,
} from "@/assets/icons";

// ** import config
import { config } from "@/config";

// Define the Zod schema for the form
const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required").max(100),
  phone: z.string().min(10, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),

  message: z.string().min(5, "Message must be at least 5 characters long"),
});

// Type inference from the Zod schema
type ContactFormSchema = z.infer<typeof contactFormSchema>;

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormSchema) => {
    console.log(data);
  };

  return (
    <section className="overflow-hidden  py-16 md:py-24 global-padding-container">
      <div className="mx-auto max-w-7xl ">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-5 lg:gap-x-14 xl:gap-x-16">
          <div className="order-2 lg:order-1 lg:col-span-3">
            <div className="mb-14 hidden lg:block">
              <Typography
                variant="SemiBold_H2"
                className={`block text-gray`}
              >
                Get <span className="text-primary">in Touch</span>
              </Typography>
              <Typography
                variant="Regular_H6"
                className={`mt-4 block text-gray`}
              >
                We’re here to assist with your logistics needs <br />
                and provide the right solutions for your business.
              </Typography>
            </div>

            <div className="mt-12 grid grid-cols-1  gap-y-6 sm:grid-cols-2 lg:mt-auto ">
              <div>
                <Typography
                  variant="Bold_H6"
                  className={`block  text-primary `}
                >
                  Office hours
                </Typography>
                <Typography
                  variant="Regular_H6"
                  className={`mt-4  block text-gray`}
                >
                  Monday to Saturday: 9:00 AM – 6:00 PM
                  <br />
                  Sunday: Closed
                </Typography>
              </div>

              <div>
                <Typography
                  variant="Bold_H6"
                  className={`block  text-primary `}
                >
                  Address
                </Typography>
                <Typography
                  variant="Regular_H6"
                  className={`mt-4  block text-gray`}
                >
                  No 2A-1 Jalan Kemuning Prima <br /> C33/C, Taman Kemuning
                  Utama, <br /> Seksyen 33, 40400 <br /> Shah Alam Selangor
                </Typography>
              </div>
              <div>
                <Typography
                  variant="Bold_H6"
                  className={`block  text-primary `}
                >
                  Contact Details
                </Typography>
                <Typography
                  variant="Regular_H6"
                  className={`mt-4  block text-gray`}
                >
                  Ph: +91 95755 95775
                </Typography>
                <Typography
                  variant="Regular_H6"
                  className={` block  text-gray`}
                >
                  Email: sales@visionstransport.com.my
                </Typography>
              </div>
              <div>
                <Typography
                  variant="Bold_H6"
                  className={`block  text-primary `}
                >
                  Social media
                </Typography>
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
            </div>

            <div className="mt-10 w-full relative ">
              <iframe
                className="w-full h-[430px]"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16020.121513676884!2d101.5363235!3d3.0195518!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdb2bcb4f5cef1%3A0x6ae010666b8b7961!2sVisions%20Transport%20Enterprise%20Sdn%20Bhd!5e1!3m2!1sen!2sbd!4v1755668086575!5m2!1sen!2sbd"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-2">
            <div className="mb-14 block lg:hidden">
              <Typography
                variant="Medium_H2"
                className={`block text-gray `}
              >
                Get <span className="text-primary">in Touch</span>
              </Typography>
              <Typography
                variant="Regular_H6"
                className={`mt-2 block text-gray`}
              >
                We’re here to answer your questions and assist with your
                requirements.
              </Typography>
            </div>
            <div className="border border-stroke">
              <div className="p-6 sm:p-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label className="text-base font-medium text-gray">
                      Your name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        {...register("fullName")}
                        placeholder="Enter your full name"
                        className="input-field"
                      />
                      {errors.fullName && (
                        <p className="text-red-500">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray">
                      Mobile number
                    </label>
                    <div className="mt-2">
                      <PhoneInput
                        country={"in"}
                        onChange={(value) => setValue("phone", value)}
                        inputProps={{
                          name: "phone",
                          required: true,
                          autoFocus: true,
                        }}
                      />
                      {errors.phone && (
                        <p className="text-red-500">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="Enter your email"
                        className="input-field"
                      />
                      {errors.email && (
                        <p className="text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray">
                      Write your message
                    </label>
                    <div className="mt-2">
                      <textarea
                        {...register("message")}
                        placeholder="Write us your question here..."
                        rows={4}
                        className="block w-full resize-none outline-none px-3 py-1 text-sm md:text-base text-gray bg-white border border-stroke focus:outline-none focus:ring-primary focus:border-primary"
                      />
                      {errors.message && (
                        <p className="text-red-500">{errors.message.message}</p>
                      )}
                    </div>
                  </div>

                  <Button type="submit" variant="primary">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
