"use client";
// ** import core packages
import { useState } from "react";
import Link from "next/link";

// ** import third party packages
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import axios from "axios";
import { Turnstile } from "@marsidev/react-turnstile";
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
import { siteConfig } from "@/config";

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
  const [turnstileStatus, setTurnstileStatus] = useState<
    "success" | "error" | "expired" | "required"
  >("required");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormSchema) => {
    console.log(data);
    try {
      if (turnstileStatus !== "success") {
        toast.error("Please verify the captcha");
        return;
      }

      const response = await axios.post("/api/cloudflare", {
        turnstileToken,
      });

      if (response.data.success) {
        const emailIntro =
          "Hello,\n\nYou have a new inquiry from Visions Transport website contact form:";
        const emailDetails = `Name: ${data.fullName}\nEmail: ${
          data.email
        }\nPhone: ${data.phone ?? "N/A"}\n\nMessage:\n${data.message}`;
        const emailSignature = `\n\nBest Regards,\n${data.fullName}`;

        const body = encodeURIComponent(
          `${emailIntro}\n\n${emailDetails}\n${emailSignature}`
        );
        const subject = encodeURIComponent(
          "New Contact Form Inquiry - Visions Transport"
        );

        // Use hardcoded sales@visionstransport.com.my as recipient email
        window.location.href = `mailto:sales@visionstransport.com.my?subject=${subject}&body=${body}`;

        // Show success message
        toast.success(
          "Email client opened successfully! Please send the email to submit your inquiry."
        );

        // Reset form after a short delay to ensure email client opens first
        setTimeout(() => {
          reset();
        }, 500);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Failed to open mail client:", error);
      toast.error("Failed to open email client.");
    }
  };

  return (
    <section className="overflow-hidden bg-background  py-16 md:py-24 global-padding-container">
      <div className="mx-auto max-w-7xl ">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-5 lg:gap-x-14 xl:gap-x-16">
          {/* Contact information */}
          <div className="order-2 lg:order-1 lg:col-span-3">
            <div className="mb-14 hidden lg:block">
              <Typography variant="SemiBold_H2" className={`block text-foreground`}>
                Start Your <span className="text-primary">Logistics Transformation</span>
              </Typography>
              <Typography
                variant="Regular_H6"
                className={`mt-4 block text-foreground `}
              >
                Ready to optimize your supply chain? Get a custom quote <br />
                or speak with our cross-border experts today.
              </Typography>
            </div>

            <div className="md:mt-12 grid grid-cols-1  gap-y-6 sm:grid-cols-2 lg:mt-auto ">
              <div>
                <Typography
                  variant="Bold_H6"
                  className={`block  text-primary `}
                >
                  Operating Hours
                </Typography>
                <Typography
                  variant="Regular_H6"
                  className={`mt-4  block text-foreground`}
                >
                  Sun - Fri (08AM - 10PM)
                </Typography>
              </div>

              <div>
                <Typography
                  variant="Bold_H6"
                  className={`block  text-primary `}
                >
                  Headquarters
                </Typography>
                <Typography
                  variant="Regular_H6"
                  className={`mt-4  block text-foreground`}
                >
                  No 2A-1 Jalan Kemuning Prima <br /> C33/C, Taman Kemuning
                  Utama, <br /> Seksyen 33, 40400 Shah Alam <br /> Selangor
                </Typography>
              </div>
              <div>
                <Typography
                  variant="Bold_H6"
                  className={`block  text-primary `}
                >
                  Direct Lines
                </Typography>
                <Typography
                  variant="Regular_H6"
                  className={`mt-4  block text-foreground`}
                  link={siteConfig.PHONE_2}
                >
                  Ph: +60 3-5131 3898
                </Typography>
                <Typography
                  variant="Regular_H6"
                  className={` block  text-foreground`}
                  link={siteConfig.EMAIL}
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
                  <Link href={siteConfig.TWITTER_URL}>
                    <IcoTwitter />
                  </Link>
                  <Link href={siteConfig.FACEBOOK_URL}>
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
            <div className="mb-8 block lg:hidden">
              <Typography
                variant="SemiBold_H2"
                className={`block text-foreground `}
              >
                Let's <span className="text-primary">Talk Logistics</span>
              </Typography>
              <Typography
                variant="Regular_H6"
                className={`mt-2 block text-gray`}
              >
                Ready to optimize your supply chain? Get a custom quote <br />
                or speak with our cross-border experts today.
              </Typography>
            </div>
            <div className="border border-stroke">
              <div className="p-6 sm:p-10 bg-white">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label className="text-base font-medium text-gray">
                      Full Name
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
                      Phone Number
                    </label>
                    <div className="mt-2">
                      <PhoneInput
                        country={"my"}
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
                      Work Email
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
                      How can we help?
                    </label>
                    <div className="mt-2">
                      <textarea
                        {...register("message")}
                        placeholder="Tell us about your shipment needs..."
                        rows={4}
                        className="block w-full resize-none outline-none px-3 py-1 text-sm md:text-base text-gray bg-white border border-stroke focus:outline-none focus:ring-primary focus:border-primary"
                      />
                      {errors.message && (
                        <p className="text-red-500">{errors.message.message}</p>
                      )}
                    </div>
                  </div>

                  <div >
                    <Turnstile
                      siteKey={
                        process.env.NEXT_PUBLIC_CLOUDFLARE_SITEKEY as string
                      }
                      onError={() => setTurnstileStatus("error")}
                      onExpire={() => setTurnstileStatus("expired")}
                      onSuccess={(token) => {
                        setTurnstileToken(token);
                        setTurnstileStatus("success");
                      }}
                      options={{
                        size: "normal",
                        theme: "light",
                      }}
                    />
                  </div>

                  <Button type="submit" variant="primary">
                    Request Quote
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
