"use client";

// ** import core packages
import Image from "next/image";
import React, { useState } from "react";

// ** import third party packages
import { motion as m } from "framer-motion";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// ** import motion variants
import { fadeInDown } from "@/utils/motion-variant";

// ** import components
import Button from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// ** import assets
import img from "@/assets/images/pages/home/vision-form/bg.webp";
import LogoLarge from "@/assets/logo-large";
import { IcoTrack } from "@/assets/icons";

// Zod schema
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  service: z.string().min(1, "Select a service"),
});

type FormSchema = z.infer<typeof formSchema>;

const TABS = [
  { label: "Request a Quote", value: "quote" },
  { label: "Track and Trace", value: "track" },
  { label: "Custom Order", value: "custom" },
];

const SERVICES = [
  "General Logistics",
  "Express Delivery",
  "Warehousing",
  "Customs Clearance",
];

export const VisionForm = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].value);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => {
    // handle form submission
    console.log(data, null, 2);
    reset();
  };

  return (
    <section className="relative overflow-hidden flex items-center -z-0">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={img}
          alt="Background image"
          fill
          placeholder="blur"
          className="object-cover object-center w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full global-padding-container py-16 md:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Left: Logo and tagline */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDown}
            className="hidden lg:flex lg:col-span-2  items-center md:items-start"
          >
            <LogoLarge />
          </m.div>

          {/* Right: Tabs and Form */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDown}
            className=" lg:col-span-3 bg-primary/20  w-full   md:p-10"
          >
            {/* Tabs */}
            <div className="flex bg-white">
              {TABS.map((tab) => (
                <Button
                  key={tab.value}
                  className={`flex-1 h-auto md:h-10 active:scale-100  ${
                    activeTab === tab.value
                      ? ""
                      : "bg-white text-primary hover:bg-white hover:text-primary border-stroke"
                  }`}
                  onClick={() => setActiveTab(tab.value)}
                  type="button"
                >
                  {tab.label}
                </Button>
              ))}
            </div>
            {/* Form */}
            <form
              className="flex flex-col gap-4 mt-5"
              onSubmit={handleSubmit(onSubmit)}
              autoComplete="off"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    {...register("name")}
                    placeholder="Enter Name"
                    className="input-field"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <input
                    {...register("email")}
                    placeholder="Enter Email Id"
                    className="input-field"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    {...register("phone")}
                    placeholder="Enter Phone number"
                    className="input-field"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <Controller
                    name="service"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full border border-stroke px-3 py-1 h-9 text-base focus:outline-none focus:border-primary bg-white">
                          <SelectValue placeholder="Select Service" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICES.map((service) => (
                            <SelectItem
                              key={service}
                              value={service}
                              className="text-base hover:bg-primary/20"
                            >
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.service && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.service.message}
                    </p>
                  )}
                </div>
              </div>
              <Button
                type="submit"
                variant="primary"
                className="w-full mt-2 flex items-center justify-center gap-2 !bg-primary !text-white"
              >
                <IcoTrack />
                Request
              </Button>
            </form>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default VisionForm;
