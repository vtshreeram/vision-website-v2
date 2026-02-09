"use client";

import { useState } from "react";

// ** import assets
import {
  IcoBag,
  IcoCertificate,
  IcoChair,
  IcoLocation,
} from "@/assets/icons/career";

// ** import utils
import { Typography } from "@/components/ui/Typography";
import Button from "@/components/ui/button";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

// ** import types
import { JobData } from "@/types/job";

interface JobDetailClientProps {
  job: JobData;
}

const JobDetailClient = ({ job }: JobDetailClientProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="py-16 lg:py-20 bg-background">
      <div
        className="container lg:max-w-5xl mx-auto  "
      >
        {/* Job Title and Department */}
        <div
          className="p-6  flex flex-col md:flex-row justify-between md:items-start  gap-4"
        >
          <div>
            <h2 className="font-garamond text-2xl md:text-3xl  font-semibold tracking-wide">
              {job.title}
            </h2>
            <Typography variant="Regular_H5" className="mt-2">
              {job.department}
            </Typography>

            {/* Job Details */}
            <div className="mt-4  space-y-3 ">
              <div className="flex items-center gap-x-2">
                <div>
                  <IcoChair />
                </div>
                <Typography
                  variant="Regular_H6"
                  className="text-primary-foreground"
                >
                  Positions:{" "}
                  <span className="font-semibold ">{job.positions}</span>
                </Typography>
              </div>
              <div className="flex items-center gap-x-2 mt-1">
                <div>
                  <IcoCertificate />
                </div>
                <Typography
                  variant="Regular_H6"
                  className="text-primary-foreground"
                >
                  Salary:{" "}
                  <span className="font-semibold ">{job.salary}</span>
                </Typography>
              </div>
              <div className="flex items-center gap-x-2">
                <div>
                  <IcoBag />
                </div>
                <Typography
                  variant="Regular_H6"
                  className="text-primary-foreground "
                >
                  Job Type:{" "}
                  <span className="font-semibold ">{job.job_type.join(" / ")}</span>
                </Typography>
              </div>
              <div className="flex items-center gap-x-2">
                <div>
                  <IcoLocation />
                </div>
                <Typography
                  variant="Regular_H6"
                  className="text-primary-foreground "
                >
                  Location:{" "}
                  <span className="font-semibold ">{job.location}</span>
                </Typography>
              </div>
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div
          className="p-6 mt-6 bg-accent space-y-8 bg-white"
        >
          {/* about company */}
          {job.about_company && (
            <div>
              <h2 className="text-2xl font-semibold font-garamond">
                About the Company
              </h2>
              <div className="mt-1">
                <Typography
                  variant="Regular_H6"
                  className="text-primary-foreground "
                >
                  {job.about_company}
                </Typography>
              </div>
            </div>
          )}

          {/* Job Description */}
          {job.job_description && (
            <div>
              <h2 className="text-2xl font-semibold font-garamond">
                Job Description
              </h2>
              <div className="mt-1">
                <ul className="list-disc mt-5 ">
                  {job.job_description.map((item, index) => (
                    <li key={index} className="ml-6 text-primary-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Roles and Responsibilities */}
          {job.roles_and_responsibility && (
            <div>
              <h2 className="text-2xl font-semibold font-garamond">
                Roles and Responsibilities
              </h2>
              <div className="mt-1">
                <ul className="list-disc mt-5 ">
                  {job.roles_and_responsibility.map((item, index) => (
                    <li key={index} className="ml-6 text-primary-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Why Join Us */}
          {job.why_join_us && (
            <div>
              <h2 className="text-2xl font-semibold ">
                Why Join Visions Transport?
              </h2>
              <div className="mt-1">
                <ul className="list-disc mt-5 ">
                  {job.why_join_us.map((item, index) => (
                    <li key={index} className="ml-6 text-primary-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="flex justify-end items-end">
            <Button variant="primary" onClick={handleApplyClick}>
              Apply Now
            </Button>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        center
        classNames={{
          modal: "rounded-lg max-w-2xl w-full",
        }}
      >
        <div className="p-6">
          <Typography variant="Bold_H3" className="mb-6 text-foreground">
            Application Submitted Successfully!
          </Typography>
          <div className="space-y-4">
            <Typography variant="Regular_H5" className="text-gray">
              Thank you for your interest in the{" "}
              <span className="font-semibold text-foreground">{job.title}</span>{" "}
              position at Visions Transport.
            </Typography>
            <div className="bg-background p-6 rounded-lg space-y-3">
              <Typography variant="SemiBold_H5" className="text-foreground">
                What&apos;s Next?
              </Typography>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <Typography variant="Regular_H6" className="text-gray">
                    Our HR team will review your application within 3-5 business
                    days
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <Typography variant="Regular_H6" className="text-gray">
                    If your profile matches our requirements, we&apos;ll contact you
                    for the next steps
                  </Typography>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <Typography variant="Regular_H6" className="text-gray">
                    You can check your application status by contacting us at
                    careers@visionstransport.com.my
                  </Typography>
                </li>
              </ul>
            </div>
            <div className="pt-4 flex justify-end gap-4">
              <Button variant="primary" onClick={closeModal}>
                Close
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default JobDetailClient;
